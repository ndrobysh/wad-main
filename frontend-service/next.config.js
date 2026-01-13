/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Configuration des URLs des APIs
  env: {
    AUTH_API_URL: process.env.AUTH_API_URL || 'http://localhost:8081',
    PLAYER_API_URL: process.env.PLAYER_API_URL || 'http://localhost:8082',
    MONSTER_API_URL: process.env.MONSTER_API_URL || 'http://localhost:8083',
    INVOCATION_API_URL: process.env.INVOCATION_API_URL || 'http://localhost:8084',
    COMBAT_API_URL: process.env.COMBAT_API_URL || 'http://localhost:8085',
  },
}

module.exports = nextConfig
