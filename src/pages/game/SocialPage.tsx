import { useState } from 'react';
import UserIcon from '../../components/icons/UserIcon';
import CrownIcon from '../../components/icons/CrownIcon';
import StarIcon from '../../components/icons/StarIcon';
import ChatIcon from '../../components/icons/ChatIcon';

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState('friends');

  const friends = [
    { id: 1, name: 'NeonRat', status: 'online', location: 'The Markets' },
    { id: 2, name: 'CyberSamurai', status: 'offline', location: 'Residential Zone' },
  ];

  const crew = [
    { id: 1, name: 'Viper', role: 'Leader', status: 'online' },
    { id: 2, name: 'Alex', role: 'Member', status: 'online' }, // You
    { id: 3, name: 'Tank', role: 'Member', status: 'offline' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-6">Social</h1>

      <div className="flex gap-4 border-b border-neutral-200 mb-6">
        <button
          onClick={() => setActiveTab('friends')}
          className={`pb-2 px-1 text-sm font-medium ${
            activeTab === 'friends' ? 'text-neutral-900 border-b-2 border-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          Friends
        </button>
        <button
          onClick={() => setActiveTab('crew')}
          className={`pb-2 px-1 text-sm font-medium ${
            activeTab === 'crew' ? 'text-neutral-900 border-b-2 border-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          Crew
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`pb-2 px-1 text-sm font-medium ${
            activeTab === 'messages' ? 'text-neutral-900 border-b-2 border-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          Messages
        </button>
      </div>

      {activeTab === 'friends' && (
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between bg-white p-4 rounded-lg border border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500">
                  <div className="w-6 h-6"><UserIcon /></div>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">{friend.name}</div>
                  <div className="text-xs text-neutral-500">{friend.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-neutral-300'}`}></span>
                <span className="text-sm text-neutral-500 capitalize">{friend.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'crew' && (
        <div className="space-y-4">
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
