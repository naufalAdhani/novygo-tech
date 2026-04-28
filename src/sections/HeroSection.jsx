import { useEffect, useState } from 'react'
import { STATS } from '../constants/data'

export default function HeroSection({ onScrollTo }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  const t = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-[5%] pt-28 pb-20">
      {/* Background glows */}
      <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-radial-orange pointer-events-none" />
      <div className="absolute -right-[5%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-radial-pink pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03] pointer-events-none" />

      {/* Floating decorative */}
      <div className="animate-float absolute top-[15%] right-[15%] text-5xl opacity-15 pointer-events-none">⬡</div>
      <div className="animate-float animation-delay-2000 absolute bottom-[25%] left-[8%] text-3xl opacity-10 pointer-events-none">◈</div>

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Badge */}
          <div
            style={t(0)}
            className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/25 rounded-full px-4 py-1.5 mb-7"
          >
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-glow" />
            <span className="font-dm text-xs text-brand-orange font-medium tracking-widest uppercase">
              Jasa Pembuatan Website
            </span>
          </div>

          {/* Headline */}
          <h1
            style={t(0.2)}
            className="font-syne font-extrabold leading-[1.05] mb-6 text-white"
            style={{ ...t(0.2), fontSize: 'clamp(36px, 5.5vw, 68px)' }}
          >
            Website{' '}
            <span className="gradient-text">Modern</span>
            {' '}untuk Bisnis{' '}
            <span className="relative inline-block">
              Anda
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-pink rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={t(0.35)}
            className="font-dm text-white/60 text-[17px] leading-[1.7] mb-10 max-w-[480px]"
          >
            Kami merancang & mengembangkan website profesional yang tidak hanya
            indah secara visual, tetapi juga efektif mengkonversi pengunjung
            menjadi pelanggan setia.
          </p>

          {/* CTA Buttons */}
          <div style={t(0.5)} className="flex flex-wrap gap-4">
            <button className="btn-primary" onClick={() => onScrollTo('harga')}>
              Lihat Paket Harga
            </button>
            <button className="btn-outline" onClick={() => onScrollTo('portofolio')}>
              Lihat Portfolio
            </button>
          </div>

          {/* Stats */}
          <div style={t(0.65)} className="flex flex-wrap gap-8 mt-14">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-syne font-extrabold text-[28px] text-gradient-brand">
                  {s.value}
                </div>
                <div className="font-dm text-[12px] text-white/50 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Browser mockup */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
          }}
          className="relative"
        >
          <div className="animate-float bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm">
            {/* Browser bar */}
            <div className="flex items-center gap-2 mb-5">
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
              <div className="flex-1 bg-white/[0.06] rounded-md px-3 py-1.5 font-mono text-[11px] text-white/40">
                novygotech.id/your-website
              </div>
            </div>

            {/* Mock page content */}
            <div className="bg-white/[0.03] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-5">
                <img src="/logo.png" alt="Novygo Tech" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                <div>
                  <div className="w-20 h-2 bg-white/20 rounded mb-1.5" />
                  <div className="w-12 h-1.5 bg-white/10 rounded" />
                </div>
              </div>
              <div className="w-3/4 h-2.5 bg-white/15 rounded mb-2.5" />
              <div className="w-1/2 h-2 bg-white/10 rounded mb-5" />

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {['#FF6B35', '#F72585', '#7209B7', '#4CC9F0'].map((c) => (
                  <div
                    key={c}
                    className="h-14 rounded-xl flex items-center justify-center border"
                    style={{ background: `${c}22`, borderColor: `${c}44` }}
                  >
                    <div className="w-6 h-6 rounded-md" style={{ background: c }} />
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-brand-orange to-brand-pink rounded-xl py-3 text-center font-syne font-bold text-[13px]">
                Hubungi Sekarang
              </div>
            </div>
          </div>

          {/* Floating badges */}
          {[
            { top: '-16px', right: '20px', icon: '✅', text: 'Terkirim Tepat Waktu', color: '#06D6A0', delay: '0s' },
            { bottom: '-16px', left: '10px', icon: '⭐', text: '4.9/5 Rating Klien', color: '#FFB703', delay: '1.5s' },
          ].map((b, i) => (
            <div
              key={i}
              className="animate-float absolute flex items-center gap-2 bg-dark/90 rounded-full px-4 py-2 backdrop-blur-xl whitespace-nowrap"
              style={{
                top: b.top,
                bottom: b.bottom,
                right: b.right,
                left: b.left,
                border: `1px solid ${b.color}44`,
                animationDelay: b.delay,
              }}
            >
              <span className="text-sm">{b.icon}</span>
              <span className="font-dm font-medium text-xs" style={{ color: b.color }}>
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
