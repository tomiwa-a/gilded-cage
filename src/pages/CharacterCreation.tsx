import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/icons/LogoIcon';
import { archetypes, difficulties } from '../data/mocks';

type Step = 1 | 2 | 3 | 4;

interface CharacterDraft {
  name: string;
  archetype: string | null;
  stats: { influence: number; cunning: number; power: number };
  difficulty: string | null;
}

export default function CharacterCreation() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [character, setCharacter] = useState<CharacterDraft>({
    name: '',
    archetype: null,
    stats: { influence: 5, cunning: 5, power: 5 },
    difficulty: null,
  });

  const totalPoints = 5;
  const usedPoints = (character.stats.influence - 5) + (character.stats.cunning - 5) + (character.stats.power - 5);
  const remainingPoints = totalPoints - usedPoints;

  const getArchetypeBonus = () => {
    const arch = archetypes.find(a => a.id === character.archetype);
    return arch?.bonus || { influence: 0, cunning: 0, power: 0 };
  };

  const getFinalStats = () => {
    const bonus = getArchetypeBonus();
    return {
      influence: character.stats.influence + bonus.influence,
      cunning: character.stats.cunning + bonus.cunning,
      power: character.stats.power + bonus.power,
    };
  };

  const adjustStat = (stat: 'influence' | 'cunning' | 'power', delta: number) => {
    const newValue = character.stats[stat] + delta;
    if (newValue < 1 || newValue > 10) return;
    if (delta > 0 && remainingPoints <= 0) return;
    
    setCharacter({
      ...character,
      stats: { ...character.stats, [stat]: newValue },
    });
  };

  const canContinue = () => {
    switch (step) {
      case 1: return character.name.trim().length >= 2;
      case 2: return character.archetype !== null;
      case 3: return remainingPoints >= 0;
      case 4: return character.difficulty !== null;
      default: return false;
    }
  };

  const handleContinue = () => {
    if (step < 4) {
      setStep((step + 1) as Step);
    } else {
      navigate('/game');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 shrink-0">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-6 h-6 text-neutral-900">
              <LogoIcon />
            </div>
            <span className="font-semibold text-neutral-900 hidden sm:inline">The Gilded Cage</span>
          </button>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  s <= step ? 'bg-neutral-900' : 'bg-neutral-300'
                } ${s === step ? 'w-4' : ''}`}
              />
            ))}
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <div className="w-full max-w-4xl animate-fade-in" key={step}>
          {step === 1 && (
            <div className="text-center animate-slide-up">
              <div className="mb-2 text-neutral-500 text-sm uppercase tracking-wider">Step 1 of 4</div>
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">Name Your Character</h1>
              <p className="text-neutral-600 mb-8">Choose a name that will echo through the streets of The Cage.</p>
              
              <input
                type="text"
                value={character.name}
                onChange={(e) => setCharacter({ ...character, name: e.target.value })}
                placeholder="Enter your name..."
                className="w-full max-w-md mx-auto block px-6 py-4 text-lg text-center border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                autoFocus
              />
            </div>
          )}

          {step === 2 && (
            <div className="animate-slide-up">
              <div className="text-center mb-8">
                <div className="mb-2 text-neutral-500 text-sm uppercase tracking-wider">Step 2 of 4</div>
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">Choose Your Path</h1>
                <p className="text-neutral-600">Your archetype shapes how you interact with the world.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {archetypes.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setCharacter({ ...character, archetype: arch.id })}
                    className={`card-game p-6 sm:p-8 text-left ${
                      character.archetype === arch.id ? 'selected animate-pulse-glow' : ''
                    }`}
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{arch.name}</h3>
                    <p className="text-sm text-neutral-500 italic mb-4">{arch.tagline}</p>
                    <p className="text-sm text-neutral-600 mb-4">{arch.description}</p>
                    <div className="text-xs text-neutral-500 mb-4">
                      <span className="font-medium">Playstyle:</span> {arch.playstyle}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-neutral-100 px-3 py-1.5 rounded-full font-medium">+{arch.bonus.influence} INF</span>
                      <span className="bg-neutral-100 px-3 py-1.5 rounded-full font-medium">+{arch.bonus.cunning} CUN</span>
                      <span className="bg-neutral-100 px-3 py-1.5 rounded-full font-medium">+{arch.bonus.power} PWR</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-slide-up">
              <div className="text-center mb-8">
                <div className="mb-2 text-neutral-500 text-sm uppercase tracking-wider">Step 3 of 4</div>
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">Allocate Your Points</h1>
                <p className="text-neutral-600">
                  <span className={remainingPoints === 0 ? 'text-green-600 font-medium' : ''}>
                    {remainingPoints} points remaining
                  </span>
                </p>
              </div>
              
              <div className="card-game p-6 sm:p-8 max-w-lg mx-auto">
                {(['influence', 'cunning', 'power'] as const).map((stat) => {
                  const bonus = getArchetypeBonus()[stat];
                  const labels = { influence: 'Influence', cunning: 'Cunning', power: 'Power' };
                  const descriptions = {
                    influence: 'Social capital, diplomacy, business',
                    cunning: 'Street smarts, theft, gambling',
                    power: 'Strength, intimidation, combat'
                  };
                  return (
                    <div key={stat} className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-0">
                      <div>
                        <div className="font-semibold text-neutral-900">{labels[stat]}</div>
                        <div className="text-xs text-neutral-500">{descriptions[stat]}</div>
                        <div className="text-xs text-neutral-400 mt-1">
                          Base: {character.stats[stat]} {bonus > 0 && <span className="text-green-600">+{bonus}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => adjustStat(stat, -1)}
                          disabled={character.stats[stat] <= 1}
                          className="w-10 h-10 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:bg-transparent transition-all text-lg"
                        >
                          −
                        </button>
                        <span className="w-10 text-center font-bold text-xl">
                          {character.stats[stat] + bonus}
                        </span>
                        <button
                          onClick={() => adjustStat(stat, 1)}
                          disabled={character.stats[stat] >= 10 || remainingPoints <= 0}
                          className="w-10 h-10 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:bg-transparent transition-all text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-slide-up">
              <div className="text-center mb-8">
                <div className="mb-2 text-neutral-500 text-sm uppercase tracking-wider">Step 4 of 4</div>
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">Choose Your Fate</h1>
                <p className="text-neutral-600">How ruthless will The Cage be?</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-8 max-w-2xl mx-auto">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setCharacter({ ...character, difficulty: diff.id })}
                    className={`card-game p-6 sm:p-8 w-full text-left ${
                      character.difficulty === diff.id ? 'selected animate-pulse-glow' : ''
                    }`}
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{diff.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{diff.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {diff.modifiers.map((mod) => (
                        <span key={mod} className="text-xs bg-neutral-100 px-3 py-1.5 rounded-full">{mod}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <div className="card-game p-6 sm:p-8 max-w-lg mx-auto">
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Character Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Name</span>
                    <span className="font-medium text-neutral-900">{character.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Archetype</span>
                    <span className="font-medium text-neutral-900 capitalize">{character.archetype}</span>
                  </div>
                  <div className="border-t border-neutral-100 pt-3 mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Influence</span>
                      <span className="font-medium text-neutral-900">{getFinalStats().influence}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Cunning</span>
                      <span className="font-medium text-neutral-900">{getFinalStats().cunning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Power</span>
                      <span className="font-medium text-neutral-900">{getFinalStats().power}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            {step > 1 && (
              <button onClick={handleBack} className="btn-secondary">
                ← Back
              </button>
            )}
            <button
              onClick={handleContinue}
              disabled={!canContinue()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {step === 4 ? 'Enter The Cage →' : 'Continue →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

