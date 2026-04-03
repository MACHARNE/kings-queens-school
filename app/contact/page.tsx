import { Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20 text-white">
          <div className="absolute inset-0 gradient-panel" />
          <div className="grid-overlay absolute inset-0 opacity-25" />
          <div className="container-custom relative text-center">
            <Reveal>
              <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 backdrop-blur">
                Contact Page
              </p>
              <h1 className="hero-page-title">Contact Kings &amp; Queens School</h1>
              <p className="hero-page-subtitle mt-5">
                Let&apos;s help you with admissions, school visits, partnerships, and general inquiries.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section id="visit" className="py-20 md:py-24">
          <div className="container-custom">
            <Stagger className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: 'Address',
                  text: '85 Uwalaka Street, Umuahia, Abia State',
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: 'Email',
                  text: 'kingsandqueens_schools@yahoo.com',
                  extra: 'nnaukwu_kaluo@yahoo.com',
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: 'Phone',
                  text: '+234 803 350 5742',
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="premium-card h-full rounded-[1.9rem] p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-900 text-gold-300">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-900">{item.title}</p>
                    <p className="mt-4 text-base leading-8 text-slate-700">{item.text}</p>
                    {'extra' in item && item.extra ? <p className="mt-2 text-sm text-slate-500">{item.extra}</p> : null}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-primary-50/70 py-20 md:py-24">
          <div className="container-custom grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="premium-card rounded-[2rem] p-7 shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
                <p className="eyebrow">Send a Message</p>
                <h2 className="section-title">Book a visit or make an enquiry.</h2>
                <form className="mt-8 space-y-4">
                  <input type="text" placeholder="Parent / Guardian Name" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-primary-300" />
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-primary-300" />
                  <input type="email" placeholder="Email Address" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-primary-300" />
                  <textarea placeholder="Your Message" rows={6} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-primary-300" />
                  <button className="btn-primary w-full">Submit Inquiry</button>
                </form>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-primary-100 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
                <div className="border-b border-primary-100 px-6 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-900">Find Us</p>
                  <h2 className="font-display mt-2 text-4xl font-semibold text-primary-900">Visit our campus in Umuahia.</h2>
                </div>
                <iframe
                  title="Kings and Queens School map"
                  src="https://www.google.com/maps?q=85%20Uwalaka%20Street%2C%20Umuahia%2C%20Abia%20State&z=15&output=embed"
                  className="h-[480px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
