import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const programs = [
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: 'Primary School',
    description: 'We build strong foundations in Mathematics, English Language, Basic Science & Technology, Civic Education, and Creative Arts.',
    image: '/images/PRIMARY SCHOOL2.jpg',
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'Secondary School',
    description: 'Our secondary programme prepares students for WAEC, NECO, and University admission.',
    image: '/images/SECONDARY SCHOOL2.jpg',
  },
];

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Programmes Preview</h2>
        </Reveal>

        <Stagger className="grid lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <div className="overflow-hidden rounded-[2rem] border border-primary-100 bg-white shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image src={program.image} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 text-gold-400 shadow-[0_18px_36px_rgba(30,58,138,0.35)]">
                    {program.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary-900">{program.title}</h3>
                  <p className="mb-6 text-gray-600">{program.description}</p>
                  <Link href="/academics" className="inline-flex items-center font-semibold text-primary-800 hover:text-primary-900">
                    Explore Academics
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
