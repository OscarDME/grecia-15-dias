import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import Bonuses from '@/components/Bonuses';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';
import CarouselSection from '@/components/CarouselSection';
import FAQ from '@/components/FAQ';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Story />
      <Benefits />
      <Features />
      <CarouselSection />
      <Bonuses />
      <Testimonials />
      <FinalCta />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
