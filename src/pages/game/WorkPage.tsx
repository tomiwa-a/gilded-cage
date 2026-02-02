import BoltIcon from '../../components/icons/BoltIcon';
import ClockIcon from '../../components/icons/ClockIcon';

const jobs = [
  { id: 1, name: 'Day Laborer', pay: 10, energy: 20, stat: 'power', statReq: 2, time: '2 hrs', description: 'Hard physical work. No questions asked.' },
  { id: 2, name: 'Runner', pay: 15, energy: 15, stat: 'cunning', statReq: 3, time: '1 hr', description: "Deliver packages. Don't ask what's inside." },
  { id: 3, name: 'Lookout', pay: 12, energy: 10, stat: null, statReq: 0, time: '3 hrs', description: 'Watch for cops. Whistle if you see trouble.' },
  { id: 4, name: 'Street Vendor', pay: 18, energy: 15, stat: 'cunning', statReq: 2, time: '2 hrs', description: 'Sell questionable goods to passersby.' },
];

export default function WorkPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">Job Board</h1>
      <p className="text-neutral-600 mb-6">Available jobs in Sector 4 Slums</p>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-neutral-900">{job.name}</h3>
              <span className="text-lg font-bold text-green-600">${job.pay}</span>
            </div>
            <p className="text-neutral-600 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.stat && (
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  Requires: {job.stat} {job.statReq}+
                </span>
              )}
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full">
                <span className="w-3 h-3"><BoltIcon /></span> {job.energy} energy
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
                <span className="w-3 h-3"><ClockIcon /></span> {job.time}
              </div>
            </div>
            <button className="w-full py-2 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
