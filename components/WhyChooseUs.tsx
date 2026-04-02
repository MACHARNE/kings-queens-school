import { CheckCircle, BookOpen, Globe, Users, Shield, Award } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const reasons = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Nigerian Curriculum + Global Exposure',
    description: 'Nigerian Curriculum + Global Exposure'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Structured Academic Excellence',
    description: 'Structured Academic Excellence'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Digital + Classroom Learning',
    description: 'Digital + Classroom Learning'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Experienced & Passionate Teachers',
    description: 'Experienced & Passionate Teachers'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safe, Disciplined Environment',
    description: 'Safe, Disciplined Environment'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'We are not just another school',
    description: 'we are a future-ready learning institution.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Why Choose Kings & Queens School?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We are not just another school, we are a future-ready learning institution.
          </p>
        </Reveal>
        
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <StaggerItem key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-white transition-colors">
              <div className="text-primary-800 mt-1">{reason.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
