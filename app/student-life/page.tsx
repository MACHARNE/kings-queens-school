import Image from 'next/image';
import { CalendarDays, CheckCircle2, Flag, Music, Trophy, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const clubs = [
  { name: 'Girls Guides', focus: 'Leadership, community service, life skills' },
  { name: 'Scouts', focus: 'Outdoor skills, teamwork, citizenship' },
  { name: 'Debating Society', focus: 'Public speaking, critical thinking, argumentation' },
  { name: 'Quiz Club', focus: 'Academic competition, knowledge building' },
  { name: 'Nigerian Cultural Dances', focus: 'Cultural preservation, traditional arts' },
  { name: 'Choreography and Music Club', focus: 'Dance, music performance, creative expression' },
];

const participationBenefits = [
  'Develop leadership skills',
  'Build confidence and self-esteem',
  'Learn teamwork and collaboration',
  'Discover and nurture talents',
  'Cultural awareness and appreciation',
  'Create lasting friendships',
];

const annualEvents = [
  'Inter-House Sports Competition',
  'Cultural Day Celebration',
  'Academic Quiz Competition',
  'Debate Championship',
  'Music and Dance Festival',
  'Prize Giving Day',
];

export default function StudentLifePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 text-white">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">Student Life</h1>
              <p className="hero-page-subtitle">
                Beyond academics, we nurture talents and build character through clubs, activities, and school-wide events.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.03fr]">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/danceby-students-cologrp.jpg" alt="Students participating in cultural dance" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mb-4 text-3xl font-bold text-primary-900 md:text-4xl">Clubs & Activities</h2>
                <p className="text-gray-700">
                  Our extracurricular ecosystem helps students grow in confidence, leadership, culture, and creativity while building lifelong friendships and teamwork skills.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Our Clubs</h2>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-xl">
                <table className="min-w-full text-left">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Club</th>
                      <th className="px-6 py-4 text-sm uppercase tracking-[0.12em]">Focus Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clubs.map((club, index) => (
                      <tr key={club.name} className={index % 2 === 0 ? 'bg-white' : 'bg-primary-50/60'}>
                        <td className="px-6 py-4 font-semibold text-primary-900">{club.name}</td>
                        <td className="px-6 py-4 text-gray-700">{club.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Benefits of Participation</h2>
            </Reveal>
            <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {participationBenefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="h-full rounded-2xl border border-primary-100 bg-primary-50 p-5 shadow-md">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Annual Events</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {annualEvents.map((event, index) => (
                <StaggerItem key={event}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                      {index % 3 === 0 && <Trophy className="h-6 w-6" />}
                      {index % 3 === 1 && <CalendarDays className="h-6 w-6" />}
                      {index % 3 === 2 && <Flag className="h-6 w-6" />}
                    </div>
                    <p className="font-semibold text-primary-900">{event}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Stagger className="grid gap-6 md:grid-cols-3">
              <StaggerItem>
                <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary-900">Leadership</h3>
                  <p className="text-gray-700">Students gain discipline, initiative, and responsibility through organized club roles.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <Music className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary-900">Creativity</h3>
                  <p className="text-gray-700">Music, dance, and performance pathways help students discover and express their talents.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="h-full rounded-3xl border border-primary-100 bg-white p-7 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-gold-400">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary-900">Confidence</h3>
                  <p className="text-gray-700">Competition and teamwork culture empower students to speak up, perform, and succeed.</p>
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
