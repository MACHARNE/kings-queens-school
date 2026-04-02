'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const testimonials = [
  {
    name: 'Mrs. Chioma Okonkwo',
    child: 'Primary 4',
    text: 'Kings and Queens School has transformed my daughter\'s confidence and academic performance. The digital learning tools keep her engaged and the teachers are truly dedicated.',
    rating: 5
  },
  {
    name: 'Mr. Emmanuel Okafor',
    child: 'SS2',
    text: 'The blended learning approach is excellent. My son can review recorded lessons at home and the parent tracking system keeps me informed. Highly recommended!',
    rating: 5
  },
  {
    name: 'Mrs. Grace Nwosu',
    child: 'JSS1',
    text: 'The discipline and moral values instilled in students are impressive. My child has grown academically and personally since joining Kings and Queens.',
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

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
        
        <Reveal className="relative max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-xl md:text-2xl mb-6 italic">"{testimonials[current].text}"</p>
            <p className="font-semibold text-lg">{testimonials[current].name}</p>
            <p className="text-gray-300">Parent of {testimonials[current].child}</p>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
