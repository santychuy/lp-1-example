import CallToAction from '@/components/sections/CallToAction';
import Hero from '@/components/sections/Hero';
import LogoTicker from '@/components/sections/LogoTicker';
import Pricing from '@/components/sections/Pricing';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Testimonials from '@/components/sections/Testimonials';

const Home = () => (
  <>
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <Pricing />
    <Testimonials />
    <CallToAction />
  </>
);

export default Home;
