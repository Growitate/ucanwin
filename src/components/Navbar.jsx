import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { SITE_INFO, buildWhatsAppUrl } from '../data/siteData';

const NAV_ITEMS = [
  { label: 'Mission', href: '#mission' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function BrandLogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg width="30" height="30" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="navSun" x1="18" y1="22" x2="46" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE589" />
            <stop offset="1" stopColor="#F5B536" />
          </linearGradient>
        </defs>
        <path d="M32 23C32 13 22 8 18 14C22 18 26 21 32 23Z" fill="#59BD8B" />
        <path d="M32 23C32 13 42 8 46 14C42 18 38 21 32 23Z" fill="#379A69" />
        <circle cx="32" cy="39" r="16" fill="url(#navSun)" />
        <circle cx="25.5" cy="36" r="2.2" fill="#4A341C" />
        <circle cx="38.5" cy="36" r="2.2" fill="#4A341C" />
        <path
          d="M26 40.5C28 44 36 44 38 40.5"
          stroke="#4A341C"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waHref = buildWhatsAppUrl(
    `Hi ${SITE_INFO.founder}, I would love to enquire about an online session at ${SITE_INFO.fullBrandName}.`
  );

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-shell" aria-label="Main navigation">
          <a href="#top" className="brand-link" onClick={() => setMobileOpen(false)}>
            <BrandLogoMark />
            <span className="brand-text">
              <span className="brand-title">
                U Can <span>Win</span>
              </span>
              <span className="brand-sub">{SITE_INFO.brandSubtitle}</span>
            </span>
          </a>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clay btn-clay-primary btn-clay-sm nav-whatsapp-desktop"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

            <button
              type="button"
              className="mobile-toggle"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mobile-drawer" role="region" aria-label="Mobile menu">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-drawer-cta">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clay btn-clay-primary btn-clay-sm"
                onClick={() => setMobileOpen(false)}
              >
                <MessageCircle size={17} />
                Enquire on WhatsApp
              </a>
              <button
                type="button"
                className="btn-clay btn-clay-secondary btn-clay-sm"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenEnquiry('Not sure yet — help me choose!');
                }}
              >
                Book Online Session
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
