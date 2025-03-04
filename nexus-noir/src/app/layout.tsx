// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nexus Noir',
  description: 'Your personal digital hub',
  icons: {
    icon: [
      { url: '/images/logos/logo-no-bg.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/logo-no-bg.png', sizes: '16x16', type: 'image/png' },
    ],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1A1624] text-white">
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 w-full bg-transparent bg-opacity-90 p-4">
          <nav className="relative flex items-center justify-end w-full px-4">
            {/* Absolutely positioned logo on the left */}
            <div className="absolute left-0">
              <Link href="/">
                <img
                  src="/images/logos/logo-no-bg.png"
                  alt="Nexus Noir Logo"
                  className="h-12 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Nav links on the right */}
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-blue-500 font-bold hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-blue-500 font-bold hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/journal" className="text-blue-500 font-bold hover:underline">
                  Journal
                </a>
              </li>
              <li>
                <a href="/timeline" className="text-blue-500 font-bold hover:underline">
                  Timeline
                </a>
              </li>
            </ul>
          </nav>
        </header>



        {/* Main Content */}
        <main className="container mx-auto px-4 py-4">{children}</main>

        {/* Footer */}
        <footer className="py-4 text-center text-sm opacity-75">
          &copy; {new Date().getFullYear()} Nexus Noir
        </footer>
      </body>
    </html>
  );
}
