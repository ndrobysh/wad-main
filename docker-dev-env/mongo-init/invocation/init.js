// Script d'initialisation MongoDB pour invocation_db
// Templates de monstres (pool d'invocation) avec taux de probabilité

db = db.getSiblingDB('invocation_db');

// Templates pour le pool d'invocation
db.monsterTemplates.insertMany([
    // Monstres communs (70% total)
    {
        templateId: "slime_fire",
        name: "Fire Slime",
        elementType: "FIRE",
        baseHp: 100,
        baseAtk: 20,
        baseDef: 10,
        baseVit: 15,
        summonRate: 15.0,
        rarity: "COMMON",
        skills: [
            { name: "Ember", baseDamage: 20, statRatio: 0.5, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 5 },
            { name: "Heat Wave", baseDamage: 35, statRatio: 0.3, ratioStat: "ATK", cooldown: 2, maxUpgradeLevel: 5 },
            { name: "Flame Burst", baseDamage: 50, statRatio: 0.4, ratioStat: "ATK", cooldown: 4, maxUpgradeLevel: 5 }
        ]
    },
    {
        templateId: "slime_water",
        name: "Water Slime",
        elementType: "WATER",
        baseHp: 120,
        baseAtk: 15,
        baseDef: 15,
        baseVit: 12,
        summonRate: 15.0,
        rarity: "COMMON",
        skills: [
            { name: "Splash", baseDamage: 18, statRatio: 0.5, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 5 },
            { name: "Tidal Wave", baseDamage: 32, statRatio: 0.3, ratioStat: "ATK", cooldown: 2, maxUpgradeLevel: 5 },
            { name: "Hydro Cannon", baseDamage: 48, statRatio: 0.4, ratioStat: "ATK", cooldown: 4, maxUpgradeLevel: 5 }
        ]
    },
    {
        templateId: "slime_wind",
        name: "Wind Slime",
        elementType: "WIND",
        baseHp: 90,
        baseAtk: 18,
        baseDef: 8,
        baseVit: 25,
        summonRate: 15.0,
        rarity: "COMMON",
        skills: [
            { name: "Gust", baseDamage: 15, statRatio: 0.6, ratioStat: "VIT", cooldown: 0, maxUpgradeLevel: 5 },
            { name: "Tornado", baseDamage: 30, statRatio: 0.4, ratioStat: "VIT", cooldown: 2, maxUpgradeLevel: 5 },
            { name: "Hurricane", baseDamage: 45, statRatio: 0.5, ratioStat: "VIT", cooldown: 4, maxUpgradeLevel: 5 }
        ]
    },
    {
        templateId: "goblin_fire",
        name: "Fire Goblin",
        elementType: "FIRE",
        baseHp: 110,
        baseAtk: 25,
        baseDef: 12,
        baseVit: 18,
        summonRate: 12.5,
        rarity: "COMMON",
        skills: [
            { name: "Torch Strike", baseDamage: 22, statRatio: 0.55, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 5 },
            { name: "Fire Dance", baseDamage: 38, statRatio: 0.35, ratioStat: "ATK", cooldown: 2, maxUpgradeLevel: 5 },
            { name: "Inferno Slash", baseDamage: 55, statRatio: 0.45, ratioStat: "ATK", cooldown: 4, maxUpgradeLevel: 5 }
        ]
    },
    {
        templateId: "goblin_water",
        name: "Water Goblin",
        elementType: "WATER",
        baseHp: 130,
        baseAtk: 22,
        baseDef: 18,
        baseVit: 14,
        summonRate: 12.5,
        rarity: "COMMON",
        skills: [
            { name: "Aqua Strike", baseDamage: 20, statRatio: 0.55, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 5 },
            { name: "Water Shield", baseDamage: 35, statRatio: 0.35, ratioStat: "DEF", cooldown: 2, maxUpgradeLevel: 5 },
            { name: "Flood Crash", baseDamage: 52, statRatio: 0.45, ratioStat: "ATK", cooldown: 4, maxUpgradeLevel: 5 }
        ]
    },

    // Monstres rares (25% total)
    {
        templateId: "phoenix_fire",
        name: "Phoenix",
        elementType: "FIRE",
        baseHp: 200,
        baseAtk: 45,
        baseDef: 25,
        baseVit: 35,
        summonRate: 8.0,
        rarity: "RARE",
        skills: [
            { name: "Phoenix Fire", baseDamage: 40, statRatio: 0.7, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 7 },
            { name: "Rebirth Flame", baseDamage: 60, statRatio: 0.5, ratioStat: "HP", cooldown: 3, maxUpgradeLevel: 7 },
            { name: "Supernova", baseDamage: 100, statRatio: 0.6, ratioStat: "ATK", cooldown: 5, maxUpgradeLevel: 7 }
        ]
    },
    {
        templateId: "leviathan_water",
        name: "Leviathan",
        elementType: "WATER",
        baseHp: 250,
        baseAtk: 40,
        baseDef: 35,
        baseVit: 28,
        summonRate: 8.0,
        rarity: "RARE",
        skills: [
            { name: "Deep Surge", baseDamage: 38, statRatio: 0.65, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 7 },
            { name: "Abyssal Shield", baseDamage: 55, statRatio: 0.6, ratioStat: "DEF", cooldown: 3, maxUpgradeLevel: 7 },
            { name: "Tsunami", baseDamage: 95, statRatio: 0.55, ratioStat: "ATK", cooldown: 5, maxUpgradeLevel: 7 }
        ]
    },
    {
        templateId: "griffin_wind",
        name: "Griffin",
        elementType: "WIND",
        baseHp: 180,
        baseAtk: 42,
        baseDef: 22,
        baseVit: 50,
        summonRate: 9.0,
        rarity: "RARE",
        skills: [
            { name: "Sky Dive", baseDamage: 35, statRatio: 0.8, ratioStat: "VIT", cooldown: 0, maxUpgradeLevel: 7 },
            { name: "Wind Blade", baseDamage: 58, statRatio: 0.55, ratioStat: "ATK", cooldown: 3, maxUpgradeLevel: 7 },
            { name: "Storm King", baseDamage: 90, statRatio: 0.7, ratioStat: "VIT", cooldown: 5, maxUpgradeLevel: 7 }
        ]
    },

    // Monstres légendaires (5% total)
    {
        templateId: "dragon_fire",
        name: "Inferno Dragon",
        elementType: "FIRE",
        baseHp: 400,
        baseAtk: 80,
        baseDef: 50,
        baseVit: 45,
        summonRate: 2.0,
        rarity: "LEGENDARY",
        skills: [
            { name: "Dragon Breath", baseDamage: 70, statRatio: 0.9, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 10 },
            { name: "Magma Eruption", baseDamage: 120, statRatio: 0.7, ratioStat: "ATK", cooldown: 4, maxUpgradeLevel: 10 },
            { name: "Armageddon", baseDamage: 200, statRatio: 0.8, ratioStat: "ATK", cooldown: 6, maxUpgradeLevel: 10 }
        ]
    },
    {
        templateId: "dragon_water",
        name: "Abyssal Dragon",
        elementType: "WATER",
        baseHp: 450,
        baseAtk: 70,
        baseDef: 60,
        baseVit: 40,
        summonRate: 1.5,
        rarity: "LEGENDARY",
        skills: [
            { name: "Frost Breath", baseDamage: 65, statRatio: 0.85, ratioStat: "ATK", cooldown: 0, maxUpgradeLevel: 10 },
            { name: "Ice Age", baseDamage: 110, statRatio: 0.75, ratioStat: "DEF", cooldown: 4, maxUpgradeLevel: 10 },
            { name: "Absolute Zero", baseDamage: 190, statRatio: 0.85, ratioStat: "ATK", cooldown: 6, maxUpgradeLevel: 10 }
        ]
    },
    {
        templateId: "dragon_wind",
        name: "Storm Dragon",
        elementType: "WIND",
        baseHp: 380,
        baseAtk: 75,
        baseDef: 45,
        baseVit: 70,
        summonRate: 1.5,
        rarity: "LEGENDARY",
        skills: [
            { name: "Thunder Roar", baseDamage: 60, statRatio: 1.0, ratioStat: "VIT", cooldown: 0, maxUpgradeLevel: 10 },
            { name: "Lightning Storm", baseDamage: 105, statRatio: 0.8, ratioStat: "VIT", cooldown: 4, maxUpgradeLevel: 10 },
            { name: "Ragnarok", baseDamage: 180, statRatio: 0.9, ratioStat: "VIT", cooldown: 6, maxUpgradeLevel: 10 }
        ]
    }
]);

// Index
db.monsterTemplates.createIndex({ "templateId": 1 }, { unique: true });
db.monsterTemplates.createIndex({ "rarity": 1 });
db.monsterTemplates.createIndex({ "elementType": 1 });

// Collection buffer d'invocation
db.createCollection("invocationBuffer");
db.invocationBuffer.createIndex({ "playerId": 1 });
db.invocationBuffer.createIndex({ "status": 1 });
db.invocationBuffer.createIndex({ "timestamp": 1 });

print("Invocation DB initialisé avec templates de monstres");
print("Taux total: 100% (Commun: 70%, Rare: 25%, Légendaire: 5%)");
