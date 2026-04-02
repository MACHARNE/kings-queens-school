import Link from 'next/link';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export default function ParentTrust() {
  return (
    <section className="bg-primary-950 py-16 md:py-24">
      <Reveal className="container-custom">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12 text-white">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-400 shadow-[0_18px_40px_rgba(245,158,11,0.25)]">
              <Quote className="h-7 w-7" />
            </div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">For Parents</h2>
            <p className="mb-6 text-2xl font-semibold leading-snug text-white/95">
              &quot;A school that builds both character and excellence.&quot;
            </p>
            <div className="mb-8 space-y-3 text-white/80">
              <p>We understand that parents want:</p>
              <p>Academic excellence</p>
              <p>Moral discipline</p>
              <p>Safety</p>
              <p>Future opportunities</p>
              <p>That&apos;s exactly what we deliver.</p>
            </div>
            <Link href="/contact" className="btn-gold inline-block">
              Book a Visit
            </Link>
          </div>
          <div className="relative min-h-[320px]">
            <Image
              src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg"
              alt="Parents and students at Kings and Queens School"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 to-transparent" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
