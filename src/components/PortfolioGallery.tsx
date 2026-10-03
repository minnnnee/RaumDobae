"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { PortfolioPhoto } from "@/lib/portfolio";

const PAGE = 9;

export default function PortfolioGallery({ photos, categories }: { photos: PortfolioPhoto[]; categories: string[] }) {
  const [active, setActive] = useState("전체");
  const [limit, setLimit] = useState(PAGE);
  const [open, setOpen] = useState<number | null>(null);

  const list = active === "전체" ? photos : photos.filter((p) => p.category === active);
  const shown = list.slice(0, limit);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step: number) => setOpen((i) => (i === null ? i : (i + step + list.length) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, move]);

  const current = open === null ? null : list[open];

  return (
    <>
      {/* 분류 탭 */}
      <div className="-mx-5 mb-10 overflow-x-auto px-5 md:mx-0 md:px-0">
        <ul className="mx-auto flex w-max gap-2">
          {["전체", ...categories].map((c) => {
            const count = c === "전체" ? photos.length : photos.filter((p) => p.category === c).length;
            const selected = c === active;
            return (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(c);
                    setLimit(PAGE);
                  }}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected ? "bg-navy text-white" : "bg-white text-ink/70 ring-1 ring-sand hover:text-navy hover:ring-navy/30"
                  }`}
                  aria-pressed={selected}
                >
                  {c}
                  {count > 0 && <span className={`ml-1.5 text-xs ${selected ? "text-white/60" : "text-muted"}`}>{count}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 사진 목록 */}
      {shown.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {shown.map((p, i) => (
            <li key={p.src}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-sand md:aspect-[4/3] md:rounded-2xl"
              >
                <Image
                  src={p.src}
                  alt={`${p.category} 시공 사례${p.caption ? ` - ${p.caption}` : ""}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-3 pt-10 text-left md:p-4 md:pt-12">
                  <span className="block text-[10px] font-semibold tracking-wider text-gold-light md:text-xs">{p.category}</span>
                  {p.caption && <span className="mt-0.5 block truncate text-sm font-semibold text-white md:text-base">{p.caption}</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {Array.from({ length: 3 }, (_, i) => (
            <li
              key={i}
              className={`flex aspect-[4/5] flex-col items-center justify-center rounded-xl border-2 border-dashed border-sand bg-white text-center md:aspect-[4/3] md:rounded-2xl ${
                i === 2 ? "hidden md:flex" : ""
              }`}
            >
              <svg className="h-8 w-8 text-sand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="9" cy="10" r="1.5" />
                <path d="m21 16-5-5-8 8" />
              </svg>
              <p className="mt-3 text-sm font-semibold text-muted">{active === "전체" ? "시공 사례" : active} 사진 준비 중</p>
            </li>
          ))}
        </ul>
      )}

      {list.length > limit && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setLimit((l) => l + PAGE)}
            className="rounded-full border border-navy px-8 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            더 보기 ({list.length - limit})
          </button>
        </div>
      )}

      {/* 크게 보기 */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.category} 시공 사례`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div className="relative h-[75svh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.caption || current.category} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute inset-x-0 bottom-6 text-center text-sm text-white/80">
            <span className="text-gold-light">{current.category}</span>
            {current.caption && <> · {current.caption}</>}
            <span className="ml-3 text-white/40">
              {open! + 1} / {list.length}
            </span>
          </p>
          <button type="button" onClick={close} aria-label="닫기" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20">
            ×
          </button>
          {list.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  move(-1);
                }}
                aria-label="이전 사진"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  move(1);
                }}
                aria-label="다음 사진"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:right-6"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
