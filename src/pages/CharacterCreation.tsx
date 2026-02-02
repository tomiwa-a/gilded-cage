import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/icons/LogoIcon';
import { archetypes, difficulties } from '../data/mocks';

type Step = 1 | 2 | 3 | 4;

interface CharacterDraft {
  name: string;
  archetype: string | null;
  stats: { rhetoric: number; hustle: number; entropy: number };
  difficulty: string | null;
}

export default function CharacterCreation() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [character, setCharacter] = useState<CharacterDraft>({
    name: '',
    archetype: null,
    stats: { rhetoric: 5, hustle: 5, entropy: 5 },
    difficulty: null,
  });

  const totalPoints = 5;
  const usedPoints = (character.stats.rhetoric - 5) + (character.stats.hustle - 5) + (character.stats.entropy - 5);
  const remainingPoints = totalPoints - usedPoints;

  const getArchetypeBonus = () => {
    const arch = archetypes.find(a => a.id === character.archetype);
    return arch?.bonus || { rhetoric: 0, hustle: 0, entropy: 0 };
  };

  const getFinalStats = () => {
    const bonus = getArchetypeBonus();
    return {
      rhetoric: character.stats.rhetoric + bonus.rhetoric,
      hustle: character.stats.hustle + bonus.hustle,
      entropy: character.stats.entropy + bonus.entropy,
    };
  };

  const adjustStat = (stat: 'rhetoric' | 'hustle' | 'entropy', delta: number) => {
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
        <div className="px-6 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-6 h-6 text-neutral-900">
              <LogoIcon />
            </div>
            <span className="font-semibold text-neutral-900">The Gilded Cage</span>
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

      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-2xl animate-fade-in" key={step}>
          {step === 1 && (
            <div className="text-center animate-slide-up">
              <div className="mb-2 text-neutral-500 text-sm uppercase tracking-wider">Step 1 of 4</div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">Name Your Character</h1>
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
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">Choose Your Path</h1>
                <p className="text-neutral-600">Your archetype shapes how you interact with the world.</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {archetypes.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => setCharacter({ ...character, archetype: arch.id })}
                    className={`card-game p-6 text-left ${
                      character.archetype === arch.id ? 'selected animate-pulse-glow' : ''
                    }`}
                  >
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{arch.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{arch.description}</p>
                    <div className="text-xs text-neutral-500 mb-2">{arch.playstyle}</div>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-neutral-100 px-2 py-1 rounded">+{arch.bonus.rhetoric} RHE</span>
                      <span className="bg-neutral-100 px-2 py-1 rounded">+{arch.bonus.hustle} HUS</span>
                      <span className="bg-neutral-100 px-2 py-1 rounded">+{arch.bonus.entropy} ENT</span>
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
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">Allocate Your Points</h1>
                <p className="text-neutral-600">
                  <span className={remainingPoints === 0 ? 'text-green-600 font-medium' : ''}>
                    {remainingPoints} points remaining
                  </span>
                </p>
              </div>
              
              <div className="card-game p-6 max-w-md mx-auto">
                {(['rhetoric', 'hustle', 'entropy'] as const).map((stat) => {
                  const bonus = getArchetypeBonus()[stat];
                  return (
                    <div key={stat} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                      <div>
                        <div className="font-medium text-neutral-900 capitalize">{stat}</div>
                        <div className="text-xs text-neutral-500">
                          Base: {character.stats[stat]} {bonus > 0 && <span className="text-green-600">+{bonus}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => adjustStat(stat, -1)}
                          disabled={character.stats[stat] <= 1}
                          className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-900 disabled:opacity-30 disabled:hover:border-neutral-200 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-bold text-lg">
                          {character.stats[stat] + bonus}
                        </span>
                        <button
                          onClick={() => adjustStat(stat, 1)}
                          disabled={character.stats[stat] >= 10 || remainingPoints <= 0}
                          className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-900 disabled:opacity-30 disabled:hover:border-neutral-200 transition-colors"
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
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">Choose Your Fate</h1>
                <p className="text-neutral-600">How ruthless will The Cage be?</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setCharacter({ ...character, difficulty: diff.id })}
                    className={`card-game p-6 w-full text-left ${
                      character.difficulty === diff.id ? 'selected animate-pulse-glow' : ''
                    }`}
                  >
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">{diff.name}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{diff.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {diff.modifiers.map((mod) => (
                        <span key={mod} className="text-xs bg-neutral-100 px-2 py-1 rounded">{mod}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              <div className="card-game p-6 max-w-md mx-auto">
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Character Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Name</span>
                    <span className="font-medium text-neutral-900">{character.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Archetype</span>
                    <span className="font-medium text-neutral-900 capitalize">{character.archetype}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-neutral-100">
                    <span className="text-neutral-600">Rhetoric</span>
                    <span className="font-medium text-neutral-900">{getFinalStats().rhetoric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Hustle</span>
                    <span className="font-medium text-neutral-900">{getFinalStats().hustle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Entropy</span>
                    <span className="font-medium text-neutral-900">{getFinalStats().entropy}</span>
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
