import { useEffect, useState } from "react";
import { ArrowLeft, Check, MessageCircle, Send, X } from "lucide-react";
import { buildQualifiedMessage, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    key: "idade",
    q: "Qual a idade do seu filho(a)?",
    options: [
      "0 a 1 ano (Berçário)",
      "1 a 2 anos",
      "2 a 3 anos",
      "3 a 4 anos",
      "4 a 5 anos",
      "6 anos (1º ano 2027)",
    ],
  },
  {
    key: "turno",
    q: "Qual turno te interessa?",
    options: ["Manhã", "Tarde", "Integral", "Ainda não sei"],
  },
  {
    key: "objetivo",
    q: "Como podemos ajudar?",
    options: [
      "Agendar uma visita",
      "Saber sobre vagas 2027",
      "Valores e matrícula",
      "Colônia de férias",
    ],
  },
] as const;

type Answers = { idade: string; turno: string; objetivo: string; nome: string };

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({ idade: "", turno: "", objetivo: "", nome: "" });

  useEffect(() => {
    const t = setTimeout(() => setTeaser(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const total = STEPS.length + 1;
  const current = STEPS[step];
  const reset = () => {
    setStep(0);
    setA({ idade: "", turno: "", objetivo: "", nome: "" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="Fale com o Quintal da Nona pelo WhatsApp"
          className="animate-rise w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border-2 border-forest bg-card shadow-pop"
        >
          <div className="flex items-center gap-3 bg-primary px-5 py-4 text-primary-foreground">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-semibold leading-tight">Quintal da Nona</p>
              <p className="text-xs opacity-90">Responde em poucas horas</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="rounded-full p-1.5 hover:bg-primary-foreground/15"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="paper-dots space-y-4 p-5">
            <div className="rounded-2xl rounded-tl-sm bg-sun-soft p-3 text-sm text-foreground">
              <strong>Traga seu filho para brincar e aprender conosco! 🌻</strong>
              <br />
              Responda 3 perguntinhas e já te atendemos com as informações certas.
            </div>

            <div className="flex gap-1.5" aria-hidden>
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors",
                    i <= step ? "bg-primary" : "bg-border",
                  )}
                />
              ))}
            </div>

            {current ? (
              <div key={step} className="animate-rise">
                <p className="mb-3 font-display text-lg font-semibold text-forest">
                  {step + 1}. {current.q}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {current.options.map((o) => {
                    const sel = a[current.key] === o;
                    return (
                      <button
                        key={o}
                        onClick={() => {
                          setA({ ...a, [current.key]: o });
                          setStep(step + 1);
                        }}
                        className={cn(
                          "rounded-xl border-2 px-3 py-2.5 text-left text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary",
                          sel ? "border-primary bg-leaf-soft" : "border-border bg-card",
                        )}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <form
                key="final"
                className="animate-rise space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(waLink(buildQualifiedMessage(a)), "_blank", "noopener");
                }}
              >
                <p className="font-display text-lg font-semibold text-forest">
                  4. Como podemos te chamar?
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {[a.idade, a.turno, a.objetivo].map((x) => (
                    <li key={x} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" /> {x}
                    </li>
                  ))}
                </ul>
                <input
                  value={a.nome}
                  onChange={(e) => setA({ ...a, nome: e.target.value })}
                  placeholder="Seu nome"
                  aria-label="Seu nome"
                  maxLength={60}
                  className="w-full rounded-xl border-2 border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> Enviar no WhatsApp
                </button>
              </form>
            )}

            {step > 0 && (
              <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Voltar
                </button>
                <button onClick={reset} className="hover:text-foreground">
                  Recomeçar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {!open && teaser && (
        <button
          onClick={() => setOpen(true)}
          className="animate-rise max-w-[240px] rounded-2xl rounded-br-sm border-2 border-forest bg-card px-4 py-3 text-left text-sm font-semibold text-forest shadow-soft"
        >
          Traga seu filho para brincar e aprender conosco! 🌱
        </button>
      )}

      <button
        onClick={() => {
          setOpen(!open);
          setTeaser(false);
        }}
        aria-label="Conversar no WhatsApp"
        aria-expanded={open}
        className="animate-pulse-ring grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-110"
      >
        {open ? (
          <X className="h-7 w-7" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.39 9.39 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
          </svg>
        )}
      </button>
    </div>
  );
}
