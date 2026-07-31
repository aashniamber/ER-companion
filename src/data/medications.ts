export interface Medication {
  id: string;
  name: string;
  description: string;
  generalPurpose: string;
  commonUses: string[];
  whatYouMayHear: string[];
  questionsToAsk: string[];
  commonConcerns: string[];
  icon: string;
}

export const medications: Medication[] = [
  {
    id: 'iv-fluids',
    name: 'IV Fluids',
    description: 'Sterile water and electrolytes given through a vein',
    generalPurpose:
      'IV fluids help rehydrate your body and restore electrolyte balance when you\'re dehydrated or need immediate hydration.',
    commonUses: [
      'Treat dehydration from vomiting or diarrhea',
      'Provide fluids during surgery or procedures',
      'Support blood pressure during illness',
      'Deliver medications quickly',
      'Maintain hydration if you can\'t drink',
    ],
    whatYouMayHear: [
      '"I\'m starting fluids to help rehydrate you"',
      '"This is normal saline—it\'s just salt water"',
      '"The fluids should make you feel better soon"',
      '"We\'re running fluids to restore your electrolytes"',
    ],
    questionsToAsk: [
      'Why do I need IV fluids?',
      'What type of fluid are you giving?',
      'How long will the fluids run?',
      'What should I expect to feel?',
      'Can I drink water instead?',
    ],
    commonConcerns: [
      'Is it safe? Yes, IV fluids are very safe and commonly used.',
      'Will it make me feel bloated? You may feel full temporarily.',
      'What\'s in the fluid? Usually water, salt, and electrolytes.',
    ],
    icon: '💧',
  },
  {
    id: 'pain-medication',
    name: 'Pain Medication',
    description: 'Medication to reduce pain',
    generalPurpose:
      'Pain medications help manage pain and make you more comfortable while you\'re evaluated and treated.',
    commonUses: [
      'Manage acute pain from injury',
      'Control post-procedure pain',
      'Ease pain from illness',
      'Improve comfort while waiting for tests',
    ],
    whatYouMayHear: [
      '"I\'m giving you something for pain"',
      '"This should help you feel better soon"',
      '"On a scale of 1-10, how\'s your pain?"',
      '"The medication should start working in a few minutes"',
    ],
    questionsToAsk: [
      'What pain medication are you giving?',
      'How long until it works?',
      'Are there side effects?',
      'Can I take this at home?',
      'Will it make me drowsy?',
    ],
    commonConcerns: [
      'Will it be addictive? Short-term ER use is safe.',
      'Will it make me loopy? You may feel drowsy—that\'s normal.',
      'Why don\'t you give stronger medication? Staff use safe, appropriate doses.',
    ],
    icon: '💊',
  },
  {
    id: 'antibiotics',
    name: 'Antibiotics',
    description: 'Medication to fight bacterial infections',
    generalPurpose:
      'Antibiotics kill bacteria that cause infections. They may be given through IV or by mouth.',
    commonUses: [
      'Treat pneumonia or respiratory infections',
      'Treat urinary tract infections',
      'Treat wound infections',
      'Prevent infection after procedures',
    ],
    whatYouMayHear: [
      '"We\'re starting you on an antibiotic"',
      '"This antibiotic should clear the infection"',
      '"Take this antibiotic until it\'s finished"',
      '"This is to prevent infection after the procedure"',
    ],
    questionsToAsk: [
      'What infection do I have?',
      'What antibiotic are you giving?',
      'How long do I take it?',
      'What if I\'m allergic to penicillin?',
      'Can I take this with other medications?',
    ],
    commonConcerns: [
      'Aren\'t antibiotics bad? No—they\'re lifesaving when you have an infection.',
      'Will they make me feel sick? Most people tolerate them well.',
      'Do I have to take the full course? Yes—finishing the course prevents resistant bacteria.',
    ],
    icon: '🧬',
  },
  {
    id: 'anti-nausea',
    name: 'Anti-Nausea Medication',
    description: 'Medication to reduce nausea and vomiting',
    generalPurpose:
      'Anti-nausea medications help control nausea and vomiting caused by illness, pain, or medications.',
    commonUses: [
      'Reduce nausea from pain medications',
      'Control vomiting from illness',
      'Manage nausea after procedures',
      'Allow you to take other medications',
    ],
    whatYouMayHear: [
      '"I\'m giving you something for the nausea"',
      '"This should calm your stomach"',
      '"You can try eating something mild in a few minutes"',
    ],
    questionsToAsk: [
      'What anti-nausea medication are you using?',
      'How quickly will it work?',
      'Can I eat after taking this?',
      'What if it doesn\'t work?',
    ],
    commonConcerns: [
      'Will it work right away? Usually within 15-30 minutes.',
      'Can I eat now? Wait 15-20 minutes, then try light food.',
    ],
    icon: '🤢',
  },
  {
    id: 'breathing-treatment',
    name: 'Breathing Treatment (Nebulizer)',
    description: 'Medication delivered through a breathing device',
    generalPurpose:
      'Breathing treatments deliver medication directly to your lungs via a nebulizer or inhaler. This helps open airways and improve breathing.',
    commonUses: [
      'Treat asthma attacks',
      'Treat COPD exacerbations',
      'Open blocked airways',
      'Improve oxygen levels',
    ],
    whatYouMayHear: [
      '"I\'m setting up a breathing treatment for you"',
      '"Breathe normally through the mouthpiece"',
      '"This will help your breathing"',
      '"Let me know if you get shaky—that\'s a normal side effect"',
    ],
    questionsToAsk: [
      'What medication is in this treatment?',
      'How long will the treatment take?',
      'What will I feel?',
      'Are there side effects?',
      'Will I need more than one treatment?',
    ],
    commonConcerns: [
      'Why do I feel shaky? The medication can cause mild shakiness—it\'s normal.',
      'Will it taste bad? The medication may taste a bit bitter.',
      'Can I do this at home? You may receive a prescription inhaler for home.',
    ],
    icon: '💨',
  },
];

export const getMedication = (id: string): Medication | undefined => {
  return medications.find((med) => med.id === id);
};
