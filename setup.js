const fs = require('fs');
const path = require('path');

const projectRoot = 'kings-queens-school';

// Define all directories to create
const directories = [
  'app',
  'app/about',
  'app/academics',
  'app/admissions',
  'app/digital-learning',
  'app/contact',
  'components',
  'public',
  'public/images',
  'lib'
];

// Define all files to create
const files = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/about/page.tsx',
  'app/academics/page.tsx',
  'app/admissions/page.tsx',
  'app/digital-learning/page.tsx',
  'app/contact/page.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx',
  'components/VideoHero.tsx',
  'components/LeadForm.tsx',
  'components/Programs.tsx',
  'components/Testimonials.tsx',
  'components/CTA.tsx',
  'components/WhyChooseUs.tsx',
  'components/DigitalAdvantage.tsx',
  'components/ComparisonTable.tsx',
  'public/school-video.mp4',
  'public/poster.jpg',
  'lib/utils.ts',
  'tailwind.config.js',
  'postcss.config.js',
  'package.json'
];

// Create project root if it doesn't exist
if (!fs.existsSync(projectRoot)) {
  fs.mkdirSync(projectRoot);
  console.log(`✅ Created root directory: ${projectRoot}`);
}

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(projectRoot, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`⚠️  Directory already exists: ${dir}`);
  }
});

// Create files
files.forEach(file => {
  const fullPath = path.join(projectRoot, file);
  if (!fs.existsSync(fullPath)) {
    // Write minimal content for some files
    let content = '';
    
    if (file === 'package.json') {
      content = JSON.stringify({
        name: "kings-queens-school",
        version: "0.1.0",
        private: true,
        scripts: {
          dev: "next dev",
          build: "next build",
          start: "next start",
          lint: "next lint"
        },
        dependencies: {
          react: "^18",
          "react-dom": "^18",
          next: "14.0.0"
        },
        devDependencies: {
          typescript: "^5",
          "@types/node": "^20",
          "@types/react": "^18",
          "@types/react-dom": "^18",
          autoprefixer: "^10",
          postcss: "^8",
          tailwindcss: "^3",
          eslint: "^8",
          "eslint-config-next": "14.0.0"
        }
      }, null, 2);
    } else if (file === 'tailwind.config.js') {
      content = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;
    } else if (file === 'postcss.config.js') {
      content = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
    } else if (file === 'app/layout.tsx') {
      content = `import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kings Queens School',
  description: 'Excellence in Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}`;
    } else if (file === 'app/globals.css') {
      content = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-rgb: 255, 255, 255;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-rgb));
}`;
    } else if (file === 'components/Navbar.tsx') {
      content = `'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Kings Queens School</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/academics" className="hover:text-blue-600">Academics</Link>
            <Link href="/admissions" className="hover:text-blue-600">Admissions</Link>
            <Link href="/digital-learning" className="hover:text-blue-600">Digital Learning</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}`;
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created file: ${file}`);
  } else {
    console.log(`⚠️  File already exists: ${file}`);
  }
});

console.log('\n🎉 All folders and files have been created successfully!');
console.log(`\nNext steps:
1. cd ${projectRoot}
2. npm install
3. npm run dev
`);
