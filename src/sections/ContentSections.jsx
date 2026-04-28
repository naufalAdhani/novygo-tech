import { useState } from 'react'
import AnimSection from '../components/AnimSection'
import { SERVICES, PORTFOLIO, PROCESS, TECH_STACK } from '../constants/data'

// ─── Tech Marquee ────────────────────────────────────────────────────────────
export function TechMarquee() {
  return (
    <div className="border-t border-b border-white/[0.05] py-4 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {[...Array(2)].map((_, k) => (
          <div key={k} className="flex gap-12 items-center mr-12">
            {TECH_STACK.map((t) => (
              <span key={t} className="font-dm text-[13px] text-white/30 whitespace-nowrap font-medium">
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
export function ServicesSection({ onScrollTo }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="layanan" className="py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <AnimSection className="text-center mb-16">
          <div className="section-label">Layanan Kami</div>
          <h2 className="section-title">
            Solusi Digital <span className="gradient-text">Terlengkap</span>
          </h2>
          <p className="mt-4 font-dm text-white/50 text-base max-w-[500px] mx-auto">
            Dari desain hingga deployment, kami menangani semuanya dengan standar kualitas tertinggi.
          </p>
        </AnimSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <AnimSection key={s.title} delay={i * 0.08}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl p-7 h-full transition-all duration-300 cursor-default"
                style={{
                  background: hovered === i ? s.colorBg : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${hovered === i ? s.colorBorder : 'rgba(255,255,255,0.08)'}`,
                  transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-4xl">{s.icon}</span>
                  <span
                    className="tag"
                    style={{ background: `${s.color}20`, color: s.color }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-[18px] mb-2.5 text-white">
                  {s.title}
                </h3>
                <p className="font-dm text-sm text-white/55 leading-[1.7]">
                  {s.desc}
                </p>
                <button
                  onClick={() => onScrollTo('kontak')}
                  className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 bg-transparent border-none cursor-pointer"
                  style={{ color: s.color }}
                >
                  Pelajari lebih lanjut <span>→</span>
                </button>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Portfolio ───────────────────────────────────────────────────────────────
export function PortfolioSection() {
  return (
    <section id="portofolio" className="py-24 px-[5%] bg-white/[0.015]">
      <div className="max-w-[1200px] mx-auto">
        <AnimSection className="text-center mb-16">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Karya <span className="gradient-text">Terbaik</span> Kami
          </h2>
          <p className="mt-4 font-dm text-white/50 text-base">
            Setiap proyek dikerjakan dengan dedikasi dan perhatian penuh terhadap detail.
          </p>
        </AnimSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((p, i) => (
            <AnimSection key={p.title} delay={i * 0.07}>
              <div className="card-hover overflow-hidden cursor-pointer">
                {/* Thumbnail */}
                <div
                  className="h-44 flex items-center justify-center text-6xl relative border-b border-white/[0.05]"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}30, ${p.color}08)`,
                  }}
                >
                  {p.img}
                  <div className="absolute top-3 right-3">
                    <span
                      className="tag text-[11px]"
                      style={{ background: `${p.color}25`, color: p.color }}
                    >
                      {p.cat}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-syne font-bold text-[17px] text-white">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-brand-amber text-[13px]">★</span>
                    ))}
                    <span className="font-dm text-[12px] text-white/40 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ─────────────────────────────────────────────────────────────────
export function ProcessSection() {
  return (
    <section id="proses" className="py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <AnimSection className="text-center mb-20">
          <div className="section-label">Alur Kerja</div>
          <h2 className="section-title">
            Proses <span className="gradient-text">Transparan</span>
          </h2>
        </AnimSection>

        <div className="relative">
          {/* Connecting line — hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent" />

          {PROCESS.map((p, i) => (
            <AnimSection key={p.step} delay={i * 0.1} className="mb-12">
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-10 ${
                  i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Card */}
                <div className={`lg:flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="inline-block card-base p-6 lg:p-7 max-w-[340px] text-left">
                    <h3 className="font-syne font-bold text-[18px] text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="font-dm text-sm text-white/55 leading-[1.7]">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Step circle */}
                <div
                  className="w-14 h-14 rounded-full flex-shrink-0 z-10 flex items-center justify-center font-syne font-extrabold text-base bg-gradient-to-br from-brand-orange to-brand-pink shadow-glow-orange"
                >
                  {p.step}
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:flex-1" />
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  )
}
