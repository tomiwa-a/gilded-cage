import { useState } from 'react';

const friends = [
  { id: 1, name: 'NightOwl', level: 5, location: 'Slums', online: true },
  { id: 2, name: 'CryptoKing', level: 23, location: 'Markets', online: true },
  { id: 3, name: 'DarkShadow', level: 15, location: 'Offline', online: false },
  { id: 4, name: 'Viper', level: 9, location: 'Offline', online: false },
];

const crewMembers = [
  { name: 'BossMan', role: 'Leader', level: 45 },
  { name: 'VeteranX', role: 'Officer', level: 32 },
  { name: 'OldGuard', role: 'Officer', level: 28 },
  { name: 'You', role: 'Member', level: 8 },
  { name: 'NightOwl', role: 'Member', level: 5 },
];

type Tab = 'friends' | 'crew' | 'messages';

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState<Tab>('friends');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex gap-2 mb-6">
        {(['friends', 'crew', 'messages'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
              activeTab === tab ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'friends' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-neutral-900">Friends</h2>
            <button className="text-sm text-neutral-600 hover:text-neutral-900">+ Add Friend</button>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg divide-y divide-neutral-200">
            {friends.map((friend) => (
              <div key={friend.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${friend.online ? 'bg-green-500' : 'bg-neutral-300'}`}></span>
                  <div>
                    <div className="font-medium text-neutral-900">{friend.name}</div>
                    <div className="text-sm text-neutral-500">Lv {friend.level} • {friend.location}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm border border-neutral-200 rounded-lg hover:bg-neutral-50">Message</button>
                  <button className="px-3 py-1 text-sm border border-neutral-200 rounded-lg hover:bg-neutral-50">Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'crew' && (
        <div className="space-y-4">
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">THE SYNDICATE</h2>
                <div className="text-sm text-neutral-500">Members: 12/25 • Territory: 3 zones • Rank: #15</div>
              </div>
              <button className="text-sm text-red-600 hover:underline">Leave Crew</button>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="font-semibold text-neutral-900 mb-4">Members</h3>
            <div className="space-y-3">
              {crewMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {member.role === 'Leader' && <span>👑</span>}
                    {member.role === 'Officer' && <span>⭐</span>}
                    <span className={`font-medium ${member.name === 'You' ? 'text-blue-600' : 'text-neutral-900'}`}>
                      {member.name}
                    </span>
                  </div>
                  <span className="text-sm text-neutral-500">Lv {member.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <h3 className="font-semibold text-neutral-900 mb-4">Crew Chat</h3>
            <div className="space-y-2 mb-4 text-sm">
              <div><span className="font-medium">BossMan:</span> Anyone up for a territory raid tonight?</div>
              <div><span className="font-medium">VeteranX:</span> I'm in. 9pm?</div>
              <div><span className="font-medium text-blue-600">You:</span> Count me in</div>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Type message..." className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg" />
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg">Send</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="bg-white border border-neutral-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Messages</h2>
          <div className="text-center text-neutral-500 py-8">
            No messages yet
          </div>
        </div>
      )}
    </div>
  );
}
