import { useEffect, useState } from 'react';
import { Award, BadgeCheck, Check, Heart, X, ZoomIn } from 'lucide-react';
import instructorPhoto from '../assets/upama-kalita.webp';
import certificatesImg from '../assets/certificates.webp';
import { CERTIFICATIONS, CREDENTIALS, SITE_INFO } from '../data/siteData';

export default function AboutFounder() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  return (
    <section id="about" className="section-block about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="clay-card instructor-profile-card">
              <div className="instructor-photo-wrap">
                <img
                  src={instructorPhoto}
                  alt={`${SITE_INFO.founder}, Founder and Certified Instructor at ${SITE_INFO.fullBrandName}`}
                  width="210"
                  height="250"
                  className="instructor-photo"
                  loading="lazy"
                />
                <span className="instructor-certified-pill">
                  <BadgeCheck size={15} />
                  Certified Instructor
                </span>
              </div>

              <div className="instructor-card-meta">
                <h3>{SITE_INFO.founder}</h3>
                <p>Founder &amp; Counseling Psychologist</p>
                <span className="instructor-brand-chip">{SITE_INFO.fullBrandName}</span>
              </div>
            </div>
          </div>

          <div className="about-content reveal">
            <span className="eyebrow-pill peach">
              <Heart size={15} />
              Meet Your Instructor
            </span>

            <h2>Built to Help You Bloom</h2>

            <div className="story-paragraphs">
              <p>
                Founded with a clear mission to empower individuals and transform lives,{' '}
                <strong>{SITE_INFO.fullBrandName}</strong> provides a supportive space to explore
                your potential, overcome challenges, and achieve meaningful growth.
              </p>
              <p>
                What began as a passion for helping people has evolved into a dedicated platform
                for mental well-being, personal development, healing, and positive transformation.
              </p>
            </div>

            <div className="credentials-box">
              <div className="credentials-heading">
                <Award size={18} color="#389A6A" />
                Certified Qualifications &amp; Credentials
              </div>
              <div className="credentials-grid">
                {CREDENTIALS.map((cred) => (
                  <div key={cred} className="credential-pill">
                    <span className="credential-check" aria-hidden="true">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Certifications Showcase */}
        <div className="clay-card certs-showcase reveal">
          <div className="certs-header">
            <div>
              <span className="eyebrow-pill" style={{ marginBottom: 8 }}>
                <BadgeCheck size={15} />
                Verified Certifications
              </span>
              <h3>Professional Certifications</h3>
            </div>
            <button
              type="button"
              className="btn-clay btn-clay-secondary btn-clay-sm"
              onClick={() => setLightboxOpen(true)}
            >
              <ZoomIn size={16} />
              View Full Size
            </button>
          </div>

          <button
            type="button"
            className="certs-frame-btn"
            onClick={() => setLightboxOpen(true)}
            aria-label="Open Upama Kalita professional certifications full view"
          >
            <img
              src={certificatesImg}
              alt="Upama Kalita professional certifications in Applied Positive Psychology, Life Coaching, Psychotherapy & Counselling, Mindful Parenting, Children & Adolescents Counselling, Psychiatric Nutrition, and CBT"
              className="certs-image"
              loading="lazy"
            />
          </button>

          <div className="certs-pill-list">
            {CERTIFICATIONS.map((cert) => (
              <span key={cert.title} className="cert-chip">
                <BadgeCheck size={14} />
                <span>
                  <strong>{cert.title}</strong> · {cert.issuer}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Professional Certifications Full View"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
        >
          <div className="lightbox-card">
            <button
              type="button"
              className="modal-close"
              aria-label="Close certificate preview"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={18} />
            </button>
            <img
              src={certificatesImg}
              alt="Upama Kalita Professional Certifications"
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
