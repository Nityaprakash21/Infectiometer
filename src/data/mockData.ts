import { 
  MedicalSubject, 
  Question, 
  TestSeriesItem, 
  Testimonial, 
  FAQItem,
  TargetAudience,
  VideoLecture,
  InfectiousStory,
  MicroBlogPost,
  InfectiousNewsItem,
  ImageBankCase
} from '../types';

export const MEDICAL_SUBJECTS: MedicalSubject[] = [
  {
    id: 'microbiology',
    name: 'Microbiology & Infectious Diseases',
    category: 'para-clinical',
    icon: 'Bug',
    description: 'Bacteriology, virology, systemic mycology, parasitology, antimicrobial resistance, and outbreak diagnostics.',
    notesCount: 56,
    questionsCount: 1890,
    testsCount: 18,
    color: {
      bg: 'bg-[#FFE8E8]',
      border: 'border-[#FF4D4D]/40',
      text: 'text-[#FF4D4D]',
      badge: 'bg-[#FF4D4D]/10 text-[#FF4D4D]',
      light: '#FFE8E8'
    }
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology & Antimicrobials',
    category: 'para-clinical',
    icon: 'Pill',
    description: 'Antimicrobial mechanisms, pharmacokinetics, autonomic pharmacology, and rational clinical therapeutics.',
    notesCount: 52,
    questionsCount: 1740,
    testsCount: 15,
    color: {
      bg: 'bg-[#FFF3E0]',
      border: 'border-[#FF8A3D]/40',
      text: 'text-[#FF8A3D]',
      badge: 'bg-[#FF8A3D]/10 text-[#FF8A3D]',
      light: '#FFF3E0'
    }
  },
  {
    id: 'pathology',
    name: 'General & Systemic Pathology',
    category: 'para-clinical',
    icon: 'Microscope',
    description: 'Cell injury, acute and chronic inflammation, infectious granulomas, and organ system histopathology.',
    notesCount: 54,
    questionsCount: 1850,
    testsCount: 15,
    color: {
      bg: 'bg-[#FEF7E6]',
      border: 'border-[#FFC861]/50',
      text: 'text-[#D97706]',
      badge: 'bg-[#FFC861]/15 text-[#B45309]',
      light: '#FEF7E6'
    }
  },
  {
    id: 'medicine',
    name: 'Internal Medicine & Febrile Illness',
    category: 'clinical',
    icon: 'Stethoscope',
    description: 'PUO diagnostics, sepsis resuscitation, cardiology, pulmonology, nephrology, and clinical endocrinology.',
    notesCount: 68,
    questionsCount: 2450,
    testsCount: 22,
    color: {
      bg: 'bg-[#E0F7FA]',
      border: 'border-[#7DE8FD]/50',
      text: 'text-[#0EA5E9]',
      badge: 'bg-[#7DE8FD]/15 text-[#0EA5E9]',
      light: '#E0F7FA'
    }
  },
  {
    id: 'anatomy',
    name: 'Anatomy & Embryology',
    category: 'pre-clinical',
    icon: 'Brain',
    description: 'Gross anatomy, neuroanatomy, fascial planes of infection spread, osteology, and embryology.',
    notesCount: 46,
    questionsCount: 1420,
    testsCount: 12,
    color: {
      bg: 'bg-[#FFE8E8]',
      border: 'border-[#FF4D4D]/30',
      text: 'text-[#FF4D4D]',
      badge: 'bg-[#FF4D4D]/10 text-[#FF4D4D]',
      light: '#FFE8E8'
    }
  },
  {
    id: 'physiology',
    name: 'Physiology & Thermoregulation',
    category: 'pre-clinical',
    icon: 'Activity',
    description: 'Hypothalamic set point, fever pathogenesis, cardiac action potentials, hemodynamics, and renal transport.',
    notesCount: 42,
    questionsCount: 1280,
    testsCount: 10,
    color: {
      bg: 'bg-[#FFF3E0]',
      border: 'border-[#FF8A3D]/30',
      text: 'text-[#FF8A3D]',
      badge: 'bg-[#FF8A3D]/10 text-[#FF8A3D]',
      light: '#FFF3E0'
    }
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry & Molecular Genetics',
    category: 'pre-clinical',
    icon: 'Dna',
    description: 'Metabolic pathways, microbial genetics, viral replication, and inborn errors of metabolism.',
    notesCount: 38,
    questionsCount: 1140,
    testsCount: 8,
    color: {
      bg: 'bg-[#FEF7E6]',
      border: 'border-[#FFC861]/40',
      text: 'text-[#D97706]',
      badge: 'bg-[#FFC861]/15 text-[#B45309]',
      light: '#FEF7E6'
    }
  },
  {
    id: 'community-med',
    name: 'Community Medicine & Epidemiology',
    category: 'para-clinical',
    icon: 'Users',
    description: 'Epidemic investigation, R₀ transmission dynamics, screening indices, and immunization schedules.',
    notesCount: 34,
    questionsCount: 960,
    testsCount: 8,
    color: {
      bg: 'bg-[#E0F7FA]',
      border: 'border-[#7DE8FD]/50',
      text: 'text-[#0EA5E9]',
      badge: 'bg-[#7DE8FD]/15 text-[#0EA5E9]',
      light: '#E0F7FA'
    }
  },
  {
    id: 'surgery',
    name: 'General Surgery & Surgical Sepsis',
    category: 'clinical',
    icon: 'Scissors',
    description: 'Surgical site infections, acute abdomen, trauma resuscitation, and surgical critical care.',
    notesCount: 52,
    questionsCount: 1780,
    testsCount: 16,
    color: {
      bg: 'bg-[#FFE8E8]',
      border: 'border-[#FF4D4D]/30',
      text: 'text-[#FF4D4D]',
      badge: 'bg-[#FF4D4D]/10 text-[#FF4D4D]',
      light: '#FFE8E8'
    }
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Pediatric Infections',
    category: 'clinical',
    icon: 'Baby',
    description: 'Neonatal sepsis, febrile seizures, pediatric rash algorithms, and developmental milestones.',
    notesCount: 35,
    questionsCount: 1120,
    testsCount: 9,
    color: {
      bg: 'bg-[#FFF3E0]',
      border: 'border-[#FF8A3D]/40',
      text: 'text-[#FF8A3D]',
      badge: 'bg-[#FF8A3D]/10 text-[#FF8A3D]',
      light: '#FFF3E0'
    }
  },
  {
    id: 'obgyn',
    name: 'Obstetrics & Gynecology',
    category: 'clinical',
    icon: 'HeartHandshake',
    description: 'Perinatal TORCH infections, puerperal sepsis, gynecological oncology, and reproductive care.',
    notesCount: 48,
    questionsCount: 1540,
    testsCount: 13,
    color: {
      bg: 'bg-[#FEF7E6]',
      border: 'border-[#FFC861]/40',
      text: 'text-[#D97706]',
      badge: 'bg-[#FFC861]/15 text-[#B45309]',
      light: '#FEF7E6'
    }
  },
  {
    id: 'forensic',
    name: 'Forensic Medicine & Toxicology',
    category: 'para-clinical',
    icon: 'Scale',
    description: 'Medical jurisprudence, post-mortem decomposition signs, mechanical injuries, and toxidromes.',
    notesCount: 28,
    questionsCount: 820,
    testsCount: 7,
    color: {
      bg: 'bg-[#E0F7FA]',
      border: 'border-[#7DE8FD]/50',
      text: 'text-[#0EA5E9]',
      badge: 'bg-[#7DE8FD]/15 text-[#0EA5E9]',
      light: '#E0F7FA'
    }
  }
];

