import { MessageCircle } from 'lucide-react';
import { SITE_INFO, buildWhatsAppUrl } from '../data/siteData';

export default function WhatsAppFloat() {
  const url = buildWhatsAppUrl(
    `Hi ${SITE_INFO.founder}! I'm reaching out from the U Can Win website and would love to enquire about a session.`
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp with Upama Kalita"
    >
      <MessageCircle size={22} />
      <span className="wa-float-text">WhatsApp Us</span>
    </a>
  );
}
