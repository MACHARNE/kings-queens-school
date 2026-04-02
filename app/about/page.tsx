import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const childBenefits = [
  'Live classroom teaching',
  'Recorded lessons for revision',
  'Continuous assessment & feedback',
  'Personalized learning pace',
  'Exam-focused preparation',
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">About Us</h1>
              <p className="hero-page-subtitle">
                Kings and Queens School is a forward-thinking institution designed to prepare students for academic excellence, global competitiveness, and leadership.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-primary-100">
                  <Image src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL.jpg" alt="Kings and Queens School" fill className="object-cover" />
                </div>
              </Reveal>
              <Reveal>
                <p className="text-gray-600 mb-4 text-lg">
                  Located in the heart of Umuahia, we deliver a structured Nigerian curriculum enhanced with:
                </p>
                <ul className="mb-5 list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Digital learning tools</li>
                  <li>Continuous assessments</li>
                  <li>Global learning exposure</li>
                </ul>
                <p className="text-gray-600 text-lg">
                  We are building not just students---but future leaders, innovators, and problem solvers.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary-800">Our Vision</h3>
                  <p className="text-gray-600">
                    To become Abia State&apos;s leading digitally-enabled school, producing students who can compete globally while excelling locally.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary-800">Our Mission</h3>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    <li>Deliver high-quality Nigerian curriculum education</li>
                    <li>Integrate modern digital learning systems</li>
                    <li>Develop leadership, discipline, and critical thinking</li>
                    <li>Prepare students for WAEC, NECO, and global opportunities</li>
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-primary-100">
                  <Image src="/images/OUR LEARNING APPROACH.jpg" alt="Our learning approach" fill className="object-cover" />
                </div>
              </Reveal>
              <Reveal>
                <h2 className="text-3xl font-bold mb-6 text-primary-900">Our Learning Approach / Blended Learning Model</h2>
                <p className="text-gray-600 mb-4 text-lg">We combine traditional classroom teaching with modern e-learning inspired by:</p>
                <ul className="mb-6 list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>WAEC curriculum standards</li>
                  <li>Platforms like Gradely</li>
                  <li>Digital systems similar to FlexiSAF eLearning</li>
                </ul>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">What This Means for Your Child:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {childBenefits.map((benefit) => (
                    <div key={benefit} className="rounded-2xl bg-primary-50 border border-primary-100 px-4 py-3 text-gray-700">
                      {benefit}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <div className="rounded-3xl bg-primary-900 text-white p-8 h-full">
                  <h2 className="text-3xl font-bold mb-4">Leadership Message</h2>
                  <p className="text-white/85">
                    We are building not just students---but future leaders, innovators, and problem solvers.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-amber-50 border border-amber-200 p-8 h-full">
                  <h2 className="text-3xl font-bold mb-4 text-primary-900">Why Kings & Queens</h2>
                  <p className="text-gray-700">
                    A premium, digitally-enabled Nigerian school preparing students for both local and global success.
                  </p>
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
