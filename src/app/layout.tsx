import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ER Companion - Your Guide Through the Emergency Department',
  description:
    'A patient-centered companion to help you understand your ER visit. Reduce anxiety by learning about processes, tests, procedures, and what to expect.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fffef9" />
      </head>
      <body className="bg-cream">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-gradient-to-r from-sage-600 via-lavender-600 to-sky-600 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="text-3xl">🏥</span>
                <div>
                  <h1 className="text-2xl font-bold">ER Companion</h1>
                  <p className="text-xs opacity-90">Your Guide Through the Emergency Department</p>
                </div>
              </a>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-100 border-t border-gray-200 mt-12">
            <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">About ER Companion</h3>
                  <p className="text-sm text-gray-600">
                    A patient education platform designed to reduce ER anxiety by helping patients understand the emergency department process.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Important Note</h3>
                  <p className="text-sm text-gray-600">
                    ER Companion is for education only. It does not replace medical advice from healthcare professionals. Always follow your care team&rsquo;s instructions.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Privacy</h3>
                  <p className="text-sm text-gray-600">
                    We collect no personal health information. All data is stored locally on your device.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
                <p>© 2024 ER Companion. Built to empower patients and reduce healthcare anxiety.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
