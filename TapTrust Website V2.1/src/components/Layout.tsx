import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FREE_CHECK_COUNT, analyticsEvents, downloadLinks } from '../lib/marketing';
import '../styles/marketing.css';

const logoImage = '/taptrust-icon-v3.png';

const links = [
  { name: 'How it works', href: '/how-it-works' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Support', href: '/support' },
];

const Brand = () => (
  <Link to="/" className="marketing-brand">
    <img src={logoImage} alt="" />
    <span>TapTrust</span>
  </Link>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="marketing-shell">
      <nav className="marketing-nav">
        <div className="marketing-container marketing-nav__inner">
          <Brand />

          <div className="marketing-nav__desktop-links">
            {links.map((link) => (
              <Link key={link.name} to={link.href}>{link.name}</Link>
            ))}
          </div>

          <a href={downloadLinks.default} data-analytics-event={analyticsEvents.appStoreCta} className="marketing-nav__cta">
            Try {FREE_CHECK_COUNT} free checks
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="marketing-nav__menu-button"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu" className="marketing-mobile-menu">
          <div className="marketing-container marketing-mobile-menu__header">
            <Brand />
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close navigation menu">
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="marketing-mobile-menu__content">
            <div>
              {links.map((link) => (
                <Link key={link.name} to={link.href}>{link.name}</Link>
              ))}
            </div>
            <div>
              <p>Use TapTrust when a guest presents a supported digital ID.</p>
              <a href={downloadLinks.default} data-analytics-event={analyticsEvents.appStoreCta}>
                Try {FREE_CHECK_COUNT} free checks
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="marketing-main">{children}</main>

      <footer className="marketing-footer">
        <div className="marketing-container">
          <div className="marketing-footer__top">
            <Brand />
            <div className="marketing-footer__links">
              <Link to="/how-it-works">How it works</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/support">Support</Link>
              <Link to="/privacy">Privacy</Link>
            </div>
          </div>
          <div className="marketing-footer__bottom">
            <span>© {new Date().getFullYear()} Cognos Solution LLC. All rights reserved.</span>
            <div>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/age-suitability">Age Suitability</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
