export interface MedicalSubject {
  id: string;
  name: string;
  category: 'pre-clinical' | 'para-clinical' | 'clinical';
  icon: string;
  description: string;
  notesCount: number;
  questionsCount: number;
  testsCount: number;
  color: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    light: string;
  };
}

export interface QuestionOption {
  id: string;
  text: string;
  explanation: string;
}

export interface Question {
  id: string;
  vignette: string;
  subject: string;
  topic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'High Yield';
  options: QuestionOption[];
  correctOptionId: string;
  overallExplanation: string;
  highYieldKeyPoint: string;
  references: string;
}

export interface TestSeriesItem {
  id: string;
  title: string;
  subject: string;
  category: string;
  questionsCount: number;
  durationMinutes: number;
  difficulty: 'Moderate' | 'High Yield' | 'Comprehensive';
  tags: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  academicYear: string;
  medicalCollege: string;
  examFocus: string;
  quote: string;
  avatarInitials: string;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type AudienceId = 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional';

export interface TargetAudience {
  id: AudienceId;
  title: string;
  subtitle: string;
  focus: string;
  targetYear?: string;
  isPrimaryFocus?: boolean;
  offerings: {
    number: number;
    title: string;
    description: string;
    isFreeShowcase?: boolean;
  }[];
  accentColor: string;
  bgColor: string;
  borderColor: string;
  badge: string;
}

export interface VideoLecture {
  id: string;
  title: string;
  subject: string;
  category: 'mbbs' | 'neet-pg' | 'all';
  duration: string;
  instructor: string;
  instructorTitle: string;
  thumbnailUrl: string;
  isFreeShowcase: boolean;
  slideDeckIncluded: boolean;
  keyPoints: string[];
  videoEmbedId?: string;
}

export interface InfectiousStory {
  id: string;
  title: string;
  duration: string;
  pathogen: string;
  vignetteTeaser: string;
  keyPearl: string;
  category: string;
  views: string;
  color: string;
}

export interface MicroBlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  fullContent: string[];
  author: string;
  tags: string[];
}

export interface InfectiousNewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  tag: 'AMR Alert' | 'Emerging Infection' | 'IPC Guideline' | 'Outbreak Watch';
  summary: string;
  urgency: 'high' | 'medium' | 'info';
}

export interface ImageBankCase {
  id: string;
  title: string;
  smearOrCultureType: string;
  magnification: string;
  clinicalVignette: string;
  microscopicFeatures: string[];
  diagnosis: string;
  pearls: string;
  organism: string;
}
