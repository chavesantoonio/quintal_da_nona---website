import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function Sunflower() {
  return (
    <svg viewBox="0 0 240 300" fill="none" className="h-full w-full" aria-hidden="true">
      <path
        d="M120 144C112 196 132 235 120 292"
        stroke="var(--primary)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M122 230C82 232 60 210 58 190C88 187 112 204 122 230ZM121 254C160 248 181 221 180 204C150 206 130 226 121 254Z"
        fill="var(--primary)"
        stroke="var(--forest)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g stroke="var(--forest)" strokeWidth="3">
        {Array.from({ length: 12 }, (_, i) => (
          <ellipse
            key={i}
            cx="120"
            cy="55"
            rx="17"
            ry="39"
            transform={`rotate(${i * 30} 120 108)`}
            fill={i % 2 === 0 ? "var(--secondary)" : "var(--accent)"}
          />
        ))}
        <circle cx="120" cy="108" r="36" fill="var(--accent)" />
        <circle cx="120" cy="108" r="27" fill="var(--secondary)" strokeDasharray="2 6" />
      </g>
      <g fill="var(--forest)">
        {[
          [-12, -10],
          [3, -15],
          [15, -3],
          [-17, 5],
          [-3, 0],
          [0, 15],
          [14, 13],
        ].map(([x = 0, y = 0], i) => (
          <circle key={i} cx={120 + x} cy={108 + y} r="2.5" />
        ))}
      </g>
    </svg>
  );
}

/** Decorative, section-local motion; no layout changes or pointer interception. */
export function SunflowerBackground({ hero = false }: { hero?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reducedMotion.matches) {
        element.style.removeProperty("--sunflower-shift");
        element.style.removeProperty("--sunflower-turn");
        return;
      }
      const bounds = section.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const progress = Math.max(
        -1,
        Math.min(1, (window.innerHeight / 2 - bounds.top - bounds.height / 2) / window.innerHeight),
      );
      element.style.setProperty("--sunflower-shift", `${progress * 32}px`);
      element.style.setProperty("--sunflower-turn", `${progress * 9}deg`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("sunflower-background", hero && "sunflower-background-hero")}
      aria-hidden="true"
    >
      <div className="sunflower sunflower-first">
        <Sunflower />
      </div>
      <div className="sunflower sunflower-second">
        <Sunflower />
      </div>
    </div>
  );
}
