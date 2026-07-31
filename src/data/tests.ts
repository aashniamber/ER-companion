export interface Test {
  id: string;
  name: string;
  description: string;
  whatItIs: string;
  whyItIsUsed: string[];
  whatToExpect: string[];
  duration: string;
  questionsToAsk: string[];
  commonConcerns: string[];
  icon: string;
}

export const tests: Test[] = [
  {
    id: 'blood-test',
    name: 'Blood Test',
    description: 'Lab analysis of your blood',
    whatItIs:
      'A small sample of blood is taken from a vein in your arm. The blood is sent to a laboratory for analysis.',
    whyItIsUsed: [
      'Check for infections (white blood cells)',
      'Check for anemia (red blood cells)',
      'Measure electrolytes (sodium, potassium)',
      'Check kidney and liver function',
      'Check glucose levels',
      'Identify blood clots',
    ],
    whatToExpect: [
      'A healthcare provider uses a needle to draw blood',
      'The needle stays in your arm for just a few seconds',
      'You may feel a small pinch',
      'A bandage is applied after',
      'Results typically come back within 1-2 hours in the ER',
    ],
    duration: '2-5 minutes',
    questionsToAsk: [
      'What exactly are you testing for?',
      'When will I have results?',
      'What does each result mean?',
      'Could this result change my treatment?',
    ],
    commonConcerns: [
      'Does it hurt? You may feel a small pinch, but it\'s brief.',
      'Why do they take so much? Different tests require small amounts.',
      'Can I eat before this? Usually yes, but tell staff about any recent meals.',
    ],
    icon: '🧪',
  },
  {
    id: 'urinalysis',
    name: 'Urinalysis',
    description: 'Test of your urine sample',
    whatItIs: 'You provide a urine sample in a cup. The sample is tested for various substances.',
    whyItIsUsed: [
      'Check for urinary tract infection',
      'Screen for kidney problems',
      'Detect pregnancy',
      'Measure glucose and protein',
      'Evaluate kidney function',
    ],
    whatToExpect: [
      'You are given a sterile cup',
      'You provide a urine sample in a private bathroom',
      'You return the sample to staff',
      'Results come back within 1-2 hours',
    ],
    duration: '5-10 minutes',
    questionsToAsk: [
      'Should I provide a first-morning sample?',
      'What should I avoid before testing?',
      'What do the results mean?',
    ],
    commonConcerns: [
      'Is this embarrassing? No, it\'s a routine test.',
      'Why is it needed? It helps diagnose infections and other conditions.',
    ],
    icon: '🧬',
  },
  {
    id: 'ekg',
    name: 'EKG (Electrocardiogram)',
    description: 'Records electrical activity of your heart',
    whatItIs:
      'Small stickers called electrodes are placed on your chest. They record the electrical signals of your heartbeat.',
    whyItIsUsed: [
      'Check for heart attacks',
      'Evaluate irregular heartbeat',
      'Assess chest pain',
      'Check heart rhythm',
      'Evaluate shortness of breath',
    ],
    whatToExpect: [
      'You lie on your back',
      'Small stickers (electrodes) are placed on your chest',
      'The machine records for about 10 seconds',
      'Stickers are removed—there\'s no pain',
      'Results are available immediately',
    ],
    duration: '2-5 minutes',
    questionsToAsk: [
      'Why is this EKG being done?',
      'What do the results show?',
      'Does this mean I\'m having a heart attack?',
      'Will you repeat this test?',
    ],
    commonConcerns: [
      'Is it safe? Yes, completely safe. No electricity goes into you.',
      'Will it hurt? No, it\'s painless.',
      'Why is my chest exposed? The electrodes need skin contact.',
    ],
    icon: '❤️',
  },
  {
    id: 'xray',
    name: 'X-ray',
    description: 'Picture of inside your body using radiation',
    whatItIs:
      'An X-ray machine takes pictures of the inside of your body. Different tissues show up differently.',
    whyItIsUsed: [
      'Check for broken bones',
      'Look for pneumonia',
      'Evaluate chest pain',
      'Find swallowed objects',
      'Check lung health',
    ],
    whatToExpect: [
      'You stand or lie in front of an X-ray machine',
      'The technician positions you',
      'You hold still for a few seconds',
      'The machine makes a brief sound',
      'You don\'t feel anything',
      'Pictures are reviewed within 30-60 minutes',
    ],
    duration: '10-15 minutes',
    questionsToAsk: [
      'Why do you need this X-ray?',
      'Is this safe?',
      'When will I see results?',
      'What happens if something is found?',
    ],
    commonConcerns: [
      'Is radiation safe? The amount is very small and safe.',
      'Am I pregnant? Tell staff before X-rays if you might be pregnant.',
      'Why do they leave the room? They step back to protect themselves from repeated exposure.',
    ],
    icon: '🖼️',
  },
  {
    id: 'ct-scan',
    name: 'CT Scan',
    description: 'Detailed cross-section pictures of your body',
    whatItIs:
      'A CT scanner takes multiple X-ray images from different angles. A computer combines them into detailed pictures.',
    whyItIsUsed: [
      'Evaluate abdominal pain',
      'Diagnose appendicitis',
      'Check for internal bleeding',
      'Look for kidney stones',
      'Evaluate head trauma',
    ],
    whatToExpect: [
      'You lie on a table that slides into a ring-shaped machine',
      'You may hear buzzing sounds',
      'The scan takes 10-30 seconds',
      'You don\'t feel anything',
      'You may receive contrast dye (ask about allergies)',
      'Images are analyzed immediately',
    ],
    duration: '15-30 minutes',
    questionsToAsk: [
      'Why is this scan needed?',
      'Will I receive contrast dye?',
      'Are you concerned about something specific?',
      'When will I get results?',
    ],
    commonConcerns: [
      'Is the machine safe? Yes. It\'s a painless imaging test.',
      'Will I be claustrophobic? The opening is large. Tell staff if you\'re anxious.',
      'What if I\'m allergic to contrast? Tell staff—they\'ll take precautions or skip contrast.',
    ],
    icon: '🔄',
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound',
    description: 'Uses sound waves to create pictures',
    whatItIs:
      'A technician applies gel to your skin and moves a small device over the area. Sound waves create live pictures.',
    whyItIsUsed: [
      'Check gallbladder, liver, spleen',
      'Evaluate pregnancy',
      'Look for blood clots',
      'Check blood vessel flow',
      'Evaluate abdominal pain',
    ],
    whatToExpect: [
      'Gel is applied to your skin (it\'s cold)',
      'A transducer (small device) is moved over the area',
      'You watch pictures on a screen',
      'You don\'t feel pain',
      'The scan takes 15-30 minutes',
      'Results are available within an hour',
    ],
    duration: '15-30 minutes',
    questionsToAsk: [
      'What area are you looking at?',
      'Why this particular test?',
      'Can you explain what you\'re seeing?',
      'What are you looking for?',
    ],
    commonConcerns: [
      'Is it safe? Yes, ultrasound is very safe. No radiation.',
      'Will it hurt? No. You might feel pressure but no pain.',
      'Why is there gel? Gel helps the sound waves transmit to the probe.',
    ],
    icon: '🎵',
  },
  {
    id: 'mri',
    name: 'MRI',
    description: 'Detailed pictures using magnetic fields',
    whatItIs:
      'An MRI machine uses strong magnets and radio waves to create very detailed pictures of inside your body.',
    whyItIsUsed: [
      'Evaluate brain and spinal cord injuries',
      'Detect ligament or tendon tears',
      'Find tumors',
      'Evaluate joint problems',
    ],
    whatToExpect: [
      'You remove metal items and change into a gown',
      'You lie on a table that slides into a tube-shaped machine',
      'You hear loud knocking sounds (normal)',
      'You must stay very still for 20-60 minutes',
      'You can communicate via intercom',
      'Results are reviewed after imaging',
    ],
    duration: '30-60 minutes',
    questionsToAsk: [
      'How loud will it be?',
      'What should I do if I feel anxious?',
      'Do I need to remove anything?',
      'How long will this take?',
    ],
    commonConcerns: [
      'I\'m claustrophobic. Tell staff—they can help.',
      'What if I have a pacemaker? Inform staff immediately.',
      'Is it safe? Yes, completely safe. No radiation.',
    ],
    icon: '🧲',
  },
];

export const getTest = (id: string): Test | undefined => {
  return tests.find((test) => test.id === id);
};
