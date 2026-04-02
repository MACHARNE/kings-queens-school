import Image from 'next/image';
import { Award, Globe2, Laptop2 } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Structured classroom teaching',
    image: '/images/WHY CHOOSE KINGS AND QUEENS SCHOOL.jpg',
  },
  {
    icon: <Laptop2 className="w-6 h-6" />,
    title: 'Modern learning tools',
    image: '/images/WHY CHOOSE KINGS AND QUEENS SCHOOL2.jpg',
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: 'Competitive edge',
    image: '/images/WHY CHOOSE KINGS AND QUEENS SCHOOL3.jpg',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We combine structured classroom teaching with modern learning tools to give your child a competitive edge.
          </p>
        </Reveal>

        <Stagger className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="overflow-hidden rounded-[2rem] border border-primary-100 bg-white shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image src={reason.image} alt={reason.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-primary-950 shadow-[0_16px_30px_rgba(245,158,11,0.28)]">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-900">{reason.title}</h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
