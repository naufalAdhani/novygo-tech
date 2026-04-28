import AnimSection from '../components/AnimSection'
import { CONTACT_INFO } from '../constants/data'

// ─── CTA Banner ──────────────────────────────────────────────────────────────
export function CTABanner({ onScrollTo }) {
  return (
    <section className="py-20 px-[5%]">
      <div className="max-w-[900px] mx-auto">
        <AnimSection>
          <div className="relative overflow-hidden rounded-[28px] px-8 py-16 md:px-14 md:py-16 text-center border border-brand-orange/20"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(247,37,133,0.12), rgba(114,9,183,0.12))',
            }}
          >
            {/* Decorative glow blobs */}
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-radial-orange pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-radial-pink pointer-events-none" />

            <div className="relative z-10">
              <h2
                className="font-syne font-extrabold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
              >
                Siap Tingkatkan Bisnis dengan<br />
                Website <span className="gradient-text">Berkelas</span>?
              </h2>
              <p className="font-dm text-white/60 text-base leading-[1.7] max-w-[500px] mx-auto mb-9">
                Konsultasi pertama GRATIS. Tim kami siap membantu mewujudkan visi digital bisnis Anda.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="btn-primary" onClick={() => onScrollTo('kontak')}>
                  Mulai Konsultasi Gratis →
                </button>
                <a
                  href="https://wa.me/6281224952341"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-outline flex items-center gap-2">
                    <span className="text-lg">💬</span> Chat WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────
export function ContactSection() {
  return (
    <section id="kontak" className="py-24 px-[5%] bg-white/[0.015]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left info */}
        <AnimSection>
          <div className="section-label">Kontak</div>
          <h2 className="section-title">
            Mari <span className="gradient-text">Berkolaborasi</span>
          </h2>
          <p className="mt-4 mb-10 font-dm text-white/50 text-base leading-[1.7] max-w-[420px]">
            Ceritakan proyek impian Anda. Kami akan merespons dalam 1x24 jam
            dengan solusi terbaik yang sesuai kebutuhan bisnis Anda.
          </p>

          <div className="space-y-5">
            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-xl flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="font-dm text-xs text-white/40 mb-0.5">{c.label}</div>
                  <div className="font-dm font-medium text-[15px] text-white">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimSection>

        {/* Right form */}
        <AnimSection delay={0.2}>
          <div className="card-base rounded-3xl p-8 md:p-9">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-dm text-xs text-white/50 block mb-2">Nama Lengkap</label>
                <input className="form-input" placeholder="John Doe" />
              </div>
              <div>
                <label className="font-dm text-xs text-white/50 block mb-2">No. WhatsApp</label>
                <input className="form-input" placeholder="+62 8xx" />
              </div>
            </div>

            <div className="mb-4">
              <label className="font-dm text-xs text-white/50 block mb-2">Email</label>
              <input type="email" className="form-input" placeholder="email@bisnis.com" />
            </div>

            <div className="mb-4">
              <label className="font-dm text-xs text-white/50 block mb-2">Jenis Website</label>
              <select
                className="form-input appearance-none cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <option value="" style={{ background: '#05060F' }}>Pilih jenis website...</option>
                <option style={{ background: '#05060F' }}>Company Profile</option>
                <option style={{ background: '#05060F' }}>E-Commerce / Toko Online</option>
                <option style={{ background: '#05060F' }}>Landing Page</option>
                <option style={{ background: '#05060F' }}>Web App / Dashboard</option>
                <option style={{ background: '#05060F' }}>Lainnya</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="font-dm text-xs text-white/50 block mb-2">Ceritakan Kebutuhan Anda</label>
              <textarea
                className="form-input resize-y"
                rows={4}
                placeholder="Deskripsikan proyek Anda, target audiens, fitur yang diinginkan, dan budget yang tersedia..."
              />
            </div>

            <button className="btn-primary w-full !py-4 !text-base">
              Kirim Pesan & Konsultasi Gratis 🚀
            </button>
            <p className="mt-3 font-dm text-[12px] text-center text-white/35">
              Respons dalam 1x24 jam · Konsultasi pertama gratis
            </p>
          </div>
        </AnimSection>
      </div>
    </section>
  )
}
