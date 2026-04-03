import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, GraduationCap, Medal, Sparkles, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const galleryCategories = [
  {
    id: 'academic-life',
    title: 'Academic Life',
    description: 'Daily learning moments that reflect the school’s modern academic culture, strong classroom guidance, and digitally enabled teaching.',
    icon: <GraduationCap className="h-6 w-6" />,
    images: [
      { src: '/images/OUR LEARNING APPROACH.jpg', title: 'Interactive Learning', note: 'Students actively engaged in lessons that build real understanding.' },
      { src: '/images/PRIMARY SCHOOL1.jpg', title: 'Primary Foundations', note: 'Strong early learning support in literacy, numeracy, and confidence building.' },
      { src: '/images/SECONDARY SCHOOL1.jpg', title: 'Secondary Focus', note: 'Structured classes preparing learners for excellence and future readiness.' },
      { src: '/images/DIGITAL LEARNING EXPERIENCE2.jpg', title: 'Smart Classroom Experience', note: 'A more connected school model where technology supports progress and revision.' },
    ],
  },
  {
    id: 'events',
    title: 'Events & Celebrations',
    description: 'Authentic moments from school events, performances, and celebrations that show the energy and culture of the Kings & Queens community.',
    icon: <Sparkles className="h-6 w-6" />,
    images: [
      { src: '/images/gallery/legacy-cultural-dance.jpeg', title: 'Cultural Dance Presentation', note: 'Students celebrating heritage through vibrant cultural expression.' },
      { src: '/images/gallery/legacy-performance.jpeg', title: 'Creative Performance', note: 'School events that build confidence, teamwork, and stage presence.' },
      { src: '/images/culturalday-event.jpg', title: 'School Celebration', note: 'Memorable moments that bring the school community together.' },
    ],
  },
  {
    id: 'awards',
    title: 'Awards & Achievements',
    description: 'Recognition moments that reflect student effort, school spirit, and the culture of celebrating excellence.',
    icon: <Medal className="h-6 w-6" />,
    images: [
      { src: '/images/gallery/legacy-awards.jpeg', title: 'Trophy Moments', note: 'Students proudly receiving awards for their effort and success.' },
      { src: '/images/graduation-kids.jpg', title: 'Milestone Celebrations', note: 'Important school milestones marked with pride, joy, and recognition.' },
      { src: '/images/interhuse-sports.jpg', title: 'Competitive Spirit', note: 'Achievement also grows through healthy competition and teamwork.' },
    ],
  },
  {
    id: 'legacy',
    title: 'Legacy Moments',
    description: 'Selected archive photos that preserve the school’s story and remind families of the journey behind today’s Kings & Queens experience.',
    icon: <Camera className="h-6 w-6" />,
    images: [
      { src: '/images/gallery/legacy-graduation.jpeg', title: 'Archive Graduation Moment', note: 'A look back at earlier celebrations that shaped the school’s legacy.' },
      { src: '/images/gallery/legacy-campus-group.jpeg', title: 'School Community Memory', note: 'A memorable image from the school’s growth journey and shared identity.' },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20 text-white">
          <div className="absolute inset-0 gradient-panel" />
          <div className="grid-overlay absolute inset-0 opacity-25" />
          <div className="container-custom relative text-center">
            <Reveal>
              <p className="mb-4 inline-flex rounded-full border border-white/12 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300 backdrop-blur">
                Gallery
              </p>
              <h1 className="hero-page-title">A closer look at Kings &amp; Queens School.</h1>
              <p className="hero-page-subtitle mt-5">
                Explore academic life, school celebrations, achievement moments, and selected legacy photos that reflect the school’s journey.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container-custom">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="eyebrow justify-center">Gallery Highlights</p>
              <h2 className="section-title">A visual story of excellence, energy, and growth.</h2>
              <p className="section-copy mx-auto">
                This gallery combines strong current visuals with selected authentic archive images from the school’s earlier journey, keeping the experience relevant, premium, and true to the Kings &amp; Queens story.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <div className="flex flex-wrap justify-center gap-3">
                {galleryCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`#${category.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-900 shadow-[0_16px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-primary-200"
                  >
                    {category.icon}
                    {category.title}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {galleryCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={index % 2 === 0 ? 'bg-primary-50/55 py-20 md:py-24' : 'bg-white py-20 md:py-24'}
          >
            <div className="container-custom">
              <Reveal className="mb-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <p className="eyebrow">{category.title}</p>
                    <h2 className="section-title">{category.title}</h2>
                    <p className="section-copy">{category.description}</p>
                  </div>
                  <div className="premium-card inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-primary-900">
                    <Star className="h-4 w-4 text-gold-500" />
                    Curated for relevance and school fit
                  </div>
                </div>
              </Reveal>

              <Stagger className={`grid gap-6 ${category.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
                {category.images.map((image, imageIndex) => (
                  <StaggerItem key={image.src} className={category.images.length > 2 && imageIndex === 0 ? 'xl:col-span-2' : ''}>
                    <div className="premium-card h-full overflow-hidden rounded-[2rem] p-4">
                      <div className={`relative overflow-hidden rounded-[1.5rem] ${category.images.length > 2 && imageIndex === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                        <Image src={image.src} alt={image.title} fill className="object-cover transition duration-700 hover:scale-105" />
                      </div>
                      <div className="p-3 pt-5">
                        <h3 className="text-2xl font-semibold text-primary-900">{image.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{image.note}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        ))}

        <section className="pb-20 md:pb-24">
          <div className="container-custom">
            <Reveal>
              <div className="gradient-panel overflow-hidden rounded-[2.25rem] px-6 py-12 text-white shadow-[0_35px_100px_rgba(2,6,23,0.22)] md:px-12">
                <p className="eyebrow text-gold-300 before:bg-gradient-to-r before:from-gold-300/20 before:to-gold-300">Visit The School</p>
                <h2 className="section-title text-white">See the Kings &amp; Queens environment in person.</h2>
                <p className="max-w-2xl text-base leading-8 text-white/76">
                  If these moments reflect the kind of school experience you want for your child, book a visit and explore the campus with us.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact#visit" className="btn-gold">
                    Book a School Tour
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/admissions" className="btn-secondary">
                    Start Admission
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
