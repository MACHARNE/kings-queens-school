import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gold-500 to-gold-600">
      <Reveal className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Give Your Child the Royal Advantage 👑
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          At Kings and Queens School, we don&apos;t just teach---we transform lives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions/apply-now" className="bg-primary-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors">
            Limited Admission Slots Available — Enroll Today
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
