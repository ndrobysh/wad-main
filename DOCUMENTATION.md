# Documentation

Documentation technique du projet WAD Gacha Game.

---

## Base de Données MongoDB

Chaque service possède sa propre instance MongoDB.

> ⚠️ **Pas d'authentification** : Les bases MongoDB n'ont ni username ni password en développement. Connexion directe sans credentials.

| Service | Database | Port | Connection String |
|---------|----------|------|-------------------|
| auth | auth_db | 27017 | `mongodb://localhost:27017/auth_db` |
| player | player_db | 27018 | `mongodb://localhost:27018/player_db` |
| monster | monster_db | 27019 | `mongodb://localhost:27019/monster_db` |
| invocation | invocation_db | 27020 | `mongodb://localhost:27020/invocation_db` |
| combat | combat_db | 27021 | `mongodb://localhost:27021/combat_db` |

**Connexion rapide :**
```bash
mongosh "mongodb://localhost:27017/auth_db"
```

**Données de test :** voir `docker-dev-env/mongo-init/`

---

## API Endpoints

> 📌 **Convention obligatoire** : Tous les endpoints doivent suivre le format `/api/{service}/{endpoint}`
> 
> Exemples : `/api/auth/login`, `/api/player/profile`, `/api/monster/list`

### Swagger UI

Chaque service expose sa documentation interactive :

| Service | Swagger UI |
|---------|------------|
| auth | http://localhost:8081/swagger-ui.html |
| player | http://localhost:8082/swagger-ui.html |
| monster | http://localhost:8083/swagger-ui.html |
| invocation | http://localhost:8084/swagger-ui.html |
| combat | http://localhost:8085/swagger-ui.html |

#### Ajouter Swagger sur un contrôleur

```java
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/exemple")
@Tag(name = "Exemple", description = "Description du groupe d'endpoints")
public class ExempleController {

    @Operation(summary = "Titre court", description = "Description détaillée")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Succès"),
        @ApiResponse(responseCode = "400", description = "Erreur")
    })
    @GetMapping("/endpoint")
    public ResponseEntity<?> monEndpoint() { ... }
}
```

### Auth Service (port 8081)
📖 [Documentation détaillée](auth-service/README.md)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Connexion → token |
| POST | `/api/auth/validate` | Validation token → username |
| POST | `/api/auth/logout` | Déconnexion |

### Player Service (port 8082)
📖 [Documentation détaillée](player-service/README.md)

*À documenter*

### Monster Service (port 8083)
📖 [Documentation détaillée](monster-service/README.md)

*À documenter*

### Invocation Service (port 8084)
📖 [Documentation détaillée](invocation-service/README.md)

*À documenter*

### Combat Service (port 8085)
📖 [Documentation détaillée](combat-service/README.md)

*À documenter*

### Frontend (port 3000)
📖 [Documentation détaillée](frontend-service/README.md)

---

## Utilisateurs de test

| Username | Password |
|----------|----------|
| player1 | password123 |
| player2 | password123 |
| admin | admin123 |

---

## Docker

```bash
# Lancer tous les services
cd docker-dev-env
docker-compose up --build

# Lancer uniquement les bases
docker-compose up mongo-auth mongo-player mongo-monster mongo-invocation

# Reset une base
docker-compose down
docker volume rm docker-dev-env_mongo-auth-data
docker-compose up mongo-auth
```
 ⚠️ **Docker affiche une ancienne version ?** Docker utilise des images en cache. Pour forcer la reconstruction :
> ```bash
> docker-compose build --no-cache service
> docker-compose up frontend-service
> ```