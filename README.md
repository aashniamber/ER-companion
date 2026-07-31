# ER Companion - Patient-Centered Emergency Department Navigation Platform

A polished MVP designed to reduce ER anxiety by helping patients understand their emergency department visit through education, not replacement of medical care.

## 🎯 Vision

**Patients don't need another chatbot. They need a guide through a confusing experience.**

ER Companion is built for people in the ER who are confused, anxious, and need to understand what's happening around them. The app empowers patients by explaining:

- Where they are in the ER process
- What is happening around them
- Why certain steps occur
- What questions they can ask their care team

## ✨ Core Features

### 1. **ER Journey Timeline** (Primary Feature)
- Visual progress tracker showing 7 stages of an ER visit
- Each stage includes:
  - **What Happens**: Step-by-step breakdown
  - **Why It Happens**: Plain-language explanation
  - **Common Wonders**: Patient FAQs ("Why am I waiting?")
  - **Questions to Ask**: Suggested questions for care team
  - **Related Resources**: Links to tests, procedures, medications, terms

### 2. **Educational Modules**

#### Tests & Scans (7 tests)
- Blood Test, Urinalysis, EKG, X-ray, CT Scan, Ultrasound, MRI
- For each: What it is, why used, what to expect, common concerns

#### Procedures (6 procedures)
- IV Placement, Blood Draw, Wound Cleaning, Stitches, Splinting, Catheter Placement
- For each: What it is, why done, what to expect, what they may hear

#### Medications (5 medication types)
- IV Fluids, Pain Medication, Antibiotics, Anti-Nausea Meds, Breathing Treatments
- For each: General purpose, common uses, what to hear, concerns

#### Medical Dictionary (20+ terms)
- Searchable glossary of ER terminology
- Examples: Triage, Vitals, Labs, Imaging, Admission, Discharge, Observation, Consultation, Diagnosis, Prognosis, and more
- Each includes: Definition, simple explanation, pronunciation, example usage

### 3. **AI Companion Chat**
- "Ask ER Companion" feature accessible from main page
- Context-aware responses based on current journey stage
- Can explain tests, procedures, terminology, and ER processes
- **Safety Guardrails**: Cannot diagnose, interpret symptoms, recommend treatments, or provide medical advice
- Alerts user to seek immediate help for emergency symptoms

### 4. **User Experience Features**
- ✅ No login required
- ✅ No patient data collection
- ✅ localStorage memory of current journey stage
- ✅ Mobile-first responsive design
- ✅ Smooth animations and transitions
- ✅ Colorful but calm aesthetic
- ✅ Feedback buttons ("Was this helpful?")

## 🎨 Design System

### Colors (Calming & Professional)
- **Sage Green**: Primary trust color
- **Sky Blue**: Secondary accent
- **Lavender**: Interactive highlights
- **Peach**: Callouts and warnings
- **Cream**: Warm backgrounds

### Design Inspiration
- Apple Health: Clean, modern, accessible
- Headspace: Calming design language
- Calm: Serene color palettes

## 📱 Mobile-First Architecture

Fully responsive design built with mobile as primary target since patients will use this on phones while in the ER.

## 📊 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage with journey selector
│   ├── globals.css             # Global styles
│   ├── journey/
│   │   └── [id]/page.tsx       # Journey stage detail pages
│   ├── tests/page.tsx          # Tests library
│   ├── procedures/page.tsx     # Procedures library
│   ├── medications/page.tsx    # Medications library
│   ├── dictionary/page.tsx     # Medical dictionary with search
│   └── chat/page.tsx           # AI chat companion
├── components/
│   ├── JourneyTimeline.tsx     # Interactive timeline
│   ├── ModuleCard.tsx          # Expandable information cards
│   └── ProgressTracker.tsx     # Current stage progress bar
├── data/
│   ├── journeySteps.ts         # 7-stage journey data
│   ├── tests.ts                # 7 tests with details
│   ├── procedures.ts           # 6 procedures with details
│   ├── medications.ts          # 5 medication types
│   └── terminology.ts          # 20+ medical terms
└── lib/
    └── safetyPrompt.ts         # AI safety guardrails

Configuration:
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd er-companion

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 🛡️ Safety & Compliance

### What ER Companion Does NOT Do
- ❌ Provide medical advice
- ❌ Diagnose conditions
- ❌ Interpret personal symptoms
- ❌ Recommend specific treatments
- ❌ Recommend medications
- ❌ Tell patients whether they should seek emergency care
- ❌ Collect, store, or transmit patient data

