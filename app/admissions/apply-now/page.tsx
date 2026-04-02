import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { Reveal } from '@/components/Reveal';

export default function ApplyNowPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gray-50 min-h-screen">
        <section className="bg-primary-900 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">Start Your Admission Journey</h1>
              <p className="hero-page-subtitle">
                Complete the form below to request admission information and begin the placement process.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <Reveal>
              <LeadForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
