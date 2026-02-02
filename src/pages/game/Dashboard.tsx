import { mockLocation, mockActions } from '../../data/mocks';
import BriefcaseIcon from '../../components/icons/BriefcaseIcon';
import SkullIcon from '../../components/icons/SkullIcon';
import MapIcon from '../../components/icons/MapIcon';
import ShopIcon from '../../components/icons/ShopIcon';
import MoonIcon from '../../components/icons/MoonIcon';
import SearchIcon from '../../components/icons/SearchIcon';

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">{mockLocation.name}</h1>
        <p className="text-neutral-600">{mockLocation.description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            mockLocation.type === 'dangerous' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {mockLocation.type === 'dangerous' ? '⚠️ Dangerous Zone' : '✓ Safe Zone'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <button className="bg-white border border-neutral-200 rounded-lg p-6 text-left hover:border-neutral-400 transition-colors">
          <div className="w-8 h-8 mb-2 text-neutral-900"><BriefcaseIcon /></div>
          <h3 className="font-semibold text-neutral-900">Work</h3>
          <p className="text-sm text-neutral-600">Find jobs</p>
        </button>
        <button className="bg-white border border-neutral-200 rounded-lg p-6 text-left hover:border-neutral-400 transition-colors">
          <div className="w-8 h-8 mb-2 text-neutral-900"><SkullIcon /></div>
          <h3 className="font-semibold text-neutral-900">Crime</h3>
          <p className="text-sm text-neutral-600">Risk it all</p>
        </button>
        <button className="bg-white border border-neutral-200 rounded-lg p-6 text-left hover:border-neutral-400 transition-colors">
          <div className="w-8 h-8 mb-2 text-neutral-900"><MapIcon /></div>
          <h3 className="font-semibold text-neutral-900">Travel</h3>
          <p className="text-sm text-neutral-600">Move zones</p>
        </button>
        <button className="bg-white border border-neutral-200 rounded-lg p-6 text-left hover:border-neutral-400 transition-colors">
          <div className="w-8 h-8 mb-2 text-neutral-900"><ShopIcon /></div>
          <h3 className="font-semibold text-neutral-900">Trade</h3>
          <p className="text-sm text-neutral-600">Buy & sell</p>
        </button>
        <button className="bg-white border border-neutral-200 rounded-lg p-6 text-left hover:border-neutral-400 transition-colors">
          <div className="w-8 h-8 mb-2 text-neutral-900"><MoonIcon /></div>
          <h3 className="font-semibold text-neutral-900">Rest</h3>
          <p className="text-sm text-neutral-600">Recover HP</p>
        </button>
        <button className="bg-white border border-neutral-200 rounded-lg p-6 text-left hover:border-neutral-400 transition-colors">
          <div className="w-8 h-8 mb-2 text-neutral-900"><SearchIcon /></div>
          <h3 className="font-semibold text-neutral-900">Explore</h3>
          <p className="text-sm text-neutral-600">Look around</p>
        </button>
      </div>

      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Players Nearby</h3>
        <div className="space-y-3">
          {[
            { name: 'ShadowMerc', level: 12 },
            { name: 'NightOwl', level: 5 },
            { name: 'CryptoKing', level: 23 },
          ].map((player) => (
            <div key={player.name} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
              <div>
                <span className="font-medium text-neutral-900">{player.name}</span>
                <span className="text-sm text-neutral-500 ml-2">Lv {player.level}</span>
              </div>
              <button className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                Attack
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
