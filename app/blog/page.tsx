import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const posts = [
  {
    title: 'How Blended Learning Gives Students a Real Academic Advantage',
    excerpt: 'Why combining classroom teaching with digital reinforcement helps students retain more and perform with confidence.',
    tag: 'Digital Learning',
  },
  {
    title: 'Preparing Children for WAEC and NECO with Structure and Support',
    excerpt: 'A practical look at how strong routines, continuous assessment, and guidance create exam readiness.',
    tag: 'Academics',
  },
  {
    title: 'What Parents Should Look for in a Premium School in Umuahia',
    excerpt: 'Beyond facilities, here are the qualities that shape long-term student growth, discipline, and opportunity.',
    tag: 'Parent Guide',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
          <div className="container-custom">
            <Reveal className="max-w-3xl">
              <h1 className="hero-page-title mb-4">Insights for Parents, Learners, and Future Leaders</h1>
              <p className="hero-page-subtitle !mx-0">
                A professional content hub for school updates, learning advice, admissions guidance, and thought leadership.
              </p>
              <div className="hero-accent !mx-0" />
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <Stagger className="grid lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <StaggerItem key={post.title}>
                  <article className="h-full bg-white rounded-3xl border border-primary-100 shadow-lg p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4">{post.tag}</p>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <Link href="/contact" className="inline-flex items-center font-semibold text-primary-800 hover:text-primary-900">
                      Request more information
                    </Link>
                  </article>
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
