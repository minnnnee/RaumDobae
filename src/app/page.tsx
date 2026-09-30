import Image from "next/image";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import Reveal from "@/components/Reveal";
import { site, telHref } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, KakaoIcon, LogoMark, PhoneIcon, PinIcon } from "@/components/icons";

const promises = [
  { title: "무료 방문 견적", desc: "현장 실측 후 정확한 견적" },
  { title: "친환경 자재", desc: "가족 건강을 먼저 생각합니다" },
  { title: "책임 A/S", desc: "시공 후에도 끝까지 관리" },
];

const worries = [
  { q: "견적보다 비용이 늘어날까 봐", a: "현장 실측 후 확정 견적. 추가 비용 없이 약속대로 진행합니다." },
  { q: "이음매·들뜸이 눈에 띌까 봐", a: "초배부터 정배까지 꼼꼼하게, 마감 라인까지 확인합니다." },
  { q: "입주 일정이 밀릴까 봐", a: "일정을 먼저 맞추고, 약속한 날짜에 정확히 끝냅니다." },
  { q: "원하는 느낌이 안 나올까 봐", a: "공간과 채광에 맞는 벽지를 함께 고르고 샘플로 확인합니다." },
];

const pillars = [
  {
    no: "01",
    title: "보이지 않는 곳까지 꼼꼼하게",
    desc: "벽면 상태 점검과 퍼티·초배 작업을 생략하지 않습니다. 오래 가는 도배는 바탕에서 시작됩니다.",
  },
  {
    no: "02",
    title: "투명하고 정직한 견적",
    desc: "자재·면적·작업 범위를 항목별로 안내해 드립니다. 이해되지 않는 비용은 받지 않습니다.",
  },
  {
    no: "03",
    title: "처음부터 끝까지 책임 시공",
    desc: "상담한 사람이 직접 현장을 챙깁니다. 시공 후 문제가 생기면 언제든 연락 주세요.",
  },
  {
    no: "04",
    title: "공간에 맞춘 벽지 제안",
    desc: "실크·합지·친환경 벽지 중 공간의 용도와 예산에 가장 알맞은 선택을 함께 찾습니다.",
  },
];

const services = [
  { title: "아파트 · 주택", desc: "입주 전 전체 도배, 거주 중 부분 도배", tag: "RESIDENCE" },
  { title: "오피스텔 · 원룸", desc: "빠른 공실 회복, 임대 전 리뉴얼", tag: "STUDIO" },
  { title: "상가 · 사무실", desc: "영업 일정에 맞춘 야간·주말 시공", tag: "COMMERCIAL" },
  { title: "부분 도배 · 보수", desc: "찢김, 곰팡이, 얼룩 부위 보수", tag: "REPAIR" },
];

const wallpapers = ["실크 벽지", "합지 벽지", "친환경 벽지", "천장 도배", "몰딩 · 걸레받이 마감"];

const steps = [
  { title: "상담 문의", desc: "카카오톡 · 전화로 편하게 문의" },
  { title: "현장 방문 · 실측", desc: "벽면 상태 확인 및 샘플 안내" },
  { title: "견적 확정", desc: "항목별 상세 견적 안내" },
  { title: "시공", desc: "약속한 일정에 맞춰 진행" },
  { title: "마감 점검 · A/S", desc: "함께 확인하고 끝까지 관리" },
];

