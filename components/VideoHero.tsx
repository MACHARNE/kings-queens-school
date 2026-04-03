'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe2, GraduationCap, Laptop2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroSlides = [
  { image: '/images/HOMEPAGE HERO SECTION1.jpg', alt: 'Kings and Queens School learning environment' },
  { image: '/images/HOMEPAGE HERO SECTION2.jpg', alt: 'Kings and Queens School students in class' },
  { image: '/images/HOMEPAGE HERO SECTION3.jpg', alt: 'Kings and Queens School students and school culture' },
];

const badges = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    text: 'Primary & Secondary Education (Nigerian Curriculum)',
  },
  {
    icon: <Laptop2 className="h-5 w-5" />,
    text: 'Blended Learning (Physical + Digital)',
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    text: 'Globally Competitive, Locally Grounded',
  },
];

export default function VideoHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[index];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image src={activeSlide.image} alt={activeSlide.alt} fill priority className="object-cover object-center" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/92 via-primary-900/72 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_30%)]" />

      <div className="relative z-10 container-custom min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-5xl text-white">
          <motion.div
            key={activeSlide.image}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ textShadow: '0 2px 0 rgba(0,0,0,0.55), 0 10px 24px rgba(0,0,0,0.72)' }}
            >
              Raising Future{' '}
              <span className="text-gold-400">Kings</span> &{' '}
              <span className="text-primary-200">Queens</span> Through{' '}
              <span className="bg-gradient-to-r from-gold-400 via-white to-primary-200 bg-clip-text text-transparent">
                Excellence, Innovation & Character
              </span>
            </h1>
            <p
              className="text-lg md:text-2xl mb-10 max-w-3xl text-white/88"
              style={{ textShadow: '0 1px 0 rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.7)' }}
            >
              At Kings and Queens School, we combine the strength of the Nigerian curriculum with modern digital learning systems inspired by global platforms and leading online schools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85 }}
            className="mb-10 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              {badges.map((badge) => (
                <div
                  key={badge.text}
                  className="group flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-primary-950 shadow-[0_16px_30px_rgba(245,158,11,0.35)]">
                    {badge.icon}
                  </div>
                  <p className="font-medium">{badge.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/admissions/apply-now" className="btn-gold text-center">
              Enroll Today
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Book a School Tour
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              slideIndex === index ? 'w-10 bg-gold-400' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
