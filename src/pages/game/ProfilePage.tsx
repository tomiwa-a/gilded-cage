import { mockPlayer } from '../../data/mocks';

export default function ProfilePage() {
  const stats = {
    playersKilled: 3,
    timesKilled: 7,
    crimesCommitted: 28,
    moneyEarned: 12450,
    jobsCompleted: 42,
    timePlayed: '14 days',
  };

  const reputation = {
    corporations: { value: 60, label: 'Neutral' },
    underground: { value: 35, label: 'Distrusted' },
    citizens: { value: 80, label: 'Respected' },
    authorities: { value: 20, label: 'Wanted' },
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center mb-6">
        <div className="w-20 h-20 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl">👤</span>
        </div>
        <h1 className="text-2xl font-bold text-neutral-900">{mockPlayer.name}</h1>
        <div className="text-neutral-600">Level 8</div>
        <div className="inline-block mt-2 px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium uppercase">
          {mockPlayer.archetype}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Resources</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-neutral-600">Health</span>
                <span className="font-medium">{mockPlayer.health}/{mockPlayer.maxHealth}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(mockPlayer.health / mockPlayer.maxHealth) * 100}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-neutral-600">Energy</span>
                <span className="font-medium">{mockPlayer.ap}/{mockPlayer.maxAp}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(mockPlayer.ap / mockPlayer.maxAp) * 100}%` }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm pt-2">
              <span className="text-neutral-600">Money</span>
              <span className="font-bold text-green-600">${mockPlayer.money}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Stats</h2>
          <div className="space-y-3">
            {Object.entries(mockPlayer.stats).map(([stat, value]) => (
              <div key={stat} className="flex items-center justify-between">
                <span className="text-neutral-600 capitalize">{stat}</span>
                <span className="font-bold text-neutral-900 text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Reputation</h2>
        <div className="space-y-4">
          {Object.entries(reputation).map(([faction, data]) => (
            <div key={faction}>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-neutral-600 capitalize">{faction}</span>
                <span className="font-medium">{data.label}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    data.value >= 60 ? 'bg-green-500' : data.value >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                  }`} 
                  style={{ width: `${data.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Players Killed</span>
            <span className="font-medium">{stats.playersKilled}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Times Killed</span>
            <span className="font-medium">{stats.timesKilled}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Crimes Committed</span>
            <span className="font-medium">{stats.crimesCommitted}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Money Earned</span>
            <span className="font-medium">${stats.moneyEarned.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Jobs Completed</span>
            <span className="font-medium">{stats.jobsCompleted}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Time Played</span>
            <span className="font-medium">{stats.timePlayed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
