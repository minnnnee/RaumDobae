"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stages = [
  { en: "Prepare", title: "공간을 비우고" },
  { en: "Foundation", title: "바탕을 단단히 다지고" },
  { en: "Finish", title: "깔끔하게 마감합니다" },
];

/** 스크롤하면 벽지가 펼쳐지듯 공간이 드러나는 섹션 */
export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const total = height - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -top / total)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 앞뒤 10%는 여유 구간으로 두고 그 사이에서 펼친다
  const reveal = Math.min(1, Math.max(0, (progress - 0.1) / 0.75));
  const stage = reveal < 0.34 ? 0 : reveal < 0.8 ? 1 : 2;

  return (
    <div ref={ref} className="relative h-[320vh] bg-navy">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* 펼쳐지기 전: 어둡고 흐린 공간 */}
        <Image
          src="/images/room.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40 blur-[2px] grayscale"
          aria-hidden
        />
        {/* 펼쳐진 뒤: 선명한 공간 */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${(1 - reveal) * 100}% 0 0)` }}
        >
          <Image src="/images/room.jpg" alt="라움도배가 마감한 밝은 거실" fill sizes="100vw" className="object-cover" />
        </div>
        {/* 펼쳐지는 경계선 */}
        <div
          className="absolute inset-y-0 w-px bg-gold-light shadow-[0_0_24px_6px_rgba(233,220,181,0.55)]"
          style={{ left: `${reveal * 100}%`, opacity: reveal > 0 && reveal < 1 ? 1 : 0 }}
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />

        <p className="absolute left-6 top-24 text-[10px] tracking-[0.4em] text-white/60 md:left-12">RAUM DOBAE · CRAFT STORY</p>

        <div className="absolute bottom-16 left-6 md:bottom-20 md:left-12">
          {stages.map((s, i) => (
            <div
              key={s.en}
              className={`transition-all duration-700 ${i === stage ? "opacity-100" : "pointer-events-none absolute bottom-0 translate-y-3 opacity-0"}`}
            >
              <p className="text-[10px] font-semibold tracking-[0.35em] text-gold-light/80 uppercase">
                0{i + 1} · {s.en}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-white md:text-5xl">{s.title}</p>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
          <div className="h-full bg-gradient-to-r from-leaf-400 to-gold" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
