import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import ValueStrip from '@/components/ValueStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import Programs from '@/components/Programs';
import DigitalAdvantage from '@/components/DigitalAdvantage';
import ParentTrust from '@/components/ParentTrust';
import HomeContact from '@/components/HomeContact';
import ComparisonTable from '@/components/ComparisonTable';
import CountdownBanner from '@/components/CountdownBanner';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <VideoHero />
      <ValueStrip />
      <WhyChooseUs />
      <Programs />
      <DigitalAdvantage />
      <ParentTrust />
      <HomeContact />
      <ComparisonTable />
      <Testimonials />
      <CountdownBanner />

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
