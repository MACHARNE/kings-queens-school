import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppFeatureSlider from '@/components/AppFeatureSlider';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const featureSlides = [
  {
    image: '/images/FEATURE PREVIEW (SLIDER SECTION) of app.jpg',
    title: 'Interactive Video Lessons',
    description: 'Step-by-step learning videos designed to hold attention and improve understanding.',
  },
  {
    image: '/images/FEATURE PREVIEW (SLIDER SECTION) of app2.png',
    title: 'Practice Questions & Quizzes',
    description: 'Give students instant practice with short checks, revision tasks, and quiz-driven confidence building.',
  },
  {
    image: '/images/FEATURE PREVIEW (SLIDER SECTION) of app3.jpg',
    title: 'Progress Tracking',
    description: 'Follow student growth through visible performance trends and revision activity.',
  },
];

const learnerLevels = [
  {
    title: 'Primary School',
    image: '/images/PRIMARY SCHOOL learning.jpg',
    description: 'Immersive lessons in Mathematics, English, and Science that build strong foundations early.',
  },
  {
    title: 'Junior Secondary',
    image: '/images/junior secondary.jpg',
    description: 'Simplified learning in core subjects that improves reasoning, confidence, and problem solving.',
  },
  {
    title: 'Senior Secondary',
    image: '/images/senior secondary learnig.png',
    description: 'Advanced preparation across Sciences, Arts, and Commercial subjects with WAEC and NECO focus.',
  },
];

const testimonials = [
  {
    initials: 'P',
    title: 'Parent, Umuahia',
    quote: 'This is the best learning system for students who want to excel academically.',
  },
  {
    initials: 'S',
    title: 'Student',
    quote: 'I improved my results significantly using this platform.',
  },
];

