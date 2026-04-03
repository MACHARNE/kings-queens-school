import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpenCheck, CalendarClock, CheckCircle2, ClipboardList, LineChart, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const primarySubjects = ['Mathematics', 'English Language', 'Basic Science', 'Social Studies', 'Civic Education'];
const secondaryTracks = ['Science', 'Commercial', 'Arts'];
const supportItems = ['Assignments and grading', 'Teacher feedback', 'Performance tracking', 'Parent updates'];

export default function Academics() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20 text-white">
          <div className="absolute inset-0 gradient-panel" />
          <div className="grid-overlay absolute inset-0 opacity-30" />
          <div className="container-custom relative text-center">
            <Reveal>
              <h1 className="hero-page-title">Explore Our Classes - Kings &amp; Queens School</h1>
              <p className="hero-page-subtitle mt-5">
                Structured learning, interactive teaching, and continuous performance tracking for every stage of your child&apos;s journey.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="eyebrow justify-center">Class Experience</p>
              <h2 className="section-title">Modern classes designed for active learning and steady progress.</h2>
              <p className="section-copy mx-auto">
                At Kings & Queens School, our classes reflect the best parts of modern online school models while preserving the discipline and personal care of a premium physical school.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="primary" className="bg-primary-50/70 py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    '/images/PRIMARY SCHOOL CLASSES1.jpg',
                    '/images/PRIMARY SCHOOL CLASSES2.jpg',
                    '/images/PRIMARY SCHOOL CLASSES3.jpg',
                  ].map((image, index) => (
                    <div key={image} className={`premium-card overflow-hidden rounded-[1.6rem] p-3 ${index === 1 ? 'md:mt-8' : ''}`}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                        <Image src={image} alt={`Primary class ${index + 1}`} fill className="object-cover transition duration-700 hover:scale-105" />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="eyebrow">Primary School Classes</p>
                <h2 className="section-title">Building strong foundations from Basic 1 to Basic 6.</h2>
                <div className="space-y-5 text-slate-600">
                  <p className="text-base leading-8">
                    Our primary school classes combine confidence-building routines, engaging teaching, and consistent assessment so pupils grow in both knowledge and character.
                  </p>
                  <div className="premium-card rounded-[1.75rem] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-900">Subjects</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {primarySubjects.map((subject) => (
                        <div key={subject} className="rounded-2xl bg-primary-50 px-4 py-3 text-sm font-medium text-primary-900">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 text-sm leading-7">
                    {[
                      'Interactive teaching that keeps children attentive and involved.',
                      'Continuous assessment for steady academic growth.',
                      'Homework and revision support that helps children retain lessons.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-800" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-950 px-6 py-5 text-white shadow-[0_24px_70px_rgba(2,6,23,0.26)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">Outcome</p>
                    <p className="mt-2 text-base leading-8 text-white/78">Strong academic foundation plus confidence, discipline, and readiness for higher-level learning.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="secondary" className="py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
              <Reveal>
                <p className="eyebrow">Secondary School Classes</p>
                <h2 className="section-title">Preparing students for exam success and future readiness.</h2>
                <div className="space-y-5 text-slate-600">
                  <p className="text-base leading-8">
                    From JSS1 to SS3, our secondary classes are structured around mastery, exam preparation, and the development of students who can think clearly and perform confidently.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {secondaryTracks.map((track) => (
                      <div key={track} className="premium-card rounded-2xl px-4 py-4 text-center text-sm font-semibold text-primary-900">
                        {track}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 text-sm leading-7">
                    {[
                      'WAEC and NECO preparation with exam techniques.',
                      'Career readiness and stronger decision-making.',
                      'High performance focus through structured assessment.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-800" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.75rem] gradient-panel px-6 py-5 text-white shadow-[0_24px_70px_rgba(2,6,23,0.24)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">Outcome</p>
                    <p className="mt-2 text-base leading-8 text-white/78">High performance in key examinations and clear preparation for university, careers, and leadership.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.08}>
                <div className="grid gap-4 md:grid-cols-2">
                  {['/images/SECONDARY SCHOOL CLASSES.jpg', '/images/SECONDARY SCHOOL CLASSES1.jpg'].map((image) => (
                    <div key={image} className="premium-card overflow-hidden rounded-[1.75rem] p-3">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                        <Image src={image} alt="Secondary school learning" fill className="object-cover transition duration-700 hover:scale-105" />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">How Our Classes Work</p>
              <h2 className="section-title text-white">A daily structure built for focus, interaction, and understanding.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <CalendarClock className="h-6 w-6" />,
                  title: 'Structured Timetable',
                  text: 'Each school day follows an organized schedule that balances subjects, learning depth, and student energy.',
                },
                {
                  icon: <BookOpenCheck className="h-6 w-6" />,
                  title: 'Multiple Subjects Per Day',
                  text: 'Students engage with a broad mix of subjects in focused sessions that prevent overload and improve retention.',
                },
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: 'Break Periods for Focus',
                  text: 'Deliberate breaks help students reset, stay attentive, and perform better throughout the day.',
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-7 backdrop-blur">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/14 text-gold-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Student Support System</p>
              <h2 className="section-title">Support that keeps students accountable and families informed.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {supportItems.map((item, index) => (
                <StaggerItem key={item}>
                  <div className="premium-card h-full rounded-[1.75rem] p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-900 text-gold-300">
                      {index === 0 && <ClipboardList className="h-6 w-6" />}
                      {index === 1 && <BookOpenCheck className="h-6 w-6" />}
                      {index === 2 && <LineChart className="h-6 w-6" />}
                      {index === 3 && <CalendarClock className="h-6 w-6" />}
                    </div>
                    <p className="mt-4 text-lg font-semibold text-primary-900">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container-custom">
            <Reveal>
              <div className="gradient-panel overflow-hidden rounded-[2.25rem] px-6 py-12 text-white shadow-[0_35px_90px_rgba(2,6,23,0.24)] md:px-12">
                <p className="eyebrow text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Enrollment</p>
                <h2 className="section-title text-white">Ready to enroll your child?</h2>
                <p className="max-w-2xl text-base leading-8 text-white/76">
                  Let&apos;s help your child join a school culture built for excellence, structure, and future success.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/admissions" className="btn-gold">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact#visit" className="btn-secondary">
                    Book a School Visit
                  </Link>
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
