import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpenCheck, Brain, GraduationCap, Microscope, Speech } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const subjectCategories = [
  {
    category: 'Sciences',
    subjects: 'Mathematics, Elementary Science, Agricultural Science',
  },
  {
    category: 'Languages',
    subjects: 'English Language, French, Literature',
  },
  {
    category: 'Arts & Creative',
    subjects: 'Fine Arts, Music, Hand Writing',
  },
  {
    category: 'Humanities',
    subjects: 'Social Studies, Christian Religious Knowledge, Moral Instruction',
  },
  {
    category: 'Skills Development',
    subjects: 'Verbal Reasoning, Quantitative Reasoning',
  },
  {
    category: 'Health & Wellness',
    subjects: 'Health Education',
  },
];

const examinationTargets = ['Junior WAEC (BECE)', 'Senior WAEC (WASSCE)', 'GCE', 'NECO', 'JAMB (UTME)'];

const focusAreas = [
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Academic Excellence',
    text: 'High standards in teaching, assessment, and student performance.',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Critical Thinking',
    text: 'Students are trained to analyze, question, and solve real problems.',
  },
  {
    icon: <Speech className="h-6 w-6" />,
    title: 'Leadership Training',
    text: 'We build confidence, communication, and decision-making skills.',
  },
];

export default function Academics() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">Academics</h1>
              <p className="hero-page-subtitle">
                Our curriculum delivers strong foundations, exam success, and leadership-ready learners.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Stagger className="grid lg:grid-cols-2 gap-8 items-stretch">
              <StaggerItem>
                <div id="primary" className="rounded-3xl bg-gray-50 border border-primary-100 shadow-lg p-8 md:p-10 h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/PRIMARY SCHOOL1.jpg"
                      alt="Primary school section"
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="uppercase tracking-[0.2em] text-gold-600 text-sm mb-4">Primary School</p>
                  <h2 className="text-3xl font-bold text-primary-900 mb-4">Basic 1 - 6</h2>
                  <p className="text-gray-600 mb-6">
                    The primary section builds strong foundations in literacy, numeracy, social confidence, and discipline while preparing pupils for long-term academic success.
                  </p>
                  <div className="space-y-4 text-gray-700 text-sm md:text-base">
                    <div className="flex gap-3">
                      <BookOpenCheck className="w-5 h-5 text-primary-800 mt-1" />
                      <p>Core literacy and numeracy progression</p>
                    </div>
                    <div className="flex gap-3">
                      <GraduationCap className="w-5 h-5 text-primary-800 mt-1" />
                      <p>Character building and classroom discipline</p>
                    </div>
                    <div className="flex gap-3">
                      <Microscope className="w-5 h-5 text-primary-800 mt-1" />
                      <p>Age-appropriate science and practical learning</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div id="secondary" className="rounded-3xl bg-primary-900 text-white shadow-lg p-8 md:p-10 h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/SECONDARY SCHOOL1.jpg"
                      alt="Secondary school section"
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="uppercase tracking-[0.2em] text-gold-400 text-sm mb-4">Secondary School</p>
                  <h2 className="text-3xl font-bold mb-4">JSS1 to SS3</h2>
                  <p className="text-white/85 mb-6">
                    Our secondary program prepares students for major Nigerian examinations and equips them with analytical, communication, and leadership skills.
                  </p>
                  <div className="space-y-4 text-white/90 text-sm md:text-base">
                    <div className="flex gap-3">
                      <Microscope className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Science, arts, and humanities streams</p>
                    </div>
                    <div className="flex gap-3">
                      <GraduationCap className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Structured exam preparation and mock drills</p>
                    </div>
                    <div className="flex gap-3">
                      <Brain className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Critical thinking and problem-solving growth</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal className="text-center">
              <h2 className="section-title text-primary-900">Subjects Offered</h2>
              <p className="mx-auto mb-10 max-w-3xl text-gray-600">
                Our comprehensive curriculum covers all core subjects required for Nigerian educational standards.
              </p>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-xl">
                <table className="min-w-full text-left">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Category</th>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectCategories.map((row, index) => (
                      <tr key={row.category} className={index % 2 === 0 ? 'bg-white' : 'bg-primary-50/60'}>
                        <td className="px-6 py-4 font-semibold text-primary-900">{row.category}</td>
                        <td className="px-6 py-4 text-gray-700">{row.subjects}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] items-center">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/OUR LEARNING APPROACH.jpg" alt="Students in class at Kings and Queens School" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mb-5 text-3xl font-bold text-primary-900 md:text-4xl">Examinations Taken</h2>
                <p className="mb-5 text-gray-600">
                  Students at Kings and Queens School are prepared for all major examinations that shape successful academic and career pathways.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {examinationTargets.map((exam) => (
                    <div key={exam} className="rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 font-medium text-primary-900">
                      {exam}
                    </div>
                  ))}
                </div>
                <Link href="/academics/examinations" className="btn-primary mt-7 inline-block">
                  View Full Examinations Guide
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Focus Areas</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-3">
              {focusAreas.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 text-gold-400">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-900">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12 text-center">
              <Link href="/admissions" className="btn-primary">Start Application</Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
