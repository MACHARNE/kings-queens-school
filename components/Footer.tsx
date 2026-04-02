import Link from 'next/link';
import { Camera, Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kings & Queens School</h3>
            <p className="text-gray-400 text-sm">
              Raising Future Kings & Queens Through Excellence, Innovation & Character
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-gold-400 transition">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-gold-400 transition">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-gold-400 transition">Admissions</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-400 transition">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-gold-400 transition">Blog / Learning Hub</Link></li>
              <li><Link href="/parent-portal" className="hover:text-gold-400 transition">Parent Portal</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>85 Uwalaka Street, Umuahia, Abia State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 803 350 5742</span>
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
              <a href="https://www.kings-queens-school.com" className="bg-gray-800 p-2 rounded-full hover:bg-gold-500 transition" aria-label="Visit website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://wa.me/2348033505742" className="bg-gray-800 p-2 rounded-full hover:bg-gold-500 transition" aria-label="Chat on WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="/gallery" className="bg-gray-800 p-2 rounded-full hover:bg-gold-500 transition" aria-label="View gallery">
                <Camera className="w-4 h-4" />
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
