# Frontend Service - Next.js

## Description
Interface web pour le jeu Gacha WAD.

## Fonctionnalités
- Connexion / Déconnexion
- Affichage du profil joueur
- Invocation de monstres (gacha)
- Liste des monstres possédés

## Technologies
- Next.js 14
- React 18
- TypeScript

## Lancement

```bash
# Installation
npm install

# Développement
npm run dev

# Production
npm run build
npm start
```

## Port
3000

## Variables d'environnement
- `AUTH_API_URL` - URL du service auth
- `PLAYER_API_URL` - URL du service joueur
- `MONSTER_API_URL` - URL du service monstre
- `INVOCATION_API_URL` - URL du service invocation
