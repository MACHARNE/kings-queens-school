'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useEffectEvent, useState } from 'react';

type Slide = {
  image: string;
  title: string;
  description: string;
};

interface AppFeatureSliderProps {
  slides: Slide[];
}

export default function AppFeatureSlider({ slides }: AppFeatureSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const advanceSlide = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
      <div className="space-y-4">
        <p className="eyebrow">Feature Preview</p>
        <h3 className="font-display text-3xl font-semibold text-primary-900 md:text-4xl">
          What You&apos;ll Experience
        </h3>
        <p className="section-copy">
          Explore guided lessons, assessment flows, and progress insights designed to keep learning engaging and measurable.
        </p>

        <div className="space-y-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left transition duration-300 ${
                activeIndex === index
                  ? 'border-primary-900 bg-primary-900 text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)]'
                  : 'border-primary-100 bg-white text-slate-700 hover:border-primary-200 hover:-translate-y-0.5'
              }`}
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  activeIndex === index ? 'bg-white/15 text-gold-300' : 'bg-primary-50 text-primary-800'
                }`}
              >
                0{index + 1}
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.08em]">{slide.title}</span>
                <span className={`mt-1 block text-sm ${activeIndex === index ? 'text-white/75' : 'text-slate-500'}`}>
                  {slide.description}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur">
        <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">Live Preview</p>
            <h4 className="mt-2 text-2xl font-semibold">{activeSlide.title}</h4>
            <p className="mt-2 max-w-2xl text-sm text-white/78">{activeSlide.description}</p>
          </div>
        </div>

        <div className="relative mt-4 flex flex-wrap gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-16 bg-primary-900' : 'w-7 bg-primary-100'
              }`}
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
