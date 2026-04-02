import { BarChart3, BookOpenCheck, GraduationCap, Users } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/Reveal';

const items = [
  {
    icon: <BookOpenCheck className="w-7 h-7" />,
    title: 'WAEC & NECO Excellence',
    description: 'Strong academic preparation with clear focus on examination success.',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Digital Learning System',
    description: 'Modern digital support that strengthens classroom learning.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Experienced Teachers',
    description: 'Dedicated teachers committed to discipline, excellence, and growth.',
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Personalized Learning',
    description: 'Guided support that helps students grow with confidence.',
  },
];

export default function ValueStrip() {
  return (
    <section className="relative bg-white py-8 md:py-10">
      <div className="container-custom">
        <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-3xl border border-primary-100 bg-gradient-to-br from-white to-primary-50 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-900 text-gold-400">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary-900">{item.title}</h3>
                <p className="text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
