# 🦅 Novygo Tech — Website Jasa Pembuatan Website

Website landing page modern untuk **Novygo Tech** dibangun dengan:
- ⚛️ **React 18** + **Vite 5**
- 🎨 **Tailwind CSS 3**
- 🔤 **Syne** (heading) + **DM Sans** (body) — Google Fonts

---

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### 3. Build untuk production
```bash
npm run build
```

Output akan ada di folder `dist/`.

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Struktur Folder

```
novygo-tech/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimSection.jsx     # Reusable scroll-animate wrapper
│   │   ├── Navbar.jsx          # Sticky responsive navbar
│   │   └── Footer.jsx          # Site footer
│   ├── constants/
│   │   └── data.js             # Semua data konten website
│   ├── hooks/
│   │   └── useInView.js        # Custom hook IntersectionObserver
│   ├── sections/
│   │   ├── HeroSection.jsx     # Hero + browser mockup + stats
│   │   ├── ContentSections.jsx # Marquee, Services, Portfolio, Process
│   │   ├── PricingSection.jsx  # 3 paket harga
│   │   └── CTAContact.jsx      # CTA banner + form kontak
│   ├── App.jsx                 # Root component
│   ├── index.css               # Tailwind directives + custom layers
│   └── main.jsx                # Entry point
├── index.html
├── tailwind.config.js          # Custom colors, fonts, animations
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ Cara Kustomisasi

### Ubah konten / teks
Edit file `src/constants/data.js` — semua teks, layanan, paket harga, dll ada di sini.

### Ubah warna brand
Edit `tailwind.config.js` di bagian `theme.extend.colors.brand`.

### Ubah nomor WhatsApp
Cari `wa.me/628123456789` di `src/sections/CTAContact.jsx` dan ganti dengan nomor Anda.

### Tambah font
Edit `index.html` (Google Fonts link) dan `tailwind.config.js` (fontFamily).

---

## 🧩 Sections

| Section | File |
|---|---|
| Navbar | `components/Navbar.jsx` |
| Hero | `sections/HeroSection.jsx` |
| Tech Marquee | `sections/ContentSections.jsx` |
| Layanan | `sections/ContentSections.jsx` |
| Portfolio | `sections/ContentSections.jsx` |
| Proses Kerja | `sections/ContentSections.jsx` |
| Paket Harga | `sections/PricingSection.jsx` |
| CTA Banner | `sections/CTAContact.jsx` |
| Form Kontak | `sections/CTAContact.jsx` |
| Footer | `components/Footer.jsx` |

---

Made with ❤️ by Novygo Tech
