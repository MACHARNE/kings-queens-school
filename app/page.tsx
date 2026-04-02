import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import DigitalAdvantage from '@/components/DigitalAdvantage';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import ValueStrip from '@/components/ValueStrip';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoHero />
      <ValueStrip />
      <Programs />
      <WhyChooseUs />
      <DigitalAdvantage />
      <ComparisonTable />
      <Testimonials />
      
      <section className="py-16 md:py-24 bg-gray-50">
        <Reveal className="container-custom">
          <h2 className="section-title">Apply for Admission</h2>
          <LeadForm />
        </Reveal>
      </section>
      
      <CTA />
      <Footer />
    </>
  );
}
