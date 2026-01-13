// Script d'initialisation MongoDB pour monster_db
// Collection pour les monstres des joueurs

db = db.getSiblingDB('monster_db');

// Collection monsters (remplie lors des invocations)
db.createCollection("monsters");

// Index
db.monsters.createIndex({ "ownerId": 1 });
db.monsters.createIndex({ "id": 1 }, { unique: true });

print("Monster DB initialisé");
