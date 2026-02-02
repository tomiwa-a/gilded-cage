import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockPlayer } from '../../data/mocks';
import UserIcon from '../../components/icons/UserIcon';
import BoltIcon from '../../components/icons/BoltIcon';
import CoinsIcon from '../../components/icons/CoinsIcon';
import HeartIcon from '../../components/icons/HeartIcon';
import CogIcon from '../../components/icons/CogIcon';
import ShieldIcon from '../../components/icons/ShieldIcon';
import SwordIcon from '../../components/icons/SwordIcon';
import BrainIcon from '../../components/icons/BrainIcon';
import ChatIcon from '../../components/icons/ChatIcon';

// This would typically come from an auth context
const isCurrentUser = true;

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'stats' | 'settings'>('stats');
  
  // Settings state
  const [notifications, setNotifications] = useState({
    combat: true,
    friends: true,
    crew: true,
    events: false,
  });

  const [gameplay, setGameplay] = useState({
    autoDefend: true,
    showLevels: true,
  });

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

  const handleLogout = () => {
    // Logic to clear session would go here
    navigate('/login');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6 text-center">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-neutral-100 rounded-full mx-auto mb-4 flex items-center justify-center text-neutral-400 border-4 border-white shadow-sm">
                <div className="w-12 h-12 [&>svg]:w-full [&>svg]:h-full"><UserIcon /></div>
              </div>
              <div className="absolute bottom-4 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            
            <h1 className="text-2xl font-bold text-neutral-900 mb-1">{mockPlayer.name}</h1>
            <div className="text-neutral-500 font-medium mb-4">Level 8 Operator</div>
            
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-bold uppercase tracking-wide">
                {mockPlayer.archetype}
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wide">
                VIP
              </span>
            </div>

            {isCurrentUser && (
              <div className="grid grid-cols-2 gap-3 border-t border-neutral-100 pt-6">
                 <button
                   onClick={() => setActiveTab('stats')}
                   className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                     activeTab === 'stats' 
                       ? 'bg-neutral-900 text-white shadow-md' 
                       : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                   }`}
                 >
                   <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full"><ShieldIcon /></div>
                   <span className="text-xs font-semibold">Overview</span>
                 </button>
                 <button
                   onClick={() => setActiveTab('settings')}
                   className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                     activeTab === 'settings' 
                       ? 'bg-neutral-900 text-white shadow-md' 
                       : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                   }`}
                 >
                   <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full"><CogIcon /></div>
                   <span className="text-xs font-semibold">Settings</span>
                 </button>
              </div>
            )}
          </div>

          {/* Quick Stats Summary - Always visible */}
          <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-4">
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase">Cash Available</span>
                <div className="w-4 h-4 text-neutral-400 [&>svg]:w-full [&>svg]:h-full"><CoinsIcon /></div>
             </div>
             <div className="text-2xl font-bold text-neutral-900">${mockPlayer.money.toLocaleString()}</div>
             <div className="text-xs text-green-600 font-medium mt-1">+12% this week</div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8">
          {activeTab === 'stats' && (
            <div className="space-y-6">
              
              {/* Resources Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-5 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full"><HeartIcon /></div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-neutral-500">Health Status</div>
                          <div className="text-lg font-bold text-neutral-900">{mockPlayer.health}/{mockPlayer.maxHealth}</div>
                        </div>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(mockPlayer.health / mockPlayer.maxHealth) * 100}%` }}></div>
                      </div>
                    </div>
                 </div>

                 <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-5 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-yellow-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full"><BoltIcon /></div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-neutral-500">Energy Level</div>
                          <div className="text-lg font-bold text-neutral-900">{mockPlayer.ap}/{mockPlayer.maxAp}</div>
                        </div>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${(mockPlayer.ap / mockPlayer.maxAp) * 100}%` }}></div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Attributes & Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span className="w-1 h-4 bg-neutral-900 rounded-full"></span>
                    Attributes
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                           <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full"><ChatIcon /></div> 
                        </div>
                        <span className="font-medium text-neutral-700">Influence</span>
                      </div>
                      <span className="text-xl font-bold text-neutral-900">{mockPlayer.stats.influence}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                           <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full"><BrainIcon /></div>
                        </div>
                        <span className="font-medium text-neutral-700">Cunning</span>
                      </div>
                      <span className="text-xl font-bold text-neutral-900">{mockPlayer.stats.cunning}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                       <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full">
                           <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full"><SwordIcon /></div>
                        </div>
                        <span className="font-medium text-neutral-700">Power</span>
                      </div>
                      <span className="text-xl font-bold text-neutral-900">{mockPlayer.stats.power}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span className="w-1 h-4 bg-neutral-900 rounded-full"></span>
                    Reputation
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(reputation).map(([faction, data]) => (
                      <div key={faction}>
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="font-medium text-neutral-700 capitalize">{faction}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                             data.value >= 60 ? 'bg-green-100 text-green-700' : 
                             data.value >= 40 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>{data.label}</span>
                        </div>
                        <div className="w-full bg-neutral-100 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              data.value >= 60 ? 'bg-green-500' : data.value >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                            }`} 
                            style={{ width: `${data.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Statistics */}
              <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-1 h-4 bg-neutral-900 rounded-full"></span>
                  Career Statistics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-neutral-100 rounded-xl bg-neutral-50/50">
                    <div className="text-neutral-500 text-xs uppercase mb-1">Total Kills</div>
                    <div className="font-bold text-2xl text-neutral-900">{stats.playersKilled}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-100 rounded-xl bg-neutral-50/50">
                    <div className="text-neutral-500 text-xs uppercase mb-1">Deaths</div>
                    <div className="font-bold text-2xl text-neutral-900">{stats.timesKilled}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-100 rounded-xl bg-neutral-50/50">
                    <div className="text-neutral-500 text-xs uppercase mb-1">Crimes</div>
                    <div className="font-bold text-2xl text-neutral-900">{stats.crimesCommitted}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-100 rounded-xl bg-neutral-50/50">
                    <div className="text-neutral-500 text-xs uppercase mb-1">Earnings</div>
                    <div className="font-bold text-2xl text-green-600">${stats.moneyEarned.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-100 rounded-xl bg-neutral-50/50">
                    <div className="text-neutral-500 text-xs uppercase mb-1">Jobs Done</div>
                    <div className="font-bold text-2xl text-neutral-900">{stats.jobsCompleted}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-100 rounded-xl bg-neutral-50/50">
                    <div className="text-neutral-500 text-xs uppercase mb-1">Play Time</div>
                    <div className="font-bold text-2xl text-neutral-900">{stats.timePlayed}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && isCurrentUser && (
            <div className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                   <div className="w-1 h-5 bg-neutral-900 rounded-full"></div>
                   Account Settings
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-500 shadow-sm border border-neutral-200">
                        <div className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full"><UserIcon /></div>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900">Email Address</div>
                        <div className="text-xs text-neutral-500">alex@gmail.com</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">Verified</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-500 shadow-sm border border-neutral-200">G</div>
                      <div>
                         <div className="font-medium text-neutral-900">Connected Accounts</div>
                         <div className="text-xs text-neutral-500">Google</div>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-neutral-600 hover:text-neutral-900">Manage</button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                   <div className="w-1 h-5 bg-neutral-900 rounded-full"></div>
                   Notifications
                </h2>
                <div className="space-y-1">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-4 border-b border-neutral-100 last:border-0 hover:bg-neutral-50/50 px-2 rounded-lg transition-colors">
                      <span className="text-neutral-700 font-medium capitalize">{key} Alerts</span>
                      <button
                        onClick={() => setNotifications({ ...notifications, [key]: !value })}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? 'bg-neutral-900' : 'bg-neutral-200'}`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                   <div className="w-1 h-5 bg-neutral-900 rounded-full"></div>
                   Gameplay
                </h2>
                <div className="space-y-1">
                  <div className="flex justify-between items-center py-4 border-b border-neutral-100 px-2">
                    <span className="text-neutral-700 font-medium">Auto-defend when offline</span>
                    <button
                      onClick={() => setGameplay({ ...gameplay, autoDefend: !gameplay.autoDefend })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${gameplay.autoDefend ? 'bg-neutral-900' : 'bg-neutral-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${gameplay.autoDefend ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center py-4 px-2">
                    <span className="text-neutral-700 font-medium">Show player levels</span>
                    <button
                      onClick={() => setGameplay({ ...gameplay, showLevels: !gameplay.showLevels })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${gameplay.showLevels ? 'bg-neutral-900' : 'bg-neutral-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${gameplay.showLevels ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-red-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-red-600 mb-2">Danger Zone</h2>
                <p className="text-sm text-neutral-500 mb-6">Permanently delete your character. This action cannot be undone.</p>
                <button className="px-5 py-2.5 bg-red-50 text-red-600 font-medium border border-red-200 rounded-xl hover:bg-red-100 hover:border-red-300 transition-colors">
                  Delete Character
                </button>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 font-medium border border-neutral-200 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm"
                >
                  <div className="w-4 h-4 rotate-180 [&>svg]:w-full [&>svg]:h-full"><ShieldIcon /></div>
                  Logout Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
