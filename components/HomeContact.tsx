import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export default function HomeContact() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Reveal className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 p-8 text-white shadow-2xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Location + Contact</h2>
            <div className="space-y-5 text-white/85">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gold-400" />
                <p>
                  Kings and Queens School
                  <br />
                  88 Uwalaka Street
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
                <p>kingsandqueens_schools@yahoo.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <p>nnaukwu_kaluo@yahoo.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <p>info@kings-queens-school.com</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-gold text-center">
                Book a Visit
              </Link>
              <Link href="/admissions/apply-now" className="btn-secondary text-center">
                Enroll Today
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
            <div className="bg-gray-100 h-full min-h-[320px] flex items-center justify-center">
              <p className="max-w-sm px-6 text-center text-gray-500">Google Map Embed</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
