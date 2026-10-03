import Image from "next/image";
import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import Reveal from "@/components/Reveal";
import ScrollShowcase from "@/components/ScrollShowcase";
import PortfolioGallery from "@/components/PortfolioGallery";
import { getPortfolio, portfolioCategories } from "@/lib/portfolio";
import { site, telHref } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, KakaoIcon, LogoMark, PhoneIcon, PinIcon } from "@/components/icons";

const highlights = [
  { value: "0원", label: "현장 방문 견적비" },
  { value: "1:1", label: "대표 직접 상담" },
  { value: "A/S", label: "시공 후 책임 관리" },
];

const dust = [
  { left: "12%", top: "70%", delay: "0s", duration: "7s", size: 4 },
  { left: "34%", top: "82%", delay: "3s", duration: "9s", size: 2 },
  { left: "58%", top: "74%", delay: "1.5s", duration: "8s", size: 3 },
  { left: "76%", top: "52%", delay: "4.5s", duration: "6s", size: 2 },
  { left: "88%", top: "78%", delay: "2s", duration: "10s", size: 3 },
];

const worries = [
  { q: "예고 없는 추가 비용", a: "현장 실측 후 확정 견적. 약속한 금액 그대로 진행합니다." },
  { q: "들뜨고 벌어지는 이음매", a: "초배부터 정배까지 꼼꼼하게, 모서리 마감 라인까지 확인합니다." },
  { q: "지켜지지 않는 일정", a: "일정을 먼저 맞추고, 약속한 날짜에 정확히 끝냅니다." },
  { q: "내 취향과 다른 벽지", a: "공간과 채광에 맞는 벽지를 함께 고르고 샘플로 확인합니다." },
];

