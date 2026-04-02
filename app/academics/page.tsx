import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Briefcase, Calculator, Microscope, PenTool, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

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
                Primary and Secondary programs aligned with WAEC and NECO.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Stagger className="grid lg:grid-cols-2 gap-8">
              <StaggerItem>
                <div id="primary" className="rounded-3xl bg-gray-50 border border-primary-100 shadow-lg p-8 md:p-10 h-full">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/PRIMARY SCHOOL1.jpg"
                      alt="Primary school section"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="uppercase tracking-[0.2em] text-gold-600 text-sm mb-4">Primary School</p>
                  <h2 className="text-3xl font-bold text-primary-900 mb-4">Basic 1 - 6</h2>
                  <p className="text-gray-600 mb-6">
                    We build strong foundations in Mathematics, English Language, Basic Science & Technology, Civic Education, and Creative Arts.
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex gap-3">
                      <Calculator className="w-5 h-5 text-primary-800 mt-1" />
                      <p>Mathematics</p>
                    </div>
                    <div className="flex gap-3">
                      <BookOpen className="w-5 h-5 text-primary-800 mt-1" />
                      <p>English Language</p>
                    </div>
                    <div className="flex gap-3">
                      <Microscope className="w-5 h-5 text-primary-800 mt-1" />
                      <p>Basic Science & Technology</p>
                    </div>
                    <div className="flex gap-3">
                      <PenTool className="w-5 h-5 text-primary-800 mt-1" />
                      <p>Civic Education and Creative Arts</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div id="secondary" className="rounded-3xl bg-primary-900 text-white shadow-lg p-8 md:p-10 h-full">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/SECONDARY SCHOOL1.jpg"
                      alt="Secondary school section"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="uppercase tracking-[0.2em] text-gold-400 text-sm mb-4">Secondary School</p>
                  <h2 className="text-3xl font-bold mb-4">JSS1 to SS3</h2>
                  <p className="text-white/85 mb-6">
                    Our secondary school prepares students for WAEC, NECO, university admission, and career readiness.
                  </p>
                  <div className="space-y-4 text-white/90">
                    <div className="flex gap-3">
                      <Microscope className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Sciences (Physics, Chemistry, Biology)</p>
                    </div>
                    <div className="flex gap-3">
                      <Briefcase className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Commercial (Accounting, Commerce)</p>
                    </div>
                    <div className="flex gap-3">
                      <PenTool className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Arts & Humanities</p>
                    </div>
                    <div className="flex gap-3">
                      <Trophy className="w-5 h-5 text-gold-400 mt-1" />
                      <p>Focus: Academic excellence + career readiness</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-5">Our Learning Approach</h2>
              <p className="text-lg text-gray-600 mb-8">
                Blended Learning Model (Physical + Digital).
              </p>
            </Reveal>

            <Reveal className="max-w-5xl mx-auto mb-10">
              <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl border border-primary-100">
                <Image
                  src="/images/OUR LEARNING APPROACH.jpg"
                  alt="Our learning approach"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Stagger className="grid md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 h-full">
                  <h3 className="text-xl font-bold text-primary-900 mb-3">Curriculum Strength</h3>
                  <p className="text-gray-600">
                    WAEC curriculum standards
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 h-full">
                  <h3 className="text-xl font-bold text-primary-900 mb-3">Teaching Method</h3>
                  <p className="text-gray-600">
                    Live classroom teaching, Recorded lessons for revision, Continuous assessment & feedback
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 h-full">
                  <h3 className="text-xl font-bold text-primary-900 mb-3">Student Outcomes</h3>
                  <p className="text-gray-600">
                    Personalized learning pace, Exam-focused preparation
                  </p>
                </div>
              </StaggerItem>
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
