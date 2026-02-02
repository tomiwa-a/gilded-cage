import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/icons/LogoIcon';
import WorldIcon from '../components/icons/WorldIcon';
import BrainIcon from '../components/icons/BrainIcon';
import CoinsIcon from '../components/icons/CoinsIcon';
import BoltIcon from '../components/icons/BoltIcon';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 text-neutral-900">
              <LogoIcon />
            </div>
            <span className="text-xl font-semibold text-neutral-900">The Gilded Cage</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/tomiwa-a/gilded-cage" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-600 hover:text-neutral-900">
              GitHub
            </a>
            <button
              onClick={() => navigate('/create')}
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
            onClick={() => navigate('/create')}
            className="px-6 py-3 border border-neutral-900 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Enter the Game
          </button>
        </section>

        <section className="py-20 grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 text-white">
                <WorldIcon />
              </div>
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
              <div className="w-6 h-6 text-white">
                <BrainIcon />
              </div>
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
              <div className="w-6 h-6 text-white">
                <CoinsIcon />
              </div>
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
              <div className="w-6 h-6 text-white">
                <BoltIcon />
              </div>
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
              onClick={() => navigate('/create')}
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
                <div className="w-6 h-6 text-neutral-900">
                  <LogoIcon />
                </div>
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
