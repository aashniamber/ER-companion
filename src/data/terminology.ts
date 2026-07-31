export interface Term {
  id: string;
  term: string;
  pronunciation?: string;
  definition: string;
  simpleExplanation: string;
  exampleUsage: string;
  icon: string;
}

export const terminology: Term[] = [
  {
    id: 'triage',
    term: 'Triage',
    pronunciation: 'tree-AHZH',
    definition:
      'The process of assessing patients and assigning them to treatment categories based on the urgency of their condition.',
    simpleExplanation:
      'Triage is how the ER decides who needs to be seen first. Sickest patients are seen before less urgent patients, regardless of arrival time.',
    exampleUsage: 'After you check in, a nurse will do your triage to figure out how urgent your condition is.',
    icon: '⚕️',
  },
  {
    id: 'vital-signs',
    term: 'Vital Signs',
    definition:
      'Basic body measurements that indicate overall health: temperature, blood pressure, heart rate, respiratory rate, and oxygen saturation.',
    simpleExplanation:
      'Vital signs are the measurements that show how your body is working. They include your temperature, blood pressure, heart rate, breathing rate, and oxygen level.',
    exampleUsage: '"We\'re checking your vital signs to see how you\'re doing."',
    icon: '📊',
  },
  {
    id: 'labs',
    term: 'Labs',
    pronunciation: 'LABZ',
    definition: 'Laboratory tests, usually blood or urine tests, that provide medical information.',
    simpleExplanation:
      'Labs are tests done on your blood or urine. They show important information like whether you have an infection or if your organs are working correctly.',
    exampleUsage: '"The doctor ordered some labs to figure out what\'s going on."',
    icon: '🧪',
  },
  {
    id: 'imaging',
    term: 'Imaging',
    definition:
      'Medical tests that create pictures of inside your body, such as X-rays, CT scans, ultrasounds, or MRIs.',
    simpleExplanation:
      'Imaging is any test that takes a picture of the inside of your body. Common imaging includes X-rays and CT scans.',
    exampleUsage: '"We\'re going to order imaging to see if there\'s anything broken."',
    icon: '🖼️',
  },
  {
    id: 'admission',
    term: 'Admission',
    definition: 'The process of checking into a hospital to stay overnight or for longer periods.',
    simpleExplanation:
      'If you need to stay in the hospital (not just the ER), you\'re admitted. You\'ll get a room and be cared for by hospital staff.',
    exampleUsage: '"Your condition requires hospital admission, so we\'re getting you a room upstairs."',
    icon: '🏥',
  },
  {
    id: 'discharge',
    term: 'Discharge',
    definition:
      'The process of leaving the hospital or ER. You receive discharge instructions for care at home.',
    simpleExplanation:
      'Discharge means you\'re leaving. Before you go, you\'ll get written instructions about how to care for yourself at home.',
    exampleUsage: '"You\'re cleared for discharge. Here are your discharge instructions."',
    icon: '👋',
  },
  {
    id: 'observation',
    term: 'Observation',
    definition:
      'A hospital stay where you\'re monitored closely but not formally admitted. Usually lasts 24 hours.',
    simpleExplanation:
      'Observation means you\'ll stay in the hospital for a short time (usually 24 hours) while staff watches you closely. You\'re not formally admitted.',
    exampleUsage: '"We\'d like to keep you under observation to make sure you\'re doing okay."',
    icon: '👁️',
  },
  {
    id: 'consultation',
    term: 'Consult (Consultation)',
    pronunciation: 'kun-SUL-tay-shun',
    definition: 'When one doctor asks another specialist to see a patient and offer their expertise.',
    simpleExplanation:
      'If your doctor thinks you need a specialist, they\'ll ask for a consultation. A specialist comes to look at you and give their opinion.',
    exampleUsage: '"I\'m going to call cardiology for a consult since you had chest pain."',
    icon: '👨‍⚕️',
  },
  {
    id: 'diagnosis',
    term: 'Diagnosis',
    pronunciation: 'dy-ug-NO-sis',
    definition: 'The identification of what disease or condition a patient has.',
    simpleExplanation:
      'A diagnosis is what\'s wrong with you. It\'s the name of your condition based on your symptoms and test results.',
    exampleUsage: '"Based on your symptoms and tests, the diagnosis is pneumonia."',
    icon: '📋',
  },
  {
    id: 'prognosis',
    term: 'Prognosis',
    pronunciation: 'prog-NO-sis',
    definition: 'A prediction of the likely course of a disease and the chances of recovery.',
    simpleExplanation:
      'Prognosis is what the doctor thinks will happen with your condition. Will you get better quickly? Will you need surgery?',
    exampleUsage: '"Your prognosis is good—most people recover from this in a few weeks."',
    icon: '🔮',
  },
  {
    id: 'acute',
    term: 'Acute',
    pronunciation: 'uh-KYOOT',
    definition: 'A condition that starts suddenly and is severe but usually short-lived.',
    simpleExplanation:
      'Acute means sudden and serious. An acute condition comes on fast. (Opposite: chronic, which lasts a long time.)',
    exampleUsage: '"You have acute appendicitis—it came on suddenly."',
    icon: '⚡',
  },
  {
    id: 'chronic',
    term: 'Chronic',
    pronunciation: 'KRON-ik',
    definition: 'A condition that lasts a long time, usually months or years.',
    simpleExplanation:
      'Chronic means long-lasting. A chronic condition stays with you over time. (Opposite: acute, which is sudden.)',
    exampleUsage: '"You have chronic diabetes, which you\'ll manage over time."',
    icon: '⏳',
  },
  {
    id: 'protocol',
    term: 'Protocol',
    pronunciation: 'PRO-tuh-kol',
    definition: 'A standardized set of procedures or rules that medical staff follow.',
    simpleExplanation:
      'A protocol is a set of steps doctors follow for certain conditions. It ensures everyone gets the same high-quality care.',
    exampleUsage: '"We\'re following stroke protocol because you had a sudden headache."',
    icon: '📝',
  },
  {
    id: 'ct-scan',
    term: 'CT Scan',
    pronunciation: 'SEE-tee',
    definition: 'Computed tomography; a scan that creates detailed cross-section images using X-rays.',
    simpleExplanation:
      'A CT scan is a special kind of X-ray that takes many pictures and combines them into detailed 3D images.',
    exampleUsage: '"We\'re ordering a CT scan to see inside your abdomen."',
    icon: '🔄',
  },
  {
    id: 'mri',
    term: 'MRI',
    pronunciation: 'EM-ar-eye',
    definition: 'Magnetic resonance imaging; creates detailed pictures using magnets and radio waves.',
    simpleExplanation:
      'An MRI is a machine that uses strong magnets to take very detailed pictures of inside your body.',
    exampleUsage: '"An MRI will show us if there\'s any damage to your knee."',
    icon: '🧲',
  },
  {
    id: 'ekg',
    term: 'EKG or ECG',
    pronunciation: 'ee-kay-JAY',
    definition: 'Electrocardiogram; a test that records the electrical activity of the heart.',
    simpleExplanation:
      'An EKG records your heart\'s electrical signals to check if it\'s working properly and beating normally.',
    exampleUsage: '"I\'m doing an EKG to make sure your heart is okay."',
    icon: '❤️',
  },
  {
    id: 'catheter',
    term: 'Catheter',
    pronunciation: 'KATH-uh-ter',
    definition: 'A thin, flexible tube inserted into the body to deliver medication, drain fluids, or monitor conditions.',
    simpleExplanation:
      'A catheter is a thin tube. Different catheters do different jobs—some deliver medicine, some drain urine, some monitor your heart.',
    exampleUsage: '"We\'re placing a catheter so we can give you fluids."',
    icon: '🧴',
  },
  {
    id: 'electrodes',
    term: 'Electrodes',
    pronunciation: 'ee-LEK-trodes',
    definition: 'Small stickers or pads placed on the skin to detect and record electrical signals.',
    simpleExplanation:
      'Electrodes are small stickers with wires attached. They pick up electrical signals from your heart or brain.',
    exampleUsage: '"I\'m putting electrodes on your chest for the heart monitor."',
    icon: '⚡',
  },
  {
    id: 'IV',
    term: 'IV',
    pronunciation: 'eye-vee',
    definition:
      'Intravenous; a needle or tube placed in a vein to deliver medication or fluids directly into the bloodstream.',
    simpleExplanation:
      'An IV is a small tube in your vein. Medicine and fluids can be given through it quickly.',
    exampleUsage: '"I\'m placing an IV so we can give you fluids and pain medicine."',
    icon: '💉',
  },
  {
    id: 'anesthesia',
    term: 'Anesthesia',
    pronunciation: 'an-us-THEE-zhuh',
    definition: 'Medication that numbs pain or causes temporary loss of consciousness for procedures.',
    simpleExplanation:
      'Anesthesia is medicine that makes you unable to feel pain. Local anesthesia numbs just one area. General anesthesia puts you to sleep.',
    exampleUsage: '"We\'re going to give you local anesthesia before stitching the wound."',
    icon: '😴',
  },
  {
    id: 'intubation',
    term: 'Intubation',
    pronunciation: 'in-too-BAY-shun',
    definition: 'Placing a tube through the mouth into the trachea to help with breathing.',
    simpleExplanation:
      'Intubation means putting a breathing tube down your throat. It helps you breathe if you can\'t breathe on your own.',
    exampleUsage: '"If you can\'t breathe on your own, we may need to intubate you."',
    icon: '💨',
  },
  {
    id: 'follow-up',
    term: 'Follow-Up',
    definition: 'A scheduled appointment or contact after discharge to check on your progress.',
    simpleExplanation:
      'Follow-up is when you see a doctor again after leaving the ER. It makes sure you\'re healing well.',
    exampleUsage: '"Make sure you follow up with your primary care doctor in one week."',
    icon: '📅',
  },
];

export const getTerminology = (id: string): Term | undefined => {
  return terminology.find((term) => term.id === id);
};

export const searchTerms = (query: string): Term[] => {
  const lowerQuery = query.toLowerCase();
  return terminology.filter((term) =>
    term.term.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery) ||
    term.simpleExplanation.toLowerCase().includes(lowerQuery)
  );
};
