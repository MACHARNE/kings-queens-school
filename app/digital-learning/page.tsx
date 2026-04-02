import Image from 'next/image';
import { BarChart, Headphones, Smartphone, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DigitalAdvantage from '@/components/DigitalAdvantage';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export default function DigitalLearning() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blended Learning Model: Physical + Digital</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/85">
                We combine traditional classroom teaching with modern e-learning inspired by WAEC curriculum standards, platforms like Gradely, and digital systems similar to FlexiSAF eLearning.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Reveal className="max-w-5xl mx-auto mb-10">
              <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl border border-primary-100">
                <Image
                  src="/images/OUR LEARNING APPROACH2.jpg"
                  alt="Digital learning approach"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <div className="text-center p-8 bg-gray-50 rounded-3xl border border-primary-100">
                  <Video className="w-12 h-12 text-primary-800 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Recorded Lessons</h3>
                  <p className="text-gray-600">Recorded lessons for revision</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-8 bg-gray-50 rounded-3xl border border-primary-100">
                  <BarChart className="w-12 h-12 text-primary-800 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                  <p className="text-gray-600">Continuous assessment & feedback</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-8 bg-gray-50 rounded-3xl border border-primary-100">
                  <Smartphone className="w-12 h-12 text-primary-800 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Parent Monitoring System</h3>
                  <p className="text-gray-600">Parent Monitoring System</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-8 bg-gray-50 rounded-3xl border border-primary-100">
                  <Headphones className="w-12 h-12 text-primary-800 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Personalized Learning Support</h3>
                  <p className="text-gray-600">Personalized learning pace</p>
                </div>
              </StaggerItem>
            </Stagger>

            <Reveal className="max-w-4xl mx-auto mt-12 rounded-3xl bg-primary-900 text-white p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-4">Why It Matters</h2>
              <p className="text-white/85 text-lg">
                What This Means for Your Child: Live classroom teaching, Recorded lessons for revision, Continuous assessment & feedback, Personalized learning pace, Exam-focused preparation.
              </p>
            </Reveal>
          </div>
        </section>

        <DigitalAdvantage />
      </main>
      <Footer />
    </>
  );
}
