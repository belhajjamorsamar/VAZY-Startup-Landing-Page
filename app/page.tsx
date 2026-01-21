import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AISolutionsSection } from "@/components/ai-solutions-section"
import { WhyVazySection } from "@/components/why-vazy-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AISolutionsSection />
        <WhyVazySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
