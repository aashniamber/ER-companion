export interface JourneyStep {
  id: string;
  number: number;
  title: string;
  description: string;
  whatHappens: string[];
  whyItHappens: string;
  commonWonders: string[];
  questionsToAsk: string[];
  relatedResources: {
    tests?: string[];
    procedures?: string[];
    medications?: string[];
    terms?: string[];
  };
  icon: string;
  color: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'arrival-checkin',
    number: 1,
    title: 'Arrival & Check-In',
    description: 'You arrive at the emergency department and register',
    whatHappens: [
      'You check in at the reception desk',
      'A staff member verifies your insurance and personal information',
      'You may fill out a preliminary health form',
      'Your vital signs might be taken at check-in',
      'You receive a wristband with your information',
    ],
    whyItHappens:
      'Check-in ensures the hospital has accurate information about you, has your insurance details, and can contact you. This process is required for every visit and helps protect your privacy and safety.',
    commonWonders: [
      'Why do I need to give information I already gave before?',
      'Why does check-in take so long?',
      'What happens to my information?',
      'Do I need insurance to be seen?',
    ],
    questionsToAsk: [
      'Can I update my emergency contact information?',
      'How long will I typically wait after check-in?',
      'Where should I sit while I wait?',
      'What information do you need from me?',
    ],
    relatedResources: {
      terms: ['triage', 'vital-signs', 'hipaa'],
    },
    icon: '📋',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'triage',
    number: 2,
    title: 'Triage',
    description: 'A nurse assesses your condition and priority level',
    whatHappens: [
      'A nurse or triage technician calls you back',
      'They ask detailed questions about your symptoms and medical history',
      'Your vital signs are checked (temperature, blood pressure, heart rate, breathing)',
      'You may describe your pain on a scale of 1-10',
      'The nurse may perform a brief physical exam',
      'You are assigned an urgency level (1-5)',
    ],
    whyItHappens:
      'Triage helps the ER prioritize patients based on medical urgency. The sickest patients are seen first, regardless of when they arrived. This ensures the most critical patients get immediate care.',
    commonWonders: [
      'Why am I waiting if I got here before others?',
      'Why are they asking so many questions?',
      'How is my urgency decided?',
      'Does triage predict how long I\'ll wait?',
    ],
    questionsToAsk: [
      'What level am I assigned?',
      'What does my urgency level mean?',
      'Can you explain why I\'m waiting?',
      'Are my vital signs normal?',
    ],
    relatedResources: {
      terms: ['vital-signs', 'triage', 'emergency-severity-index'],
      procedures: ['blood-pressure-check'],
    },
    icon: '⚕️',
    color: 'bg-lavender-100 text-lavender-700',
  },
  {
    id: 'waiting-room',
    number: 3,
    title: 'Waiting / Room Assignment',
    description: 'You wait to be placed in a treatment room',
    whatHappens: [
      'You return to the waiting room',
      'You are called when a room becomes available',
      'You are escorted to your exam or treatment room',
      'A staff member shows you how to use the call button',
      'You may change into a hospital gown',
      'Initial monitoring equipment may be placed on you',
    ],
    whyItHappens:
      'Room assignment happens based on your needs and room availability. High-urgency patients are prioritized for rooms. Some rooms are specifically designed for certain conditions, so placement depends on what you need.',
    commonWonders: [
      'Why is the wait so long?',
      'Why do some people go before me even though they came later?',
      'Is something wrong if I\'m still waiting?',
      'How long should I expect to wait?',
    ],
    questionsToAsk: [
      'How long do you think I\'ll wait?',
      'Can you give me an estimate on the room?',
      'Is there anything I should know about the room?',
      'Where should I leave my belongings?',
    ],
    relatedResources: {
      terms: ['monitoring', 'vital-signs', 'exam-room'],
    },
    icon: '🪑',
    color: 'bg-peach-100 text-orange-700',
  },
  {
    id: 'testing-evaluation',
    number: 4,
    title: 'Testing & Evaluation',
    description: 'Tests and examinations are performed to understand your condition',
    whatHappens: [
      'Your provider (doctor or nurse practitioner) comes to see you',
      'They ask more detailed questions about your symptoms',
      'They perform a focused physical exam',
      'Blood tests, urine tests, or imaging may be ordered',
      'Depending on your condition, you may get an EKG, X-ray, CT scan, or ultrasound',
      'You may receive initial treatments (fluids, medications, etc.)',
    ],
    whyItHappens:
      'Tests help your provider understand what\'s happening. Each test provides specific information—blood tests show infections or chemical imbalances, imaging shows what\'s happening inside your body. Tests guide treatment decisions.',
    commonWonders: [
      'Why am I getting this test?',
      'How long will tests take?',
      'Are the tests safe?',
      'Will I feel anything during the test?',
      'Why are they asking the same questions again?',
    ],
    questionsToAsk: [
      'What test are you ordering and why?',
      'What should I expect during this test?',
      'When will I get results?',
      'Could you explain what this test looks for?',
      'Are there any risks with this test?',
    ],
    relatedResources: {
      tests: ['blood-test', 'urinalysis', 'ekg', 'xray', 'ct-scan', 'ultrasound'],
      procedures: ['iv-placement', 'blood-draw'],
      terms: ['labs', 'imaging', 'vitals'],
    },
    icon: '🔬',
    color: 'bg-sage-100 text-sage-700',
  },
  {
    id: 'provider-evaluation',
    number: 5,
    title: 'Provider Evaluation',
    description: 'A doctor or specialist reviews your condition and tests',
    whatHappens: [
      'A physician or advanced practice provider reviews your test results',
      'They may perform additional examinations',
      'A specialist may be called (cardiologist, surgeon, etc.) if needed',
      'Your provider discusses findings with you',
      'Treatment plan is explained',
      'You may receive procedures or ongoing treatments',
    ],
    whyItHappens:
      'Your provider brings all the information together—your symptoms, exam findings, and test results—to determine what\'s causing your condition and the best treatment. This is where the diagnosis comes together.',
    commonWonders: [
      'Why is it taking so long to see the doctor?',
      'Why is a specialist coming?',
      'Does this mean something serious?',
      'What happens if tests are normal?',
    ],
    questionsToAsk: [
      'What do my tests show?',
      'What is your diagnosis?',
      'What treatment do you recommend?',
      'What are the options?',
      'What are the risks and benefits?',
    ],
    relatedResources: {
      procedures: ['wound-cleaning', 'stitches', 'splinting', 'catheter-placement'],
      medications: ['iv-fluids', 'pain-medication', 'antibiotics', 'anti-nausea'],
      terms: ['diagnosis', 'treatment-plan', 'prognosis'],
    },
    icon: '👨‍⚕️',
    color: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'results-next-steps',
    number: 6,
    title: 'Results & Next Steps',
    description: 'Your provider discusses results and next steps',
    whatHappens: [
      'All test results are compiled and reviewed',
      'Your provider explains what the results mean',
      'A treatment plan is created—this might include continuing ER treatment or admission',
      'You receive discharge instructions or admission information',
      'Prescriptions may be written for at-home medications',
      'Follow-up appointments are scheduled',
    ],
    whyItHappens:
      'Understanding your results and next steps helps you know what to expect. Whether you\'re going home or staying in the hospital, clear instructions help you recover safely and know when to seek more care.',
    commonWonders: [
      'What do my results mean?',
      'Do I have to stay in the hospital?',
      'What do I do when I go home?',
      'When should I call if something gets worse?',
      'How do I follow up with my doctor?',
    ],
    questionsToAsk: [
      'Can you explain these results in simpler terms?',
      'What should I do at home?',
      'When should I take medications?',
      'What warning signs should I watch for?',
      'When should I follow up with my regular doctor?',
    ],
    relatedResources: {
      medications: ['pain-medication', 'antibiotics'],
      terms: ['discharge', 'follow-up', 'admission', 'observation'],
    },
    icon: '📊',
    color: 'bg-lavender-100 text-lavender-700',
  },
  {
    id: 'leaving-er',
    number: 7,
    title: 'Leaving the ER',
    description: 'Final preparations before you leave or are transferred',
    whatHappens: [
      'Discharge paperwork is prepared',
      'You receive printed discharge instructions',
      'Medications and prescriptions are explained',
      'You sign discharge forms',
      'Follow-up instructions and appointment details are given',
      'You are escorted to the exit or to an inpatient bed',
      'You remove your hospital wristband',
    ],
    whyItHappens:
      'Clear discharge instructions help you continue your recovery safely at home. Written materials ensure you remember important information. Follow-up care prevents complications and ensures proper healing.',
    commonWonders: [
      'Do I need to do anything special at home?',
      'What if I feel worse?',
      'When can I go back to work?',
      'Do I really need to follow up?',
      'What if I can\'t afford my medications?',
    ],
    questionsToAsk: [
      'Can you review these discharge instructions with me?',
      'What should I do if my symptoms return?',
      'Is it normal to feel [symptom]?',
      'Do I need the follow-up appointment?',
      'Are there resources for medication costs?',
    ],
    relatedResources: {
      terms: ['discharge', 'follow-up', 'observation', 'admission'],
    },
    icon: '👋',
    color: 'bg-sage-100 text-sage-700',
  },
];

export const getJourneyStep = (id: string): JourneyStep | undefined => {
  return journeySteps.find((step) => step.id === id);
};
