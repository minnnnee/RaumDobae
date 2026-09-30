"use client";

import { useEffect, useState, type ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowUpIcon, KakaoIcon, NaverBlogIcon } from "./icons";

type Item = {
  label: string;
  href: string;
  className: string;
  icon: ReactNode;
};

const items: Item[] = [
  {
    label: "상담문의",
    href: site.links.kakaoChat,
    className: "bg-[#FEE500] text-[#3A1D1D]",
    icon: <KakaoIcon className="h-5 w-5" />,
  },
  {
    label: "블로그",
    href: site.links.blog,
    className: "bg-[#03C75A] text-white",
    icon: <NaverBlogIcon className="h-4 w-4" />,
  },
  {
    label: "카카오채널",
    href: site.links.kakaoChannel,
    className: "bg-[#FEE500] text-[#3A1D1D]",
    icon: <span className="text-[15px] font-black leading-none tracking-tighter">Ch</span>,
  },
];

const base =
  "group relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-black/25 ring-1 ring-black/5 transition-transform duration-200 hover:scale-110 md:h-14 md:w-14";

function Tooltip({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-forest-900 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
      {children}
    </span>
  );
}

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-center gap-2.5 md:bottom-8 md:right-8 md:gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`${base} ${item.className}`}
        >
          {item.icon}
          <Tooltip>{item.label}</Tooltip>
        </a>
      ))}
      <button
        type="button"
        aria-label="맨 위로"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${base} flex-col bg-forest-900 text-gold-light ring-gold/30 transition-all ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-4 w-4" />
        <span className="text-[10px] font-bold leading-none">TOP</span>
      </button>
    </div>
  );
}
