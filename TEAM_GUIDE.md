# Guide pour l'équipe

## 1. Récupérer le projet (première fois)

```bash
git clone --recurse-submodules https://github.com/ndrobysh/wad-main.git
cd wad-main
```

## 2. Travailler sur ton service

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

## 3. Synchroniser le projet (récupérer les dernières modifs)

```bash
# Depuis la racine du projet
cd ..
git pull
git submodule update --remote --merge
```

## 4. Tester en local (intégration)

```bash
cd docker-dev-env
docker-compose up --build
```

## Commandes utiles

| Action | Commande |
|--------|----------|
| Voir le statut de tous les submodules | `git submodule status` |
| Mettre à jour tous les submodules | `git submodule update --remote` |
| Passer tous les submodules sur dev | `git submodule foreach 'git checkout dev'` |
