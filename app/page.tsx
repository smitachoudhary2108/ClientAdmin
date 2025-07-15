import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import WhyChooseUsSection from "@/components/whyChooseus"
import AboutUsSection from "@/components/AboutUsSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <WhyChooseUsSection/>
      <AboutUsSection/>
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
