export const SAFETY_GUARDRAILS = {
  forbidden: [
    'diagnose',
    'interpret symptoms',
    'recommend treatment',
    'recommend medication',
    'tell if emergency',
    'medical advice',
    'personal medical decision',
  ],

  restrictedPatterns: [
    /what should i do/i,
    /what treatment/i,
    /what medicine/i,
    /what medication/i,
    /am i having/i,
    /do i have/i,
    /is this serious/i,
    /should i go to er/i,
  ],

  concerningPatterns: [
    /chest pain/i,
    /difficulty breathing/i,
    /severe bleeding/i,
    /unconscious/i,
    /suicide/i,
    /harm/i,
    /severe symptom/i,
  ],
};

export function checkUserInput(input: string): {
  isSafe: boolean;
  requiresAlert: boolean;
  message?: string;
} {
  const lowerInput = input.toLowerCase();

  // Check for concerning symptoms
  if (SAFETY_GUARDRAILS.concerningPatterns.some((pattern) => pattern.test(input))) {
    return {
      isSafe: false,
      requiresAlert: true,
      message:
        '⚠️ If you are experiencing a medical emergency (severe chest pain, difficulty breathing, severe bleeding, loss of consciousness, or thoughts of self-harm), please alert a nurse or medical staff immediately.',
    };
  }

  // Check for diagnosis/treatment requests
  if (
    (SAFETY_GUARDRAILS.restrictedPatterns.some((pattern) => pattern.test(input)) &&
      !lowerInput.includes('what does')) ||
    SAFETY_GUARDRAILS.forbidden.some((word) => lowerInput.includes(word))
  ) {
    return {
      isSafe: false,
      requiresAlert: false,
      message:
        'I can\'t provide medical advice or diagnose conditions. I\'m here to explain ER processes and medical terminology. Try asking: "What is [test/procedure/medication]?" or "Why do they do [procedure]?"',
    };
  }

  return {
    isSafe: true,
    requiresAlert: false,
  };
}

export function generateEducationalResponse(topic: string, journeyStage: string): string {
  const responses: Record<string, string> = {
    ekg: 'An EKG records your heart\'s electrical signals. It\'s a painless test that helps doctors check if your heart is beating normally and working well.',
    'blood test':
      'Blood tests show important information like whether you have an infection, if your organs are working properly, and your basic health markers.',
    'ct scan':
      'A CT scan uses X-rays from many angles to create detailed pictures of inside your body. It helps doctors see what\'s causing your symptoms.',
    'iv placement':
      'An IV is a small tube in your vein. It allows fluids and medications to get into your bloodstream quickly.',
    'triage':
      'Triage is the process where a nurse quickly assesses your condition and decides how urgent your care is. This determines the order patients are seen.',
  };

  return (
    responses[topic.toLowerCase()] ||
    'Great question! ER Companion can explain medical concepts and ER processes to help reduce anxiety. Ask about specific tests, procedures, or terms you\'ve heard.'
  );
}
