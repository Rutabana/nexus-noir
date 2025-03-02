// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nexus Noir',
  description: 'Your personal digital hub',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-transparent text-white">
        {/* Navbar */}
        <header className="p-4">
          <nav className="container mx-auto flex items-center justify-between">
            <div className="text-xl font-bold">Nexus Noir</div>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
              <li><a href="/journal" className="hover:underline">Journal</a></li>
              <li><a href="/timeline" className="hover:underline">Timeline</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-sm opacity-75">
          &copy; {new Date().getFullYear()} Nexus Noir
        </footer>
      </body>
    </html>
  );
}
