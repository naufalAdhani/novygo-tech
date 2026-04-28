export const NAV_LINKS = [
  { label: 'Layanan', id: 'layanan' },
  { label: 'Portofolio', id: 'portofolio' },
  { label: 'Proses', id: 'proses' },
  { label: 'Harga', id: 'harga' },
  { label: 'Kontak', id: 'kontak' },
]

export const SERVICES = [
  {
    icon: '🌐',
    title: 'Website Company Profile',
    desc: 'Tampilkan identitas bisnis Anda dengan desain profesional yang memukau dan meninggalkan kesan pertama yang tak terlupakan.',
    tag: 'Populer',
    color: '#FF6B35',
    colorBg: 'rgba(255,107,53,0.1)',
    colorBorder: 'rgba(255,107,53,0.3)',
  },
  {
    icon: '🛒',
    title: 'Toko Online / E-Commerce',
    desc: 'Platform belanja online lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin yang intuitif.',
    tag: 'Best Seller',
    color: '#F72585',
    colorBg: 'rgba(247,37,133,0.1)',
    colorBorder: 'rgba(247,37,133,0.3)',
  },
  {
    icon: '⚡',
    title: 'Landing Page',
    desc: 'Halaman konversi tinggi yang dirancang untuk mengubah pengunjung menjadi pelanggan dengan psikologi desain terkini.',
    tag: 'Cepat',
    color: '#7209B7',
    colorBg: 'rgba(114,9,183,0.1)',
    colorBorder: 'rgba(114,9,183,0.3)',
  },
  {
    icon: '📱',
    title: 'Web App & Dashboard',
    desc: 'Aplikasi web kustom dengan fitur lengkap, real-time data, dan antarmuka yang responsif di semua perangkat.',
    tag: 'Custom',
    color: '#3A0CA3',
    colorBg: 'rgba(58,12,163,0.1)',
    colorBorder: 'rgba(58,12,163,0.3)',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    desc: 'Layanan pemeliharaan website Anda agar selalu optimal, aman, dan up-to-date sepanjang waktu.',
    tag: '24/7',
    color: '#4CC9F0',
    colorBg: 'rgba(76,201,240,0.1)',
    colorBorder: 'rgba(76,201,240,0.3)',
  },
  {
    icon: '🚀',
    title: 'SEO & Optimasi',
    desc: 'Optimasi mesin pencari untuk memastikan website Anda mudah ditemukan oleh calon pelanggan di Google.',
    tag: 'Growth',
    color: '#06D6A0',
    colorBg: 'rgba(6,214,160,0.1)',
    colorBorder: 'rgba(6,214,160,0.3)',
  },
]

export const PORTFOLIO = [
  { title: 'Elegance Boutique', cat: 'E-Commerce', img: '🛍️', color: '#FF6B35' },
  { title: 'MedCare Hospital', cat: 'Company Profile', img: '🏥', color: '#4CC9F0' },
  { title: 'FoodieGo App', cat: 'Web App', img: '🍜', color: '#F72585' },
  { title: 'BuildPro Corp', cat: 'Landing Page', img: '🏗️', color: '#06D6A0' },
  { title: 'EduSmart Platform', cat: 'Web App', img: '📚', color: '#7209B7' },
  { title: 'LuxuryStay Hotel', cat: 'Company Profile', img: '🏨', color: '#FFB703' },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Konsultasi',
    desc: 'Diskusi mendalam tentang kebutuhan, tujuan, dan target audiens bisnis Anda bersama tim ahli kami.',
  },
  {
    step: '02',
    title: 'Desain UI/UX',
    desc: 'Tim desainer kami membuat mockup visual yang sesuai dengan brand identity dan visi Anda.',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Pengembangan dengan teknologi modern: React, Next.js, dan backend terpercaya yang scalable.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    desc: 'Pengujian menyeluruh di berbagai browser dan perangkat untuk memastikan performa optimal.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    desc: 'Website live! Kami tetap mendampingi dengan dukungan teknis dan update pasca-launch.',
  },
]

export const PACKAGES = [
  {
    name: 'Starter',
    price: 'Rp 500.000',
    desc: 'Cocok untuk UMKM & bisnis baru',
    highlight: false,
    features: [
      'Company Profile 3 halaman',
      'Desain responsif mobile',
      'Formulir kontak interaktif',
      'Domain & hosting tanggung sendiri',
      '2x revisi desain',
      'Support teknis 1 bulan',
    ],
    cta: 'Mulai Sekarang',
  },
  {
    name: 'Professional',
    price: 'Rp 6.500.000',
    desc: 'Pilihan terbaik untuk bisnis berkembang',
    highlight: true,
    features: [
      'Semua fitur Starter',
      'Hingga 15 halaman kustom',
      'CMS Admin Panel',
      'Integrasi media sosial',
      'SEO Onpage dasar',
      'Revisi unlimited',
      'Support teknis 6 bulan',
      'Google Analytics setup',
    ],
    cta: 'Pilih Professional',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Solusi lengkap untuk bisnis besar',
    highlight: false,
    features: [
      'Semua fitur Professional',
      'E-Commerce / Web App kustom',
      'Integrasi payment gateway',
      'Custom fitur & API integration',
      'Keamanan SSL + auto-backup',
      'Dedicated support 1 tahun',
      'Training tim internal',
    ],
    cta: 'Hubungi Kami',
  },
]

export const STATS = [
  { value: '15+', label: 'Proyek Selesai' },
  { value: '98%', label: 'Klien Puas' },
  { value: '5+', label: 'Tahun Pengalaman' },
  { value: '24/7', label: 'Support Aktif' },
]

export const TECH_STACK = [
  'React.js', 'Next.js', 'Node.js', 'Laravel',
  'MySQL', 'MongoDB', 'Tailwind CSS', 'Figma',
  'AWS', 'WordPress', 'TypeScript', 'Vue.js',
]

export const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'novygotech@gmail,com' },
  { icon: '📱', label: 'WhatsApp', value: '+62 812-2495-2341' },
  { icon: '📍', label: 'Lokasi', value: 'Indonesia — Remote Friendly' },
]
