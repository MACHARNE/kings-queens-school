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
              <h1 className="hero-page-title mb-4">Contact Information</h1>
              <p className="hero-page-subtitle">
                Connect with Kings and Queens School for admissions, partnerships, online school access, and general inquiries.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <div className="rounded-[2rem] border border-primary-100 bg-gray-50 p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-6 text-primary-900">Send us a Message</h2>
                  <form className="space-y-4">
                    <input type="text" placeholder="Parent / Guardian Name" className="w-full rounded-xl border border-gray-300 p-3" />
                    <input type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-gray-300 p-3" />
                    <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-gray-300 p-3" />
                    <textarea placeholder="Your Message" rows={5} className="w-full rounded-xl border border-gray-300 p-3" />
                    <button className="btn-primary w-full">Submit Inquiry</button>
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
