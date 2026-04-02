import Link from 'next/link';
import { CheckCircle2, MessageCircle, PhoneCall } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const benefits = [
  'Strong Nigerian curriculum',
  'Digital learning support',
  'WAEC & NECO success focus',
  'Safe and disciplined environment',
];

const leadMagnets = [
  'Free Entrance Exam Guide',
  'Free Assessment Test',
  '"How to Prepare Your Child for WAEC" PDF',
];

export default function RoyalAdvantagePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 text-white py-20">
          <div className="container-custom">
            <Reveal className="max-w-4xl text-center mx-auto">
              <h1 className="hero-page-title mb-5">Give Your Child a Royal Advantage in Education</h1>
              <p className="hero-page-subtitle">
                Enroll your child in a school that combines academic excellence, digital learning, and strong values
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start">
              <div>
                <Reveal>
                  <h2 className="text-3xl font-bold text-primary-900 mb-6">Benefits</h2>
                </Reveal>
                <Stagger className="space-y-4">
                  {benefits.map((benefit) => (
                    <StaggerItem key={benefit}>
                      <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-lg border border-primary-100">
                        <CheckCircle2 className="h-6 w-6 text-gold-500" />
                        <p className="font-medium text-gray-700">{benefit}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <Reveal className="mt-10 rounded-[2rem] bg-primary-900 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Limited Admission Slots Available</h3>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="tel:+2348033505742" className="btn-gold text-center inline-flex items-center justify-center gap-2">
                      <PhoneCall className="h-4 w-4" />
                      Call Now
                    </Link>
                    <Link href="https://wa.me/2348033505742" className="btn-secondary text-center inline-flex items-center justify-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Button
                    </Link>
                  </div>
                </Reveal>

                <Reveal className="mt-10">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">Lead Magnet Ideas</h3>
                  <div className="space-y-3">
                    {leadMagnets.map((item) => (
                      <div key={item} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-md text-gray-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal>
                <LeadForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
