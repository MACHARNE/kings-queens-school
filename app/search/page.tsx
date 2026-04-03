'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Search, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { searchSite, siteSearchEntries } from '@/lib/site-search';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const results = query ? searchSite(query) : siteSearchEntries;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-32">
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 text-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gold-400">
                <Search className="h-4 w-4" />
                Site Search
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
                {query ? `Search results for "${query}"` : 'Search the Kings & Queens School website'}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                Find admissions information, academic pages, digital learning resources, contact details, and portal access from one place.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
                  {query ? 'Results Found' : 'Quick Links'}
                </p>
                <p className="mt-2 text-gray-600">
                  {results.length} {results.length === 1 ? 'match' : 'matches'} across the website.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-2 text-sm text-primary-900 shadow-sm">
                <Sparkles className="h-4 w-4 text-gold-500" />
                Search covers the main school pages and portal access points.
              </div>
            </div>

            {results.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {results.map((result) => {
                  const content = (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                            {result.category}
                          </p>
                          <h2 className="mt-4 text-2xl font-bold text-primary-950">{result.title}</h2>
                        </div>
                        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-gold-500" />
                      </div>
                      <p className="mt-4 text-gray-600">{result.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {result.keywords.slice(0, 4).map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full border border-primary-100 bg-slate-50 px-3 py-1 text-xs font-medium text-gray-600"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </>
                  );

                  return result.external ? (
                    <a
                      key={result.title}
                      href={result.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={result.title}
                      href={result.href}
                      className="rounded-[1.75rem] border border-primary-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-primary-100 bg-white p-10 text-center shadow-sm">
                <h2 className="text-2xl font-bold text-primary-950">No results found</h2>
                <p className="mt-4 text-gray-600">
                  Try broader keywords like admissions, exams, portal, digital learning, or contact.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {['admissions', 'academics', 'online school', 'contact'].map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
