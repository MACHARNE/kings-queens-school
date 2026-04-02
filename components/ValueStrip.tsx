import { BarChart3, BookOpenCheck, GraduationCap, Users } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/Reveal';

const items = [
  { icon: <BookOpenCheck className="w-7 h-7" />, title: 'WAEC & NECO Excellence' },
  { icon: <BarChart3 className="w-7 h-7" />, title: 'Digital Learning System' },
  { icon: <Users className="w-7 h-7" />, title: 'Experienced Teachers' },
  { icon: <GraduationCap className="w-7 h-7" />, title: 'Personalized Learning' },
];

export default function ValueStrip() {
  return (
    <section className="relative bg-white py-8 md:py-10">
      <div className="container-custom">
        <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-3xl border border-primary-100 bg-gradient-to-br from-white to-primary-50 p-6 shadow-[0_18px_50px_rgba(37,99,235,0.08)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-gold-400 shadow-[0_18px_38px_rgba(30,58,138,0.28)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900">{item.title}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
