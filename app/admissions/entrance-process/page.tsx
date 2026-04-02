import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const steps = [
  { step: '1', title: 'Inquiry & Application', note: 'Parents submit an inquiry or application request through the school.' },
  { step: '2', title: 'Assessment', note: 'Students may complete an age-appropriate entrance assessment for placement.' },
  { step: '3', title: 'Interview & Review', note: 'The school meets with the family and reviews the student profile carefully.' },
  { step: '4', title: 'Enrollment', note: 'Successful applicants complete documentation and secure admission.' },
];

export default function EntranceProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="bg-primary-900 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">A Simple, Guided Admission Process</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/85">
                Every step is designed to help families understand expectations and make informed decisions.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {steps.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="bg-white rounded-3xl shadow-lg border border-primary-100 p-8 h-full">
                    <div className="w-14 h-14 rounded-full bg-primary-900 text-white flex items-center justify-center text-xl font-bold mb-5">
                      {item.step}
                    </div>
                    <h2 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h2>
                    <p className="text-gray-600">{item.note}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