export const SAMPLE_VIGNETTE_QUESTION: Question = {
  id: 'q-cv-042',
  vignette: 'A 54-year-old male with long-standing hypertension presents with 3 hours of acute crushing retrosternal chest pain radiating to his left jaw. On arrival, body temperature is 38.2°C (febrile), heart rate is 52 bpm, and blood pressure is 98/60 mmHg. A 12-lead ECG reveals 3.5 mm ST-segment elevations in leads II, III, and aVF with reciprocal depressions in leads I and aVL.',
  subject: 'Internal Medicine',
  topic: 'Cardiology · Acute Coronary Syndromes',
  difficulty: 'High Yield',
  options: [
    {
      id: 'A',
      text: 'Left anterior descending coronary artery (LAD)',
      explanation: 'Occlusion of the LAD classically causes ST elevations in anterior precordial leads (V1–V4), not inferior leads II, III, and aVF.'
    },
    {
      id: 'B',
      text: 'Right coronary artery (RCA)',
      explanation: 'Leads II, III, and aVF examine the inferior surface of the heart, supplied by the posterior descending artery (PDA) from the RCA in ~85-90% of individuals. RCA also supplies the SA and AV nodal branches, explaining this patient’s concurrent bradycardia.'
    },
    {
      id: 'C',
      text: 'Left circumflex artery (LCx)',
      explanation: 'The LCx supplies the lateral wall of the left ventricle (leads I, aVL, V5, V6).'
    },
    {
      id: 'D',
      text: 'Left main coronary artery (LMCA)',
      explanation: 'LMCA occlusion typically produces catastrophic shock with marked ST elevation in lead aVR and widespread depression.'
    }
  ],
  correctOptionId: 'B',
  overallExplanation: 'The 12-lead ECG changes (ST elevation in II, III, aVF) confirm acute inferior wall STEMI. In approximately 85% of individuals, the posterior descending artery originates from the right coronary artery (RCA). RCA also provides arterial branches to the sinoatrial node (60%) and AV node (90%), precipitating the observed bradycardia.',
  highYieldKeyPoint: 'Inferior STEMI (leads II, III, aVF) = RCA occlusion. Always assess for Right Ventricular Infarction with right-sided lead V4R before administering nitrates.',
  references: 'Harrison’s Principles of Internal Medicine 21st Ed. · Ch. 269; Braunwald’s Heart Disease'
};

