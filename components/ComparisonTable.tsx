import { Check, X } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export default function ComparisonTable() {
  const features = [
    { name: 'Physical Classroom', ours: true, others: false },
    { name: 'Nigerian Curriculum Focus', ours: true, others: 'Limited' },
    { name: 'Digital Learning Tools', ours: true, others: true },
    { name: 'Teacher Supervision', ours: true, others: false },
    { name: 'Social Development', ours: true, others: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <Reveal>
          <h2 className="section-title">Our Edge vs Other Platforms</h2>
        </Reveal>
        
        <Reveal className="overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary-800 text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Kings & Queens School</th>
                <th className="p-4 text-center">Typical Online Platforms</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.ours === true ? (
                      <Check className="inline text-green-600 w-5 h-5" />
                    ) : feature.ours === false ? (
                      <X className="inline text-red-600 w-5 h-5" />
                    ) : (
                      <span className="text-sm">{feature.ours}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.others === true ? (
                      <Check className="inline text-green-600 w-5 h-5" />
                    ) : feature.others === false ? (
                      <X className="inline text-red-600 w-5 h-5" />
                    ) : (
                      <span className="text-sm">{feature.others}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        
        <Reveal>
          <p className="text-center text-gray-600 mt-6">
            We combine the best of both worlds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
