export const WHATSAPP_NUMBER = "5541991517835";
export const PHONE_DISPLAY = "(41) 99151-7835";
export const ADDRESS = "Av. Padre Natal Pigato, 2194 · Vila Elizabeth (Rondinha), Campo Largo/PR";

export const DEFAULT_MESSAGE = "Olá! Vim pelo site e quero agendar uma visita ao Quintal da Nona.";

export function waLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildQualifiedMessage(data: {
  nome: string;
  idade: string;
  turno: string;
  objetivo: string;
}) {
  return [
    "Olá! Vim pelo site do Quintal da Nona 🌻",
    data.nome ? `Meu nome é ${data.nome}.` : "",
    `Meu filho(a) tem ${data.idade}.`,
    `Turno de interesse: ${data.turno}.`,
    `Gostaria de: ${data.objetivo}.`,
  ]
    .filter(Boolean)
    .join("\n");
}