export const TEST_SERIES_LIST: TestSeriesItem[] = [
  {
    id: 'ts-01',
    title: 'Infectious Diseases, Microbiology & Antibiotic Sprint',
    subject: 'Microbiology & Pharmacology',
    category: 'Diagnostic Foundation',
    questionsCount: 50,
    durationMinutes: 45,
    difficulty: 'High Yield',
    tags: ['Antimicrobial Resistance', 'Sepsis Resuscitation', 'Gram Positives'],
    color: '#FF4D4D'
  },
  {
    id: 'ts-02',
    title: 'Clinical Pharmacology & Rational Therapeutics Sprint',
    subject: 'Pharmacology',
    category: 'Para-Clinical Applied',
    questionsCount: 60,
    durationMinutes: 50,
    difficulty: 'Moderate',
    tags: ['Antimicrobial Stewardship', 'Cardioactive Drugs', 'Adverse Reactions'],
    color: '#FF8A3D'
  },
  {
    id: 'ts-03',
    title: 'Grand Integrated Clinical Mock: Pre & Para-Clinical',
    subject: 'Integrated Medical Sciences',
    category: 'Full Mock Examination',
    questionsCount: 120,
    durationMinutes: 120,
    difficulty: 'Comprehensive',
    tags: ['Systemic Pathology', 'Clinical Pharmacology', 'Diagnostics'],
    color: '#0EA5E9'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Aarav N. Sharma',
    academicYear: 'MBBS Graduate, Internal Medicine Resident',
    medicalCollege: 'All India Institute of Medical Sciences (AIIMS)',
    examFocus: 'Postgraduate Medical Entrance Exam',
    quote: 'Infectiometer transformed my revision. Instead of drowning in 800-page textbooks, the diagnostic fever-gauges and high-yield pathways clarified mechanisms I had struggled with for years.',
    avatarInitials: 'AS',
    avatarBg: 'bg-[#FFE8E8] text-[#FF4D4D]'
  },
  {
    id: 't-2',
    name: 'Maya S. Lin',
    academicYear: '3rd Year Medical Student (Clinical Clerkships)',
    medicalCollege: 'King’s College London School of Medicine',
    examFocus: 'UK Medical Licensing Assessment (UKMLA)',
    quote: 'The Infectiometer question bank does not just test rote memory; it calibrates your clinical instinct with authentic patient vignettes and explains why every wrong distractor fails.',
    avatarInitials: 'ML',
    avatarBg: 'bg-[#FFF3E0] text-[#FF8A3D]'
  },
  {
    id: 't-3',
    name: 'Rohan K. Mehta',
    academicYear: 'Final Year MBBS Candidate',
    medicalCollege: 'Grant Government Medical College',
    examFocus: 'NEET-PG / NExT Preparation',
    quote: 'The test series accuracy analytics immediately showed me where my clinical preparation was leaking points. Being able to isolate and test weak topics before my exams was invaluable.',
    avatarInitials: 'RM',
    avatarBg: 'bg-[#E0F7FA] text-[#0EA5E9]'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is visible on the public website vs. what unlocks upon login?',
    answer: 'The public website gives you a comprehensive overview of our learning tracks and curriculum pillars, along with 1–2 free showcase samples (sample notes, masterclasses, and diagnostic tests) to experience our pedagogical quality. Detailed notes, downloadable slide decks, the full 2,000+ clinical vignette question bank, and all timed mock tests unlock once you create an account and log in.'
  },
  {
    id: 'faq-2',
    question: 'Who are the 4 major audiences Infectiometer is built for?',
    answer: 'Infectiometer features dedicated tracks for: 1) MBBS Students (focused on 2nd Year undergraduate microbiology learning), 2) NEET-PG & INI-CET Aspirants (examination-oriented revision), 3) MD/DNB Microbiology Students (postgraduate training and benchwork SOPs), and 4) Doctors, Microbiologists & Lab Professionals (diagnostic updates and antimicrobial stewardship).'
  },
  {
    id: 'faq-3',
    question: 'What materials are included in the Free Open-Access Hub?',
    answer: 'Our Free Hub requires no login or subscription and is open to the entire global medical community: Infectious Stories (short video reel format), Micro Blog clinical articles, Infectious News alerts (real-time AMR surveillance and WHO guidelines), and our Image Bank with interactive case diagnoses.'
  },
  {
    id: 'faq-4',
    question: 'How do Notes + Slide Decks work for 2nd Year MBBS and PG entrance?',
    answer: 'Every module combines in-depth conceptual notes aligned with the NMC CBME curriculum with high-density presentation slide decks (.PDF). They feature visual diagnostic flowcharts, culture algorithms, and exam trap warnings tailored for rapid pre-exam review.'
  },
  {
    id: 'faq-5',
    question: 'How do I register and choose my target track?',
    answer: 'Click "Get Started" in the navigation bar. You will be prompted to select your academic profile (MBBS, NEET-PG, MD/DNB, or Doctor/Lab Professional) to instantly tailor your workspace and curriculum modules.'
  }
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'mbbs',
    title: 'MBBS Students',
    subtitle: 'Undergraduate microbiology learning',
    focus: 'CBME-aligned second professional MBBS curriculum, practical laboratory skills, and clinical correlations.',
    targetYear: 'Currently studying in 2nd Year MBBS',
    isPrimaryFocus: true,
    accentColor: '#FF4D4D',
    bgColor: 'bg-[#FFE8E8]',
    borderColor: 'border-[#FF4D4D]/30',
    badge: '2nd Year MBBS Focused',
    offerings: [
      {
        number: 1,
        title: 'Notes + Slide Deck',
        description: 'Comprehensive, structured notes with downloadable visual presentation decks for fast review.',
        isFreeShowcase: true
      },
      {
        number: 2,
        title: 'Videos',
        description: 'Conceptual video tutorials, lab benchwork demonstrations, and clinical correlation lectures.',
        isFreeShowcase: true
      },
      {
        number: 3,
        title: 'Question Bank',
        description: 'Competency-based topic-wise questions with detailed step-by-step diagnostic rationales.'
      },
      {
        number: 4,
        title: 'Clinical Scenario',
        description: 'Real-world hospital case vignettes teaching diagnostic thinking and pathogen identification.'
      },
      {
        number: 5,
        title: 'Practical Tips & Viva Voce',
        description: 'Gram stain interpretation, culture media identification, biochemical tests, and high-yield viva trap questions.'
      },
      {
        number: 6,
        title: 'Miscellaneous High-Yield Vault',
        description: 'Flashcards, comparative pathogen tables, real-time news updates, and visual infographics.'
      }
    ]
  },
  {
    id: 'neet-pg',
    title: 'NEET-PG / INI-CET Aspirants',
    subtitle: 'Examination-oriented revision',
    focus: 'High-yield image-based questions, previous year question trends, and rapid elimination strategies.',
    targetYear: 'MBBS graduates & Interns preparing for PG entrance',
    isPrimaryFocus: true,
    accentColor: '#FF8A3D',
    bgColor: 'bg-[#FFF3E0]',
    borderColor: 'border-[#FF8A3D]/30',
    badge: 'Entrance Exam Fast Track',
    offerings: [
      {
        number: 1,
        title: 'Notes + Slide Deck',
        description: 'High-yield crisp revision notes and high-density slide decks summarizing repeat exam topics.',
        isFreeShowcase: true
      },
      {
        number: 2,
        title: 'Videos',
        description: 'Rapid review crash lectures, 200+ image-based question marathons, and memory mnemonics.',
        isFreeShowcase: true
      },
      {
        number: 3,
        title: 'Question Bank',
        description: 'Vignette-heavy clinical questions mirroring the latest NEET-PG & INI-CET patterns.'
      },
      {
        number: 4,
        title: 'Test Series',
        description: 'Timed full-length mocks, subject sprints, and previous year question (PYQ) analytics.'
      }
    ]
  },
  {
    id: 'md-dnb',
    title: 'MD/DNB Microbiology Students',
    subtitle: 'Postgraduate learning and practical training',
    focus: 'Advanced diagnostic bacteriology, molecular protocols, mycology, automated AST, and research methodology.',
    targetYear: 'Postgraduate Junior & Senior Residents',
    isPrimaryFocus: false,
    accentColor: '#0EA5E9',
    bgColor: 'bg-[#E0F7FA]',
    borderColor: 'border-[#0EA5E9]/30',
    badge: 'Postgraduate Specialization',
    offerings: [
      {
        number: 1,
        title: 'Advanced Bench Protocols',
        description: 'Standard operating procedures (SOPs), MALDI-TOF, molecular PCR primers, and sequencing workflows.'
      },
      {
        number: 2,
        title: 'CLSI & EUCAST AST Standards',
        description: 'In-depth breakpoint interpretation, intrinsic resistance tables, and phenotypic confirmatory tests.'
      },
      {
        number: 3,
        title: 'Hospital Infection Control (HIC)',
        description: 'Outbreak investigation steps, biomedical waste management (BMW), and air sampling audit checklists.'
      },
      {
        number: 4,
        title: 'Thesis & Journal Club Resources',
        description: 'High-impact literature digests, statistical templates, and landmark infectious disease trials.'
      }
    ]
  },
  {
    id: 'professional',
    title: 'Doctors, Microbiologists & Laboratory Professionals',
    subtitle: 'Diagnostic and clinical updates',
    focus: 'Antimicrobial stewardship, hospital antibiogram guidance, and emerging infectious disease surveillance.',
    targetYear: 'Practicing Physicians, Pathologists & Lab Directors',
    isPrimaryFocus: false,
    accentColor: '#10B981',
    bgColor: 'bg-[#ECFDF5]',
    borderColor: 'border-[#10B981]/30',
    badge: 'Clinical Practice & Lab',
    offerings: [
      {
        number: 1,
        title: 'Antimicrobial Stewardship Guides',
        description: 'AWaRe classification implementation, empiric antibiotic regimens, and de-escalation protocols.'
      },
      {
        number: 2,
        title: 'Real-Time Outbreak & AMR Bulletins',
        description: 'Immediate regional alerts on resistant clones (CRE, Candida auris, VRE) and public health updates.'
      },
      {
        number: 3,
        title: 'Difficult Diagnostic Case Reviews',
        description: 'Multi-disciplinary clinical dilemmas in immunocompromised hosts, ICU sepsis, and fever of unknown origin.'
      },
      {
        number: 4,
        title: 'Accreditation & Quality Control (NABL/CAP)',
        description: 'Internal quality control (IQC) troubleshooting, proficiency testing, and lab audit templates.'
      }
    ]
  }
];

