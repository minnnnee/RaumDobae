type IconProps = { className?: string };

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function KakaoIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.48 3 2 6.48 2 10.9c0 2.75 1.55 5.17 3.91 6.65l-.99 3.63a.3.3 0 0 0 .44.33l4.16-2.77c.8.1 1.63.16 2.48.16 5.52 0 10-3.48 10-7.9S17.52 3 12 3z" />
    </svg>
  );
}

export function NaverBlogIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4h5.6l4.8 7V4H20v16h-5.6l-4.8-7v7H4z" />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhotoIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m21 16-5-5-8 8" />
    </svg>
  );
}

/** 명함 속 지붕 + 창문 + 잎사귀 로고 */
export function LogoMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 44" aria-hidden>
      <path d="M4 30 30 8l26 22" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="miter" />
      <g fill="#6cc04a">
        <rect x="24.5" y="21" width="5" height="5" />
        <rect x="31" y="21" width="5" height="5" />
        <rect x="24.5" y="27.5" width="5" height="5" />
        <rect x="31" y="27.5" width="5" height="5" />
      </g>
      <path d="M48 26c-1-9 4-15 14-17-1 10-6 15-14 17z" fill="#2e9e3a" />
      <path d="M47 27c-6-2-9-7-8-13 6 1 9 6 8 13z" fill="#6cc04a" />
    </svg>
  );
}
