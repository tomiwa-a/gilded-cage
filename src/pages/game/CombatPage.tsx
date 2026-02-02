import { useState } from 'react';

export default function CombatPage() {
  const [inCombat] = useState(false);

  if (inCombat) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-neutral-900 text-center mb-6">⚔️ COMBAT ⚔️</h1>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-lg font-bold text-neutral-900">YOU</div>
              <div className="text-sm text-neutral-500">Level 8</div>
              <div className="mt-4">
                <div className="text-sm text-neutral-600 mb-1">HP: 85/100</div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-neutral-900">SHADOWMERC</div>
              <div className="text-sm text-neutral-500">Level 12</div>
              <div className="mt-4">
                <div className="text-sm text-neutral-600 mb-1">HP: 62/100</div>
                <div className="w-full bg-neutral-200 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            <button className="p-4 bg-red-50 border border-red-200 rounded-lg text-center hover:bg-red-100 transition-colors">
              <div className="text-2xl mb-1">⚔️</div>
              <div className="text-sm font-medium text-red-700">Attack</div>
              <div className="text-xs text-red-500">2.0s</div>
            </button>
            <button className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center hover:bg-blue-100 transition-colors">
              <div className="text-2xl mb-1">🛡️</div>
              <div className="text-sm font-medium text-blue-700">Defend</div>
              <div className="text-xs text-blue-500">3.0s</div>
            </button>
            <button className="p-4 bg-green-50 border border-green-200 rounded-lg text-center hover:bg-green-100 transition-colors">
              <div className="text-2xl mb-1">💊</div>
              <div className="text-sm font-medium text-green-700">Item</div>
              <div className="text-xs text-green-500">1.5s</div>
            </button>
            <button className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center hover:bg-yellow-100 transition-colors">
              <div className="text-2xl mb-1">🏃</div>
              <div className="text-sm font-medium text-yellow-700">Flee</div>
              <div className="text-xs text-yellow-500">5.0s</div>
            </button>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-neutral-500 mb-2">Combat Log</h3>
            <div className="space-y-1 text-sm">
              <div className="text-neutral-700">&gt; You strike ShadowMerc for 14 damage!</div>
              <div className="text-neutral-700">&gt; ShadowMerc counters for 8 damage!</div>
              <div className="text-neutral-700">&gt; You defend, reducing incoming damage.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">Combat</h1>

      <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Active Bounties</h2>
        <div className="space-y-3">
          {[
            { name: 'DarkHunter', level: 15, bounty: 500, reason: 'Theft' },
            { name: 'Viper', level: 9, bounty: 200, reason: 'Murder' },
          ].map((target) => (
            <div key={target.name} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <span className="font-medium text-neutral-900">{target.name}</span>
                <span className="text-sm text-neutral-500 ml-2">Lv {target.level}</span>
                <div className="text-xs text-neutral-500">{target.reason}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-600">${target.bounty}</div>
                <button className="text-xs text-red-600 hover:underline">Hunt</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Your Combat Stats</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-600">Attack Power</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Defense</span>
            <span className="font-medium">8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Crit Chance</span>
            <span className="font-medium">15%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Flee Chance</span>
            <span className="font-medium">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
