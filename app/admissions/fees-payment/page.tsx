import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const points = [
  'Fee details are provided directly by the admissions office to ensure accuracy.',
  'Flexible guidance is available for families who need support with next steps.',
  'Parents can request a current fee schedule, payment process, and enrollment checklist.',
];

export default function FeesPaymentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
          <div className="container-custom">
            <Reveal className="max-w-3xl">
              <h1 className="hero-page-title mb-4">Clear Guidance for Families</h1>
              <p className="hero-page-subtitle !mx-0">
                The admissions brief recommends a clear pricing or request-fees call to action. This page provides that path professionally.
              </p>
              <div className="hero-accent !mx-0" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid md:grid-cols-3 gap-8">
              {points.map((point) => (
                <StaggerItem key={point}>
                  <div className="bg-white rounded-3xl border border-primary-100 shadow-lg p-8 h-full">
                    <h2 className="text-xl font-bold text-primary-900 mb-4">Admissions Support</h2>
                    <p className="text-gray-600">{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12 text-center rounded-3xl bg-white shadow-xl border border-primary-100 p-10">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Request Current Fee Information</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Contact the school to receive the latest fees, payment guidance, and admission support for your child&apos;s level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-center">Request Fees</Link>
                <Link href="/admissions/apply-now" className="btn-secondary text-center">Apply Now</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
