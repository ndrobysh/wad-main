# WAD Gacha Game

Jeu de type Gacha en microservices avec Spring Boot et MongoDB.

## Structure du projet

```
WAD/
├── auth-service/          # API Authentification (port 8081)
├── player-service/        # API Joueur (port 8082)
├── monster-service/       # API Monstres (port 8083)
├── invocation-service/    # API Invocation/Gacha (port 8084)
├── combat-service/        # API Combat (port 8085) [BONUS]
├── frontend-service/      # Interface Next.js (port 3000)
└── docker-dev-env/        # Docker Compose et scripts MongoDB
```

## Lancement rapide

### Prérequis
- Docker et Docker Compose
- Java 21+ (dev local)
- Node.js 20+ (frontend)

### Avec Docker

```bash
cd docker-dev-env
docker-compose up --build
```

Accès: http://localhost:3000

### Utilisateurs de test

| Identifiant | Mot de passe |
|-------------|--------------|
| player1 | password123 |
| player2 | password123 |
| admin | admin123 |


## Git Submodules

Chaque service peut être un submodule git séparé:

```bash
git submodule add <url-repo> auth-service
git submodule add <url-repo> player-service
# etc.
```

## Équipe
Projet de groupe - 4 personnes maximum
