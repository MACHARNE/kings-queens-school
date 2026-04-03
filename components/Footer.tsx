import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-16 pb-6 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-custom">
        <div className="mb-12 grid gap-8 rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.35)] backdrop-blur md:grid-cols-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">Kings & Queens School</p>
            <h3 className="font-display text-3xl font-semibold text-white">Raising Future Kings & Queens Through Excellence & Innovation</h3>
            <p className="mt-4 text-sm leading-7 text-white/68">
              A modern, digitally-enabled school in Umuahia combining the discipline of traditional education with the flexibility of online learning.
            </p>
            <Link href="/admissions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition hover:text-gold-200">
              Start Admission
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/68">
              <li><Link href="/" className="transition hover:text-gold-300">Homepage</Link></li>
              <li><Link href="/about" className="transition hover:text-gold-300">About Us</Link></li>
              <li><Link href="/academics" className="transition hover:text-gold-300">Classes</Link></li>
              <li><Link href="/online-school" className="transition hover:text-gold-300">Learning App</Link></li>
              <li><Link href="/admissions" className="transition hover:text-gold-300">Admissions</Link></li>
              <li><Link href="/contact" className="transition hover:text-gold-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/68">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold-300" />
                <span>85 Uwalaka Street, Umuahia, Abia State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-300" />
                <span>+234 803 350 5742</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-300" />
                <span>kingsandqueens_schools@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-300" />
                <span>nnaukwu_kaluo@yahoo.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/kingsandqueensschool"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:border-gold-300/50 hover:bg-gold-400/15"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kingsandqueensschool"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:border-gold-300/50 hover:bg-gold-400/15"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.8A3.95 3.95 0 003.8 7.75v8.5a3.95 3.95 0 003.95 3.95h8.5a3.95 3.95 0 003.95-3.95v-8.5a3.95 3.95 0 00-3.95-3.95h-8.5zm8.95 1.35a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/KingsQueensSch"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 transition hover:border-gold-300/50 hover:bg-gold-400/15"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.73L23 22h-6.1l-4.78-6.2L6.7 22H3.6l7.25-8.28L1 2h6.25l4.32 5.7L18.9 2zm-1.07 18.17h1.69L6.34 3.74H4.53l13.3 16.43z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Opening families to premium learning experiences, stronger parent visibility, and confident academic progress.
            </p>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 text-center text-sm text-white/45">
          <p>&copy; {new Date().getFullYear()} Kings and Queens School, Umuahia. All rights reserved.</p>
          <p className="mt-1">&quot;Where Excellence Meets Royalty&quot;</p>
        </div>
      </div>
    </footer>
  );
}
