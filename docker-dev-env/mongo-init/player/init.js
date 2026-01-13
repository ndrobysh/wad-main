// Script d'initialisation MongoDB pour player_db
// Création des profils joueurs de test

db = db.getSiblingDB('player_db');

// Collection players avec joueurs de test
db.players.insertMany([
    {
        username: "player1",
        level: 1,
        experience: 0,
        xpThreshold: 50,
        maxMonsters: 11,
        monsters: []
    },
    {
        username: "player2",
        level: 5,
        experience: 30,
        xpThreshold: 80,
        maxMonsters: 15,
        monsters: []
    },
    {
        username: "admin",
        level: 50,
        experience: 0,
        xpThreshold: 5868,
        maxMonsters: 60,
        monsters: []
    },
    {
        username: "testuser",
        level: 1,
        experience: 0,
        xpThreshold: 50,
        maxMonsters: 11,
        monsters: []
    }
]);

// Index sur username
db.players.createIndex({ "username": 1 }, { unique: true });

print("Player DB initialisé avec joueurs de test");
