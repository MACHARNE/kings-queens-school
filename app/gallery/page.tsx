import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const galleryImages = [
  { src: '/images/HOMEPAGE HERO SECTION1.jpg', title: 'School Life', note: 'Moments of learning, confidence, and community.' },
  { src: '/images/HOMEPAGE HERO SECTION2.jpg', title: 'Campus Culture', note: 'A premium environment built for focus and growth.' },
  { src: '/images/HOMEPAGE HERO SECTION3.jpg', title: 'Student Energy', note: 'Joyful experiences supported by strong structure.' },
  { src: '/images/OUR LEARNING APPROACH.jpg', title: 'Learning Approach', note: 'Blended learning rooted in clarity and discipline.' },
  { src: '/images/PRIMARY SCHOOL1.jpg', title: 'Primary School', note: 'Strong foundations in literacy, numeracy, and creativity.' },
  { src: '/images/SECONDARY SCHOOL1.jpg', title: 'Secondary School', note: 'Career readiness and exam preparation with purpose.' },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
          <div className="container-custom text-center">
            <Reveal>
              <h1 className="hero-page-title mb-4">A Closer Look at Kings & Queens School</h1>
              <p className="hero-page-subtitle">
                Explore the spaces, experiences, and learning moments that shape excellence at our school in Umuahia.
              </p>
              <div className="hero-accent" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <Reveal className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">A Premium Learning Environment</h2>
              <p className="text-gray-600 text-lg">
                The document brief positions Kings & Queens School as a premium, digitally enabled institution.
                This gallery supports that story with a visual showcase of our learning spaces, student life, and academic environment.
              </p>
            </Reveal>

            <Stagger className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <StaggerItem key={image.src}>
                  <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-primary-100">
                    <div className="relative aspect-[4/3]">
                      <Image src={image.src} alt={image.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary-900 mb-2">{image.title}</h3>
                      <p className="text-gray-600">{image.note}</p>
                    </div>
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