export const VIDEO_LECTURES: VideoLecture[] = [
  {
    id: 'vid-1',
    title: 'Diagnostic Algorithm for Gram-Negative Bacilli (Enterobacterales vs Non-Fermenters)',
    subject: 'Systematic Bacteriology',
    category: 'mbbs',
    duration: '18:45',
    instructor: 'Dr. Ramesh Sundaram, MD',
    instructorTitle: 'Professor of Clinical Microbiology',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579165466791-788226ab77b6?auto=format&fit=crop&w=600&q=80',
    isFreeShowcase: true,
    slideDeckIncluded: true,
    keyPoints: [
      'Catalase, Oxidase, and Hugh-Leifson OF test differentiations',
      'TSI agar slant/butt reaction patterns and H2S production',
      'Pseudomonas vs Acinetobacter vs Stenotrophomonas key markers'
    ]
  },
  {
    id: 'vid-2',
    title: 'Antimicrobial Resistance: ESBL, AmpC, and Carbapenemases Demystified',
    subject: 'Antimicrobial Therapy',
    category: 'neet-pg',
    duration: '24:10',
    instructor: 'Dr. Priya V. Sharma, MD, DNB',
    instructorTitle: 'Consultant Clinical Microbiologist',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    isFreeShowcase: true,
    slideDeckIncluded: true,
    keyPoints: [
      'Ambler molecular classes (A, B, C, D) & phenotypic detection',
      'The Modified Hodge Test vs mCIM vs Carba NP assay',
      'High-yield drugs of choice for KPC, NDM-1, and OXA-48 producers'
    ]
  },
  {
    id: 'vid-3',
    title: 'Staphylococcus aureus vs CoNS: Toxins, Biofilms & MRSA Diagnostics',
    subject: 'General & Systemic Bacteriology',
    category: 'mbbs',
    duration: '21:30',
    instructor: 'Dr. Ramesh Sundaram, MD',
    instructorTitle: 'Professor of Clinical Microbiology',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    isFreeShowcase: false,
    slideDeckIncluded: true,
    keyPoints: [
      'Coagulase test (slide vs tube) and Mannitol Salt Agar reactions',
      'mecA gene, PBP2a, and Cefoxitin disc diffusion criteria',
      'Toxic Shock Syndrome Toxin (TSST-1) superantigen mechanism'
    ]
  },
  {
    id: 'vid-4',
    title: 'Systemic Mycology & Opportunistic Fungal Infections (Mucor vs Aspergillus)',
    subject: 'Medical Mycology',
    category: 'neet-pg',
    duration: '26:15',
    instructor: 'Dr. Priya V. Sharma, MD, DNB',
    instructorTitle: 'Consultant Clinical Microbiologist',
    thumbnailUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    isFreeShowcase: false,
    slideDeckIncluded: true,
    keyPoints: [
      'Hyphal morphology: Acute 45° septate vs Broad 90° aseptate',
      'KOH mount, Calcofluor white, and Gomori methenamine silver (GMS)',
      'First-line antifungal therapies and surgical debridement timing'
    ]
  }
];

