// Script d'initialisation MongoDB pour auth_db
// Mots de passe hashés avec BCrypt (cost=10)

db = db.getSiblingDB('auth_db');

// Collection users avec utilisateurs de test (passwords BCrypt hashés)
db.users.insertMany([
    {
        username: "player1",
        password: "$2a$10$3COae1yzwhqLsBNlm7VOw.UsAkZs/IWxcQyZ7clHB3jwujlNSRF5u" // password123
    },
    {
        username: "player2",
        password: "$2a$10$3COae1yzwhqLsBNlm7VOw.UsAkZs/IWxcQyZ7clHB3jwujlNSRF5u" // password123
    },
    {
        username: "admin",
        password: "$2a$10$dJVV1cw5s4MJ0pcxy8f55OuNnSPf9RfUsdaxUt4lw0RdqHzB3Pk3O" // admin123
    },
    {
        username: "testuser",
        password: "$2a$10$1/H4LJF04U12XmgcNjMzZeC/5NOEeekc/2Hp5Bj3A/UotoGb2lQH6" // test123
    }
]);

// Index sur username
db.users.createIndex({ "username": 1 }, { unique: true });

// Collection tokens (remplie au runtime)
db.createCollection("tokens");
db.tokens.createIndex({ "token": 1 }, { unique: true });
db.tokens.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 });

print("Auth DB initialisé avec utilisateurs de test");
