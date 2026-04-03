'use client';

import { useEffect, useEffectEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Menu, Search, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const portalUrl = 'https://kqis-portal-158h.vercel.app/';
  const router = useRouter();

  const syncScrollState = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    const handleScroll = () => syncScrollState();

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Classes' },
    { href: '/online-school', label: 'Learning App' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = searchQuery.trim();
    router.push(trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : '/search');
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[rgba(7,18,39,0.9)] shadow-[0_20px_70px_rgba(2,6,23,0.35)] backdrop-blur-xl'
          : 'bg-[rgba(7,18,39,0.68)] backdrop-blur-lg'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-[1.35rem] bg-white/95 p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.25)] ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="Kings and Queens School Logo"
                width={56}
                height={56}
                priority
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gold-300">Umuahia</p>
              <h1 className="text-xl font-bold text-white">
                Kings & Queens <span className="text-gold-300">School</span>
              </h1>
              <p className="text-xs text-white/60">Excellence, Innovation & Character</p>
            </div>
          </Link>

          <form
            onSubmit={handleSearchSubmit}
            className="hidden flex-1 lg:flex"
            role="search"
            aria-label="Search the Kings and Queens School website"
          >
            <div className="mx-auto flex w-full max-w-xl items-center rounded-full border border-white/12 bg-white/10 px-4 py-2 shadow-inner backdrop-blur-md transition focus-within:border-gold-400/70 focus-within:bg-white/14">
              <Search className="h-4 w-4 flex-shrink-0 text-gold-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search classes, admissions, contacts, app..."
                className="w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/55"
                aria-label="Search the website"
              />
              <button type="submit" className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-gold-400">
                Search
              </button>
            </div>
          </form>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/admissions" className="btn-primary !px-5 !py-3 text-sm">
              Apply Now
            </Link>
            <a
              href={portalUrl}
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-gold-400/40 hover:bg-white/14"
              target="_blank"
              rel="noreferrer"
            >
              Parent Portal
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button className="ml-auto rounded-full border border-white/12 bg-white/10 p-2 text-white lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden items-center justify-center gap-8 border-t border-white/10 py-3 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/88 transition-colors hover:text-gold-300">
              {link.label}
            </Link>
          ))}
        </div>

        {isOpen && (
          <div className="pb-4 lg:hidden">
            <form onSubmit={handleSearchSubmit} className="mb-4" role="search" aria-label="Search the Kings and Queens School website">
              <div className="flex items-center rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                <Search className="h-4 w-4 flex-shrink-0 text-gold-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search the website"
                  className="w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/55"
                  aria-label="Search the website"
                />
                <button type="submit" className="text-sm font-semibold text-gold-400">
                  Go
                </button>
              </div>
            </form>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-3 text-white transition-colors hover:bg-white/8 hover:text-gold-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Link href="/admissions" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                Apply Now
              </Link>
              <a
                href={portalUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/14"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Parent Portal
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