export const INFECTIOUS_STORIES: InfectiousStory[] = [
  {
    id: 'story-1',
    title: 'The Green Pigment Clue in the ICU',
    duration: '0:58 min',
    pathogen: 'Pseudomonas aeruginosa',
    vignetteTeaser: 'A 64-year-old intubated patient develops purulent green endotracheal aspirate with a sweet, grape-like aroma...',
    keyPearl: 'Pyocyanin (blue-green) + Pyoverdine (fluorescent yellow) produce the characteristic coloration in severe ventilator-associated pneumonia.',
    category: 'Short Video Reel',
    views: '14.2k views',
    color: '#0EA5E9'
  },
  {
    id: 'story-2',
    title: 'The String Test Mystery After Flood Relief',
    duration: '1:12 min',
    pathogen: 'Vibrio cholerae O1',
    vignetteTeaser: 'Severe rice-water diarrhea after consuming pond water. Sodium deoxycholate on glass slide forms a 10mm viscous mucoid string...',
    keyPearl: 'The String Test rapidly differentiates Vibrio from Aeromonas. TCBS agar shows classic large yellow colonies (sucrose fermenting).',
    category: 'Short Video Reel',
    views: '19.8k views',
    color: '#FF8A3D'
  },
  {
    id: 'story-3',
    title: 'The Black Eschar in a Wool Factory Worker',
    duration: '1:05 min',
    pathogen: 'Bacillus anthracis',
    vignetteTeaser: 'A painless pruritic papule turns into a vesicle, rapidly degenerating into a coal-black necrotic eschar surrounded by brawny edema...',
    keyPearl: 'Non-motile, Medusa-head colonies on nutrient agar with string-of-pearls reaction on penicillin-containing medium.',
    category: 'Short Video Reel',
    views: '22.5k views',
    color: '#FF4D4D'
  },
  {
    id: 'story-4',
    title: 'The Soap-Bubble Sign in Cryptococcal Meningitis',
    duration: '1:20 min',
    pathogen: 'Cryptococcus neoformans',
    vignetteTeaser: 'Subacute headache in an HIV-positive patient with CD4 < 100. MRI brain shows gelatinous pseudocysts in Virchow-Robin spaces...',
    keyPearl: 'India Ink shows negative staining of the thick polysaccharide capsule. Urease positive and forms brown colonies on birdseed (Niger seed) agar.',
    category: 'Short Video Reel',
    views: '16.7k views',
    color: '#10B981'
  }
];

