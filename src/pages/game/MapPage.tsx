import { useState } from 'react';

const zones = [
  { id: 'corporate', name: 'Corporate District', type: 'safe', description: 'Clean streets, corporate towers, heavy security.', connections: ['residential', 'markets'] },
  { id: 'residential', name: 'Residential Zone', type: 'safe', description: 'Apartments and housing blocks. Quiet, mostly.', connections: ['corporate', 'markets', 'industrial'] },
  { id: 'markets', name: 'The Markets', type: 'neutral', description: 'Bustling trade hub. Anything can be bought here.', connections: ['corporate', 'residential', 'slums'] },
  { id: 'industrial', name: 'Industrial Zone', type: 'risky', description: 'Factories and warehouses. Fewer eyes watching.', connections: ['residential', 'slums'] },
  { id: 'slums', name: 'Sector 4 Slums', type: 'dangerous', description: 'Cramped, chaotic, and full of opportunity.', connections: ['markets', 'industrial', 'underground'], current: true },
  { id: 'underground', name: 'The Underground', type: 'lawless', description: 'No rules. No mercy. Enter at your own risk.', connections: ['slums'] },
];

export default function MapPage() {
  const [selectedZone, setSelectedZone] = useState<typeof zones[0] | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'safe': return 'bg-green-100 text-green-700 border-green-200';
      case 'neutral': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'risky': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'dangerous': return 'bg-red-100 text-red-700 border-red-200';
      case 'lawless': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">City Map</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone)}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                zone.current ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 bg-white hover:border-neutral-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-neutral-900">{zone.name}</h3>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getTypeColor(zone.type)}`}>
                  {zone.type}
                </span>
              </div>
              <p className="text-sm text-neutral-600">{zone.description}</p>
              {zone.current && (
                <div className="mt-2 text-xs text-neutral-500">📍 You are here</div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-6 h-fit sticky top-4">
          {selectedZone ? (
            <>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">{selectedZone.name}</h2>
              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-4 ${getTypeColor(selectedZone.type)}`}>
                {selectedZone.type.toUpperCase()} ZONE
              </span>
              <p className="text-neutral-600 mb-4">{selectedZone.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-500 mb-2">Connected To:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedZone.connections.map((conn) => (
                    <span key={conn} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-sm rounded">
                      {zones.find(z => z.id === conn)?.name}
                    </span>
                  ))}
                </div>
              </div>

              {!selectedZone.current && (
                <button className="w-full py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
                  Travel (5 ⚡)
                </button>
              )}
            </>
          ) : (
            <div className="text-center text-neutral-500 py-8">
              Select a zone to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
