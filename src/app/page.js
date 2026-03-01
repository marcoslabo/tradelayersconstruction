import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainSection from '@/components/PainSection';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import HowItWorks from '@/components/HowItWorks';
import WhyUs from '@/components/WhyUs';
import Gallery from '@/components/Gallery';
import QuoteForm from '@/components/QuoteForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <Services />
        <SocialProof />
        <HowItWorks />
        <WhyUs />
        <Gallery />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}