export const MICRO_BLOG_POSTS: MicroBlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Interpret the D-Test for Inducible Clindamycin Resistance (iMLSb)',
    date: 'Updated November 2026',
    readTime: '4 min read',
    excerpt: 'Why placing Erythromycin and Clindamycin discs 15 mm apart on Mueller-Hinton agar prevents clinical treatment failure in MRSA osteomyelitis.',
    fullContent: [
      'The erm gene encodes an RNA methylase that confers cross-resistance to Macrolides, Lincosamides, and Streptogramin B (MLSb). In inducible resistance, the methylase is synthesized only in the presence of an inducer like erythromycin.',
      'On Mueller-Hinton agar with Erythromycin (15 µg) and Clindamycin (2 µg) placed 15 mm edge-to-edge: look for flattening of the clindamycin inhibition zone adjacent to the erythromycin disk, producing a distinctive "D-shaped" zone.',
      'Clinical Takeaway: If the D-test is positive, report Clindamycin as RESISTANT to avoid treatment failure with lincosamide therapy.'
    ],
    author: 'Infectiometer Academic Faculty',
    tags: ['Clinical Microbiology', 'AST Traps', 'Staphylococcus']
  },
  {
    id: 'blog-2',
    title: 'Five High-Yield Gram Stain Pitfalls in the Emergency Laboratory',
    date: 'Updated October 2026',
    readTime: '5 min read',
    excerpt: 'Over-decolorization, crystal violet precipitation, and aging bacterial cultures frequently lead to misdiagnosed smears. Here is how to avoid them.',
    fullContent: [
      'Pitfall 1: Over-decolorization turns Gram-positive cocci pink, mimicking Neisseria or Acinetobacter.',
      'Pitfall 2: Antibiotic pre-treatment elongates Gram-negative bacilli into bizarre filaments.',
      'Pitfall 3: Background proteinaceous debris like mucus can trap crystal violet and look like clusters of cocci.',
      'Diagnostic Tip: Always use background polymorphonuclear leukocytes (PMNs) as an internal control: their nuclei must stain strictly pink/Gram-negative.'
    ],
    author: 'Infectiometer Laboratory Group',
    tags: ['Laboratory Practical', 'Gram Stain', 'Emergency Diagnostics']
  },
  {
    id: 'blog-3',
    title: 'Carbapenem-Resistant Enterobacterales (CRE): Practical Algorithm for KPC vs NDM',
    date: 'Updated November 2026',
    readTime: '6 min read',
    excerpt: 'Differentiating Serine Carbapenemases (Class A) from Metallo-Beta-Lactamases (Class B) to select appropriate novel beta-lactamase inhibitor combinations.',
    fullContent: [
      'Class A (KPC): Inhibited by vaborbactam and avibactam. Ceftazidime-avibactam is effective.',
      'Class B (NDM, VIM, IMP): Zinc-dependent metallo-beta-lactamases that are NOT inhibited by avibactam or vaborbactam, but preserve susceptibility to Aztreonam.',
      'Diagnostic Rule: Aztreonam-avibactam or Cefiderocol represents the primary therapeutic option for confirmed NDM producers.'
    ],
    author: 'Infectiometer Infectious Disease Team',
    tags: ['AMR Surveillance', 'CRE', 'Antibiotic Stewardship']
  }
];