const pillars = [
  {
    no: "01",
    title: "보이지 않는 곳까지 꼼꼼하게",
    points: [
      { h: "바탕부터 다르게", p: "벽면 상태 점검과 퍼티·초배 작업을 생략하지 않습니다. 오래 가는 도배는 바탕에서 시작됩니다." },
      { h: "마감 라인까지", p: "몰딩·걸레받이·콘센트 주변처럼 눈길이 머무는 곳을 가장 공들여 마감합니다." },
    ],
  },
  {
    no: "02",
    title: "투명하고 정직한 견적",
    points: [
      { h: "항목별 안내", p: "자재·면적·작업 범위를 하나하나 설명해 드립니다." },
      { h: "추가 비용 없는 확정 견적", p: "직접 방문해 실측한 뒤 최종 비용을 확정합니다. 이해되지 않는 비용은 받지 않습니다." },
    ],
  },
  {
    no: "03",
    title: "처음부터 끝까지 책임 시공",
    points: [
      { h: "상담한 사람이 현장까지", p: "대표가 직접 상담하고, 직접 현장을 챙깁니다." },
      { h: "시공 후에도 곁에", p: "완료 후 불편한 점이 생기면 언제든 연락 주세요. 처음과 같은 마음으로 응대합니다." },
    ],
  },
  {
    no: "04",
    title: "공간에 맞춘 벽지 제안",
    points: [
      { h: "선택의 고민 해결", p: "수많은 샘플 앞에서 막막해하지 않으셔도 됩니다." },
      { h: "함께 찾는 최적의 조합", p: "실크·합지·친환경 벽지 중 공간의 용도와 예산에 가장 알맞은 선택을 함께 찾습니다." },
    ],
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

function SectionTitle({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 text-center md:mb-16">
      <p className={`text-xs font-semibold tracking-[0.35em] ${dark ? "text-gold" : "text-leaf-600"}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-3xl font-bold leading-snug md:text-[2.75rem] ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {desc && <p className={`mt-4 text-sm md:text-base ${dark ? "text-white/55" : "text-muted"}`}>{desc}</p>}
    </Reveal>
  );
}

function ContactButtons({ dark = true }: { dark?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href={site.links.kakaoChat}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-leaf-600 to-leaf-500 px-8 py-4 font-bold text-white shadow-xl shadow-leaf-700/30 transition-all hover:-translate-y-0.5 hover:shadow-leaf-600/40 sm:w-auto"
      >
        <KakaoIcon className="h-5 w-5" />
        카카오톡 무료 상담
      </a>
      <a
        href={telHref}
        className={`flex w-full items-center justify-center gap-2 rounded-full border px-8 py-4 font-bold transition-all hover:-translate-y-0.5 sm:w-auto ${
          dark ? "border-white/25 text-white hover:bg-white/10" : "border-leaf-600 text-leaf-700 hover:bg-leaf-600 hover:text-white"
        }`}
      >
        <PhoneIcon className="h-4 w-4" />
        전화 상담
      </a>
    </div>
  );
}

export default function Home() {
  const portfolio = getPortfolio();

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy pt-16 text-white">
          <div className="animate-glow pointer-events-none absolute right-0 top-0 h-[900px] w-[900px] translate-x-[20%] -translate-y-[25%] rounded-full bg-[radial-gradient(circle,rgba(15,107,58,0.45)_0%,rgba(15,107,58,0.12)_45%,transparent_70%)]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-[640px] w-[640px] -translate-x-[30%] translate-y-[30%] rounded-full bg-[radial-gradient(circle,rgba(201,179,126,0.2)_0%,transparent_60%)]" />
          <div className="animate-light-sweep pointer-events-none absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-transparent via-[rgba(233,220,181,0.14)] to-transparent" />
          {dust.map((d) => (
            <span
              key={d.left}
              className="animate-dust pointer-events-none absolute rounded-full bg-gold-light/70"
              style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay, animationDuration: d.duration }}
            />
          ))}

          <div className="relative z-10 mx-auto max-w-4xl px-5 py-20 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-leaf-400" />
                <span className="text-sm font-medium tracking-wide text-gold-light">광교 · 수원 · 용인 도배 전문</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 font-serif font-black tracking-tight">
                <span className="text-gradient block text-[40px] leading-[1.2] sm:text-6xl md:text-[80px] md:leading-[1.1]">
                  머무는 공간의 품격,
                </span>
                <span className="mt-2 block text-[28px] font-bold text-white/85 sm:text-5xl md:text-6xl">벽에서 시작됩니다</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                라움(Raum)은 독일어로 &lsquo;공간&rsquo;이라는 뜻입니다.
                <br />
                <strong className="font-semibold text-white">{site.slogan}.</strong>
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10">
                <ContactButtons />
                <p className="mt-5 text-xs text-white/35">무료 현장 방문 · 무료 견적 · 친환경 자재</p>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-8">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <dt className="sr-only">{h.label}</dt>
                    <dd className="text-gradient font-serif text-2xl font-black md:text-3xl">{h.value}</dd>
                    <dd className="mt-1 text-xs text-white/40">{h.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-12 flex animate-bounce flex-col items-center gap-1 opacity-30">
              <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </section>

        {/* SCROLL SHOWCASE */}
        <ScrollShowcase />

        {/* WORRIES */}
        <section className="bg-navy-dark px-5 py-24 text-white md:py-32">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              dark
              eyebrow="WORRIES"
              title={
                <>
                  도배 한 번 잘못 맡겼다가
                  <br />
                  <span className="text-leaf-400">두 번 고생하셨나요?</span>
                </>
              }
              desc="많은 분들이 이런 이유로 도배를 미루고 또 미룹니다"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {worries.map((w, i) => (
                <Reveal key={w.q} delay={i * 100} className="h-full">
                  <div className="glass-card h-full rounded-2xl p-6 md:p-7">
                    <p className="flex items-center gap-2 font-bold text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      {w.q}
                    </p>
                    <p className="mt-3 flex gap-2.5 leading-relaxed text-gold-light">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-leaf-400" />
                      {w.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-leaf-700 to-leaf-600 p-8 shadow-xl shadow-black/30 text-center md:p-10">
                <p className="relative font-serif text-xl font-bold md:text-2xl">이 모든 걱정, 라움도배에는 없습니다</p>
                <p className="relative mt-2 text-sm text-white/85">대표가 직접 상담부터 마감까지 함께합니다</p>
                <a
                  href={site.links.kakaoChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-leaf-700 shadow-lg transition-colors hover:bg-gold-light"
                >
                  <KakaoIcon className="h-4 w-4" />
                  지금 바로 상담하기
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="bg-ivory px-5 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <SectionTitle
              eyebrow="WHY RAUM"
              title={
                <>
                  왜 <span className="text-leaf-600">라움도배</span>일까요?
                </>
              }
              desc="좋은 도배는 공간을 바꾸고, 공간은 하루를 바꿉니다."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.no} delay={i * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-sand bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-leaf-900/5 md:p-8">
                    <p className="font-serif text-4xl font-black leading-none text-sand">{p.no}</p>
                    <h3 className="mt-4 text-lg font-bold md:text-xl">{p.title}</h3>
                    <div className="mt-5 space-y-4">
                      {p.points.map((pt) => (
                        <div key={pt.h}>
                          <p className="text-sm font-bold text-leaf-600">{pt.h}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{pt.p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-14 text-center">
              <p className="mb-5 text-sm text-muted">결정은 나중에 하셔도 됩니다. 궁금한 것부터 물어보세요.</p>
              <ContactButtons dark={false} />
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-white px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="SERVICES" title="시공 분야" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 100} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-ivory p-7 ring-1 ring-sand transition-all hover:-translate-y-1 hover:bg-navy-dark hover:shadow-xl">
                    <p className="text-[11px] font-bold tracking-[0.25em] text-gold">{s.tag}</p>
                    <h3 className="mt-4 text-xl font-bold transition-colors group-hover:text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/60">{s.desc}</p>
                    <span className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-leaf-500 to-gold transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <ul className="flex flex-wrap justify-center gap-2.5">
                {wallpapers.map((w) => (
                  <li key={w} className="rounded-full border border-leaf-100 bg-leaf-50 px-4 py-2 text-sm font-semibold text-leaf-700">
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="bg-ivory px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="PORTFOLIO"
              title="시공 사례"
              desc="라움도배가 직접 마감한 현장입니다. 사진을 누르면 크게 볼 수 있어요."
            />
            <Reveal>
              <PortfolioGallery photos={portfolio} categories={portfolioCategories.map((c) => c.label)} />
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="relative overflow-hidden bg-navy-dark px-5 py-24 text-white md:py-32">
          <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(15,107,58,0.25)_0%,transparent_65%)]" />
          <div className="relative mx-auto max-w-6xl">
            <SectionTitle dark eyebrow="PROCESS" title="진행 과정" />
            <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
              <span className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-leaf-500 to-gold/40 md:inset-x-[10%] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r" />
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <Reveal delay={i * 100} className="flex items-start gap-5 md:flex-col md:items-center md:text-center">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-navy-700 font-serif text-lg font-bold text-gold-light ring-4 ring-navy-dark">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold md:mt-2">{s.title}</h3>
                      <p className="mt-1 text-sm text-white/50">{s.desc}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="bg-ivory px-5 py-24 md:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <Reveal className="order-2 md:order-1">
              <p className="text-xs font-semibold tracking-[0.35em] text-leaf-600">BLOG</p>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-snug md:text-[2.5rem]">
                더 많은 현장 이야기는
                <br />
                블로그에서 확인하세요
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                현장별 시공 전·후 사진과 벽지 선택 팁을 꾸준히 기록하고 있습니다. 비슷한 평수, 비슷한 구조의 사례를 보시면
                완성된 모습을 미리 그려보실 수 있어요.
              </p>
              <a
                href={site.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-dark px-7 py-4 font-bold text-white transition-colors hover:bg-leaf-700"
              >
                네이버 블로그 바로가기
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Reveal>
            <Reveal delay={150} className="order-1 md:order-2">
              <a
                href={site.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto block max-w-[280px] rounded-3xl bg-white p-6 shadow-xl shadow-leaf-900/10 ring-1 ring-sand transition-transform hover:-translate-y-1 md:max-w-sm"
              >
                <Image
                  src="/images/blog-qr.png"
                  alt="라움도배 블로그 QR 코드"
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 336px, 232px"
                  className="h-auto w-full"
                />
              </a>
            </Reveal>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="relative overflow-hidden bg-navy px-5 py-24 text-white md:py-32">
          <div className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(15,107,58,0.35)_0%,transparent_65%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <LogoMark className="mx-auto h-12 w-[4.5rem] text-white" />
              <p className="mt-6 text-sm font-medium tracking-wide text-gold">라움도배 · {site.slogan}</p>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-snug md:text-5xl">
                새로운 공간의 시작,
                <br />
                <span className="text-gradient">지금 편하게 물어보세요</span>
              </h2>
              <p className="mt-5 text-white/55">현장 방문과 견적은 무료입니다. 부담 없이 문의 주세요.</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <ContactButtons />
              </div>
              <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:grid-cols-2 sm:text-left">
                <a href={telHref} className="flex items-center justify-center gap-3 sm:justify-start">
                  <PhoneIcon className="h-4 w-4 text-leaf-400" />
                  <span>
                    대표 {site.ceo} · <strong className="text-white">{site.phone}</strong>
                  </span>
                </a>
                <p className="flex items-start justify-center gap-3 sm:justify-start">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" />
                  <span>
                    {site.address.line1} {site.address.line2}
                    <br />
                    <span className="text-xs text-white/35">{site.address.note}</span>
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 px-5 pb-28 pt-10 text-xs text-white/35 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2 text-base font-black text-white/80">
            <LogoMark className="h-5 w-8" />
            <span>
              <span className="text-leaf-400">라움</span>도배
            </span>
          </p>
          <p>
            상호 {site.name} · 대표 {site.ceo} · {site.phone} · {site.address.line1} {site.address.line2}
          </p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </footer>

      <FloatingButtons />
    </>
  );
}
