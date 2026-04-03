'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const portalUrl = 'https://kqis-portal-158h.vercel.app/';
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/academics/examinations', label: 'Examinations' },
    { href: '/digital-learning', label: 'Digital Learning' },
    { href: '/online-school', label: 'Online School' },
    { href: '/student-life', label: 'Student Life' },
    { href: '/admissions', label: 'Admissions' },
    { href: portalUrl, label: 'Portals' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      router.push('/search');
    } else {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }

    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-900 shadow-lg' : 'bg-primary-900/95'}`}>
      <div className="container-custom">
        <div className="flex items-center gap-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-2xl bg-white/95 p-1.5 shadow-md ring-1 ring-white/20">
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
              <h1 className="text-xl font-bold text-white">
                Kings & Queens <span className="text-gold-400">School</span>
              </h1>
              <p className="text-xs text-gray-300">Excellence & Royalty</p>
            </div>
          </Link>

          <form
            onSubmit={handleSearchSubmit}
            className="hidden flex-1 lg:flex"
            role="search"
            aria-label="Search the Kings and Queens School website"
          >
            <div className="mx-auto flex w-full max-w-xl items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-inner backdrop-blur-md transition focus-within:border-gold-400/70 focus-within:bg-white/14">
              <Search className="h-4 w-4 flex-shrink-0 text-gold-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search admissions, academics, portal, fees..."
                className="w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/55"
                aria-label="Search the website"
              />
              <button
                type="submit"
                className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gold-600"
              >
                Search
              </button>
            </div>
          </form>

          <div className="hidden lg:flex">
            <a href={portalUrl} className="btn-gold !px-4 !py-2 text-sm" target="_blank" rel="noreferrer">
              Parent Portal
            </a>
          </div>

          <button className="ml-auto lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8 border-t border-white/10 py-3">
          {navLinks.map((link) => (
            link.href.startsWith('http') ? (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold-400 transition-colors font-medium text-sm"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold-400 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            <form
              onSubmit={handleSearchSubmit}
              className="mb-4"
              role="search"
              aria-label="Search the Kings and Queens School website"
            >
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
              link.href.startsWith('http') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-white hover:text-gold-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-white hover:text-gold-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a
              href={portalUrl}
              className="mt-3 inline-block bg-gold-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Parent Portal
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
