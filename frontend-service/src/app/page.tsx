'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

// Types
interface Player {
  username: string
  level: number
  experience: number
  xpThreshold: number
  maxMonsters: number
  monsters: string[]
}

interface Monster {
  id: string
  name: string
  elementType: string
  level: number
  hp: number
  atk: number
  def: number
  vit: number
}

export default function Home() {
  // État
  const [token, setToken] = useState<string | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [player, setPlayer] = useState<Player | null>(null)
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [summonedMonster, setSummonedMonster] = useState<Monster | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Récupérer le token au chargement
  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('username')
    if (savedToken && savedUser) {
      setToken(savedToken)
      setUsername(savedUser)
      loadPlayerData(savedUser, savedToken)
    }
  }, [])

  // Connexion
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${process.env.AUTH_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        const data = await res.json()
        setToken(data.token)
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', username)
        loadPlayerData(username, data.token)
      } else {
        setError('Identifiants incorrects')
      }
    } catch {
      setError('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  // Déconnexion
  const handleLogout = () => {
    setToken(null)
    setPlayer(null)
    setMonsters([])
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }

  // Charger les données du joueur
  const loadPlayerData = async (user: string, authToken: string) => {
    try {
      const res = await fetch(`${process.env.PLAYER_API_URL}/api/players/${user}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      })
      if (res.ok) {
        const data = await res.json()
        setPlayer(data)
        loadMonsters(user, authToken)
      }
    } catch {
      console.error('Erreur chargement joueur')
    }
  }

  // Charger les monstres
  const loadMonsters = async (user: string, authToken: string) => {
    try {
      const res = await fetch(`${process.env.MONSTER_API_URL}/api/monsters/player/${user}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      })
      if (res.ok) {
        const data = await res.json()
        setMonsters(data)
      }
    } catch {
      console.error('Erreur chargement monstres')
    }
  }

  // Invoquer un monstre
  const handleSummon = async () => {
    if (!token) return
    setLoading(true)
    setSummonedMonster(null)

    try {
      const res = await fetch(`${process.env.INVOCATION_API_URL}/api/invocations/summon`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (res.ok) {
        const data = await res.json()
        setSummonedMonster(data.monster)
        // Recharger les données
        if (username) {
          loadPlayerData(username, token)
        }
      } else {
        setError('Échec de l\'invocation')
      }
    } catch {
      setError('Erreur d\'invocation')
    } finally {
      setLoading(false)
    }
  }

  // Rendu - Écran de connexion
  if (!token) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>WAD Gacha Game</h1>
        
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <h2>Connexion</h2>
          <input
            type="text"
            placeholder="Identifiant"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </main>
    )
  }

  // Rendu - Écran de jeu
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>WAD Gacha Game</h1>
        <div>
          <span>{username}</span>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      </header>

      {/* Profil joueur */}
      {player && (
        <section className={styles.section}>
          <h2>Profil</h2>
          <div className={styles.stats}>
            <p>Niveau: {player.level}</p>
            <p>XP: {player.experience} / {player.xpThreshold}</p>
            <p>Monstres: {monsters.length} / {player.maxMonsters}</p>
          </div>
        </section>
      )}

      {/* Invocation */}
      <section className={styles.section}>
        <h2>Invocation</h2>
        <button 
          className={styles.summonBtn} 
          onClick={handleSummon}
          disabled={loading}
        >
          {loading ? 'Invocation...' : 'INVOQUER !'}
        </button>

        {summonedMonster && (
          <div className={styles.summonResult}>
            <h3>Vous avez invoqué :</h3>
            <div className={`${styles.monsterCard} ${styles[summonedMonster.elementType.toLowerCase()]}`}>
              <h4>{summonedMonster.name}</h4>
              <p>Élément: {summonedMonster.elementType}</p>
              <p>PV: {summonedMonster.hp}</p>
              <p>ATK: {summonedMonster.atk}</p>
              <p>DEF: {summonedMonster.def}</p>
              <p>VIT: {summonedMonster.vit}</p>
            </div>
          </div>
        )}
      </section>

      {/* Liste des monstres */}
      <section className={styles.section}>
        <h2>Vos Monstres</h2>
        {monsters.length === 0 ? (
          <p>Aucun monstre. Invoquez votre premier monstre !</p>
        ) : (
          <div className={styles.monsterGrid}>
            {monsters.map((monster) => (
              <div 
                key={monster.id} 
                className={`${styles.monsterCard} ${styles[monster.elementType.toLowerCase()]}`}
              >
                <h4>{monster.name}</h4>
                <p>Niv. {monster.level}</p>
                <p>Élément: {monster.elementType}</p>
                <p>PV: {monster.hp}</p>
                <p>ATK: {monster.atk}</p>
                <p>DEF: {monster.def}</p>
                <p>VIT: {monster.vit}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {error && <p className={styles.error}>{error}</p>}
    </main>
  )
}
