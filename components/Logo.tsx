export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 7.5c0-1.4 1.1-2.5 2.5-2.5.9 0 1.8.5 2.2 1.3l5 9 9.2-9.4c1-1 2.6-1 3.6 0s1 2.6 0 3.6L16.2 21.8c-.6.6-1.4.9-2.2.8-.9-.1-1.6-.6-1.9-1.4L4.3 8.8C4.1 8.4 4 8 4 7.5z" />
    </svg>
  );
}