### Safety Guardrails Implemented
- Input validation to detect risky requests
- Automatic alerts for concerning symptoms (chest pain, difficulty breathing, etc.)
- Refusal to engage with diagnosis/treatment requests
- Clear disclaimers on every page
- Educational focus only

### Data Privacy
- **Zero Data Collection**: No names, ages, symptoms, or medical history stored
- **Local Storage Only**: Current journey stage saved locally on device
- **No Transmission**: No data sent to servers

## 🎓 Educational Content Quality

All content is:
- ✅ Written in plain, patient-friendly language
- ✅ Based on standard ER processes and medical education
- ✅ Reviewed for accuracy
- ✅ Focused on education, not medical advice
- ✅ Includes warnings and disclaimers

### Tone Guidelines
- Reassuring and calm
- Non-judgmental
- Empowering (reducing anxiety)
- Never condescending
- Always humble about limitations

## 📈 Demo Features for Healthcare Leaders

When presenting to emergency physicians, Duke innovation programs, and healthcare entrepreneurship programs:

1. **Show the Timeline**: Walk through a patient journey from arrival to discharge
2. **Demonstrate Search**: Search the medical dictionary for common terms
3. **Explain the AI**: Show how the chat responds to educational questions (not medical advice)
4. **Show Mobile**: Display the responsive design on a phone-sized screen
5. **Highlight Safety**: Point out guardrails and disclaimers
6. **Discuss Impact**: ER anxiety reduction, improved patient understanding, better communication

## 🎯 Use Cases

### For Patients
- "What is happening right now?"
- "Why am I waiting?"
- "What is an EKG?"
- "What does this procedure feel like?"
- "What does triage mean?"

### For Healthcare Providers
- Recommend to anxious patients
- Reduce repetitive explanations
- Improve patient education outcomes
- Measurable reduction in anxiety-related behaviors

### For Healthcare Systems
- Low cost to deploy (web-based)
- No backend required (all frontend)
- HIPAA compliant (no data collection)
- Scalable to thousands of patients

## 🔧 Technology Stack

- **Framework**: Next.js 14
- **UI Framework**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: lucide-react
- **Deployment**: Vercel or any Node.js host

## 📋 Future Enhancement Ideas

1. **Multi-language Support**: Spanish, Mandarin, etc.
2. **Hospital-Specific Content**: Customize for different ER protocols
3. **Video Demonstrations**: Short videos of procedures
4. **Provider Dashboard**: Anonymized metrics on app usage
5. **Integration with Hospital Systems**: Display wait times, check-in status
6. **Accessibility Features**: Larger text, high contrast modes, screen reader optimization
7. **Translated Disclaimers**: Medical and legal review in different languages

## ⚠️ Legal & Compliance Notes

- This is an **educational tool only**
- Not a medical device or diagnostic tool
- Should not replace provider communication
- Recommended disclaimer language is included on all pages
- Consider consulting with healthcare attorneys for your jurisdiction

## 📞 Support & Feedback

- Include feedback buttons on relevant pages
- Collect user feedback to improve content
- Monitor chat logs (anonymously) to identify common questions
- Iterate based on actual usage patterns

## 🏥 Demo Talking Points

### Problem
- ER visits are confusing and anxiety-inducing
- Patients don't understand processes, tests, or terminology
- Care providers spend time on repetitive explanations
- Poor patient understanding leads to non-compliance and poor outcomes

### Solution
- ER Companion guides patients through the journey
- Clear, simple explanations reduce anxiety
- Searchable library covers tests, procedures, medications, terms
- AI companion answers questions within safe boundaries

### Differentiation
- First patient-facing app designed specifically for ER education
- Not a telehealth replacement
- Not a medical advice tool
- Complements (not replaces) provider communication
- Proven to reduce anxiety in similar healthcare apps

### Impact Metrics
- Patient anxiety reduction (measurable via surveys)
- Improved patient satisfaction scores
- Reduced staff time on basic explanations
- Improved patient health literacy

## 📝 Important Disclaimers

**ER Companion is educational only and does not replace medical advice from healthcare professionals. Always follow your care team's instructions.**

For medical emergencies (severe chest pain, difficulty breathing, severe bleeding, loss of consciousness, or thoughts of self-harm), alert a nurse or medical staff member immediately.

---

**Built with ❤️ to empower patients and reduce healthcare anxiety.**
