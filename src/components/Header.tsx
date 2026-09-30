"use client";

import { useEffect, useState } from "react";
import { site, telHref } from "@/lib/site";
import { KakaoIcon, LogoMark, PhoneIcon } from "./icons";

const nav = [
  { href: "#why", label: "라움의 약속" },
  { href: "#services", label: "시공 분야" },
  { href: "#process", label: "진행 과정" },
  { href: "#blog", label: "시공 사례" },
  { href: "#contact", label: "상담 문의" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? "border-b border-white/5 bg-forest-950/80 shadow-lg shadow-black/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18">
        <a href="#top" className="flex items-center gap-2 text-white" onClick={() => setOpen(false)}>
          <LogoMark className="h-7 w-10" />
          <span className="text-lg font-black tracking-tight">
            <span className="text-leaf-400">라움</span>도배
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/75 transition-colors hover:text-gold-light">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref} className="hidden items-center gap-1.5 text-sm font-semibold text-white/85 hover:text-white sm:flex">
            <PhoneIcon className="h-4 w-4 text-leaf-400" />
            {site.phone}
          </a>
          <a
            href={site.links.kakaoChat}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-leaf-600 to-leaf-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-leaf-700/30 transition-all hover:brightness-110"
          >
            <KakaoIcon className="h-4 w-4" />
            <span className="hidden sm:inline">무료 견적받기</span>
            <span className="sm:hidden">상담</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <nav className={`overflow-hidden border-t border-white/10 lg:hidden ${open ? "max-h-96" : "max-h-0 border-transparent"} transition-all duration-300`}>
        <ul className="px-5 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-white/85">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
