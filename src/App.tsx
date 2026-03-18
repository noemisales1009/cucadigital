import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import SolutionSection from './components/SolutionSection'
import BenefitsSection from './components/BenefitsSection'
import HowItWorksSection from './components/HowItWorksSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '110px' }}>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
