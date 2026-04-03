import Link from 'next/link';
import { BarChart3, Bell, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const portalUrl = 'https://kqis-portal.vercel.app/';

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Progress Tracking',
    description: 'Monitor academic performance, continuous assessments, and development milestones with clarity.',
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'School Updates',
    description: 'Stay informed about calendars, notices, important dates, and school activities in one place.',
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: 'Digital Visibility',
    description: 'A future-ready space designed to support communication between home and school.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Trusted Access',
    description: 'A secure parent-facing environment aligned with the school\'s disciplined and professional standards.',
  },
];

export default function ParentPortalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
          <div className="container-custom">
            <Reveal className="max-w-3xl">
              <h1 className="hero-page-title mb-4">Greater Visibility. Stronger Parent Partnership.</h1>
              <p className="hero-page-subtitle !mx-0">
                The website brief calls for parent visibility as part of the digital learning advantage.
                This page introduces the portal experience and reinforces that promise.
              </p>
              <div className="hero-accent !mx-0" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-white rounded-3xl shadow-lg border border-primary-100 p-8 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-800 flex items-center justify-center mb-5">
                      {feature.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-3">{feature.title}</h2>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-12 rounded-3xl bg-primary-900 text-white p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-4">Portal Access and Support</h2>
              <p className="text-white/85 mb-6 max-w-3xl">
                Parents who would like to request access details, login support, or information about the school&apos;s digital systems can reach us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={portalUrl} target="_blank" rel="noreferrer" className="btn-gold text-center">Open Parent Portal</a>
                <Link href="/contact" className="btn-gold text-center">Contact the School</Link>
                <Link href="/admissions" className="btn-secondary text-center">Explore Admissions</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
