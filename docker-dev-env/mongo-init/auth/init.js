// Script d'initialisation MongoDB pour auth_db
// Création des utilisateurs de test

db = db.getSiblingDB('auth_db');

// Collection users avec utilisateurs de test
db.users.insertMany([
    {
        username: "player1",
        password: "password123"
    },
    {
        username: "player2",
        password: "password123"
    },
    {
        username: "admin",
        password: "admin123"
    },
    {
        username: "testuser",
        password: "test123"
    }
]);

// Index sur username
db.users.createIndex({ "username": 1 }, { unique: true });

// Collection tokens (remplie au runtime)
db.createCollection("tokens");
db.tokens.createIndex({ "token": 1 }, { unique: true });
db.tokens.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 });

print("Auth DB initialisé avec utilisateurs de test");
