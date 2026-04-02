'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroSlides = [
  {
    image: '/images/HOMEPAGE HERO SECTION1.jpg',
    alt: 'Kings and Queens School learning environment',
  },
  {
    image: '/images/HOMEPAGE HERO SECTION2.jpg',
    alt: 'Kings and Queens School students in class',
  },
  {
    image: '/images/HOMEPAGE HERO SECTION3.jpg',
    alt: 'Kings and Queens School students and school culture',
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
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/92 via-primary-900/70 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.18),transparent_30%)]" />

      <div className="relative z-10 container-custom min-h-screen flex items-center pt-28 pb-14">
        <div className="w-full">
          <div className="max-w-4xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.image}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Raising Future Kings & Queens Through Excellence, Innovation & Character
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/88">
                  At Kings and Queens School, we combine the strength of the Nigerian curriculum with modern digital learning systems inspired by global platforms and leading online schools.
                </p>
                <div className="mb-8 space-y-2 text-white/90">
                  <p>Primary & Secondary Education (Nigerian Curriculum)</p>
                  <p>Blended Learning (Physical + Digital)</p>
                  <p>Globally Competitive, Locally Grounded</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/admissions" className="btn-gold text-center">
                Enroll Today
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Book a School Tour
              </Link>
            </motion.div>
          </div>
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
