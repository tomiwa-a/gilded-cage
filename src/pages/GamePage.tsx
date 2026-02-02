import { useNavigate } from 'react-router-dom';

export default function GamePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cage-darker text-white">
      <div className="container mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/')}
          className="mb-8 px-6 py-2 bg-cage-dark border border-cage-purple/30 rounded-lg hover:border-cage-purple transition-all"
        >
          ← Back to Landing
        </button>

        <div className="text-center py-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cage-purple to-cage-blue bg-clip-text text-transparent">
            The Game Begins...
          </h1>
          <p className="text-gray-400 text-xl">
            Game interface coming soon. This is where the magic happens.
          </p>
        </div>
      </div>
    </div>
  );
}
