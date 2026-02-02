import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/icons/LogoIcon';

export default function GamePage() {
  const navigate = useNavigate();

  const mockPlayer = {
    name: "Alex",
    archetype: "Visionary",
    health: 90,
    maxHealth: 100,
    ap: 8,
    maxAp: 10,
    money: 500,
    stats: {
      rhetoric: 8,
      hustle: 5,
      entropy: 2,
    },
  };

  const mockLocation = {
    name: "Sector 4 Slums",
    description: "A dense, ramshackle district teeming with activity. Neon signs flicker against weathered concrete, and the air is thick with the scent of street food and exhaust. Opportunities and dangers lurk in every shadow.",
    owner: null,
    statusEffects: [],
  };

  const mockActions = [
    { id: 1, name: "Work a Job", cost: 2, icon: "💼" },
    { id: 2, name: "Rob Store", cost: 3, icon: "🔫" },
    { id: 3, name: "Loot Store", cost: 2, icon: "🔍" },
    { id: 4, name: "Trade", cost: 1, icon: "🤝" },
  ];

  const mockInventory = [
    { name: "Scrap Metal", quantity: 3 },
    { name: "Data Chip", quantity: 1 },
    { name: "Stolen Goods", quantity: 2 },
  ];

  const mockEventLog = [
    "You arrived at Sector 4 Slums. The streets are bustling.",
    "A mysterious stranger watches you from an alleyway.",
    "You successfully completed a minor task, earning $50.",
    "The local gang presence seems to be increasing.",
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 text-neutral-900">
                <LogoIcon />
              </div>
              <span className="font-semibold text-neutral-900">The Gilded Cage</span>
            </button>
            <div className="text-neutral-600 text-sm">
              {mockLocation.name}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-neutral-600">AP:</span>
              <span className="font-semibold text-neutral-900">{mockPlayer.ap}/{mockPlayer.maxAp}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-neutral-600">$</span>
              <span className="font-semibold text-neutral-900">{mockPlayer.money}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-3 space-y-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <div className="flex flex-col items-center mb-4">
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

              <div className="space-y-3">
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

                <div className="pt-3 border-t border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Rhetoric</span>
                    <span className="text-neutral-900 font-medium">{mockPlayer.stats.rhetoric}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Hustle</span>
                    <span className="text-neutral-900 font-medium">{mockPlayer.stats.hustle}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Entropy</span>
                    <span className="text-neutral-900 font-medium">{mockPlayer.stats.entropy}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="col-span-6 space-y-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">{mockLocation.name}</h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {mockLocation.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Available Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {mockActions.map((action) => (
                  <button
                    key={action.id}
                    className="p-4 border border-neutral-200 rounded-lg hover:border-neutral-900 hover:bg-neutral-50 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{action.icon}</span>
                      <span className="text-xs text-neutral-600">{action.cost} AP</span>
                    </div>
                    <div className="font-medium text-neutral-900 text-sm">{action.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </main>

          <aside className="col-span-3 space-y-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mb-3">Inventory</h3>
              <div className="space-y-2">
                {mockInventory.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">{item.name}</span>
                    <span className="text-neutral-900 font-medium">({item.quantity})</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mb-3">Recent Activity</h3>
              <div className="space-y-2 text-xs text-neutral-600">
                <p>You explored the market.</p>
                <p>Traded with a local merchant.</p>
                <p>Found a discarded item.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-6 bg-white border border-neutral-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Event Log
          </h3>
          <div className="space-y-1 text-sm text-neutral-600 max-h-32 overflow-y-auto">
            {mockEventLog.map((event, idx) => (
              <p key={idx} className="leading-relaxed">{event}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
