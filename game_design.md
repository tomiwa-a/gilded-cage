# The Gilded Cage - Game Design Document

## 1. Core Concept

**Genre:** Browser-based PvP MMO with idle/incremental elements

**Setting:** A dystopian megacity controlled by corporations and criminal syndicates. Players start with nothing and climb the social ladder through commerce, crime, or influence.

**Core Fantasy:** Rise from poverty to power. Your choices shape your story and impact the world—and other players.

**Game Style:** Text-based with UI interactions. Heavy PvP focus where powerful players can disrupt weaker ones.

**Pacing:** Moderate progression. Players should feel meaningful progress daily, reach mid-game in 2-3 weeks, and approach end-game in 2-3 months.

---

## 2. What Does a Character Have?

### Primary Resources

| Resource       | Description                    | How It Works                                                   |
| -------------- | ------------------------------ | -------------------------------------------------------------- |
| **Health**     | Physical condition (0-100)     | Drops from combat, risky actions. 0 = incapacitated            |
| **Energy**     | Daily fuel for actions (0-100) | Regenerates over time. Actions cost energy                     |
| **Money ($)**  | Cash on hand                   | Earned from work, crime, trade. Can be stolen by other players |
| **Reputation** | Standing with factions         | Affects prices, access, NPC reactions                          |

### Stats (From Character Creation)

| Stat          | Description                     | What It Affects                                                |
| ------------- | ------------------------------- | -------------------------------------------------------------- |
| **Influence** | Social capital, connections     | Business deals, diplomacy, corporate jobs, social manipulation |
| **Cunning**   | Street smarts, deception        | Theft, gambling, scams, evasion, critical hit chance           |
| **Power**     | Physical strength, intimidation | Combat damage, territory control, enforcement                  |

### Other Attributes

- **Level** - Overall progression (XP-based)
- **Archetype** - Operator / Hustler / Enforcer (permanent)
- **Difficulty** - Casual / Standard / Ruthless (permanent)
- **Location** - Where you currently are in the city
- **Equipped Items** - Weapons, armor, tools that affect combat

---

## 3. Energy System

**How Energy Works:**

- Max Energy: 100
- Actions cost 5-25 energy depending on intensity
- Energy regenerates: 1 point every 3 minutes (480/day)
- Can be boosted with items (energy drinks, rest)

**Why Energy?**

- Prevents 24/7 grinding (casual-friendly)
- Creates strategic decisions
- Levels the playing field initially

---

## 4. What Can a Character Do?

### Core Actions (Available Everywhere)

| Action        | Energy Cost | Description                     |
| ------------- | ----------- | ------------------------------- |
| **Travel**    | 5           | Move to a connected location    |
| **Rest**      | 0           | Recover health (slow, but free) |
| **Inventory** | 0           | View/use items                  |
| **Profile**   | 0           | View your stats, achievements   |

### Work & Income

| Work Type         | Energy | Stat Used | Description                                       |
| ----------------- | ------ | --------- | ------------------------------------------------- |
| **Corporate Job** | 15     | Influence | Safe, steady pay. Needs corporate district access |
| **Street Hustle** | 10     | Cunning   | Quick cash from odd jobs                          |
| **Manual Labor**  | 20     | Power     | Hard work, decent pay                             |
| **Freelance Gig** | 10     | Any       | Random tasks from NPCs                            |

### Crime & Risk

| Action         | Energy | Stat Used | Risk     | Description          |
| -------------- | ------ | --------- | -------- | -------------------- |
| **Pickpocket** | 10     | Cunning   | Low      | Small quick money    |
| **Burglary**   | 20     | Cunning   | Medium   | Break into locations |
| **Robbery**    | 25     | Power     | High     | Direct confrontation |
| **Scam**       | 15     | Influence | Medium   | Trick NPCs/players   |
| **Hack**       | 20     | Cunning   | Variable | Digital crimes       |

### Social Actions

| Action           | Energy | Description                       |
| ---------------- | ------ | --------------------------------- |
| **Talk to NPC**  | 5      | Get info, quests, rumors          |
| **Send Message** | 0      | Message another player            |
| **Add Friend**   | 0      | Request friendship                |
| **Join Crew**    | 0      | Join a player organization        |
| **Trade**        | 5      | Exchange items/money with someone |

---

## 5. PvP Combat System

### Design Philosophy

PvP is **central** to The Gilded Cage. Powerful players can:

- Rob other players' money
- Steal their inventory
- Take over their territory
- Destroy their businesses
- Kill them (with difficulty consequences)

### Real-Time Combat Mechanics

Combat is **real-time** and based on:

1. **Stats** (base values + archetype bonuses)
2. **Equipment** (weapons, armor, tools)
3. **Health/Energy** (current condition)
4. **Skills** (learned abilities)

