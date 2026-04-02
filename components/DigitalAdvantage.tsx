import { BarChart3, MonitorSmartphone, Tv, Video } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const advantages = [
  { icon: <Video className="w-8 h-8" />, title: 'Recorded lessons' },
  { icon: <Tv className="w-8 h-8" />, title: 'Smart classrooms' },
  { icon: <MonitorSmartphone className="w-8 h-8" />, title: 'Parent tracking' },
  { icon: <BarChart3 className="w-8 h-8" />, title: 'Exam preparation system' },
];

export default function DigitalAdvantage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Digital Advantage</h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <StaggerItem key={adv.title}>
              <div className="h-full rounded-3xl border border-primary-100 bg-gradient-to-br from-white to-primary-50 p-7 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-gold-400 shadow-[0_20px_40px_rgba(30,58,138,0.3)]">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900">{adv.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
