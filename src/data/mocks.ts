export const mockPlayer = {
  name: "Alex",
  archetype: "Operator",
  health: 90,
  maxHealth: 100,
  ap: 8,
  maxAp: 10,
  money: 500,
  stats: {
    influence: 8,
    cunning: 5,
    power: 2,
  },
};

export const mockLocation = {
  name: "Sector 4 Slums",
  description: "A dense, ramshackle district teeming with activity. Neon signs flicker against weathered concrete, and the air is thick with the scent of street food and exhaust.",
  type: "dangerous",
  owner: null,
  statusEffects: [],
  connectedLocations: [
    { id: 1, name: "The Bazaar", cost: 1 },
    { id: 2, name: "Downtown Core", cost: 2 },
    { id: 3, name: "Industrial Zone", cost: 1 },
  ],
};

export const mockActions = [
  { id: 1, name: "Scavenge", cost: 2, description: "Search for useful items", stat: "cunning" },
  { id: 2, name: "Rob", cost: 3, description: "Risky but rewarding", stat: "cunning" },
  { id: 3, name: "Shake Down", cost: 2, description: "Intimidate for money", stat: "power" },
  { id: 4, name: "Trade", cost: 1, description: "Buy and sell goods", stat: "cunning" },
  { id: 5, name: "Rest", cost: 0, description: "Recover health", stat: null },
  { id: 6, name: "Claim Territory", cost: 3, description: "Take control of this zone", stat: "power" },
];

export const mockInventory = [
  { name: "Scrap Metal", quantity: 3 },
  { name: "Data Chip", quantity: 1 },
  { name: "Stolen Goods", quantity: 2 },
  { name: "Med Kit", quantity: 1 },
];

export const mockEventLog = [
  { id: 1, text: "You arrived at Sector 4 Slums. The streets are bustling.", time: "2 min ago" },
  { id: 2, text: "A corp security drone scans the area.", time: "5 min ago" },
  { id: 3, text: "You successfully completed a minor task, earning $50.", time: "8 min ago" },
  { id: 4, text: "The local gang presence seems to be increasing.", time: "12 min ago" },
  { id: 5, text: "You found a discarded data chip on the ground.", time: "15 min ago" },
  { id: 6, text: "A vendor offers you a suspicious deal.", time: "20 min ago" },
];

export const mockMarketPrices = [
  { resource: "Energy", price: 45, change: +2 },
  { resource: "Data", price: 120, change: -5 },
  { resource: "Synth", price: 30, change: +1 },
];

export const archetypes = [
  {
    id: 'operator',
    name: 'Operator',
    tagline: '"The system works for those who know its rules."',
    description: 'Corporate climbers who manipulate systems. You excel at legitimate business, investments, and corporate jobs.',
    weakness: 'Vulnerable in lawless zones',
    bonus: { influence: 3, cunning: 1, power: 1 },
    playstyle: 'Trade & Contracts',
  },
  {
    id: 'hustler',
    name: 'Hustler',
    tagline: '"Every crisis is an opportunity in disguise."',
    description: 'Street-smart survivors who exploit every angle. You thrive in gambling, black markets, and quick flips.',
    weakness: 'Poor reputation with corporations',
    bonus: { influence: 1, cunning: 3, power: 1 },
    playstyle: 'Scams & Black Market',
  },
  {
    id: 'enforcer',
    name: 'Enforcer',
    tagline: '"Respect is earned through strength."',
    description: 'Those who take what they want by force. Territory control, protection rackets, and combat are your tools.',
    weakness: 'Draws attention from authorities',
    bonus: { influence: 1, cunning: 1, power: 3 },
    playstyle: 'Territory & Combat',
  },
];

export const difficulties = [
  {
    id: 'casual',
    name: 'Casual',
    description: 'Learn the ropes at your own pace.',
    modifiers: ['2x AP regeneration', '$1000 starting cash', 'Respawn with 75% resources'],
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'The intended experience. Every choice matters.',
    modifiers: ['Normal AP regeneration', '$500 starting cash', 'Respawn with 50% resources'],
  },
  {
    id: 'ruthless',
    name: 'Ruthless',
    description: 'Permadeath. One life, one chance. Glory or ruin.',
    modifiers: ['Slow AP regeneration', '$200 starting cash', 'Permanent death'],
  },
];
