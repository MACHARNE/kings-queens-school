import Image from 'next/image';
import { BriefcaseBusiness, CheckCircle2, Globe, GraduationCap, Laptop, Layers3, MessageSquareMore, School, UsersRound } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const distinctionFeatures = [
  'Live virtual classes with Zoom/Teams integration',
  'Structured primary to secondary curriculum',
  'Assignments and assessments with auto-grading',
  'Performance dashboard and progress reports',
  'WAEC and NECO preparation with mock practice',
  'Mobile-friendly learning from any device',
];

const virtualSimsModules = [
  'Student Management: enrollment, records, and lifecycle data',
  'Result Processing: automated grading and report card generation',
  'Parent Communication: SMS and email notifications',
  'Class Management: schedules, subject allocation, and assignments',
];

const contentTypes = [
  { type: 'Video Lessons', description: 'Primary to secondary topic-based learning sessions' },
  { type: 'Downloadable Notes', description: 'PDF study materials and digital textbooks' },
  { type: 'Interactive Quizzes', description: 'Auto-graded checks for continuous practice' },
  { type: 'Mock Exams', description: 'WAEC and NECO aligned timed practice tests' },
  { type: 'Skill-Based Modules', description: '21st-century skill development tracks' },
];

const internshipAreas = [
  'Digital skills: tech, marketing, AI basics, coding',
  'Leadership development: communication and personal growth',
  'Internship placement: structured real-world experience',
  'Career guidance: mentorship and career planning',
];

const targetAudience = [
  {
    title: 'K-12 Schools',
    points: [
      'VirtualSIMS integration',
      'eLearning platform deployment',
      'Teacher training and onboarding',
      'Digital curriculum support',
    ],
  },
  {
    title: 'Educators & Tutors',
    points: [
      'Create and host courses',
      'Manage students digitally',
      'Access structured curriculum',
      'Expand reach beyond location',
    ],
  },
  {
    title: 'Students & Parents',
    points: [
      'Flexible learning schedule',
      'Exam-focused preparation',
      'Personalized learning paths',
      'Access to digital resources anywhere',
    ],
  },
];

const gettingStarted = [
  {
    title: 'For Schools',
    steps: ['Schedule a VirtualSIMS demo', 'Customize platform configuration', 'Teacher training and onboarding', 'Go live in 2 to 4 weeks'],
  },
  {
    title: 'For Teachers',
    steps: ['Register as an online tutor', 'Create your course or join our platform', 'Start teaching and earning online'],
  },
  {
    title: 'For Students/Parents',
    steps: ['Enroll in Kings and Queens Online School', 'Receive login credentials', 'Start learning from anywhere'],
  },
];

export default function OnlineSchoolPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 text-white">
          <div className="absolute -left-14 top-10 h-44 w-44 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-primary-400/20 blur-3xl" />
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">Kings & Queens Online School</h1>
              <p className="hero-page-subtitle">
                A hybrid digital education platform delivering Nigerian curriculum excellence with global learning technology.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr]">
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/OUR LEARNING APPROACH2.jpg" alt="Digital learning class experience" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">Our eLearning Solutions</h2>
                <p className="text-gray-700">
                  Kings & Queens Online School combines live teaching, digital content, intelligent school administration, and career-focused programs in one coordinated ecosystem.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Stagger className="grid gap-6 lg:grid-cols-2">
              <StaggerItem>
                <div className="h-full rounded-[2rem] border border-primary-100 bg-white p-8 shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary-900">DISTINCTION(TM)</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gold-600">Complete Digital School Experience</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    {distinctionFeatures.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-[2rem] border border-primary-100 bg-white p-8 shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <Layers3 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary-900">VIRTUALSIMS(TM)</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-gold-600">Digital Administration Engine</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    {virtualSimsModules.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">e-Learning Content Library</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {contentTypes.map((item) => (
                <StaggerItem key={item.type}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-primary-50 p-6 shadow-md">
                    <p className="font-bold text-primary-900">{item.type}</p>
                    <p className="mt-2 text-sm text-gray-700">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-8 rounded-3xl border border-primary-100 bg-gray-50 p-6 text-sm text-gray-700">
              <p className="font-semibold text-primary-900">Subjects Covered</p>
              <p className="mt-2">
                Mathematics, English Language, Basic Science and Technology, Social Studies, Civic Education, Christian Religious Studies, Agricultural Science, Health Education, and all core Nigerian curriculum subjects.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/graduation-kids.jpg" alt="Students in leadership and career development sessions" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">Internships & Training</h2>
                <p className="mb-5 text-gray-700">
                  We bridge education with real-world readiness through practical programs that prepare learners for higher education and modern careers.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  {internshipAreas.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Target Audience</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-3">
              {targetAudience.map((group, index) => (
                <StaggerItem key={group.title}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                      {index === 0 && <School className="h-6 w-6" />}
                      {index === 1 && <UsersRound className="h-6 w-6" />}
                      {index === 2 && <Laptop className="h-6 w-6" />}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-primary-900">{group.title}</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {group.points.map((point) => (
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

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">How to Get Started</h2>
            </Reveal>
            <Stagger className="grid gap-6 lg:grid-cols-3">
              {gettingStarted.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                    <h3 className="mb-4 text-xl font-bold text-primary-900">{item.title}</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {item.steps.map((step) => (
                        <div key={step} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10 rounded-[2rem] bg-primary-900 p-8 text-white shadow-2xl">
              <h3 className="mb-4 text-2xl font-bold">Contact for Partnership</h3>
              <div className="grid gap-4 text-sm md:grid-cols-3">
                <div className="flex items-start gap-2">
                  <Globe className="mt-0.5 h-4 w-4 text-gold-400" />
                  <p>Head Office: 88 Uwalaka Street, Umuahia, Abia State, Nigeria</p>
                </div>
                <div className="flex items-start gap-2">
                  <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-gold-400" />
                  <p>Phone: +234 803 350 5742</p>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquareMore className="mt-0.5 h-4 w-4 text-gold-400" />
                  <p>Email: info@kings-queens-school.com</p>
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
