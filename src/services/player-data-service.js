import config from '../config'

const PlayerDataService = {
  savePlayerData(PlayerData) {
    window.localStorage.setItem(config.PLAYER_DATA, JSON.stringify(PlayerData))
  },
  saveCharData(CharData){
    window.localStorage.setItem(config.CHAR_DATA, JSON.stringify(CharData))
  },
  saveProgressData(ProgressData){
    window.localStorage.setItem(config.PROGRESS_DATA, JSON.stringify(ProgressData))
  },
  getPlayerData() {
    return JSON.parse(window.localStorage.getItem(config.PLAYER_DATA)) 
  },
  getCharData(){
    return JSON.parse(window.localStorage.getItem(config.CHAR_DATA))
  },
  getProgressData(){
    return JSON.parse(window.localStorage.getItem(config.PROGRESS_DATA))
  },
  clearPlayerData() {
    window.localStorage.removeItem(config.PLAYER_DATA)
  },
  hasPlayerData() {
    return !!PlayerDataService.getPlayerData()
  },
}

export default PlayerDataService
