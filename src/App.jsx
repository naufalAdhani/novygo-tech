import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import { TechMarquee, ServicesSection, PortfolioSection, ProcessSection } from './sections/ContentSections'
import PricingSection from './sections/PricingSection'
import { CTABanner, ContactSection } from './sections/CTAContact'

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-dark text-white min-h-screen overflow-x-hidden">
      <Navbar onScrollTo={scrollTo} />
      <HeroSection onScrollTo={scrollTo} />
      <TechMarquee />
      <ServicesSection onScrollTo={scrollTo} />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection onScrollTo={scrollTo} />
      <CTABanner onScrollTo={scrollTo} />
      <ContactSection />
      <Footer />
    </div>
  )
}
