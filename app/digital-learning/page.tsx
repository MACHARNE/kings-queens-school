import Image from 'next/image';
import { BarChart3, MonitorSmartphone, Rocket, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const platforms = [
  'Mind Smith Online School',
  '21K School',
  'Cambridge Home School Online',
];

const differentiators = [
  { icon: <Rocket className="h-7 w-7" />, text: 'Smart Classrooms' },
  { icon: <BarChart3 className="h-7 w-7" />, text: 'Performance Tracking & Analytics' },
  { icon: <MonitorSmartphone className="h-7 w-7" />, text: 'Parent Monitoring System' },
  { icon: <Video className="h-7 w-7" />, text: 'Recorded Lessons & Revision Library' },
  { icon: <Rocket className="h-7 w-7" />, text: 'Personalized Learning Support' },
];

const sections = [
  'Blended learning model',
  'Tools used',
  'Benefits to students',
  'Parent visibility',
];

export default function DigitalLearning() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Learning Advantage</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/85">
                We integrate features inspired by top platforms like:
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <Reveal>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/OUR LEARNING APPROACH2.jpg" alt="Digital learning" fill className="object-cover" />
                </div>
              </Reveal>
              <Reveal>
                <div className="space-y-4">
                  {platforms.map((platform) => (
                    <div key={platform} className="rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4 text-lg font-medium text-primary-900">
                      {platform}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title">What Makes Us Different</h2>
            </Reveal>
            <Stagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <StaggerItem key={item.text}>
                  <div className="rounded-3xl bg-white border border-primary-100 p-7 shadow-lg h-full">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 text-gold-400 shadow-[0_18px_40px_rgba(30,58,138,0.28)]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">{item.text}</h3>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title">Sections to Include</h2>
            </Reveal>
            <Stagger className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {sections.map((item) => (
                <StaggerItem key={item}>
                  <div className="rounded-3xl border border-primary-100 bg-gradient-to-br from-white to-primary-50 px-6 py-7 shadow-md text-center font-semibold text-primary-900">
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
