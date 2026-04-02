'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { href: '/digital-learning', label: 'Digital Learning' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Learning Hub' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-900 shadow-lg' : 'bg-primary-900/95'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
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

          <div className="hidden xl:flex">
            <Link href="/parent-portal" className="btn-gold !px-4 !py-2 text-sm">
              Parent Portal
            </Link>
          </div>

          <button className="xl:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden xl:flex items-center justify-center gap-8 border-t border-white/10 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gold-400 transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {isOpen && (
          <div className="xl:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-white hover:text-gold-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/parent-portal"
              className="mt-3 inline-block bg-gold-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Parent Portal
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
