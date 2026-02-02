import BoltIcon from '../../components/icons/BoltIcon';
import CoinsIcon from '../../components/icons/CoinsIcon';
import AlertIcon from '../../components/icons/AlertIcon';

const crimes = [
  { id: 1, name: 'Pickpocket', risk: 'low', reward: '$5-25', energy: 10, stat: 'cunning', description: 'Lift wallets from distracted targets.' },
  { id: 2, name: 'Burglary', risk: 'medium', reward: '$20-100 + items', energy: 20, stat: 'cunning', description: 'Break into an unoccupied building.' },
  { id: 3, name: 'Robbery', risk: 'high', reward: '$50-200', energy: 25, stat: 'power', description: 'Hold up a store or person.' },
  { id: 4, name: 'Scam', risk: 'medium', reward: '$30-150', energy: 15, stat: 'influence', description: 'Trick someone out of their money.' },
];

export default function CrimePage() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'high': return 'bg-red-100 text-red-700';
      default: return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Criminal Activities</h1>
          <p className="text-neutral-600 flex items-center gap-1">
            <span className="w-4 h-4 text-orange-500"><AlertIcon /></span> High risk, high reward
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-neutral-500">Your Heat</div>
          <div className="flex items-center gap-2">
            <div className="w-24 bg-neutral-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
            <span className="text-sm font-medium text-orange-600">LOW</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {crimes.map((crime) => (
          <div key={crime.id} className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-neutral-900">{crime.name}</h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full uppercase ${getRiskColor(crime.risk)}`}>
                {crime.risk} risk
              </span>
            </div>
            <p className="text-neutral-600 mb-4">{crime.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                <span className="w-3 h-3"><CoinsIcon /></span> {crime.reward}
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full">
                <span className="w-3 h-3"><BoltIcon /></span> {crime.energy} energy
              </div>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                {crime.stat} check
              </span>
            </div>
            <button className="w-full py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
              Attempt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
