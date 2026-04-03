import Image from 'next/image';
import { CheckCircle2, ClipboardCheck, Medal, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const exams = [
  {
    name: 'Junior WAEC',
    level: 'JSS 3',
    description: 'Basic Education Certificate Examination (BECE)',
  },
  {
    name: 'Senior WAEC',
    level: 'SS 3',
    description: 'West African Senior School Certificate Examination',
  },
  {
    name: 'GCE',
    level: 'SS 3',
    description: 'General Certificate of Education (Nov/Dec)',
  },
  {
    name: 'NECO',
    level: 'SS 3',
    description: 'National Examination Council',
  },
  {
    name: 'JAMB',
    level: 'SS 3',
    description: 'Joint Admissions and Matriculation Board (UTME)',
  },
];

const preparationApproach = [
  {
    title: 'Structured Revision Timetable',
    points: ['Weekly mock examinations', 'Past question practice', 'Time management training'],
  },
  {
    title: 'Expert Teachers',
    points: ['Experienced exam coaches', 'Targeted support classes', 'Individual learner attention'],
  },
  {
    title: 'Digital Resources',
    points: ['Online practice tests', 'Video solutions', 'Performance tracking and feedback'],
  },
  {
    title: 'Parent Involvement',
    points: ['Regular progress reports', 'Parent-teacher meetings', 'Home study support guidance'],
  },
];

const performanceStats = [
  { label: 'WAEC Excellence Rate', value: '100% pass rate' },
  { label: 'NECO Success Rate', value: '98% credit and above' },
  { label: 'JAMB Average Score', value: '250+' },
  { label: 'University Admission Rate', value: '95%' },
];

export default function ExaminationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 text-white">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">Examinations</h1>
              <p className="hero-page-subtitle">
                Kings and Queens School prepares students for all major Nigerian examinations with a proven track record of excellence.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Examinations Offered</h2>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-xl">
                <table className="min-w-full text-left">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Examination</th>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Level</th>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exams.map((exam, index) => (
                      <tr key={exam.name} className={index % 2 === 0 ? 'bg-white' : 'bg-primary-50/60'}>
                        <td className="px-6 py-4 font-semibold text-primary-900">{exam.name}</td>
                        <td className="px-6 py-4 text-gray-700">{exam.level}</td>
                        <td className="px-6 py-4 text-gray-700">{exam.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Our Exam Preparation Approach</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-2">
              {preparationApproach.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                    <h3 className="mb-4 text-xl font-bold text-primary-900">{item.title}</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
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

        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/seniorstudents-in iniform.jpg" alt="Senior students preparing for examinations" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mb-5 text-3xl font-bold text-primary-900 md:text-4xl">Past Performance</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {performanceStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-primary-100 bg-primary-50 p-4">
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="mt-1 text-lg font-bold text-primary-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Stagger className="grid gap-6 lg:grid-cols-3">
              <StaggerItem>
                <div className="h-full rounded-3xl bg-primary-900 p-7 text-white shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-gold-400">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Exam Registration Support</h3>
                  <p className="text-sm text-white/85">
                    We assist with registration procedures, document preparation, center allocation, and result checking.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <Medal className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary-900">Success Story</h3>
                  <p className="text-sm text-gray-700">
                    &quot;Kings and Queens School prepared me excellently for WAEC and JAMB. I scored 287 in JAMB and gained admission to study Medicine.&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">Former Student</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary-900">Parent Feedback</h3>
                  <p className="text-sm text-gray-700">
                    &quot;The exam preparation program gave my child confidence and the skills needed to excel.&quot;
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">Parent of SS3 Student</p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
