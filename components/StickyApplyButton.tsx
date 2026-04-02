'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function StickyApplyButton() {
  return (
    <Link
      href="/admissions/apply-now"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 font-semibold text-white shadow-2xl ring-1 ring-gold-400/50 transition-all duration-300 hover:-translate-y-1 hover:bg-gold-600"
    >
      <Sparkles className="h-4 w-4" />
      Apply Now
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
