'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const testimonials = [
  {
    name: 'Mrs. Chioma Okonkwo',
    child: 'Primary 4',
    text: 'Kings and Queens School has transformed my daughter\'s confidence and academic performance. The digital learning tools keep her engaged and the teachers are truly dedicated.',
    rating: 5,
  },
  {
    name: 'Mr. Emmanuel Okafor',
    child: 'SS2',
    text: 'The blended learning approach is excellent. My son can review recorded lessons at home and the parent tracking system keeps me informed. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mrs. Grace Nwosu',
    child: 'JSS1',
    text: 'The discipline and moral values instilled in students are impressive. My child has grown academically and personally since joining Kings and Queens.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-primary-800 text-white">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title text-white">What Parents Say</h2>
        </Reveal>

        <Reveal className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 px-8 py-10 shadow-2xl backdrop-blur-md md:px-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-xl md:text-3xl mb-6 italic leading-relaxed">&quot;{testimonials[current].text}&quot;</p>
                <p className="font-semibold text-lg">{testimonials[current].name}</p>
                <p className="text-gray-300">Parent of {testimonials[current].child}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition md:left-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition md:right-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${index === current ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/50'}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
