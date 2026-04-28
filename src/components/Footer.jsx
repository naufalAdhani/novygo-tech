export default function Footer() {
  const socials = ['Instagram', 'Email', 'WhatsApp']

  return (
    <footer className="border-t border-white/[0.05] py-10 px-[5%]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Novygo Tech" className="h-14 w-auto object-contain" />
        </div>

        {/* Copyright */}
        <div className="font-dm text-[13px] text-white/35">
          © 2026 Novygo Tech. All rights reserved.
        </div>

        {/* Socials */}
        <div className="flex gap-5">
          {socials.map((s) => (
            <span
              key={s}
              className="font-dm text-[13px] text-white/40 cursor-pointer transition-colors duration-300 hover:text-brand-orange"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
