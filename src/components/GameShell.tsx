import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoIcon from '../components/icons/LogoIcon';
import { mockPlayer, mockLocation, mockEventLog } from '../data/mocks';

export default function GameShell() {
  const navigate = useNavigate();
  const [eventLogOpen, setEventLogOpen] = useState(true);

  const navItems = [
    { path: '/game', icon: '🏠', label: 'Dashboard' },
    { path: '/game/map', icon: '🗺️', label: 'Map' },
    { path: '/game/work', icon: '💼', label: 'Work' },
    { path: '/game/crime', icon: '🔪', label: 'Crime' },
    { path: '/game/inventory', icon: '🎒', label: 'Inventory' },
    { path: '/game/profile', icon: '👤', label: 'Profile' },
    { path: '/game/combat', icon: '⚔️', label: 'Combat' },
    { path: '/game/social', icon: '👥', label: 'Social' },
    { path: '/game/market', icon: '🏪', label: 'Market' },
    { path: '/game/settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 shrink-0">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 text-neutral-900">
                <LogoIcon />
              </div>
              <span className="font-semibold text-neutral-900 hidden sm:inline">The Gilded Cage</span>
            </button>
            <span className="text-neutral-300 hidden sm:inline">|</span>
            <span className="text-neutral-600 text-sm">{mockLocation.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-lg">
              <span className="text-neutral-600">⚡</span>
              <span className="font-semibold text-neutral-900">{mockPlayer.ap}/{mockPlayer.maxAp}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-lg">
              <span className="text-neutral-600">$</span>
              <span className="font-semibold text-neutral-900">{mockPlayer.money}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:flex flex-col w-16 bg-white border-r border-neutral-200 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/game'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 px-2 text-xs transition-colors ${
                  isActive ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                }`
              }
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
            </NavLink>
          ))}
        </aside>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>

        <aside className="hidden lg:block w-64 bg-white border-l border-neutral-200 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Your Stats</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Health</span>
                  <span className="text-neutral-900 font-medium">{mockPlayer.health}/{mockPlayer.maxHealth}</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(mockPlayer.health / mockPlayer.maxHealth) * 100}%` }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Stats</h4>
              {Object.entries(mockPlayer.stats).map(([stat, value]) => (
                <div key={stat} className="flex items-center justify-between text-sm py-1">
                  <span className="text-neutral-600 capitalize">{stat}</span>
                  <span className="text-neutral-900 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="bg-white border-t border-neutral-200 shrink-0">
        <button
          onClick={() => setEventLogOpen(!eventLogOpen)}
          className="w-full px-4 py-2 flex items-center justify-between text-sm text-neutral-600 hover:bg-neutral-50"
        >
          <span className="font-medium">Event Log</span>
          <span>{eventLogOpen ? '▼' : '▲'}</span>
        </button>
        {eventLogOpen && (
          <div className="max-h-32 overflow-y-auto px-4 pb-4 space-y-1">
            {mockEventLog.map((event) => (
              <div key={event.id} className="text-sm">
                <span className="text-neutral-400">[{event.time}]</span>{' '}
                <span className="text-neutral-700">{event.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="md:hidden bg-white border-t border-neutral-200 flex justify-around py-2">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/game'}
            className={({ isActive }) =>
              `flex flex-col items-center py-1 px-3 text-xs ${
                isActive ? 'text-neutral-900' : 'text-neutral-500'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
