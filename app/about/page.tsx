import Image from 'next/image';
import { Award, CheckCircle2, Gem, HeartHandshake, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const leadershipTeam = [
  {
    name: 'Dr. Nnaukwu Kalu Okwuagwu',
    role: 'CEO',
    image: '/images/Meet Our Board and Management Team. Dr. Nnaukwu Kalu Okwuagwu CEO.jpg',
  },
  {
    name: 'Mrs. Rose Nnaukwu Kalu',
    role: 'Executive Director',
    image: '/images/Meet Our Board and Management Team. Mrs. Rose Nnaukwu Kalu  Executive Director.jpg',
  },
  {
    name: 'Mrs. Peace Chioma Ikpe',
    role: 'Finance Director',
    image: '/images/Meet Our Board and Management Team. Mrs. Peace Chioma Ikpe. Finance Director..jpg',
  },
  {
    name: 'Queen Chinyere Nnaukwu-Kalu Nkwocha',
    role: 'Director, Human Resources',
    image: '/images/Meet Our Board and Management Team. Queen Chinyere Nnaukwu-Kalu Nkwocha. Director Human Resources.jpg',
  },
  {
    name: 'Mrs. Favour Kelechi Kalu',
    role: 'Head Mistress, Rona Kings and Queens Nursery/Primary School',
    image: '/images/Meet Our Board and Management Team. Mrs Favour Kelechi kalu. head mistress Rona kings and queens Nursery and primary.jpg',
  },
  {
    name: 'Mrs. Orji Caroline',
    role: 'Principal',
    image: '/images/Meet Our Board and Management Team. Mrs. Orji Caroline. Principal.png',
  },
  {
    name: 'Christian Kelechi Kalu',
    role: 'Executive Director',
    image: '/images/Meet Our Board and Management Team. Christian Kelechi kalu. Executive Director..png',
  },
];

const values = [
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Excellence',
    text: 'We pursue high academic standards, quality teaching, and meaningful student outcomes.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: 'Care',
    text: 'Every learner is known, guided, and supported with personal attention and structure.',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: 'Character',
    text: 'We raise disciplined, trustworthy, and confident learners ready for leadership.',
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20 text-white">
          <div className="absolute inset-0 gradient-panel" />
          <div className="grid-overlay absolute inset-0 opacity-30" />
          <div className="container-custom relative text-center">
            <Reveal>
              <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 backdrop-blur">
                About Us
              </p>
              <h1 className="hero-page-title">A royal school culture built on excellence, vision, and care.</h1>
              <p className="hero-page-subtitle mt-5">
                Kings &amp; Queens School is a premium learning institution in Umuahia shaping future-ready students through structure, innovation, and strong moral values.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal direction="right">
              <div className="premium-card overflow-hidden rounded-[2rem] p-4">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL2.jpg"
                    alt="Kings and Queens School learning environment"
                    width={1430}
                    height={1073}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="eyebrow">School History</p>
              <h2 className="section-title">Building a lasting legacy in quality education since 1999.</h2>
              <p className="section-copy">
                Kings &amp; Queens School began with a clear vision: to provide children with strong academic foundations, discipline, confidence, and the values they need to thrive in life.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ['1999', 'School established'],
                  ['2008', 'Approved by Ministry of Education'],
                  ['Today', 'Expanding with digital learning systems'],
                ].map(([year, text]) => (
                  <div key={year} className="premium-card rounded-[1.6rem] p-5">
                    <p className="font-display text-4xl font-semibold text-primary-900">{year}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.75rem] border border-primary-100 bg-primary-50/80 px-6 py-5 text-sm leading-7 text-slate-700">
                Kings &amp; Queens School continues to evolve into a modern, digitally-enabled learning community while preserving the discipline and academic strength families trust.
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-50/70 py-20 md:py-24">
          <div className="container-custom">
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="gradient-panel h-full rounded-[2rem] p-8 text-white shadow-[0_28px_80px_rgba(2,6,23,0.26)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">Mission</p>
                  <h2 className="font-display mt-4 text-4xl font-semibold">To provide quality education with total commitment.</h2>
                  <p className="mt-5 text-sm leading-8 text-white/76">
                    We are committed to excellent academic programmes and to developing trustworthy, dedicated, God-fearing, and confident leaders with sound morals and self-discipline.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="premium-card h-full rounded-[2rem] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-900">Vision</p>
                  <h2 className="font-display mt-4 text-4xl font-semibold text-primary-900">To raise future kings and queens for a changing world.</h2>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                    {[
                      'Blend traditional excellence with innovation.',
                      'Develop students who are disciplined, capable, and globally aware.',
                      'Create a school culture where academic strength meets strong character.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-800" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="leadership" className="py-20 md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Meet Our Board and Management Team.</p>
              <h2 className="section-title">Meet Our Board and Management Team.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {leadershipTeam.map((leader, index) => (
                <StaggerItem key={leader.name}>
                  <div className="premium-card h-full overflow-hidden rounded-[2rem]">
                    {leader.image ? (
                      <Reveal
                        direction={index % 2 === 0 ? 'up' : 'scale'}
                        delay={0.06 * (index % 3)}
                        duration={0.9}
                      >
                        <div className="relative aspect-[4/4.5] overflow-hidden">
                          <Image src={leader.image} alt={leader.name} fill className="object-cover transition duration-700 hover:scale-105" />
                        </div>
                      </Reveal>
                    ) : (
                      <div className="gradient-panel flex aspect-[4/4.5] items-center justify-center">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/12 bg-white/8 text-4xl font-semibold text-gold-300">
                          {leader.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-primary-900">{leader.name}</h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">{leader.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-24">
          <div className="container-custom">
            <Reveal className="text-center">
              <p className="eyebrow justify-center text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Our Values</p>
              <h2 className="section-title text-white">The culture behind every lesson and every child.</h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-7 backdrop-blur">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/14 text-gold-300">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/72">{value.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10 rounded-[1.75rem] border border-gold-400/18 bg-gold-400/10 px-6 py-5 text-sm leading-7 text-white/78">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
                <p>Visit us at 85 Uwalaka Street, Umuahia, Abia State, Nigeria.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
