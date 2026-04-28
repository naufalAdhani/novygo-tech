import AnimSection from '../components/AnimSection'
import { PACKAGES } from '../constants/data'

const WA_NUMBER = '6281224952341'

function openWhatsApp(pkg) {
  const message =
    pkg.price === 'Custom'
      ? `Halo Novygo Tech! 👋 Saya tertarik dengan paket *${pkg.name}* untuk kebutuhan website bisnis saya. Boleh minta info lebih lanjut dan estimasi harga?`
      : `Halo Novygo Tech! 👋 Saya tertarik dengan paket *${pkg.name}* (${pkg.price}). Bisa bantu proses lebih lanjut?`
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

export default function PricingSection({ onScrollTo }) {
  return (
    <section id="harga" className="py-24 px-[5%] bg-white/[0.015]">
      <div className="max-w-[1100px] mx-auto">
        <AnimSection className="text-center mb-16">
          <div className="section-label">Paket Harga</div>
          <h2 className="section-title">
            Investasi <span className="gradient-text">Tepat</span> untuk Bisnis Anda
          </h2>
          <p className="mt-4 font-dm text-white/50 text-base">
            Harga transparan, tanpa biaya tersembunyi.
          </p>
        </AnimSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <AnimSection key={pkg.name} delay={i * 0.1}>
              <div
                className="relative rounded-3xl p-8 h-full flex flex-col"
                style={{
                  background: pkg.highlight
                    ? 'linear-gradient(135deg, rgba(255,107,53,0.12), rgba(247,37,133,0.12))'
                    : 'rgba(255,255,255,0.03)',
                  border: pkg.highlight
                    ? '2px solid #FF6B35'
                    : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Highlight badge */}
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-brand-pink rounded-full px-4 py-1 text-xs font-syne font-bold whitespace-nowrap">
                    ✨ Paling Direkomendasikan
                  </div>
                )}

                {/* Package name */}
                <div className="font-dm text-sm font-semibold text-white/50 mb-2">
                  {pkg.name}
                </div>

                {/* Price */}
                <div className="font-syne font-extrabold text-3xl text-white mb-1">
                  {pkg.price === 'Custom' ? (
                    'Custom'
                  ) : (
                    <span className="text-2xl">{pkg.price}</span>
                  )}
                </div>
                <div className="font-dm text-[13px] text-white/40 mb-7">
                  {pkg.desc}
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start font-dm text-[14px] text-white/70">
                      <span className="text-brand-green flex-shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => openWhatsApp(pkg)}
                  className={`w-full py-3.5 rounded-full font-syne font-bold text-[15px] border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-brand-orange to-brand-pink text-white hover:shadow-brand hover:-translate-y-0.5'
                      : 'bg-white/[0.08] text-white hover:bg-white/[0.15]'
                  }`}
                >
                  <span>💬</span> {pkg.cta}
                </button>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  )
}
