import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kings & Queens School</h3>
            <p className="text-gray-400 text-sm">
              Raising Future <span className="text-gold-400 font-semibold">Kings</span> & <span className="text-primary-300 font-semibold">Queens</span> Through{' '}
              <span className="bg-gradient-to-r from-gold-400 via-white to-primary-300 bg-clip-text text-transparent font-semibold">Excellence, Innovation & Character</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-gold-400 transition">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-gold-400 transition">Academics</Link></li>
              <li><Link href="/academics/examinations" className="hover:text-gold-400 transition">Examinations</Link></li>
              <li><Link href="/student-life" className="hover:text-gold-400 transition">Student Life</Link></li>
              <li><Link href="/online-school" className="hover:text-gold-400 transition">Online School</Link></li>
              <li><Link href="/digital-learning" className="hover:text-gold-400 transition">Digital Learning</Link></li>
              <li><Link href="/admissions" className="hover:text-gold-400 transition">Admissions</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-400 transition">Gallery</Link></li>
              <li><Link href="/parent-portal" className="hover:text-gold-400 transition">Parent Portal</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>88 Uwalaka Street, Umuahia, Abia State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 803 350 5742</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kingsandqueens_schools@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nnaukwu_kaluo@yahoo.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@kings-queens-school.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/kingsandqueensschool"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-gold-500 transition"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kingsandqueensschool"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-gold-500 transition"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.8A3.95 3.95 0 003.8 7.75v8.5a3.95 3.95 0 003.95 3.95h8.5a3.95 3.95 0 003.95-3.95v-8.5a3.95 3.95 0 00-3.95-3.95h-8.5zm8.95 1.35a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/KingsQueensSch"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-gold-500 transition"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.73L23 22h-6.1l-4.78-6.2L6.7 22H3.6l7.25-8.28L1 2h6.25l4.32 5.7L18.9 2zm-1.07 18.17h1.69L6.34 3.74H4.53l13.3 16.43z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kings and Queens School, Umuahia. All rights reserved.</p>
          <p className="mt-1">&quot;Where Excellence Meets Royalty&quot;</p>
        </div>
      </div>
    </footer>
  );
}
