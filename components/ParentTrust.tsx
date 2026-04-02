import Link from 'next/link';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export default function ParentTrust() {
  return (
    <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 md:py-24">
      <Reveal className="container-custom">
        <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 p-8 md:p-12 text-white">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/20 text-gold-400 shadow-[0_18px_40px_rgba(245,158,11,0.25)]">
              <Quote className="h-7 w-7" />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">For Parents</p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl leading-tight">For Parents</h2>
            <p className="mb-6 text-2xl md:text-3xl font-semibold leading-snug text-white">
              &quot;A school that builds both character and excellence.&quot;
            </p>
            <div className="mb-8">
              <p className="mb-4 text-lg text-white/85">We understand that parents want:</p>
              <div className="space-y-3">
                {['Academic excellence', 'Moral discipline', 'Safety', 'Future opportunities'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 backdrop-blur-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold-400 shadow-[0_0_18px_rgba(251,191,36,0.7)]" />
                    <p className="text-white">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-lg font-medium text-gold-300">That&apos;s exactly what we deliver.</p>
            </div>
            <Link href="/contact" className="btn-gold inline-block">
              Book a Visit
            </Link>
          </div>
          <div className="relative min-h-[360px] bg-primary-950">
            <Image
              src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg"
              alt="Parents and students at Kings and Queens School"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-transparent to-primary-900/10" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
