import { useEffect, useState } from 'react';
import {
  Check,
  Copy,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Video,
} from 'lucide-react';
import instructorPhoto from '../assets/upama-kalita.webp';
import {
  SERVICES,
  SITE_INFO,
  buildMailtoUrl,
  buildWhatsAppUrl,
} from '../data/siteData';

const PLATFORM_OPTIONS = ['Zoom', 'Google Meet', 'Either Works'];

export default function ContactSection({ preselectedService }) {
  const [name, setName] = useState('');
  const [service, setService] = useState(preselectedService || 'Positive Psychology Counseling');
  const [platform, setPlatform] = useState('Zoom');
  const [note, setNote] = useState('');
  const [copiedKey, setCopiedKey] = useState('');
  const [sentNotice, setSentNotice] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const composeMessage = () => {
    const lines = [
      `Hi ${SITE_INFO.founder},`,
      `I would like to enquire about an online session at ${SITE_INFO.fullBrandName}.`,
      '',
      `• Name: ${name.trim() || 'A visitor'}`,
      `• Service: ${service}`,
      `• Platform: ${platform}`,
    ];
    if (note.trim()) lines.push(`• Note: ${note.trim()}`);
    lines.push('', 'Please share available slots and session details.');
    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(composeMessage()), '_blank', 'noopener,noreferrer');
    setSentNotice('WhatsApp chat opened with your enquiry details.');
  };

  const handleEmailSend = () => {
    const subject = `Session Enquiry – ${service} (${name.trim() || 'U Can Win'})`;
    window.location.href = buildMailtoUrl(subject, composeMessage());
    setSentNotice('Email app opened with your enquiry.');
  };

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow-pill peach">
            <Sparkles size={15} />
            Contact &amp; Enquiry
          </span>
          <h2 className="section-title">Start Your Journey Today</h2>
        </div>

        <div className="contact-grid">
          <div className="clay-card contact-info-card reveal">
            <h3>Get in Touch</h3>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-left">
                  <img
                    src={instructorPhoto}
                    alt={SITE_INFO.founder}
                    width="44"
                    height="44"
                    className="contact-instructor-avatar"
                    loading="lazy"
                  />
                  <div>
                    <span className="contact-item-label">Instructor &amp; Contact</span>
                    <span className="contact-item-value">{SITE_INFO.founder}</span>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-left">
                  <span className="contact-mini-orb tone-mint" aria-hidden="true">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="contact-item-label">Phone / WhatsApp</span>
                    <a href={`tel:+91${SITE_INFO.phoneDisplay}`} className="contact-item-value">
                      {SITE_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(SITE_INFO.phoneDisplay, 'phone')}
                >
                  {copiedKey === 'phone' ? (
                    <>
                      <Check size={12} style={{ verticalAlign: '-1px', marginRight: 3 }} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} style={{ verticalAlign: '-1px', marginRight: 3 }} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-item-left">
                  <span className="contact-mini-orb tone-lavender" aria-hidden="true">
                    <Mail size={18} />
                  </span>
                  <div>
                    <span className="contact-item-label">Email</span>
                    <a href={`mailto:${SITE_INFO.email}`} className="contact-item-value">
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(SITE_INFO.email, 'email')}
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check size={12} style={{ verticalAlign: '-1px', marginRight: 3 }} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} style={{ verticalAlign: '-1px', marginRight: 3 }} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-item-left">
                  <span className="contact-mini-orb tone-sky" aria-hidden="true">
                    <Video size={18} />
                  </span>
                  <div>
                    <span className="contact-item-label">Online Sessions • All Ages</span>
                    <span className="contact-item-value">Zoom &amp; Google Meet</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-direct-btns">
              <a
                href={buildWhatsAppUrl(
                  `Hi ${SITE_INFO.founder}, I'd like to enquire about an online session at ${SITE_INFO.fullBrandName}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clay btn-clay-primary btn-clay-sm"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
              <a
                href={`tel:+91${SITE_INFO.phoneDisplay}`}
                className="btn-clay btn-clay-butter btn-clay-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>

          <form className="clay-card enquiry-form-card reveal" onSubmit={handleWhatsAppSubmit}>
            <h3>Quick Session Enquiry</h3>

            <div className="form-grid" style={{ marginTop: 18 }}>
              <div className="field-group">
                <label htmlFor="enq-name">Your Name</label>
                <input
                  id="enq-name"
                  type="text"
                  className="clay-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="enq-service">Service</label>
                <select
                  id="enq-service"
                  className="clay-input"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="Not sure yet — help me choose!">
                    Not sure yet — help me choose!
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <label>Preferred Platform</label>
                <div className="platform-radio-row" role="radiogroup" aria-label="Preferred Platform">
                  {PLATFORM_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      role="radio"
                      aria-checked={platform === opt}
                      className={`platform-choice ${platform === opt ? 'selected' : ''}`}
                      onClick={() => setPlatform(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="enq-note">Short Message (Optional)</label>
                <textarea
                  id="enq-note"
                  className="clay-input"
                  style={{ minHeight: 82 }}
                  placeholder="Preferred timing or question..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn-clay btn-clay-primary btn-clay-sm">
                  <MessageCircle size={17} />
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  className="btn-clay btn-clay-secondary btn-clay-sm"
                  onClick={handleEmailSend}
                >
                  <Send size={16} />
                  Send via Email
                </button>
              </div>
            </div>

            {sentNotice && (
              <div className="form-feedback" role="status">
                <Check size={16} />
                <span>{sentNotice}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
