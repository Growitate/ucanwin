import { Mail, MessageCircle, Video } from 'lucide-react';
import { BrandLogoMark } from './Navbar';
import { SITE_INFO, buildWhatsAppUrl } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell footer-minimal">
          <div className="footer-minimal-top">
            <div className="footer-brand-col">
              <a href="#top" className="brand-link">
                <BrandLogoMark />
                <span className="brand-text">
                  <span className="brand-title">
                    U Can <span>Win</span>
                  </span>
                  <span className="brand-sub">{SITE_INFO.brandSubtitle}</span>
                </span>
              </a>
              <p className="footer-motto">“{SITE_INFO.tagline}”</p>
            </div>

            <div className="footer-minimal-links">
              <a
                href={buildWhatsAppUrl(
                  `Hi ${SITE_INFO.founder}, I'd like to enquire about an online session.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-chip"
              >
                <MessageCircle size={15} color="#389A6A" />
                {SITE_INFO.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_INFO.email}`} className="footer-chip">
                <Mail size={15} color="#7B61C6" />
                {SITE_INFO.email}
              </a>
              <span className="footer-chip">
                <Video size={15} color="#4B97DC" />
                Zoom &amp; Google Meet
              </span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {year} {SITE_INFO.fullBrandName} • {SITE_INFO.founder}
            </span>
            <span>{SITE_INFO.footerMotto}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