export const INFECTIOUS_NEWS: InfectiousNewsItem[] = [
  {
    id: 'news-1',
    title: 'WHO Releases Updated Bacterial Priority Pathogens List (BPPL 2024–2026)',
    source: 'World Health Organization (WHO)',
    date: 'Recent Update',
    tag: 'AMR Alert',
    summary: 'Carbapenem-resistant Acinetobacter baumannii, Carbapenem-resistant Enterobacterales (CRE), and 3rd-gen cephalosporin-resistant Enterobacterales maintain critical priority status.',
    urgency: 'high'
  },
  {
    id: 'news-2',
    title: 'Clade Ib Mpox Surveillance: Enhanced Genomic Diagnostic Protocols Issued',
    source: 'National CDC & Health Agencies',
    date: 'Surveillance Alert',
    tag: 'Outbreak Watch',
    summary: 'Guidelines emphasize PCR testing of dry lesion swabs with viral transport media and standardized biosafety level 2+ precautions for laboratory personnel.',
    urgency: 'high'
  },
  {
    id: 'news-3',
    title: 'CLSI M100 Updates: Adjusted Fluoroquinolone and Ceftriaxone Breakpoints for Salmonella',
    source: 'Clinical & Laboratory Standards Institute',
    date: 'Practice Guideline',
    tag: 'IPC Guideline',
    summary: 'Lowered susceptibility MIC breakpoints reflect clinical cure failure rates in enteric fever when gyrA mutations are present despite in vitro apparent susceptibility.',
    urgency: 'medium'
  }
];

