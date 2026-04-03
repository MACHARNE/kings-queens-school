'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { useEffect, useEffectEvent, useState } from 'react';
import { Reveal } from '@/components/Reveal';

const heroPoints = ['Nigerian Curriculum', 'Digital Learning Systems', 'Global Teaching Standards'];

const heroImages = [
  '/images/new-hero1.jpg',
  '/images/new-hero2.jpg',
  '/images/new-hero3.jpg',
];

export default function HomeHero() {
  const [activeImage, setActiveImage] = useState(0);

  const rotateHero = useEffectEvent(() => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      rotateHero();
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImages[activeImage]}
            initial={{ opacity: 0, scale: 1.08, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.03, x: -28 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[activeImage]}
              alt="Students learning at Kings and Queens School"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,20,0.72),rgba(7,18,39,0.55)_35%,rgba(16,39,80,0.68)_70%,rgba(15,23,42,0.84)_100%)]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-slate-950/35 to-transparent" />
      </div>

      <div className="container-custom relative flex min-h-screen items-center justify-center pt-28 pb-20">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 backdrop-blur">
            Royal Learning Experience
          </p>
          <h1 className="hero-page-title">Raising Future Kings &amp; Queens Through Excellence &amp; Innovation</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
            A modern, digitally-enabled school combining the strength of traditional education with the flexibility of online learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {heroPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-gold-300" />
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-5 py-3 text-sm text-white/82 backdrop-blur">
            <MapPin className="h-4 w-4 text-gold-300" />
            85 Uwalaka Street, Umuahia
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/admissions" className="btn-gold">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact#visit" className="btn-secondary border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white">
              Book a School Tour
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeImage === index ? 'w-14 bg-gold-300' : 'w-7 bg-white/35'
                }`}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
