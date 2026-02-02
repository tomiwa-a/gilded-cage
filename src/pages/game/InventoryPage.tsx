import { useState } from 'react';

const items = [
  { id: 1, name: 'Energy Drink', type: 'consumable', quantity: 3, description: 'Restores 25 energy instantly.', value: 10 },
  { id: 2, name: 'Med Kit', type: 'consumable', quantity: 1, description: 'Restores 50 health.', value: 25 },
  { id: 3, name: 'Scrap Metal', type: 'material', quantity: 5, description: 'Can be sold or crafted.', value: 5 },
  { id: 4, name: 'Data Chip', type: 'valuable', quantity: 2, description: 'Encrypted data. Valuable to the right buyer.', value: 50 },
  { id: 5, name: 'Stolen Watch', type: 'valuable', quantity: 1, description: 'Hot merchandise.', value: 35 },
];

const equipment = {
  weapon: { name: 'Rusty Knife', bonus: '+3 Power' },
  armor: null,
  tool: { name: 'Lockpick Set', bonus: '+2 Cunning' },
};

export default function InventoryPage() {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Inventory</h1>
        <span className="text-sm text-neutral-500">Weight: 12/50 kg</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Equipment</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-neutral-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚔️</div>
                <div className="text-xs text-neutral-500 uppercase mb-1">Weapon</div>
                {equipment.weapon ? (
                  <>
                    <div className="font-medium text-neutral-900 text-sm">{equipment.weapon.name}</div>
                    <div className="text-xs text-green-600">{equipment.weapon.bonus}</div>
                  </>
                ) : (
                  <div className="text-neutral-400 text-sm">Empty</div>
                )}
              </div>
              <div className="border border-neutral-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="text-xs text-neutral-500 uppercase mb-1">Armor</div>
                {equipment.armor ? (
                  <div className="font-medium text-neutral-900 text-sm">{equipment.armor}</div>
                ) : (
                  <div className="text-neutral-400 text-sm">Empty</div>
                )}
              </div>
              <div className="border border-neutral-200 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔧</div>
                <div className="text-xs text-neutral-500 uppercase mb-1">Tool</div>
                {equipment.tool ? (
                  <>
                    <div className="font-medium text-neutral-900 text-sm">{equipment.tool.name}</div>
                    <div className="text-xs text-green-600">{equipment.tool.bonus}</div>
                  </>
                ) : (
                  <div className="text-neutral-400 text-sm">Empty</div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Items</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedItem?.id === item.id ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-900">{item.name}</span>
                    <span className="text-neutral-500">x{item.quantity}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-6 h-fit sticky top-4">
          {selectedItem ? (
            <>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{selectedItem.name}</h3>
              <span className="inline-block px-2 py-0.5 bg-neutral-100 text-neutral-600 text-xs rounded-full mb-4">
                {selectedItem.type}
              </span>
              <p className="text-neutral-600 mb-4">{selectedItem.description}</p>
              <div className="text-sm text-neutral-500 mb-4">
                <div>Quantity: {selectedItem.quantity}</div>
                <div>Value: ${selectedItem.value} each</div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
                  Use
                </button>
                <button className="flex-1 py-2 border border-neutral-200 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors">
                  Sell
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-neutral-500 py-8">
              Select an item to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
