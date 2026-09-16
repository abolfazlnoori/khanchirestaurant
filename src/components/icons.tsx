type IconProps = {
  className?: string;
};

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M17 10H3m0 0 5-5m-5 5 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14M5 12h14M5 16h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="m8 1.6 1.72 3.49 3.85.56-2.79 2.72.66 3.84L8 10.4l-3.44 1.81.66-3.84-2.79-2.72 3.85-.56L8 1.6Z" fill="currentColor" />
    </svg>
  );
}
