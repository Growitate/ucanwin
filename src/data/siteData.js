export const SITE_INFO = {
  brandName: 'U Can Win',
  brandSubtitle: 'The Life Uplifting Center',
  fullBrandName: 'U Can Win – The Life Uplifting Center',
  tagline: 'Because You Already Can.',
  footerMotto: 'Creating stronger minds, happier hearts and better lives — together.',
  founder: 'Upama Kalita',
  phoneDisplay: '6001629199',
  phoneFull: '+91 6001629199',
  whatsappNumber: '916001629199',
  email: 'Upamaudita@gmail.com',
  platforms: ['Zoom', 'Google Meet'],
  audience: 'All Age Groups',
};

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject, body) {
  return `mailto:${SITE_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const CREDENTIALS = [
  'Master in Psychology',
  'Master in Philosophy',
  'B.Ed',
  'Counseling Psychologist',
  'Parenting & Life Coach',
  'CBT Practitioner',
];

export const CERTIFICATIONS = [
  { title: 'Applied Positive Psychology', issuer: 'The Inner Bloom' },
  { title: 'Life Coach Certification Masterclass (3-in-1)', issuer: 'Udemy' },
  { title: 'Psychotherapy & Counselling Psychology Internship', issuer: 'The Inner Bloom' },
  { title: 'Mindful Parenting Diploma', issuer: 'Udemy' },
  { title: 'Counselling Children & Adolescents (Accredited)', issuer: 'Udemy' },
  { title: 'Psychiatric Nutrition Expert', issuer: 'Udemy Certified' },
  { title: 'CBT Cognitive Behavior Life Coach (Accredited)', issuer: 'Udemy' },
];

export const MISSION_PILLARS = [
  {
    id: 'empowering-minds',
    title: 'Empowering Minds.',
    description: 'Building clarity, self-belief, and calm inner strength.',
    tone: 'lavender',
  },
  {
    id: 'enriching-lives',
    title: 'Enriching Lives.',
    description: 'Nurturing joyful relationships and everyday emotional balance.',
    tone: 'peach',
  },
  {
    id: 'inspiring-change',
    title: 'Inspiring Change.',
    description: 'Guiding gentle, lasting transformation for all ages.',
    tone: 'mint',
  },
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'counseling', label: 'Counseling' },
  { id: 'coaching', label: 'Coaching & Growth' },
  { id: 'youth-family', label: 'Youth & Parenting' },
  { id: 'holistic', label: 'Holistic & Workshops' },
];

export const SERVICES = [
  {
    id: 'positive-psychology',
    title: 'Positive Psychology Counseling',
    category: 'counseling',
    tone: 'mint',
    icon: 'HeartHandshake',
    description: 'Discover inner strengths, optimism, and everyday resilience.',
  },
  {
    id: 'parenting-mentoring',
    title: 'Parenting Mentoring',
    category: 'youth-family',
    tone: 'peach',
    icon: 'Users',
    description: 'Calm, practical support for stronger parent-child bonds.',
  },
  {
    id: 'life-coaching',
    title: 'Life Coaching',
    category: 'coaching',
    tone: 'buttercup',
    icon: 'Compass',
    description: 'Clarify goals, build confidence, and move forward with purpose.',
  },
  {
    id: 'cbt-practitioner',
    title: 'CBT Practitioner',
    category: 'counseling',
    tone: 'lavender',
    icon: 'Brain',
    description: 'Reframe unhelpful thought patterns with practical CBT tools.',
  },
  {
    id: 'stress-emotional',
    title: 'Stress & Emotional Well-being',
    category: 'counseling',
    tone: 'sky',
    icon: 'CloudSun',
    description: 'Gentle coping tools to ease overwhelm, anxiety, and burnout.',
  },
  {
    id: 'personal-growth',
    title: 'Personal Growth',
    category: 'coaching',
    tone: 'mint',
    icon: 'Sprout',
    description: 'Build healthier habits, boundaries, and lasting self-confidence.',
  },
  {
    id: 'student-career',
    title: 'Student & Career Guidance',
    category: 'youth-family',
    tone: 'buttercup',
    icon: 'GraduationCap',
    description: 'Navigate exam stress, strengths, and career choices with clarity.',
  },
  {
    id: 'philosophy-guidance',
    title: 'Philosophy-Based Life Guidance',
    category: 'coaching',
    tone: 'lavender',
    icon: 'Feather',
    description: 'Reflective guidance for meaning, values, and inner peace.',
  },
  {
    id: 'children-adolescence',
    title: 'Children & Adolescence Counseling',
    category: 'youth-family',
    tone: 'peach',
    icon: 'Smile',
    description: 'Youth-friendly support for emotions, confidence, and school life.',
  },
  {
    id: 'workshops-training',
    title: 'Workshops & Training',
    category: 'holistic',
    tone: 'sky',
    icon: 'Presentation',
    description: 'Interactive mindset and well-being sessions for groups & institutions.',
  },
  {
    id: 'mindfulness-wellbeing',
    title: 'Mindfulness & Well-being',
    category: 'holistic',
    tone: 'buttercup',
    icon: 'Flower2',
    description: 'Simple grounding practices to invite calm into busy days.',
  },
  {
    id: 'healing-support',
    title: 'Healing & Support',
    category: 'counseling',
    tone: 'peach',
    icon: 'Heart',
    description: 'Compassionate, judgment-free space for emotional renewal.',
  },
  {
    id: 'psychiatric-nutrition',
    title: 'Psychiatric Nutrition',
    category: 'holistic',
    tone: 'mint',
    icon: 'Apple',
    description: 'Nourishing food habits that support mood and mental energy.',
  },
];
