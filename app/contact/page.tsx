import Image from 'next/image';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">We&apos;re Here to Answer Your Questions</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/85">
                Book a Visit | Enroll Now
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Reveal>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-3xl shadow-lg border border-primary-100">
                  <Image
                    src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg"
                    alt="Kings and Queens School campus"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-800 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">85 Uwalaka Street, Umuahia, Abia State, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-800 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+234 803 350 5742</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-800 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@kings-queens-school.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-800 mt-1" />
                    <div>
                      <p className="font-semibold">School Hours</p>
                      <p className="text-gray-600">Monday - Friday: 7:30 AM - 3:30 PM</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-4 bg-gray-50 border border-primary-100 rounded-3xl p-6 shadow-lg">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  ></textarea>
                  <button className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors">
                    Send Message
                  </button>
                </form>
              </Reveal>
            </div>

            <Reveal className="mt-12">
              <div className="rounded-3xl overflow-hidden border border-primary-100 shadow-lg">
                <div className="bg-gradient-to-r from-primary-900 to-primary-700 px-8 py-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
                  <p className="text-white/85">85 Uwalaka Street, Umuahia, Abia State, Nigeria</p>
                </div>
                <div className="bg-gray-100 h-80 flex items-center justify-center">
                  <p className="text-gray-500 text-center px-6">Google Map embed can be added here for precise location guidance.</p>
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
