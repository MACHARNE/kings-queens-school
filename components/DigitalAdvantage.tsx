import { Monitor, BarChart, Phone, Video, Award, Users } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const advantages = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Smart Classrooms',
    description: 'Smart Classrooms'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Performance Tracking',
    description: 'Performance Tracking & Analytics'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Parent Monitoring',
    description: 'Parent Monitoring System'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Recorded Lessons',
    description: 'Recorded Lessons & Revision Library'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Personalized Learning Support',
    description: 'Personalized Learning Support'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Blended Learning Model',
    description: 'Physical + Digital'
  }
];

export default function DigitalAdvantage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Digital Learning Advantage</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We integrate features inspired by top platforms like Mind Smith Online School, 21K School, and Cambridge Home School Online.
          </p>
        </Reveal>
        
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <StaggerItem
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-800 group-hover:bg-primary-800 group-hover:text-white transition-colors duration-300">
                {adv.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
              <p className="text-gray-600">{adv.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
