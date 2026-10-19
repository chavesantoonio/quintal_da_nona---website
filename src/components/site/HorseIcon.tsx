// lucide-react has no horse; same 24px grid and stroke style as its icons.
export function HorseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 2l-1.5 3C11 6 7 9 5 12.5c-.8 1.4 0 3.5 1.5 3.5H9l2-2 1 8h8c0-6-.5-11-2.5-15L16 2Z" />
      <path d="M17.5 7c1 2 1.5 4 1.5 6" />
      <path d="M12 8.5h.01M7 14h.01" />
    </svg>
  );
}
