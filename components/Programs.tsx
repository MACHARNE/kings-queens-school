import Link from 'next/link';
import { BookOpen, GraduationCap, Laptop } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const programs = [
  {
    icon: <GraduationCap className="w-12 h-12 text-primary-800" />,
    title: 'Primary School',
    description: 'Building strong foundations in literacy, numeracy, creativity, and confidence.',
    grades: 'Basic 1 - 6',
    link: '/academics',
  },
  {
    icon: <BookOpen className="w-12 h-12 text-primary-800" />,
    title: 'Secondary School',
    description: 'Comprehensive preparation for WAEC, NECO, and university admission.',
    grades: 'JSS1 - SS3',
    link: '/academics',
  },
  {
    icon: <Laptop className="w-12 h-12 text-primary-800" />,
    title: 'Digital Learning',
    description: 'Blended learning with recorded lessons, smart classrooms, and parent tracking.',
    grades: 'All Levels',
    link: '/digital-learning',
  },
];

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Our Academic Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive education designed to nurture excellence and prepare students for future success
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <StaggerItem
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-primary-600 text-sm mb-3 font-semibold">{program.grades}</p>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link
                href={program.link}
                className="text-primary-800 font-semibold hover:text-primary-900 inline-flex items-center gap-1"
              >
                Learn More
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
