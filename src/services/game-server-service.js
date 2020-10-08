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
  },
  deleteUserCharSave(playerId, slotNum) {
    return fetch(`${config.API_ENDPOINT}/char-save/${playerId}/${slotNum}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
  },
  makeUserCharSave(playerId, slotNum, charData) {
    return fetch(`${config.API_ENDPOINT}/char-save/${playerId}/${slotNum}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(charData),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

  }

}

export default GameServerService
