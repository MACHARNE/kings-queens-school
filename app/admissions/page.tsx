import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ClipboardCheck, FileText, School } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export default function Admissions() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/85">
                Begin Your Child&apos;s Journey to Excellence
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Reveal className="max-w-5xl mx-auto mb-10">
              <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl border border-primary-100">
                <Image
                  src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg"
                  alt="Admissions and school environment"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <StaggerItem>
                <div className="bg-gray-50 border border-primary-100 rounded-2xl p-6 h-full">
                  <School className="w-10 h-10 text-primary-800 mb-4" />
                  <h2 className="text-xl font-bold mb-3 text-primary-900">Who Can Apply</h2>
                  <p className="text-gray-600">Who can apply</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-gray-50 border border-primary-100 rounded-2xl p-6 h-full">
                  <FileText className="w-10 h-10 text-primary-800 mb-4" />
                  <h2 className="text-xl font-bold mb-3 text-primary-900">Requirements</h2>
                  <p className="text-gray-600">Requirements</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-gray-50 border border-primary-100 rounded-2xl p-6 h-full">
                  <ClipboardCheck className="w-10 h-10 text-primary-800 mb-4" />
                  <h2 className="text-xl font-bold mb-3 text-primary-900">Entrance Process</h2>
                  <p className="text-gray-600">Admission steps</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-gray-50 border border-primary-100 rounded-2xl p-6 h-full">
                  <CalendarDays className="w-10 h-10 text-primary-800 mb-4" />
                  <h2 className="text-xl font-bold mb-3 text-primary-900">School Calendar</h2>
                  <p className="text-gray-600">School calendar</p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Reveal className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Admission Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Submit Application</h3>
                    <p className="text-gray-600">Fill out the admission form with your child&apos;s details</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Entrance Assessment</h3>
                    <p className="text-gray-600">Your child will take a placement test</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Interview</h3>
                    <p className="text-gray-600">Parent and child interview with school administration</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary-800 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-lg">Enrollment</h3>
                    <p className="text-gray-600">Complete registration and secure your child&apos;s placement</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="max-w-5xl mx-auto mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/admissions/apply-now" className="bg-white border border-primary-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Apply Now</h3>
                  <p className="text-gray-600">Start Application</p>
                </Link>
                <Link href="/admissions/fees-payment" className="bg-white border border-primary-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Fees & Payment</h3>
                  <p className="text-gray-600">Fees & Payment</p>
                </Link>
                <Link href="/admissions/entrance-process" className="bg-white border border-primary-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Entrance Process</h3>
                  <p className="text-gray-600">Entrance Process</p>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title">Start Your Application</h2>
            <LeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
