# Documentation Base de Données

Guide de connexion aux bases de données MongoDB pour chaque microservice.

## Vue d'ensemble

Chaque service possède sa propre instance MongoDB. En développement local avec Docker, aucune authentification n'est requise.

| Service | Base de données | Port externe | Container |
|---------|----------------|--------------|-----------|
| auth-service | auth_db | 27017 | wad-mongo-auth |
| player-service | player_db | 27018 | wad-mongo-player |
| monster-service | monster_db | 27019 | wad-mongo-monster |
| invocation-service | invocation_db | 27020 | wad-mongo-invocation |
| combat-service | combat_db | 27021 | wad-mongo-combat |

---

## Connection Strings

### Auth Service (port 27017)
```
mongodb://localhost:27017/auth_db
```

### Player Service (port 27018)
```
mongodb://localhost:27018/player_db
```

### Monster Service (port 27019)
```
mongodb://localhost:27019/monster_db
```

### Invocation Service (port 27020)
```
mongodb://localhost:27020/invocation_db
```

### Combat Service (port 27021)
```
mongodb://localhost:27021/combat_db
```

---

## Connexion avec mongosh

```bash
# Auth DB
mongosh "mongodb://localhost:27017/auth_db"

# Player DB
mongosh "mongodb://localhost:27018/player_db"

# Monster DB
mongosh "mongodb://localhost:27019/monster_db"

# Invocation DB
mongosh "mongodb://localhost:27020/invocation_db"

# Combat DB
mongosh "mongodb://localhost:27021/combat_db"
```

---

## Connexion avec MongoDB Compass

1. Ouvrir MongoDB Compass
2. Nouvelle connexion avec l'URI correspondante (voir tableau ci-dessus)
3. Cliquer sur "Connect"

---

## Collections par base

### auth_db
| Collection | Description |
|------------|-------------|
| users | Utilisateurs (username, password) |
| tokens | Tokens d'authentification actifs |

### player_db
| Collection | Description |
|------------|-------------|
| players | Profils des joueurs (username, niveau, jetons, monstres) |

### monster_db
| Collection | Description |
|------------|-------------|
| monsters | Catalogue des monstres disponibles (nom, élément, stats) |

### invocation_db
| Collection | Description |
|------------|-------------|
| invocations | Historique des invocations |

### combat_db
| Collection | Description |
|------------|-------------|
| combats | Historique des combats |

---

## Données de test

Les scripts d'initialisation se trouvent dans `docker-dev-env/mongo-init/`.

### Utilisateurs (auth_db.users)
| username | password |
|----------|----------|
| player1 | password123 |
| player2 | password123 |
| admin | admin123 |
| testuser | test123 |

### Joueurs (player_db.players)
Les joueurs sont créés automatiquement avec :
- 100 jetons de départ
- Niveau 1
- 0 points d'expérience

### Monstres (monster_db.monsters)
Monstres disponibles par rareté :
- **Légendaire (5%)** : Dragon de Feu, Phoenix Céleste
- **Épique (15%)** : Golem de Pierre, Esprit de Glace
- **Rare (30%)** : Loup des Ombres, Griffon, Serpent Venimeux
- **Commun (50%)** : Gobelin, Slime, Rat Géant

---

## Configuration dans les services

Chaque service Spring Boot utilise ces variables d'environnement :

```yaml
spring:
  data:
    mongodb:
      host: ${MONGO_HOST:localhost}
      port: ${MONGO_PORT:27017}
      database: <nom_de_la_db>
```

En Docker, `MONGO_HOST` pointe vers le container MongoDB correspondant.

---

## Commandes utiles

```bash
# Lister toutes les bases
mongosh --eval "show dbs"

# Lister les collections d'une base
mongosh "mongodb://localhost:27017/auth_db" --eval "show collections"

# Compter les documents
mongosh "mongodb://localhost:27017/auth_db" --eval "db.users.countDocuments()"

# Voir tous les utilisateurs
mongosh "mongodb://localhost:27017/auth_db" --eval "db.users.find().pretty()"

# Supprimer tous les tokens (reset sessions)
mongosh "mongodb://localhost:27017/auth_db" --eval "db.tokens.deleteMany({})"
```

---

## Troubleshooting

### Container MongoDB ne démarre pas
```bash
# Vérifier les logs
docker logs wad-mongo-auth

# Supprimer le volume et recréer
docker-compose down -v
docker-compose up mongo-auth
```

### Impossible de se connecter
1. Vérifier que Docker est lancé
2. Vérifier que le container tourne : `docker ps`
3. Vérifier le port : `netstat -an | findstr 27017`

### Réinitialiser une base
```bash
# Supprimer le volume
docker-compose down
docker volume rm docker-dev-env_mongo-auth-data

# Recréer
docker-compose up mongo-auth
```