### Combat Flow

```
Attacker initiates → Defender gets alert → Both enter combat screen

COMBAT SCREEN:
┌─────────────────────────────────────────┐
│  YOU (85 HP)         vs       THEM (72 HP)  │
│  ████████░░              ███████░░░        │
│                                             │
│  [Attack]  [Defend]  [Item]  [Flee]        │
│                                             │
│  Combat Log:                                │
│  > You strike for 12 damage                 │
│  > They counter for 8 damage                │
└─────────────────────────────────────────┘
```

### Combat Actions

| Action       | Effect                       | Cooldown |
| ------------ | ---------------------------- | -------- |
| **Attack**   | Deal damage (Power + weapon) | 2 sec    |
| **Defend**   | Reduce incoming damage 50%   | 3 sec    |
| **Use Item** | Heal, buff, or debuff        | Varies   |
| **Flee**     | Escape (Cunning check)       | 5 sec    |
| **Special**  | Class-specific ability       | 10 sec   |

### Damage Calculation

```
Base Damage = Power + Weapon Damage
Modified by:
  - Attacker's Cunning → Crit chance (+50% damage)
  - Defender's Power → Damage reduction
  - Defender's Armor → Flat reduction
  - Randomness (±10%)
```

### PvP Consequences

**For Attackers:**

- Initiating attack costs 20 Energy
- If you lose, you drop some money/items
- Builds "Heat" with authorities (more police attention)

**For Defenders:**

- Get notification → 30 seconds to respond
- If offline, auto-defend (reduced effectiveness)
- Can call allies for help

**Death Consequences by Difficulty:**

| Difficulty | On Death                                     |
| ---------- | -------------------------------------------- |
| Casual     | Lose 25% money, respawn immediately          |
| Standard   | Lose 50% money + random item, 15 min respawn |
| Ruthless   | **PERMADEATH** - character deleted           |

### Protected vs Lawless Zones

| Zone Type           | PvP Rules                               |
| ------------------- | --------------------------------------- |
| **Safe Zones**      | No PvP allowed (Corporate, Residential) |
| **Neutral Zones**   | PvP with mutual consent only            |
| **Dangerous Zones** | PvP allowed, defender can flee          |
| **Lawless Zones**   | Free-for-all PvP, no restrictions       |

### Territory Control

Players/Crews can **claim territory**:

- Costs money to claim
- Generates passive income
- Can be attacked and taken over
- Defending your territory gives bonuses

---

## 6. Work System

### How Work Works

1. **Find a Job** - Jobs posted at specific locations
2. **Apply** - Some jobs have stat requirements
3. **Work** - Spend energy, pass time, get paid
4. **Repeat or Quit** - Keep working or find new opportunities

### Job Types by Location

**Corporate District:**

- Data Entry Clerk ($20/shift, Influence 3)
- Security Guard ($30/shift, Power 4)
- Administrative Assistant ($25/shift, Influence 5)

**Markets:**

- Stall Vendor ($15/shift, Cunning 2)
- Courier ($20/shift, any stat)
- Fence (sell stolen goods)

**Slums:**

- Day Laborer ($10/shift, Power 2)
- Runner ($15/shift, Cunning 3)
- Lookout ($12/shift, any stat)

**Underground:**

- Dealer ($40/shift, Cunning 5) - illegal
- Enforcer ($50/shift, Power 6) - illegal
- Hacker for hire ($60/shift, Cunning 7) - illegal

### Business Ownership

High-level players can own businesses:

- Buy property → Set up shop
- Hire NPC workers
- Generate passive income
- **Can be robbed or destroyed by other players**

---

## 7. Social Features

### Friends List

- Add players as friends
- See their online status
- Send private messages
- See their public profile
- Warn each other of attacks

### Crews (Guilds/Gangs)

Crews are **essential for survival** against powerful players:

- Create or join a crew
- Crew chat
- Shared territory bonuses
- Crew heists (co-op missions)
- Crew wars (organized PvP)
- Defend each other from attacks

### Alliances & Enemies

- Crews can ally with other crews
- Declare war on enemy crews
- Bounty system (pay to have someone attacked)

### Trading

- Direct player-to-player trades
- Trade items, money
- Trade agreements (contracts)
- **Can scam players (Cunning-based)**

---

## 8. World Events

### Types of World Events

**Economic Events:**

- Market crash (all prices drop 20%)
- Shortage (specific resource price spikes)
- Corporate merger (new jobs available)
- Festival (bonus XP weekend)

**Criminal Events:**

- Gang war (certain zones become lawless)
- Police crackdown (crime harder, but PvP punishment reduced)
- Black market flush (rare items available)
- Heist opportunity (limited-time co-op mission)

