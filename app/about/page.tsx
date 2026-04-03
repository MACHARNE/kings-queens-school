import Image from 'next/image';
import { Gem, HeartHandshake, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const leadershipTeam = [
  {
    name: 'Dr. Nnaukwu Kalu Okwuaghu',
    role: 'Founder & Proprietor',
    image: '/images/Founder.jpg',
    bio: 'A visionary educationist with a passion for excellence, Dr. Nnaukwu Kalu Okwuaghu founded Kings and Queens School to raise future leaders through quality education.',
  },
  {
    name: 'Mrs. Rose Kalu',
    role: 'Vice Principal',
    image: '/images/Vice Principal.jpg',
    bio: 'An experienced educationist who believes the best legacy any parent can give a child is education. She oversees academic and administrative operations across the school.',
  },
  {
    name: 'Mrs. Chioma Ikpe',
    role: 'Head Teacher',
    image: '/images/Chioma Ikpe.jpg',
    bio: 'Mrs. Chioma Ikpe leads the teaching team with dedication and expertise, ensuring every child receives personal attention and quality instruction.',
  },
  {
    name: 'Chinyere Nnaukwu-Kalu Nkwocha',
    role: 'Administrative Director',
    image: '/images/Chinyere.Nnaukwu-Kalu Nkwocha.jpg',
    bio: 'Chinyere oversees strategic direction and administrative systems, introducing practical innovations that strengthen school operations and long-term growth.',
  },
  {
    name: 'Mrs. Orji Caroline',
    role: 'Head Teacher (Primary Section)',
    image: '/images/teacher.jpg',
    bio: 'Mrs. Orji Caroline manages the primary section, helping pupils build strong foundations in literacy, numeracy, confidence, and character.',
  },
];

const registrationDetails = [
  { label: 'Institute Ref Number', value: 'C-445107' },
  { label: 'Approval Ref Number', value: 'MED/PE/Ao/18PN/108/92' },
  { label: 'Approval Date', value: '26th August 2008' },
];

const expansionMilestones = [
  { year: '1999', detail: 'Rona Kings and Queens Private School established' },
  { year: '2000', detail: 'Registered with Corporate Affairs Commission' },
  { year: '2008', detail: 'Approved by Ministry of Education' },
  { year: '2024', detail: 'Digital learning platform launched' },
  { year: '2025', detail: 'Online school expansion' },
  { year: '2026', detail: 'Full School Management System implementation' },
];

const coreValues = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Integrity',
    text: 'We raise trustworthy students with strong values and discipline.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: 'Care',
    text: 'Every child is known, supported, and guided to thrive academically and socially.',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: 'Excellence',
    text: 'We pursue high standards in teaching, learning, leadership, and character.',
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 text-white">
          <div className="absolute -left-14 top-10 h-44 w-44 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-primary-400/20 blur-3xl" />
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">About Kings and Queens School</h1>
              <p className="hero-page-subtitle">
                A legacy institution in Umuahia focused on quality education, moral formation, and leadership development for a changing world.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary-100 shadow-2xl">
                  <Image src="/images/WHY CHOOSE KINGS AND QUEENS SCHOOL2.jpg" alt="Kings and Queens School campus life" fill className="object-cover transition duration-700 hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mb-5 text-3xl font-bold text-primary-900 md:text-4xl">Our History</h2>
                <p className="mb-4 text-gray-700">
                  Rona Kings and Queens Private Nursery and Primary School was established in <strong>1999</strong> and approved by Lagos State Government in <strong>2008</strong>.
                </p>
                <div className="mb-5 rounded-2xl border border-primary-100 bg-primary-50 p-5">
                  <p className="mb-3 font-semibold text-primary-900">Registration Details</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    {registrationDetails.map((item) => (
                      <p key={item.label}>
                        <span className="font-semibold">{item.label}:</span> {item.value}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  The founding vision was shaped by a deep love for children and the conviction that education is the greatest legacy. From a humble start, the school has grown into a premium learning institution serving families across Umuahia and beyond.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Our Expansion Journey</h2>
            </Reveal>
            <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {expansionMilestones.map((milestone) => (
                <StaggerItem key={milestone.year}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="mb-3 inline-block rounded-full bg-primary-900 px-3 py-1 text-sm font-semibold text-white">{milestone.year}</p>
                    <p className="text-gray-700">{milestone.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Reveal>
              <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 p-8 text-white shadow-2xl md:p-12">
                <p className="mb-4 text-sm uppercase tracking-[0.18em] text-gold-400">Mission Statement</p>
                <p className="text-lg leading-relaxed md:text-xl">
                  To provide quality education to our society through total commitment to excellent academic programmes and to develop trustworthy, dedicated, God-fearing and great leaders by inculcating good morals, self-confidence and self-discipline in them.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Board of Directors & Management</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {leadershipTeam.map((leader) => (
                <StaggerItem key={leader.name}>
                  <div className="h-full overflow-hidden rounded-[1.75rem] border border-primary-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={leader.image} alt={leader.name} fill className="object-cover transition duration-700 hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary-900">{leader.name}</h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.13em] text-gold-600">{leader.role}</p>
                      <p className="mt-4 text-sm leading-relaxed text-gray-600">{leader.bio}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-custom">
            <Reveal>
              <h2 className="section-title text-primary-900">Our Core Values</h2>
            </Reveal>
            <Stagger className="grid gap-6 md:grid-cols-3">
              {coreValues.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-3xl border border-primary-100 bg-primary-50 p-7 shadow-md">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-900 to-primary-700 text-gold-400">
                      {value.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-900">{value.title}</h3>
                    <p className="text-gray-700">{value.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10">
              <div className="rounded-3xl border border-primary-100 bg-gray-50 px-6 py-5 text-gray-700">
                <p className="font-semibold text-primary-900">Head Office</p>
                <p>88 Uwalaka Street, Umuahia, Abia State, Nigeria</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
