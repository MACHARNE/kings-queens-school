'use client';

import { useEffect, useMemo, useState } from 'react';
import { Clock3 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const targetDate = new Date('2026-09-15T00:00:00');

function getRemaining() {
  const now = new Date();
  const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { days, hours, minutes };
}

export default function CountdownBanner() {
  const [remaining, setRemaining] = useState(getRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getRemaining());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const items = useMemo(
    () => [
      { label: 'Days', value: remaining.days },
      { label: 'Hours', value: remaining.hours },
      { label: 'Minutes', value: remaining.minutes },
    ],
    [remaining]
  );

  return (
    <section className="bg-primary-950 py-6">
      <Reveal className="container-custom">
        <div className="rounded-[2rem] border border-gold-500/25 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 px-6 py-6 text-white shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gold-400">
                <Clock3 className="h-4 w-4" />
                Countdown for admission deadline
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">Limited Admission Slots Available</h2>
            </div>
            <div className="flex gap-3">
              {items.map((item) => (
                <div key={item.label} className="min-w-20 rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur-md">
                  <p className="text-2xl font-bold text-gold-400">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
