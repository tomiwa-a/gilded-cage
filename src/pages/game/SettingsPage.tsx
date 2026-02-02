import { useState } from 'react';

export default function SettingsPage() {
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

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">Settings</h1>

      <div className="space-y-6">
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Account</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-600">Email</span>
              <span className="text-neutral-900">alex@gmail.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-600">Linked</span>
              <span className="text-neutral-900">Google</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Notifications</h2>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-neutral-700 capitalize">{key} alerts</span>
                <button
                  onClick={() => setNotifications({ ...notifications, [key]: !value })}
                  className={`w-12 h-6 rounded-full transition-colors ${value ? 'bg-neutral-900' : 'bg-neutral-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Gameplay</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-700">Auto-defend when offline</span>
              <button
                onClick={() => setGameplay({ ...gameplay, autoDefend: !gameplay.autoDefend })}
                className={`w-12 h-6 rounded-full transition-colors ${gameplay.autoDefend ? 'bg-neutral-900' : 'bg-neutral-200'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${gameplay.autoDefend ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-700">Show player levels</span>
              <button
                onClick={() => setGameplay({ ...gameplay, showLevels: !gameplay.showLevels })}
                className={`w-12 h-6 rounded-full transition-colors ${gameplay.showLevels ? 'bg-neutral-900' : 'bg-neutral-200'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${gameplay.showLevels ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
          <p className="text-sm text-neutral-600 mb-4">Permanently delete your character. This action cannot be undone.</p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Delete Character
          </button>
        </div>

        <button className="w-full py-3 border border-neutral-200 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
}
