import { useEffect, useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import {
  SERVICES,
  SITE_INFO,
  buildMailtoUrl,
  buildWhatsAppUrl,
} from '../data/siteData';

const PLATFORM_OPTIONS = ['Zoom', 'Google Meet', 'Either Works'];

export default function EnquiryModal({ open, initialService, onClose }) {
  const [name, setName] = useState('');
  const [service, setService] = useState(initialService || 'Not sure yet — help me choose!');
  const [platform, setPlatform] = useState('Zoom');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const buildMsg = () => {
    const lines = [
      `Hi ${SITE_INFO.founder}!`,
      `I would like to enquire about an online session at ${SITE_INFO.fullBrandName}.`,
      '',
      `• Name: ${name.trim() || 'A visitor'}`,
      `• Service: ${service}`,
      `• Preferred Platform: ${platform}`,
    ];
    if (note.trim()) lines.push(`• Message: ${note.trim()}`);
    lines.push('', 'Please share available timings and details. Thank you!');
    return lines.join('\n');
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(buildMsg()), '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleEmail = () => {
    window.location.href = buildMailtoUrl(
      `Online Session Enquiry – ${service}`,
      buildMsg()
    );
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-enquiry-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button
          type="button"
          className="modal-close"
          aria-label="Close enquiry modal"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <span className="eyebrow-pill" style={{ marginBottom: 12 }}>
          <Sparkles size={14} />
          Quick Session Enquiry
        </span>

        <h3 id="modal-enquiry-title" style={{ fontSize: '1.52rem', marginBottom: 6 }}>
          Let’s Start Your Uplifting Journey
        </h3>
        <p style={{ fontSize: '0.92rem', color: 'var(--ink-500)', marginBottom: 18 }}>
          Sessions are conducted online via Zoom &amp; Google Meet. Enquiry-based details shared
          directly by {SITE_INFO.founder}.
        </p>

        <form className="form-grid" onSubmit={handleWhatsApp}>
          <div className="field-group">
            <label htmlFor="modal-name">Your Name</label>
            <input
              id="modal-name"
              type="text"
              className="clay-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="modal-service">Service</label>
            <select
              id="modal-service"
              className="clay-input"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="Not sure yet — help me choose!">Not sure yet — help me choose!</option>
              <option value="Online Consultation (Zoom / Google Meet)">
                Online Consultation (Zoom / Google Meet)
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
            <div className="platform-radio-row">
              {PLATFORM_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`platform-choice ${platform === opt ? 'selected' : ''}`}
                  onClick={() => setPlatform(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="modal-note">Short Note (Optional)</label>
            <textarea
              id="modal-note"
              className="clay-input"
              style={{ minHeight: 74 }}
              placeholder="Any preferred day/time or question..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="form-actions-row">
            <button type="submit" className="btn-clay btn-clay-primary btn-clay-sm">
              <MessageCircle size={17} />
              Continue on WhatsApp
            </button>
            <button
              type="button"
              className="btn-clay btn-clay-secondary btn-clay-sm"
              onClick={handleEmail}
            >
              <Send size={16} />
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
