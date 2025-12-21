import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/7b231eacdf04e2d5bed4780cf5ceeaa7fb44ca7f.png';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '/how-it-works' }, 
    { name: 'Support', href: '/support' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-blue-500/30 selection:text-blue-200 flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
               <img src={logoImage} alt="TapTrust Logo" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-xl font-semibold tracking-tight text-white">TapTrust</span>
            </Link>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {links.map((link) => {
                  const isAnchor = link.href.includes('#');
                  return isAnchor ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:block">
              <Link
                to="/support"
                className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-400 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Get Started
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {links.map((link) => {
                 const isAnchor = link.href.includes('#');
                 return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
               <Link
                  to="/support"
                  className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-blue-400 hover:bg-blue-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-black border-t border-white/10 py-12 lg:py-16 mt-auto">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <img src={logoImage} alt="TapTrust Logo" className="h-6 w-6 object-contain brightness-0 invert opacity-80" />
                   <span className="text-lg font-semibold text-white">TapTrust</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                   <Link to="/" className="hover:text-white transition-colors">Home</Link>
                   <Link to="/features" className="hover:text-white transition-colors">Features</Link>
                   <Link to="/support" className="hover:text-white transition-colors">Support</Link>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                <div>
                   © {new Date().getFullYear()} Cognos Solution LLC. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
                    <Link to="/age-suitability" className="hover:text-gray-400 transition-colors">Age Suitability</Link>
                </div>
            </div>
         </div>
      </footer>
    </div>
  );
};
