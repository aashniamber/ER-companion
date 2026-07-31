export interface Procedure {
  id: string;
  name: string;
  description: string;
  whatItIs: string;
  whyItIsDone: string[];
  whatToExpect: string[];
  duration: string;
  whatYouMayHear: string[];
  questionsToAsk: string[];
  commonConcerns: string[];
  icon: string;
}

export const procedures: Procedure[] = [
  {
    id: 'iv-placement',
    name: 'IV Placement',
    description: 'Small tube placed in your vein',
    whatItIs:
      'A small plastic tube (catheter) is placed into a vein in your arm or hand. This allows fluids and medications to be given directly into your bloodstream.',
    whyItIsDone: [
      'Administer fluids for hydration',
      'Give medications quickly',
      'Draw blood samples',
      'Prepare for possible emergency treatment',
      'Provide nutrition if you can\'t eat',
    ],
    whatToExpect: [
      'A nurse cleans the area with alcohol',
      'You may feel a small tourniquet around your arm (to make veins visible)',
      'A needle is used to place the catheter',
      'You may feel a small pinch or sting',
      'Once placed, you won\'t feel the tube',
      'Tape secures the IV in place',
      'You can move your arm, but avoid bending your elbow too much',
    ],
    duration: '2-5 minutes',
    whatYouMayHear: [
      '"I\'m going to put an IV in now"',
      '"You may feel a little pinch"',
      '"The catheter is in—this is just the tube"',
      '"Let me tape this down"',
    ],
    questionsToAsk: [
      'Why do I need an IV?',
      'Can I still move my arm?',
      'What will you give through the IV?',
      'How long will the IV stay in?',
      'Does it need to stay in if I\'m just waiting?',
    ],
    commonConcerns: [
      'Does it hurt? Brief pinch when the needle goes in, then painless.',
      'Can I use that arm? Yes, but avoid bending the elbow where the IV is.',
      'What if my vein is hard to find? Tell staff—they have experience and can try different sites.',
    ],
    icon: '💉',
  },
  {
    id: 'blood-draw',
    name: 'Blood Draw',
    description: 'Blood sample taken from your vein',
    whatItIs:
      'A healthcare provider uses a needle to take a small amount of blood from a vein in your arm. Usually done when an IV is placed.',
    whyItIsDone: [
      'Check for infections',
      'Measure blood cells',
      'Evaluate organ function',
      'Check blood glucose',
      'Determine blood type',
    ],
    whatToExpect: [
      'A rubber tourniquet is placed on your upper arm',
      'The area is cleaned with alcohol',
      'A needle goes into a vein',
      'You may feel a small pinch',
      'Blood fills small tubes',
      'The needle is removed',
      'Pressure and bandage are applied',
    ],
    duration: '1-3 minutes',
    whatYouMayHear: [
      '"Make a fist"',
      '"You\'ll feel a little poke"',
      '"Got it—all done"',
      '"Apply pressure to this spot"',
    ],
    questionsToAsk: [
      'What are you testing for?',
      'When will results be ready?',
      'How much blood are you taking?',
      'What if you can\'t find a vein?',
    ],
    commonConcerns: [
      'Will it hurt much? Just a quick pinch.',
      'Why do they take so much? Only a small amount is taken.',
      'Can I eat first? Usually yes, but check with staff.',
    ],
    icon: '🩸',
  },
  {
    id: 'wound-cleaning',
    name: 'Wound Cleaning',
    description: 'Cleaning and preparing a wound',
    whatItIs:
      'Your wound is cleaned to remove dirt, debris, and bacteria. This prevents infection and prepares the wound for treatment.',
    whyItIsDone: [
      'Remove dirt and debris from wound',
      'Prevent infection',
      'Prepare wound for stitches or other treatment',
      'Assess the depth and severity of the wound',
    ],
    whatToExpect: [
      'The area around the wound is cleaned',
      'Your wound may be numbed with local anesthetic',
      'Sterile water or saline is used to rinse the wound',
      'A healthcare provider examines the wound',
      'Bleeding is controlled',
      'The wound is dried',
    ],
    duration: '10-20 minutes',
    whatYouMayHear: [
      '"This will sting for a second"',
      '"I\'m cleaning out the wound"',
      '"Does this hurt?"',
      '"The wound looks good"',
    ],
    questionsToAsk: [
      'Do I need stitches?',
      'Will there be a scar?',
      'How do I keep it clean at home?',
      'When can I get the stitches removed?',
      'What signs of infection should I watch for?',
    ],
    commonConcerns: [
      'Will it hurt? It may sting when cleaned, but numbing medicine helps.',
      'Will there be a scar? It depends on the wound depth and your skin.',
      'Do I need stitches? Not all wounds need stitches. Staff will advise.',
    ],
    icon: '🩹',
  },
  {
    id: 'stitches',
    name: 'Stitches (Sutures)',
    description: 'Closing a wound with thread',
    whatItIs:
      'A healthcare provider uses special thread to close a wound. This brings the edges together and helps it heal with minimal scarring.',
    whyItIsDone: [
      'Close deep or gaping wounds',
      'Minimize scarring',
      'Prevent infection',
      'Promote proper healing',
    ],
    whatToExpect: [
      'The wound is numbed with local anesthetic',
      'The area is cleaned and prepped',
      'A healthcare provider uses a needle and thread to stitch the wound',
      'You may feel pressure but not pain',
      'Multiple stitches may be needed',
      'A bandage is applied after',
      'Stitches are typically removed in 5-14 days depending on location',
    ],
    duration: '15-30 minutes',
    whatYouMayHear: [
      '"This is going to feel tight but shouldn\'t hurt"',
      '"One more stitch"',
      '"All done—wound is closed"',
    ],
    questionsToAsk: [
      'How many stitches do I need?',
      'When should they be removed?',
      'How do I keep this clean?',
      'What if the stitches break?',
      'Will it scar?',
    ],
    commonConcerns: [
      'Does it hurt? Numbing medicine prevents pain.',
      'Will the scar be bad? Proper care minimizes scarring.',
      'How do I care for it? Staff will give you detailed instructions.',
    ],
    icon: '🧵',
  },
  {
    id: 'splinting',
    name: 'Splinting',
    description: 'Stabilizing a suspected fracture',
    whatItIs:
      'A splint is applied to immobilize a suspected broken bone or severe sprain. It prevents movement and pain while you heal.',
    whyItIsDone: [
      'Immobilize suspected fractures',
      'Reduce pain',
      'Prevent further injury',
      'Allow initial swelling to go down',
      'Allow for X-ray imaging',
    ],
    whatToExpect: [
      'X-rays are taken to check for fracture',
      'The area is cleaned and may be numbed',
      'Padding is applied',
      'A splint material (fiberglass or plaster) is applied',
      'The splint is wrapped securely',
      'You\'re given care instructions',
    ],
    duration: '20-30 minutes',
    whatYouMayHear: [
      '"Try not to move that arm"',
      '"This will be snug but not too tight"',
      '"Let me check that it\'s comfortable"',
    ],
    questionsToAsk: [
      'Do I have a fracture?',
      'How long do I wear the splint?',
      'Can I shower with this on?',
      'When should I follow up?',
      'What activities should I avoid?',
    ],
    commonConcerns: [
      'Is it too tight? It should be snug but not cut off circulation.',
      'Can I remove it? No—keep it on until your follow-up.',
      'Will my arm be okay? Most fractures heal well with proper care.',
    ],
    icon: '🦴',
  },
  {
    id: 'catheter-placement',
    name: 'Catheter Placement',
    description: 'Tube placed for urination or drainage',
    whatItIs:
      'A thin, sterile tube (catheter) is placed into the bladder to drain urine. This is done when you cannot urinate on your own.',
    whyItIsDone: [
      'Allow urination if you can\'t empty your bladder',
      'Measure urine output',
      'Allow accurate urine collection for testing',
      'Prevent complications from urine retention',
    ],
    whatToExpect: [
      'The area is cleaned with antiseptic',
      'Local numbing medicine is applied',
      'A sterile catheter is gently placed into the urinary tract',
      'Urine drains into a collection bag',
      'The catheter is secured with tape',
      'You\'ll feel pressure but not pain',
    ],
    duration: '5-10 minutes',
    whatYouMayHear: [
      '"This will be uncomfortable but brief"',
      '"You\'ll feel pressure"',
      '"The catheter is in place"',
    ],
    questionsToAsk: [
      'Why do I need a catheter?',
      'How long will it stay in?',
      'How is it removed?',
      'What should I do if it becomes uncomfortable?',
      'What signs of infection should I watch for?',
    ],
    commonConcerns: [
      'Is it painful? Numbing medicine minimizes discomfort.',
      'Will it stay in long? Usually temporary—staff will remove it.',
      'What if I need to move? The collection bag can be carried.',
    ],
    icon: '💧',
  },
];

export const getProcedure = (id: string): Procedure | undefined => {
  return procedures.find((proc) => proc.id === id);
};
