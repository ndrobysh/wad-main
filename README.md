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


## Guide pour l'équipe

### 1. Récupérer le projet (première fois)

```bash
git clone --recurse-submodules https://github.com/ndrobysh/wad-main.git
cd wad-main
```

### 2. Travailler sur ton service

```bash
# Aller dans ton service
cd auth-service  # ou player-service, monster-service, etc.

# Passer sur la branche dev
git checkout dev

# Faire tes modifications...

# Committer et pusher
git add .
git commit -m "Description des changements"
git push
```

### 3. Synchroniser le projet (récupérer les dernières modifs)

```bash
# Depuis la racine du projet
cd ..
git pull
git submodule update --remote --merge
```

### 4. Tester en local (intégration)

```bash
cd docker-dev-env
docker-compose up --build
```

### Commandes utiles

| Action | Commande |
|--------|----------|
| Voir le statut de tous les submodules | `git submodule status` |
| Mettre à jour tous les submodules | `git submodule update --remote` |
| Passer tous les submodules sur dev | `git submodule foreach 'git checkout dev'` |

## Équipe
Projet de groupe - 4 personnes maximum
