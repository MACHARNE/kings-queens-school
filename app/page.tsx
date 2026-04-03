import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  GraduationCap,
  MonitorSmartphone,
  ShieldCheck,
  UsersRound,
  XCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const advantageCards = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Academic Excellence',
    points: ['Nigerian curriculum from Primary to Secondary', 'WAEC and NECO preparation with focused support'],
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: 'Digital Learning Integration',
    points: ['Smart classrooms and recorded lesson revision', 'Performance tracking for students and families'],
  },
  {
    icon: <UsersRound className="h-6 w-6" />,
    title: 'Experienced Teachers',
    points: ['Certified educators with strong classroom practice', 'Student-focused teaching built for real understanding'],
  },
];

const programmeCards = [
  {
    title: 'Primary School',
    stage: 'Basic 1 - 6',
    image: '/images/PRIMARY SCHOOL CLASSES2.jpg',
    points: ['Strong foundation in literacy and numeracy', 'Creative and engaging learning', 'Continuous assessment'],
    href: '/academics#primary',
  },
  {
    title: 'Secondary School',
    stage: 'JSS1 - SS3',
    image: '/images/SECONDARY SCHOOL CLASSES.jpg',
    points: ['Science, Commercial, and Arts tracks', 'WAEC and NECO preparation', 'Career-focused learning'],
    href: '/academics#secondary',
  },
];

const digitalImages = [
  '/images/DIGITAL LEARNING EXPERIENCE1.jpg',
  '/images/DIGITAL LEARNING EXPERIENCE2.jpg',
  '/images/DIGITAL LEARNING EXPERIENCE3.jpg',
];

const digitalHighlights = [
  'Live interactive lessons',
  'Assignments and assessments',
  'Student performance dashboard',
  'Parent updates and visibility',
];

const parentPoints = ['Academic excellence', 'Discipline and structure', 'Safety', 'Future success'];

const comparisonRows = [
  ['Digital Learning', 'yes', 'no'],
  ['Nigerian Curriculum', 'yes', 'yes'],
  ['Parent Monitoring', 'yes', 'no'],
  ['Structured Assessment', 'yes', 'limited'],
];

