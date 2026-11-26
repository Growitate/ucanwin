import { useMemo, useState } from 'react';
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  Brain,
  CloudSun,
  Compass,
  Feather,
  Flower2,
  GraduationCap,
  Heart,
  HeartHandshake,
  MessageCircle,
  Presentation,
  Smile,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  SERVICES,
  SITE_INFO,
  buildWhatsAppUrl,
} from '../data/siteData';

const ICON_MAP = {
  HeartHandshake,
  Users,
  Compass,
  Brain,
  CloudSun,
  Sprout,
  GraduationCap,
  Feather,
  Smile,
  Presentation,
  Flower2,
  Heart,
  Apple,
};

export default function Services({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const counts = useMemo(() => {
    const map = { all: SERVICES.length };
    SERVICES.forEach((s) => {
      map[s.category] = (map[s.category] || 0) + 1;
    });
    return map;
  }, []);

  const visibleServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="section-block services-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow-pill">
            <Sparkles size={15} />
            Certified Services &amp; Programs
          </span>
          <h2 className="section-title">How We Can Help</h2>
          <span className="pricing-note-pill">
            <BadgeCheck size={16} />
            All Certified • Enquiry-based online sessions via Zoom &amp; Google Meet
          </span>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Filter services">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
                <span className="filter-count">{counts[cat.id] || 0}</span>
              </button>
            );
          })}
        </div>

        <div className="services-grid">
          {visibleServices.map((service) => {
            const IconComp = ICON_MAP[service.icon] || Sparkles;
            const serviceWaUrl = buildWhatsAppUrl(
              `Hi ${SITE_INFO.founder}, I would like to enquire about "${service.title}" at ${SITE_INFO.fullBrandName}.`
            );

            return (
              <article
                key={service.id}
                className={`clay-card clay-card-interactive service-card tone-${service.tone}`}
              >
                <div className="service-card-top-row">
                  <div className="clay-orb clay-orb-sm" aria-hidden="true">
                    <IconComp size={22} strokeWidth={2.2} />
                  </div>
                  <span className="certified-badge">
                    <BadgeCheck size={14} />
                    Certified
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-card-actions">
                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-wa-link"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                    <ArrowRight size={14} />
                  </a>

                  <button
                    type="button"
                    className="service-enquire-btn"
                    onClick={() => onOpenEnquiry(service.title)}
                  >
                    Enquire
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
