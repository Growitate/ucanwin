import { ArrowRight, CalendarHeart, MessageCircle, Sparkles } from 'lucide-react';
import heroArt from '../assets/3d/hero-uplift.webp';
import { SITE_INFO, buildWhatsAppUrl } from '../data/siteData';

export default function Hero({ onOpenEnquiry }) {
  const heroWaUrl = buildWhatsAppUrl(
    `Hi ${SITE_INFO.founder}! I visited U Can Win – The Life Uplifting Center and would like to enquire about an online consultation.`
  );

  return (
    <section id="top" className="hero-section">
      <span
        className="clay-bubble anim-float-gentle"
        aria-hidden="true"
        style={{
          width: 42,
          height: 42,
          top: '14%',
          left: '4%',
          background: 'linear-gradient(145deg, #FFF1B8 0%, #F7C95B 100%)',
          opacity: 0.68,
        }}
      />
      <span
        className="clay-bubble anim-float-slow"
        aria-hidden="true"
        style={{
          width: 48,
          height: 48,
          top: '10%',
          right: '6%',
          background: 'linear-gradient(145deg, #D5F5E3 0%, #8FD9B4 100%)',
          opacity: 0.58,
        }}
      />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow-pill">
              <Sparkles size={15} />
              Online via Zoom &amp; Google Meet • All Age Groups
            </span>

            <h1 className="hero-headline">{SITE_INFO.fullBrandName}</h1>

            <div className="hero-tagline-wrap">
              <Sparkles size={17} />
              <span>{SITE_INFO.tagline}</span>
            </div>

            <p className="hero-lead">
              Everyone has the potential to grow, heal, and create a better version of themselves.
            </p>

            <p className="hero-subtext">
              A dedicated space for mental well-being, personal growth, healing, and
              transformation — helping you discover your strengths and lead a fulfilling life.{' '}
              <strong>Online consultations via Zoom &amp; Google Meet.</strong>
            </p>

            <div className="hero-actions">
              <a
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clay btn-clay-primary"
              >
                <MessageCircle size={19} />
                Enquire on WhatsApp
                <ArrowRight size={17} />
              </a>

              <button
                type="button"
                className="btn-clay btn-clay-secondary"
                onClick={() => onOpenEnquiry('Not sure yet — help me choose!')}
              >
                <CalendarHeart size={19} />
                Book Session
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art-halo" aria-hidden="true" />

            <div className="float-charm charm-hero-top anim-float-gentle">
              <span
                className="float-charm-dot"
                style={{ background: 'linear-gradient(145deg, #6BC7FF, #3B8EE0)' }}
              />
              Zoom &amp; Google Meet
            </div>

            <div className="art-stage anim-float-slow">
              <div className="art-stage-inner">
                <img
                  src={heroArt}
                  alt="Cute 3D pastel sunshine sprout mascot smiling happily on a fluffy mint cloud surrounded by a heart, journal, and sparkles"
                  width="480"
                  height="480"
                />
              </div>
            </div>

            <div className="float-charm charm-hero-mid anim-float-reverse">
              <span
                className="float-charm-dot"
                style={{ background: 'linear-gradient(145deg, #7BE0AF, #389A6A)' }}
              />
              For All Ages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
