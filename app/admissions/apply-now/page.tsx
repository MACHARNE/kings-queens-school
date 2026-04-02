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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Admission Journey</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/85">
                Complete the form below to request admission information and begin the placement process.
              </p>
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
