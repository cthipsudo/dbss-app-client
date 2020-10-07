import TokenService from '../services/token-service'
import config from '../config'

const GameServerService = {
  getUserCharData(playerId) {
    return fetch(`${config.API_ENDPOINT}/char-save/${playerId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default GameServerService
