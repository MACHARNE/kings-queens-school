import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, School, TimerReset } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const admissionSteps = [
  'Submit the admission enquiry or application form.',
  'Receive guidance on the appropriate class level and requirements.',
  'Attend placement assessment and parent interaction where applicable.',
  'Complete enrollment and onboarding into the school system.',
];

const requirements = [
  'Completed application details',
  'Previous school records or report cards where available',
  'Passport photograph and parent contact details',
  'Any supporting documents requested during review',
];

export default function Admissions() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20 text-white">
          <div className="absolute inset-0 gradient-panel" />
          <div className="grid-overlay absolute inset-0 opacity-25" />
          <div className="container-custom relative text-center">
            <Reveal>
              <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 backdrop-blur">
                Admissions
              </p>
              <h1 className="hero-page-title">Begin your child&apos;s journey to excellence.</h1>
              <p className="hero-page-subtitle mt-5">
                Admissions at Kings &amp; Queens School are structured to help parents move from enquiry to enrollment with clarity and confidence.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom grid gap-10 lg:grid-cols-[1.04fr_0.96fr]">
            <Reveal direction="right">
              <div className="premium-card overflow-hidden rounded-[2rem] p-4">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg"
                    alt="Admissions and campus life"
                    width={624}
                    height={439}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">Why Families Apply</p>
              <h2 className="section-title">A premium school experience with strong structure and visible progress.</h2>
              <div className="space-y-4 text-sm leading-7 text-slate-600">
                {[
                  'Nigerian curriculum with digital learning support.',
                  'Dedicated teachers and consistent progress tracking.',
                  'A disciplined school culture in a supportive environment.',
                ].map((item) => (
                  <div key={item} className="premium-card flex items-start gap-3 rounded-2xl p-4">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-800" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link href="#application" className="btn-primary">
                  Start Application
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact#visit" className="btn-secondary">
                  Book a School Visit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-50/70 py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Admissions Overview</p>
              <h2 className="section-title">What to expect from the enrollment process.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: <School className="h-6 w-6" />,
                  title: 'Who Can Apply',
                  text: 'Primary and secondary school learners seeking quality education in a structured environment.',
                },
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: 'Requirements',
                  text: 'Basic admission documents and previous school information help us place students appropriately.',
                },
                {
                  icon: <ClipboardCheck className="h-6 w-6" />,
                  title: 'Placement Review',
                  text: 'We guide families through the best class fit and any needed assessment steps.',
                },
                {
                  icon: <TimerReset className="h-6 w-6" />,
                  title: 'Fast Follow-Up',
                  text: 'Our team responds quickly so parents can move from enquiry to enrollment without confusion.',
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="premium-card h-full rounded-[1.75rem] p-6">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-900 text-gold-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-primary-900">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="gradient-panel h-full rounded-[2rem] p-8 text-white shadow-[0_28px_80px_rgba(2,6,23,0.24)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">Admission Process</p>
                <div className="mt-8 space-y-5">
                  {admissionSteps.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/14 text-sm font-bold text-gold-300">
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-7 text-white/76">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="premium-card h-full rounded-[2rem] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-900">Admission Requirements</p>
                <div className="mt-8 space-y-4">
                  {requirements.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-primary-50 px-4 py-4">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-800" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="application" className="pb-20 md:pb-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Application Form</p>
              <h2 className="section-title">Start your application today.</h2>
            </Reveal>
            <Reveal className="mt-10">
              <div className="premium-card rounded-[2rem] p-6 md:p-8">
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
