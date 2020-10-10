import TokenService from '../services/token-service'
import config from '../config'

const GameServerService = {
  getGameQuestions() {
    return fetch(`${config.API_ENDPOINT}/questions`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getGameChoices() {
    return fetch(`${config.API_ENDPOINT}/choices`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getGameResponses() {
    return fetch(`${config.API_ENDPOINT}/responses`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getGameScores() {
    return fetch(`${config.API_ENDPOINT}/scoreboard`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRecentGameScores() {
    return fetch(`${config.API_ENDPOINT}/scoreboard/recent`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
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

  },
  updateUserCharSave(playerId, slotNum, charData) {
    return fetch(`${config.API_ENDPOINT}/char-save/${playerId}/${slotNum}`, {
      method: 'PATCH',
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

  },
  makeNewScore(scoreData) {
    return fetch(`${config.API_ENDPOINT}/scoreboard`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.TOKEN_KEY}`
      },
      body: JSON.stringify(scoreData),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default GameServerService
