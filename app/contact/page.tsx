import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
              <Reveal>
                <div className="rounded-[2rem] bg-primary-950 p-8 text-white shadow-2xl">
                  <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-3xl">
                    <Image src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg" alt="Kings and Queens School campus" fill className="object-cover" />
                  </div>
                  <div className="space-y-5 text-white/85">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-gold-400" />
                      <p>
                        Kings and Queens School
                        <br />
                        85 Uwalaka Street
                        <br />
                        Umuahia, Abia State
                        <br />
                        Nigeria
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gold-400" />
                      <p>+234 803 350 5742</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gold-400" />
                      <p>[Insert Email]</p>
                    </div>
                    <p>[Insert Domain]</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-primary-100 bg-gray-50 p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-6 text-primary-900">Inquiry form</h2>
                  <form className="space-y-4">
                    <input type="text" placeholder="Parent Name" className="w-full rounded-xl border border-gray-300 p-3" />
                    <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-gray-300 p-3" />
                    <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 p-3" />
                    <textarea placeholder="Your Message" rows={5} className="w-full rounded-xl border border-gray-300 p-3" />
                    <button className="btn-primary w-full">Send Message</button>
                  </form>
                  <div className="mt-8 overflow-hidden rounded-3xl border border-primary-100">
                    <div className="bg-gray-100 h-72 flex items-center justify-center">
                      <p className="text-gray-500">Google Map Embed</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
