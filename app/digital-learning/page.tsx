import Image from 'next/image';
import { BarChart3, BellRing, BookOpenCheck, CalendarClock, CheckCircle2, ClipboardList, LineChart, MonitorSmartphone, Shield, UserRoundCog, UsersRound } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const roleAccess = [
  {
    icon: <UserRoundCog className="h-6 w-6" />,
    title: 'Admin (School Management)',
    items: [
      'Full system oversight',
      'Student registration and enrollment tracking',
      'Centralized student database and academic history',
      'Staff management and fee structure configuration',
      'System analytics and reporting',
    ],
  },
  {
    icon: <BookOpenCheck className="h-6 w-6" />,
    title: 'Teacher Portal',
    items: [
      'Upload scores and assessments',
      'Automatic grading and report card generation',
      'Performance analytics and class roster management',
      'Assignment creation and grading workflows',
      'Attendance tracking and parent communication',
    ],
  },
  {
    icon: <UsersRound className="h-6 w-6" />,
    title: 'Parent Portal',
    items: [
      'Real-time student progress tracking',
      'Attendance and academic alerts',
      'Fee payment history and reminders',
      'Downloadable report cards',
      'Direct communication with teachers and event updates',
    ],
  },
];

const modules = [
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: 'Student Management System',
    purpose: 'Centralized student records and lifecycle tracking.',
    features: [
      'Student registration and enrollment tracking',
      'Profiles, academic history, and attendance records',
      'Medical information and emergency contacts',
    ],
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Result Processing System',
    purpose: 'Automated scoring, grading, and reporting.',
    features: [
      'Teacher score upload and auto grading (A-F scale)',
      'Report cards, transcripts, and subject breakdown',
      'Term and session performance comparisons',
    ],
  },
  {
    icon: <BellRing className="h-6 w-6" />,
    title: 'Parent Communication System',
    purpose: 'Reliable real-time updates for guardians and families.',
    features: [
      'SMS attendance alerts and email notifications',
      'Academic progress updates and fee reminders',
      'Event notifications and emergency broadcasts',
    ],
  },
  {
    icon: <CalendarClock className="h-6 w-6" />,
    title: 'Class Management System',
    purpose: 'Organized classes, subjects, and schedules.',
    features: [
      'Class creation (Primary 1-6, JSS 1-3, SS 1-3)',
      'Subject allocation and teacher assignments',
      'Timetable scheduling, classroom and period management',
    ],
  },
];

const benefits = [
  {
    stakeholder: 'School Management',
    value: 'Centralized data, automated operations, and clearer decision support.',
  },
  {
    stakeholder: 'Teachers',
    value: 'Faster grade entry, less manual work, and stronger performance insights.',
  },
  {
    stakeholder: 'Parents',
    value: 'Real-time visibility, better communication, and improved trust.',
  },
  {
    stakeholder: 'Students',
    value: 'Transparent progress tracking, structured support, and accountability.',
  },
];

export default function DigitalLearning() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">School Management System (SMS)</h1>
              <p className="hero-page-subtitle">
                VirtualSIMS(TM) is the digital administrative backbone of Kings and Queens School.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/Core eLearning Solutions & Features dictation.jpg" alt="VirtualSIMS dashboard and digital operations" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="rounded-[2rem] border border-primary-100 bg-gray-50 p-8 shadow-xl">
                  <p className="mb-3 text-sm uppercase tracking-[0.16em] text-gold-600">VirtualSIMS(TM)</p>
                  <h2 className="mb-4 text-3xl font-bold text-primary-900">System Overview</h2>
                  <p className="text-gray-700">
                    Virtual School Information Management System provides a seamless digital experience for administrators, teachers, and parents. It simplifies school operations while improving transparency, data quality, and reporting speed.
                  </p>
                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-primary-100 bg-white px-4 py-3 text-primary-900">
                    <Shield className="h-5 w-5 text-primary-700" />
                    <p className="text-sm font-medium">Secure role-based access with structured data workflows.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">User Roles & Access</h2>
            </Reveal>
            <Stagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {roleAccess.map((role) => (
                <StaggerItem key={role.title}>
                  <div className="rounded-3xl bg-white border border-primary-100 p-7 shadow-lg h-full">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 text-gold-400 shadow-[0_18px_40px_rgba(30,58,138,0.28)]">
                      {role.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-primary-900">{role.title}</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      {role.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Core Modules</h2>
            </Reveal>
            <Stagger className="grid md:grid-cols-2 gap-6">
              {modules.map((module) => (
                <StaggerItem key={module.title}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-gradient-to-br from-white to-primary-50 p-7 shadow-md">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                      {module.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-900">{module.title}</h3>
                    <p className="mb-4 text-sm font-medium text-gray-600">{module.purpose}</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      {module.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Benefits for Stakeholders</h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {benefits.map((item, index) => (
                <Reveal key={item.stakeholder} delay={index * 0.06}>
                  <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-lg">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-gold-400">
                        {index % 2 === 0 ? <BarChart3 className="h-5 w-5" /> : <MonitorSmartphone className="h-5 w-5" />}
                      </div>
                      <h3 className="text-lg font-bold text-primary-900">{item.stakeholder}</h3>
                    </div>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
