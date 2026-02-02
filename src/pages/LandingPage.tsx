import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <span className="text-xl font-semibold text-neutral-900">The Gilded Cage</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/tomiwa-a/gilded-cage" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900">
              GitHub
            </a>
            <button
              onClick={() => navigate('/game')}
              className="px-6 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Play Now
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        <section className="py-24 max-w-2xl">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            A browser-based MMO where your choices reshape the world
          </h1>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            The Gilded Cage is designed with a simple philosophy: your actions matter. 
            Most MMOs hold your progress hostage to a subscription. We don't. 
            Everything works in real-time by default.
          </p>
          <button
            onClick={() => navigate('/game')}
            className="px-6 py-3 border border-neutral-900 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Enter the Game
          </button>
        </section>

        <section className="py-20 grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Real-Time World</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The economy, territory control, and world events update live for all players. No page reloads required.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">AI-Powered Narrative</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every action gets a unique story. Powered by Google Gemini AI to make the world feel alive.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Player-Driven Economy</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Hoard resources, destroy property, or build empires. Your actions ripple through the global market.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Action Points System</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Strategic resource management ensures every decision counts. Plan your moves carefully.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-50 -mx-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Ready to enter the cage?</h2>
            <p className="text-neutral-600 mb-8">
              Create your character and start shaping the world.
            </p>
            <button
              onClick={() => navigate('/game')}
              className="px-8 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Play Now
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🏛️</span>
                <span className="font-semibold text-neutral-900">The Gilded Cage</span>
              </div>
              <p className="text-sm text-neutral-600">© 2026 The Gilded Cage. Open Source.</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://twitter.com/tomiwa_amole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://github.com/tomiwa-a/gilded-cage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