export default function OnlineSchoolPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative isolate overflow-hidden py-20">
          <div className="absolute inset-0 gradient-panel" />
          <div className="grid-overlay absolute inset-0 opacity-25" />
          <div className="container-custom relative">
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal className="max-w-3xl">
                <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 backdrop-blur">
                  App Download Landing Page
                </p>
                <h1 className="hero-page-title">Download the Kings &amp; Queens Learning App for Better School Grades</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                  Dive into a powerful learning experience with video lessons, quizzes, and exam preparation tools designed for Nigerian students.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="btn-gold">
                    <Play className="h-4 w-4" />
                    Download on Google Play
                  </Link>
                  <Link href="/admissions" className="btn-secondary border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white">
                    Get Started Now
                  </Link>
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/8 p-5 text-white/78 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">Flexible Plans</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    {['Monthly Plan', 'Annual Plan', 'Lifetime Access'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.08}>
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-x-10 top-12 h-52 rounded-full bg-gold-400/20 blur-3xl" />
                  <div className="premium-card relative overflow-hidden rounded-[2.2rem] p-4">
                    <div className="absolute right-5 top-5 rounded-full bg-primary-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                      Mobile First
                    </div>
                    <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-950">
                      <Image
                        src="/images/LANDING PAGE DOWNLOAD THE LEARNING APP.png"
                        alt="Kings and Queens learning app mobile preview"
                        width={717}
                        height={1076}
                        className="h-auto w-full"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow justify-center">Feature Preview</p>
              <h2 className="section-title">What you&apos;ll experience inside the app.</h2>
            </Reveal>
            <Reveal>
              <AppFeatureSlider slides={featureSlides} />
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-50/70 py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Sample Subjects</p>
              <h2 className="section-title">Explore hundreds of topics across key subjects.</h2>
            </Reveal>

            <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { subject: 'Basic Science', topic: 'Immunity' },
                { subject: 'Literature', topic: 'Metafiction' },
                { subject: 'Revision Hub', topic: 'Quizzes, notes, and practice tests' },
              ].map((card, index) => (
                <StaggerItem key={card.subject}>
                  <div className={`h-full rounded-[1.75rem] p-7 ${index === 1 ? 'gradient-panel text-white' : 'premium-card'}`}>
                    <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${index === 1 ? 'text-gold-300' : 'text-primary-900'}`}>{card.subject}</p>
                    <h3 className="mt-3 text-3xl font-semibold">{card.topic}</h3>
                    <p className={`mt-4 text-sm leading-7 ${index === 1 ? 'text-white/72' : 'text-slate-600'}`}>
                      Learners can move from understanding to practice with lessons tailored to Nigerian school expectations.
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <Reveal direction="right">
              <div className="premium-card overflow-hidden rounded-[2rem] p-4">
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/Core eLearning Solutions & Features dictation.jpg"
                    alt="Teacher using the digital teaching platform"
                    width={2250}
                    height={1382}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">For Teachers &amp; Schools</p>
              <h2 className="section-title">From preparation to teaching, we&apos;ve got educators covered.</h2>
              <p className="section-copy">
                Kings & Queens gives teachers and partner schools the tools they need to reduce repetitive workload and deliver stronger classroom outcomes.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'Pre-made lesson plans',
                  'Engaging video content',
                  'Assessment tools',
                  'Digital classroom support',
                ].map((item) => (
                  <div key={item} className="premium-card flex items-center gap-3 rounded-2xl p-4">
                    <CheckCircle2 className="h-5 w-5 text-primary-800" />
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] gradient-panel px-6 py-5 text-white shadow-[0_25px_70px_rgba(2,6,23,0.24)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">Teaching Impact</p>
                <p className="mt-2 text-base leading-8 text-white/78">Reduce teaching workload by over 50% while improving student engagement and lesson consistency.</p>
              </div>

              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-900">
                Partner with Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Everything Students Need</p>
              <h2 className="section-title text-white">No student is left behind.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
              {learnerLevels.map((level) => (
                <StaggerItem key={level.title}>
                  <div className="h-full overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.05] shadow-[0_30px_80px_rgba(2,6,23,0.28)]">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image src={level.image} alt={level.title} fill className="object-cover transition duration-700 hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">{level.title}</p>
                      <p className="mt-4 text-sm leading-7 text-white/72">{level.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-24">
          <Image
            src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL.jpg"
            alt="Students learning together"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,18,39,0.88),rgba(16,39,80,0.74),rgba(7,18,39,0.72))]" />

          <div className="container-custom relative text-white">
            <Reveal className="text-center">
              <p className="eyebrow justify-center text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Social Proof</p>
              <h2 className="section-title text-white">The learning platform everyone is talking about.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ['10,000+', 'Students Learning'],
                ['500,000+', 'Questions Attempted'],
                ['1M+', 'Lessons Watched'],
              ].map(([value, label]) => (
                <StaggerItem key={label}>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-7 text-center backdrop-blur">
                    <p className="font-display text-5xl font-semibold text-gold-300">{value}</p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/74">{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Testimonials</p>
              <h2 className="section-title">Loved by parents and students who care about results.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={testimonial.title}>
                  <div className={`h-full rounded-[2rem] p-7 ${index === 0 ? 'premium-card' : 'gradient-panel text-white'} shadow-[0_25px_70px_rgba(15,23,42,0.08)]`}>
                    <div className="flex items-center gap-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${index === 0 ? 'bg-primary-900 text-gold-300' : 'bg-white/10 text-gold-300'}`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${index === 0 ? 'text-primary-900' : 'text-gold-300'}`}>{testimonial.title}</p>
                        <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.2em] ${index === 0 ? 'text-gold-500' : 'text-gold-300'}`}>5-Star Review</p>
                      </div>
                    </div>
                    <p className={`mt-6 text-lg leading-8 ${index === 0 ? 'text-slate-700' : 'text-white/76'}`}>&quot;{testimonial.quote}&quot;</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container-custom">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.25rem] px-6 py-12 text-white shadow-[0_35px_100px_rgba(2,6,23,0.22)] md:px-12">
                <Image
                  src="/images/new-hero3.jpg"
                  alt="Referral programme background"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,18,39,0.88),rgba(16,39,80,0.78),rgba(7,18,39,0.7))]" />

                <div className="relative max-w-3xl">
                  <p className="eyebrow text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Referral Programme</p>
                  <h2 className="section-title text-white">Refer &amp; earn with Kings &amp; Queens Online Learning.</h2>
                  <p className="max-w-2xl text-base leading-8 text-white/76">
                    Refer students to Kings & Queens Online Learning and earn rewards of up to <strong className="text-gold-300">N5,000</strong> per referral.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href="/contact" className="btn-gold">
                      Join the Referral Programme
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/admissions" className="btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