export const IMAGE_BANK_CASES: ImageBankCase[] = [
  {
    id: 'case-1',
    title: 'Centrifuged CSF Smear in Acute Meningitis',
    smearOrCultureType: 'Gram Stain from Centrifuged Cerebrospinal Fluid',
    magnification: '1000x Oil Immersion',
    clinicalVignette: 'A 28-year-old male presents with acute high fever, severe nuchal rigidity, and photophobia. CSF examination reveals cloudy fluid, opening pressure 280 mmH2O, 2,400 cells/mm³ (92% neutrophils), and elevated protein 320 mg/dL.',
    microscopicFeatures: [
      'Lancet-shaped Gram-positive diplococci in pairs and short chains',
      'Abundant degenerating polymorphonuclear leukocytes (PMNs)',
      'Prominent clear unstained capsular halo surrounding diplococci'
    ],
    diagnosis: 'Pneumococcal Meningitis (Streptococcus pneumoniae)',
    pearls: 'Optochin sensitive (zone ≥ 14 mm) and Bile soluble (desoxycholate lyse the bacterial wall). Quellung reaction yields capsular swelling.',
    organism: 'Streptococcus pneumoniae'
  },
  {
    id: 'case-2',
    title: 'Currant-Jelly Sputum in Friedländer Pneumonia',
    smearOrCultureType: 'Sputum Gram Stain & MacConkey Agar Plating',
    magnification: '1000x Oil Immersion',
    clinicalVignette: 'A 55-year-old chronic alcoholic male presents with necrotizing lobar pneumonia, high fever, and thick currant-jelly sputum. Chest radiograph confirms right upper lobe cavitary consolidation with bulging minor fissure.',
    microscopicFeatures: [
      'Plump, encapsulated Gram-negative bacilli with clear capsular halo',
      'MacConkey agar: large pink, mucoid colonies stringing on wire loop',
      'Non-motile bacillus; Voges-Proskauer positive, urease weakly positive'
    ],
    diagnosis: 'Friedländer’s Pneumonia (Klebsiella pneumoniae)',
    pearls: 'Non-motile, capsulated (hypervirulent K1/K2 serotypes cause invasive pyogenic liver abscesses). Highly prone to producing ESBL and carbapenemases.',
    organism: 'Klebsiella pneumoniae'
  },
  {
    id: 'case-3',
    title: 'Albert Stain of Faucial Pseudomembrane Exudate',
    smearOrCultureType: 'Albert Stain (Toluidine Blue & Malachite Green)',
    magnification: '1000x Oil Immersion',
    clinicalVignette: 'A 7-year-old unimmunized child presents with low-grade fever, sore throat, bull-neck lymphadenopathy, and a dirty-grey tough pharyngeal pseudomembrane that bleeds profusely upon gentle attempts to remove it.',
    microscopicFeatures: [
      'Slender green-stained bacilli arranged at acute angles (Chinese letters)',
      'Bluish-black metachromatic volutin (Babes-Ernst) polar granules',
      'Potassium tellurite agar (McLeod’s) yields gunmetal grey-black colonies'
    ],
    diagnosis: 'Faucial Diphtheria (Corynebacterium diphtheriae)',
    pearls: 'Diphtheria toxin inhibits protein synthesis by ADP-ribosylation of Elongation Factor-2 (EF-2). Elek’s immunodiffusion test confirms toxigenicity.',
    organism: 'Corynebacterium diphtheriae'
  }
];
