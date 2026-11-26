import { Sparkles, Sun } from 'lucide-react';
import mindsArt from '../assets/3d/mission-minds.webp';
import livesArt from '../assets/3d/mission-lives.webp';
import changeArt from '../assets/3d/mission-change.webp';
import { MISSION_PILLARS } from '../data/siteData';

const PILLAR_ART = {
  'empowering-minds': {
    src: mindsArt,
    alt: 'Cute 3D pastel lavender lightbulb with a green sprout and floating stars',
  },
  'enriching-lives': {
    src: livesArt,
    alt: 'Cute 3D pastel glowing peach heart cradled gently by mint leaves',
  },
  'inspiring-change': {
    src: changeArt,
    alt: 'Cute 3D pastel yellow and lavender butterfly rising above a blooming lotus',
  },
};

export default function MissionVision() {
  return (
    <section id="mission" className="section-block mission-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow-pill lavender">
            <Sparkles size={15} />
            Our Mission
          </span>
          <h2 className="section-title">What Guides Us</h2>
        </div>

        <div className="mission-grid">
          {MISSION_PILLARS.map((pillar) => {
            const art = PILLAR_ART[pillar.id];
            return (
              <article
                key={pillar.id}
                className={`clay-card clay-card-interactive mission-card tone-${pillar.tone} reveal`}
              >
                <div className="mission-3d-frame">
                  <img src={art.src} alt={art.alt} width="112" height="112" loading="lazy" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            );
          })}
        </div>

        <div className="vision-banner reveal">
          <span className="eyebrow-pill">
            <Sun size={15} />
            Our Vision
          </span>
          <p className="vision-quote">
            “To become a trusted and leading center for personal growth, mental well-being, and
            life transformation, inspiring individuals of all ages to unlock their potential and
            lead fulfilling lives.”
          </p>
        </div>
      </div>
    </section>
  );
}
