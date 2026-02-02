import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/icons/LogoIcon';
import { mockPlayer, mockLocation, mockActions, mockInventory, mockEventLog, mockMarketPrices } from '../data/mocks';

export default function GamePage() {
  const navigate = useNavigate();
  const [eventLogOpen, setEventLogOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <nav className="bg-white border-b border-neutral-200 shrink-0">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 text-neutral-900">
                <LogoIcon />
              </div>
              <span className="font-semibold text-neutral-900">The Gilded Cage</span>
            </button>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-600 text-sm">{mockLocation.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-lg">
                <span className="text-neutral-600">AP</span>
                <span className="font-semibold text-neutral-900">{mockPlayer.ap}/{mockPlayer.maxAp}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-100 px-3 py-1.5 rounded-lg">
                <span className="text-neutral-600">$</span>
                <span className="font-semibold text-neutral-900">{mockPlayer.money}</span>
              </div>
            </div>
            <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r border-neutral-200 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex flex-col items-center pb-4 border-b border-neutral-200">
              <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">{mockPlayer.name}</h3>
              <span className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded mt-1">
                {mockPlayer.archetype}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-neutral-600">Health</span>
                <span className="text-neutral-900 font-medium">{mockPlayer.health}/{mockPlayer.maxHealth}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div 
                  className="bg-neutral-900 h-2 rounded-full" 
                  style={{ width: `${(mockPlayer.health / mockPlayer.maxHealth) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Stats</h4>
              {Object.entries(mockPlayer.stats).map(([stat, value]) => (
                <div key={stat} className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600 capitalize">{stat}</span>
                  <span className="text-neutral-900 font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Market Prices</h4>
              {mockMarketPrices.map((item) => (
                <div key={item.resource} className="flex items-center justify-between text-sm py-1">
                  <span className="text-neutral-600">{item.resource}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-900 font-medium">${item.price}</span>
                    <span className={`text-xs ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change > 0 ? '+' : ''}{item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 overflow-y-auto bg-neutral-50">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">{mockLocation.name}</h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {mockLocation.description}
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Unowned</span>
                <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">Population: High</span>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Available Actions</h3>
              <div className="grid grid-cols-3 gap-3">
                {mockActions.map((action) => (
                  <button
                    key={action.id}
                    className="p-4 border border-neutral-200 rounded-lg hover:border-neutral-900 hover:bg-neutral-50 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-neutral-900 text-sm">{action.name}</span>
                      <span className="text-xs text-neutral-500">{action.cost} AP</span>
                    </div>
                    <p className="text-xs text-neutral-500">{action.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Travel</h3>
              <div className="flex gap-3">
                {mockLocation.connectedLocations.map((loc) => (
                  <button
                    key={loc.id}
                    className="flex-1 p-3 border border-neutral-200 rounded-lg hover:border-neutral-900 hover:bg-neutral-50 transition-all text-center"
                  >
                    <span className="font-medium text-neutral-900 text-sm block">{loc.name}</span>
                    <span className="text-xs text-neutral-500">{loc.cost} AP</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        <aside className="w-64 bg-white border-l border-neutral-200 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Inventory</h4>
              <div className="space-y-2">
                {mockInventory.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">{item.name}</span>
                    <span className="text-neutral-900 font-medium">x{item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Recent Activity</h4>
              <div className="space-y-2 text-xs text-neutral-600">
                <p>Explored the market.</p>
                <p>Traded with a merchant.</p>
                <p>Found a discarded item.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Players Nearby</h4>
              <div className="space-y-2 text-xs text-neutral-600">
                <p>3 players in this location</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className={`bg-white border-t border-neutral-200 transition-all ${eventLogOpen ? 'h-48' : 'h-10'}`}>
        <button 
          onClick={() => setEventLogOpen(!eventLogOpen)}
          className="w-full px-6 py-2 flex items-center justify-between text-sm hover:bg-neutral-50"
        >
          <span className="font-semibold text-neutral-900 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Event Log
          </span>
          <svg className={`w-4 h-4 text-neutral-600 transition-transform ${eventLogOpen ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {eventLogOpen && (
          <div className="px-6 pb-4 overflow-y-auto h-36">
            <div className="space-y-2">
              {mockEventLog.map((event) => (
                <div key={event.id} className="flex items-start gap-3 text-sm">
                  <span className="text-xs text-neutral-400 whitespace-nowrap">{event.time}</span>
                  <p className="text-neutral-600">{event.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