**PvP Events:**

- **Purge Night** - All zones become lawless for 1 hour
- **Bounty Rush** - Increased rewards for attacking wanted players
- **Territory War** - Bonus rewards for claiming territory
- **Hunt** - Specific high-value target, everyone can attack

**Environmental Events:**

- Power outage (certain locations closed)
- Riot (bonus to crime, penalty to work)
- Lockdown (travel restricted)
- Celebration (free energy restoration)

### How Events Work

- Server-wide, affect all players
- Last hours to days
- AI-generated narrative descriptions
- Shape the game world dynamically
- Some events are triggered by player actions

---

## 9. Economy

### Currency

- **$ (Cash)** - Main currency, spendable everywhere

### Tradeable Resources

- **Energy Drinks** - Restore energy
- **Med Kits** - Restore health
- **Weapons** - Combat damage bonus
- **Armor** - Combat defense bonus
- **Tools** - Crime/work bonuses
- **Data Chips** - Valuable trade items
- **Contraband** - High value, illegal

### Markets

- **Public Market** - Player-to-player trading
- **NPC Shops** - Fixed prices, limited stock
- **Black Market** - Illegal goods, fluctuating prices

### Passive Income

- Own property → Rent income
- Own business → Profit share
- Investments → Interest/dividends
- Territory → Tribute from players passing through

---

## 10. Locations

### District Types

| District               | Danger Level | PvP Rules    | Primary Activities               |
| ---------------------- | ------------ | ------------ | -------------------------------- |
| **Corporate District** | Safe         | None         | Jobs, banking, corporate quests  |
| **Residential**        | Safe         | None         | Rest, social hub, housing        |
| **Markets**            | Neutral      | Consent only | Trading, shops, fences           |
| **Industrial**         | Risky        | Allowed      | Manual labor, smuggling          |
| **Slums**              | Dangerous    | Allowed      | Crime, cheap living, underground |
| **Underground**        | Lawless      | Free-for-all | Black market, gang HQs, arena    |

### Location Features

- Each location has unique actions
- NPCs specific to location
- Properties for sale/rent
- Events can affect specific locations
- Territory can be claimed

---

## 11. Required Screens

### Core Screens (Already Built)

1. ✅ **Landing Page** - Marketing, login
2. ✅ **Character Creation** - 4-step wizard
3. ✅ **Game Page** - Main hub with actions

### Screens to Build

| Screen             | Priority | Description                            |
| ------------------ | -------- | -------------------------------------- |
| **Login/Register** | High     | Google OAuth                           |
| **Profile**        | High     | Your full stats, achievements, history |
| **Inventory**      | High     | Items you own, equip, use              |
| **Map**            | High     | Visual district map with travel        |
| **Combat Screen**  | High     | Real-time PvP interface                |
| **Job Board**      | Medium   | Available work opportunities           |
| **Crime Menu**     | Medium   | Criminal activities (if in right zone) |
| **Market**         | Medium   | Buy/sell items                         |
| **Bank**           | Medium   | Deposit money, investments             |
| **Friends List**   | Medium   | Social connections                     |
| **Crew Hub**       | Medium   | Your crew, recruitment                 |
| **Messages**       | Medium   | Private messages                       |
| **Territory Map**  | Medium   | Owned territories, contestable zones   |
| **Leaderboard**    | Low      | Top players/crews                      |
| **Settings**       | Low      | Account, notifications, audio          |
| **World Events**   | Low      | Active events, history                 |

---

## 12. MVP Scope

For the **Minimum Viable Product**, focus on:

### Phase 1: Core Loop

- [ ] Authentication (Google login)
- [ ] Character creation (done)
- [ ] 3-5 locations with travel
- [ ] Basic work system (2-3 job types)
- [ ] Energy system
- [ ] Money earning/spending
- [ ] Profile screen
- [ ] Inventory (basic)

### Phase 2: PvP Foundation

- [ ] Real-time combat system
- [ ] Attack/defend mechanics
- [ ] Death consequences
- [ ] Zone PvP rules
- [ ] Combat screen UI

### Phase 3: Social & Economy

- [ ] Friends system
- [ ] Basic trading
- [ ] Crew creation
- [ ] Simple market

### Phase 4: Depth

- [ ] Crime system
- [ ] Territory control
- [ ] World events
- [ ] AI narratives
- [ ] Leaderboards

---

## 13. Future Monetization (Planned)

Monetization will be added **after** core gameplay is solid. Potential options:

- **Cosmetics** - Character avatars, profile themes
- **Convenience** - Energy boosts, faster travel
- **Premium Crew Features** - Larger crew size, custom emblems
- **Battle Pass** - Seasonal rewards track

**Never Pay-to-Win** - No buying stats, weapons, or combat advantages.