function ComparisonStatus({ value }: { value: string }) {
  if (value === 'yes') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
        Yes
      </span>
    );
  }

  if (value === 'no') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1.5 text-sm font-semibold text-rose-700">
        <XCircle className="h-4 w-4" />
        No
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
      <AlertTriangle className="h-4 w-4" />
      Limited
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />

        <section className="py-20 md:py-28">
          <div className="container-custom grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-[2rem] border border-primary-100 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
                <Image
                  src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL.jpg"
                  alt="Modern classroom learning environment"
                  width={1534}
                  height={794}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">Why Choose Kings & Queens</p>
              <h2 className="section-title">A next-generation school inspired by how students learn best.</h2>
              <p className="section-copy">
                We are building a modern learning environment where students engage actively, learn for real understanding, and can continue their progress beyond the classroom.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Students learn through interactive lessons, not passive teaching.',
                  'Classes are structured for understanding, not memorization.',
                  'Learning is accessible anytime and anywhere through digital support.',
                  'We combine live teaching, structured curriculum, and continuous assessment.',
                ].map((item) => (
                  <div key={item} className="premium-card flex items-start gap-3 rounded-2xl p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-28">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Our Core Advantage</p>
              <h2 className="section-title text-white">The royal difference families can feel from day one.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {advantageCards.map((card) => (
                <StaggerItem key={card.title}>
                  <div className="h-full rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-7 shadow-[0_30px_80px_rgba(2,6,23,0.28)] backdrop-blur">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/14 text-gold-300">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                    <div className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                      {card.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Our Programmes</p>
              <h2 className="section-title">Learning pathways designed for confident progression.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
              {programmeCards.map((programme, index) => (
                <StaggerItem key={programme.title}>
                  <div className={`overflow-hidden rounded-[2rem] ${index === 0 ? 'premium-card' : 'gradient-panel text-white'} p-5`}>
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem]">
                      <Image src={programme.image} alt={programme.title} fill className="object-cover transition duration-700 hover:scale-105" />
                    </div>
                    <div className="p-3 pt-6">
                      <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${index === 0 ? 'text-gold-600' : 'text-gold-300'}`}>{programme.stage}</p>
                      <h3 className="mt-2 text-3xl font-semibold">{programme.title}</h3>
                      <div className={`mt-5 space-y-3 text-sm leading-7 ${index === 0 ? 'text-slate-600' : 'text-white/75'}`}>
                        {programme.points.map((point) => (
                          <div key={point} className="flex items-start gap-3">
                            <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${index === 0 ? 'text-primary-800' : 'text-gold-300'}`} />
                            <p>{point}</p>
                          </div>
                        ))}
                      </div>
                      <Link href={programme.href} className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${index === 0 ? 'text-primary-900' : 'text-gold-300'}`}>
                        Explore {programme.title} Classes
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-8">
              <div className="relative overflow-hidden rounded-[2rem] border border-primary-100 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
                <Image
                  src="/images/OUR LEARNING APPROACH.jpg"
                  alt="Students actively participating in learning"
                  width={1950}
                  height={1197}
                  className="h-[240px] w-full object-cover md:h-[360px]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-50/70 py-20 md:py-28">
          <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="eyebrow">Digital Learning Experience</p>
              <h2 className="section-title">Classroom teaching and home revision now work together.</h2>
              <p className="section-copy">
                We combine modern systems with quality teaching so students can stay engaged in school and continue learning confidently after class.
              </p>

              <div className="mt-8 grid gap-4">
                {digitalHighlights.map((item) => (
                  <div key={item} className="premium-card flex items-center gap-3 rounded-2xl p-4">
                    <BarChart3 className="h-5 w-5 text-primary-800" />
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Stagger className="grid gap-4 md:grid-cols-3">
              {digitalImages.map((image, index) => (
                <StaggerItem key={image} className={index === 1 ? 'md:mt-10' : ''}>
                  <div className="premium-card h-full overflow-hidden rounded-[1.75rem] p-3">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                      <Image src={image} alt={`Digital learning experience ${index + 1}`} fill className="object-cover transition duration-700 hover:scale-105" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="grid items-center gap-10 rounded-[2.25rem] bg-slate-950 px-6 py-8 text-white shadow-[0_30px_90px_rgba(2,6,23,0.28)] md:px-10 md:py-10 lg:grid-cols-[1.04fr_0.96fr]">
              <Reveal direction="right">
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg"
                    alt="Kings and Queens learning environment for families"
                    width={624}
                    height={439}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="eyebrow text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">For Parents</p>
                <h2 className="section-title text-white">We understand what parents want most.</h2>
                <p className="text-base leading-8 text-white/72">
                  Kings & Queens gives families confidence through strong academics, meaningful structure, a safe environment, and a clear path toward future success.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {parentPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/8 bg-white/[0.05] px-4 py-4 text-sm font-semibold text-white/84">
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold-400/20 bg-gold-400/10 px-5 py-4 text-sm text-white/82">
                  <ShieldCheck className="h-5 w-5 text-gold-300" />
                  That&apos;s exactly what we deliver, every term and every day.
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">How We Compare</p>
              <h2 className="section-title">A stronger school experience than the typical model.</h2>
            </Reveal>

            <Reveal className="mt-10 overflow-hidden rounded-[2rem] border border-primary-100 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <table className="min-w-full text-left">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.18em]">Feature</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.18em]">Kings &amp; Queens</th>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.18em]">Typical Schools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, ours, others], index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-white' : 'bg-primary-50/40'}>
                      <td className="px-6 py-4 font-semibold text-slate-900">{feature}</td>
                      <td className="px-6 py-4 text-primary-900">
                        <ComparisonStatus value={ours} />
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        <ComparisonStatus value={others} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        <section className="-mt-12 bg-white pb-20 md:-mt-16 md:pb-28">
          <div className="container-custom">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.25rem] px-6 py-12 text-white shadow-[0_35px_110px_rgba(15,23,42,0.2)] md:px-12 md:py-16">
                <Image
                  src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL2.jpg"
                  alt="Happy students at Kings and Queens School"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,18,39,0.9),rgba(16,39,80,0.72),rgba(7,18,39,0.65))]" />

                <div className="relative max-w-3xl">
                  <p className="eyebrow text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Limited Admission Slots</p>
                  <h2 className="section-title text-white">Give Your Child the Royal Advantage</h2>
                  <p className="max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                    Premium teaching, digital learning support, and a disciplined school culture are now within reach. Apply today and schedule a visit.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href="/admissions" className="btn-gold">
                      Apply Today
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/contact#visit" className="btn-secondary">
                      Book a School Tour
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
