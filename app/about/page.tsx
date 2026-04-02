import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">A New Standard of Education in Umuahia</h1>
              <p className="text-xl max-w-3xl mx-auto text-white/85">
                Kings and Queens School is a forward-thinking institution designed to prepare students for academic excellence, global competitiveness, and leadership.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center max-w-6xl mx-auto">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-primary-100">
                  <Image
                    src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL.jpg"
                    alt="Kings and Queens School environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal>
                <h2 className="text-3xl font-bold mb-6 text-primary-900">Our Story</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  Kings and Queens School is a school registered in Nigeria with the Corporate Affairs Commission in the year 2000. Since then it has been operating in the education industry under the registered business name as Kings and Queens Private School.
                </p>
                <p className="text-gray-600 mb-4 text-lg">
                  It was approved by the Ministry of Education as Rona Kings & Queens Private School in 2008. Kings and Queens Private School approach is to ensure that the school strives to reach the status of a major player in the education service industry in Nigeria with commitments in setting standards and to promote an excellent educational base for pupils and students.
                </p>
                <p className="text-gray-600 text-lg">
                  We are building not just students-but future leaders, innovators, and problem solvers.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary-800">Our Vision</h3>
                  <p className="text-gray-600">
                    To become Abia State&apos;s leading digitally-enabled school, producing students who can compete globally while excelling locally.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary-100 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary-800">Our Mission</h3>
                  <ul className="text-gray-600 space-y-2 list-disc list-inside">
                    <li>Deliver high-quality Nigerian curriculum education</li>
                    <li>Integrate modern digital learning systems</li>
                    <li>Develop leadership, discipline, and critical thinking</li>
                    <li>Prepare students for WAEC, NECO, and global opportunities</li>
                  </ul>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <Stagger className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <StaggerItem>
                <div className="rounded-3xl bg-primary-900 text-white p-8 h-full">
                  <p className="uppercase tracking-[0.2em] text-gold-400 text-sm mb-4">Leadership Message</p>
                  <h2 className="text-3xl font-bold mb-4">Leadership Message</h2>
                  <p className="text-white/85">
                    We are building not just students-but future leaders, innovators, and problem solvers.
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-3xl bg-amber-50 border border-amber-200 p-8 h-full">
                  <p className="uppercase tracking-[0.2em] text-gold-600 text-sm mb-4">Why Kings & Queens</p>
                  <h2 className="text-3xl font-bold mb-4 text-primary-900">Where Excellence Meets Royalty</h2>
                  <p className="text-gray-700">
                    Kings and Queens School is a forward-thinking institution designed to prepare students for academic excellence, global competitiveness, and leadership.
                  </p>
                  <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL2.jpg"
                      alt="Why choose Kings and Queens School"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
