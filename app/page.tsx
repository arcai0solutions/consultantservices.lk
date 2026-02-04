import HomeClient from '@/components/HomeClient';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <HomeClient>
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <IndustriesSection />
      <Footer />
    </HomeClient>
  );
}


