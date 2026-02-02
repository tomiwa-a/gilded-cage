import { useState } from 'react';
import CoinsIcon from '../../components/icons/CoinsIcon';

const shopItems = [
  { id: 1, name: 'Energy Drink', description: 'Restores 25 energy', price: 15, stock: 5 },
  { id: 2, name: 'Med Kit', description: 'Restores 50 health', price: 25, stock: 3 },
  { id: 3, name: 'Rusty Knife', description: '+3 Power', price: 100, stock: 1 },
  { id: 4, name: 'Lockpick Set', description: '+2 Cunning', price: 80, stock: 2 },
];

type Tab = 'buy' | 'sell' | 'player';

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState<Tab>('buy');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Market</h1>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-neutral-600">Your Cash:</span>
          <div className="flex items-center gap-1 font-bold text-green-600">
            <span className="w-4 h-4"><CoinsIcon /></span>
            <span>$1,250</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {(['buy', 'sell', 'player'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            {tab === 'player' ? 'Player Market' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'buy' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900">NPC Shop</h2>
          {shopItems.map((item) => (
            <div key={item.id} className="bg-white border border-neutral-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-neutral-900">{item.name}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                  <span className="text-xs text-neutral-500">Stock: {item.stock}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-neutral-900">${item.price}</div>
                  <button className="mt-2 px-4 py-1 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-800 transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'sell' && (
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Sell Your Items</h2>
          <div className="space-y-3">
            {[
              { name: 'Scrap Metal', quantity: 5, value: 5 },
              { name: 'Stolen Watch', quantity: 1, value: 35 },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                <div>
                  <span className="font-medium text-neutral-900">{item.name}</span>
                  <span className="text-sm text-neutral-500 ml-2">x{item.quantity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-medium">${item.value} each</span>
                  <button className="px-3 py-1 border border-neutral-200 text-sm rounded-lg hover:bg-neutral-50">
                    Sell
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'player' && (
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Player Listings</h2>
          <div className="text-center text-neutral-500 py-8">
            No player listings available
          </div>
        </div>
      )}
    </div>
  );
}
