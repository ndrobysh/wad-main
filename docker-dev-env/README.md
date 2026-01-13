# Docker Dev Environment

Configuration Docker Compose pour le jeu Gacha WAD.

## Lancement

```bash
docker-compose up --build

# Mode détaché
docker-compose up --build -d
```

## Services

| Service | Port | Description |
|---------|------|-------------|
| frontend | 3000 | Interface web Next.js |
| auth-service | 8081 | Authentification |
| player-service | 8082 | Gestion joueurs |
| monster-service | 8083 | Gestion monstres |
| invocation-service | 8084 | Invocation gacha |
| combat-service | 8085 | Simulation combat |

## Bases MongoDB

| Base | Port | Service |
|------|------|---------|
| mongo-auth | 27017 | auth-service |
| mongo-player | 27018 | player-service |
| mongo-monster | 27019 | monster-service |
| mongo-invocation | 27020 | invocation-service |
| mongo-combat | 27021 | combat-service |

## Utilisateurs de test

| Identifiant | Mot de passe |
|-------------|--------------|
| player1 | password123 |
| player2 | password123 |
| admin | admin123 |
| testuser | test123 |

## Données initiales
Scripts dans `mongo-init/`:
- `auth/init.js` - Utilisateurs

