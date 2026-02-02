export const mockPlayer = {
  name: "Alex",
  archetype: "Visionary",
  health: 90,
  maxHealth: 100,
  ap: 8,
  maxAp: 10,
  money: 500,
  stats: {
    rhetoric: 8,
    hustle: 5,
    entropy: 2,
  },
};

export const mockLocation = {
  name: "Sector 4 Slums",
  description: "A dense, ramshackle district teeming with activity. Neon signs flicker against weathered concrete, and the air is thick with the scent of street food and exhaust.",
  owner: null,
  statusEffects: [],
  connectedLocations: [
    { id: 1, name: "The Bazaar", cost: 1 },
    { id: 2, name: "Downtown Core", cost: 2 },
    { id: 3, name: "Industrial Zone", cost: 1 },
  ],
};

export const mockActions = [
  { id: 1, name: "Work a Job", cost: 2, description: "Earn money through honest labor" },
  { id: 2, name: "Rob Store", cost: 3, description: "Risky but rewarding" },
  { id: 3, name: "Scavenge", cost: 2, description: "Search for useful items" },
  { id: 4, name: "Trade", cost: 1, description: "Buy and sell goods" },
  { id: 5, name: "Rest", cost: 0, description: "Recover health" },
  { id: 6, name: "Gamble", cost: 2, description: "Test your luck" },
];

export const mockInventory = [
  { name: "Scrap Metal", quantity: 3 },
  { name: "Data Chip", quantity: 1 },
  { name: "Stolen Goods", quantity: 2 },
  { name: "Med Kit", quantity: 1 },
];

export const mockEventLog = [
  { id: 1, text: "You arrived at Sector 4 Slums. The streets are bustling.", time: "2 min ago" },
  { id: 2, text: "A mysterious stranger watches you from an alleyway.", time: "5 min ago" },
  { id: 3, text: "You successfully completed a minor task, earning $50.", time: "8 min ago" },
  { id: 4, text: "The local gang presence seems to be increasing.", time: "12 min ago" },
  { id: 5, text: "You found a discarded data chip on the ground.", time: "15 min ago" },
  { id: 6, text: "A vendor offers you a suspicious deal.", time: "20 min ago" },
];

export const mockMarketPrices = [
  { resource: "Energy", price: 45, change: +2 },
  { resource: "Code", price: 120, change: -5 },
  { resource: "Food", price: 30, change: +1 },
];

export const archetypes = [
  {
    id: 'visionary',
    name: 'Visionary',
    description: 'Masters of persuasion and foresight. You see opportunities where others see obstacles.',
    bonus: { rhetoric: 3, hustle: 1, entropy: 1 },
    playstyle: 'Diplomacy & Manipulation',
  },
  {
    id: 'grifter',
    name: 'Grifter',
    description: 'Born survivors who thrive in chaos. Quick hands, quicker thinking.',
    bonus: { rhetoric: 1, hustle: 3, entropy: 1 },
    playstyle: 'Stealth & Commerce',
  },
  {
    id: 'brute',
    name: 'Brute',
    description: 'When words fail, force prevails. You are the storm others fear.',
    bonus: { rhetoric: 1, hustle: 1, entropy: 3 },
    playstyle: 'Combat & Intimidation',
  },
];

export const difficulties = [
  {
    id: 'normal',
    name: 'Normal',
    description: 'A balanced experience. Death sets you back, but you can recover.',
    modifiers: ['Standard AP regeneration', 'Normal economy', 'Respawn with 50% resources'],
  },
  {
    id: 'hardcore',
    name: 'Hardcore',
    description: 'Permadeath. One life, one chance. For those who seek true challenge.',
    modifiers: ['Slower AP regeneration', 'Scarce resources', 'Permanent death'],
  },
];