function SectionTitle({ eyebrow, title, dark = false }: { eyebrow: string; title: React.ReactNode; dark?: boolean }) {
  return (
    <Reveal className="mb-12 text-center md:mb-16">
      <p className={`text-xs font-bold tracking-[0.3em] ${dark ? "text-leaf-400" : "text-leaf-500"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-3xl font-bold leading-snug md:text-4xl ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-navy-900 text-white">
          {/* 모바일: 상단 곡선 이미지 */}
          <div className="relative h-[48svh] min-h-80 lg:hidden">
            <div className="absolute inset-0 bg-leaf-400 [clip-path:ellipse(140%_100%_at_50%_0%)]" />
            <div className="absolute inset-x-0 top-0 bottom-2 bg-leaf-600 [clip-path:ellipse(140%_100%_at_50%_0%)]" />
            <div className="absolute inset-x-0 top-0 bottom-4 overflow-hidden [clip-path:ellipse(140%_100%_at_50%_0%)]">
              <Image src="/images/room.jpg" alt="라움도배가 시공한 밝은 거실" fill preload sizes="100vw" className="object-cover object-[center_40%]" />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-900/80 to-transparent" />
            </div>
          </div>

          {/* 데스크탑: 오른쪽 곡선 이미지 */}
          <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <div className="absolute inset-0 bg-leaf-400 [clip-path:ellipse(100%_125%_at_100%_50%)]" />
            <div className="absolute inset-y-0 right-0 left-4 bg-leaf-600 [clip-path:ellipse(100%_125%_at_100%_50%)]" />
            <div className="absolute inset-y-0 right-0 left-8 overflow-hidden [clip-path:ellipse(100%_125%_at_100%_50%)]">
              <Image src="/images/room.jpg" alt="라움도배가 시공한 밝은 거실" fill sizes="52vw" className="object-cover object-left" />
            </div>
          </div>

          <div className="relative mx-auto flex max-w-6xl items-center px-5 lg:min-h-[100svh]">
            <div className="w-full pb-16 pt-8 lg:w-[46%] lg:py-32">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.35em] text-gold">PREMIUM WALLPAPER STUDIO</p>
                <LogoMark className="mt-6 hidden h-16 w-24 text-white lg:block" />
                <h1 className="mt-3 text-6xl font-black tracking-tight md:text-7xl xl:text-8xl">
                  <span className="text-leaf-500">라움</span>도배
                </h1>
                <p className="mt-4 font-serif text-xl text-white/90 md:text-2xl">{site.slogan}</p>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-8 border-t border-white/20 pt-8">
                  <p className="text-lg">
                    <strong className="text-2xl font-bold tracking-[0.3em]">{site.ceo}</strong>
                    <span className="ml-3 text-white/60">| 대표</span>
                  </p>
                  <a href={telHref} className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-400 text-navy-900">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <span className="text-3xl font-bold tracking-tight md:text-4xl">{site.phone}</span>
                  </a>
                  <div className="mt-4 flex gap-3 text-white/80">
                    <PinIcon className="mt-0.5 h-6 w-10 shrink-0 text-leaf-400" />
                    <p className="leading-relaxed">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      <span className="text-sm text-white/55">({site.address.note})</span>
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.links.kakaoChat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-7 py-4 font-bold shadow-xl shadow-leaf-700/40 transition-colors hover:bg-leaf-600"
                  >
                    <KakaoIcon className="h-5 w-5" />
                    카카오톡 무료 견적
                  </a>
                  <a
                    href={telHref}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-bold transition-colors hover:border-white hover:bg-white/5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    전화 상담
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROMISE BAR */}
        <section className="relative z-10 bg-navy-950 text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-2 py-8 md:py-10">
            {promises.map((p) => (
              <div key={p.title} className="px-2 text-center">
                <p className="text-base font-bold text-leaf-400 md:text-xl">{p.title}</p>
                <p className="mt-1 text-xs text-white/60 md:text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORRIES */}
        <section className="px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="WORRIES" title={<>도배, 이런 걱정<br className="md:hidden" /> 있으셨죠?</>} />
            <div className="grid gap-5 md:grid-cols-2">
              {worries.map((w, i) => (
                <Reveal key={w.q} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm md:p-8">
                    <p className="text-lg font-bold text-navy-900/50 line-through decoration-navy-900/30">&ldquo;{w.q}&rdquo;</p>
                    <p className="mt-4 flex gap-3 text-base leading-relaxed text-navy-900 md:text-lg">
                      <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-leaf-500" />
                      {w.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="relative overflow-hidden bg-navy-900 px-5 py-24 text-white md:py-32">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full border-[40px] border-leaf-500/10" />
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle dark eyebrow="OUR PROMISE" title={<>라움도배가<br className="md:hidden" /> 약속드립니다</>} />
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.no} delay={i * 100} className="h-full">
                  <div className="group h-full bg-navy-900 p-8 transition-colors hover:bg-navy-800 md:p-12">
                    <p className="font-serif text-4xl font-bold text-leaf-500 transition-colors group-hover:text-leaf-400">{p.no}</p>
                    <h3 className="mt-5 text-xl font-bold md:text-2xl">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/65">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="SERVICES" title="시공 분야" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 100} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-leaf-500 transition-transform duration-500 group-hover:scale-x-100" />
                    <p className="text-[11px] font-bold tracking-[0.25em] text-gold">{s.tag}</p>
                    <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <ul className="flex flex-wrap justify-center gap-2.5">
                {wallpapers.map((w) => (
                  <li key={w} className="rounded-full bg-leaf-50 px-4 py-2 text-sm font-semibold text-leaf-700 ring-1 ring-leaf-100">
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-leaf-50 px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="PROCESS" title="진행 과정" />
            <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
              <span className="absolute left-6 top-6 bottom-6 w-px bg-leaf-300 md:inset-x-[10%] md:bottom-auto md:left-[10%] md:h-px md:w-auto" />
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <Reveal delay={i * 100} className="flex items-start gap-5 md:flex-col md:items-center md:text-center">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf-700 font-serif text-lg font-bold text-white ring-4 ring-leaf-50">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold md:mt-2">{s.title}</h3>
                      <p className="mt-1 text-sm text-navy-900/60">{s.desc}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="px-5 py-24 md:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <Reveal className="order-2 md:order-1">
              <p className="text-xs font-bold tracking-[0.3em] text-leaf-500">PORTFOLIO</p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-snug md:text-4xl">
                시공 사례는<br />블로그에서 확인하세요
              </h2>
              <p className="mt-5 leading-relaxed text-navy-900/65">
                현장별 시공 전·후 사진과 벽지 선택 팁을 꾸준히 기록하고 있습니다. 비슷한 평수, 비슷한 구조의 사례를 보시면
                완성된 모습을 미리 그려보실 수 있어요.
              </p>
              <a
                href={site.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 font-bold text-white transition-colors hover:bg-navy-800"
              >
                네이버 블로그 바로가기
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Reveal>
            <Reveal delay={150} className="order-1 md:order-2">
              <a href={site.links.blog} target="_blank" rel="noopener noreferrer" className="mx-auto block max-w-xs md:max-w-sm">
                <Image
                  src="/images/blog-qr.png"
                  alt="라움도배 블로그 QR 코드"
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 384px, 320px"
                  className="h-auto w-full drop-shadow-xl transition-transform hover:scale-[1.02]"
                />
              </a>
            </Reveal>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="relative overflow-hidden bg-navy-900 px-5 py-24 text-white md:py-32">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-leaf-600" />
          <div className="pointer-events-none absolute inset-x-0 bottom-3 h-1.5 bg-leaf-400" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <LogoMark className="mx-auto h-14 w-20 text-white" />
              <h2 className="mt-6 font-serif text-3xl font-bold leading-snug md:text-5xl">
                새로운 공간의 시작,<br />
                <span className="text-leaf-400">라움도배</span>와 함께하세요
              </h2>
              <p className="mt-5 text-white/65">현장 방문과 견적은 무료입니다. 부담 없이 문의 주세요.</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={site.links.kakaoChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-8 py-4 font-bold text-[#3A1D1D] transition-transform hover:scale-105"
                >
                  <KakaoIcon className="h-5 w-5" />
                  카카오톡 상담
                </a>
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-8 py-4 font-bold transition-transform hover:scale-105"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {site.phone}
                </a>
              </div>
              <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/55">
                <PinIcon className="h-4 w-4 text-leaf-400" />
                {site.address.line1} {site.address.line2}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 px-5 pb-28 pt-12 text-sm text-white/50 md:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-lg font-black text-white">
              <LogoMark className="h-6 w-9" />
              <span>
                <span className="text-leaf-400">라움</span>도배
              </span>
            </p>
            <p className="mt-4 leading-relaxed">
              대표 {site.ceo} · 연락처 {site.phone}
              <br />
              {site.address.line1} {site.address.line2} ({site.address.note})
            </p>
          </div>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>

      <FloatingButtons />
    </>
  );
}
