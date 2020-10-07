import config from '../config'

const PlayerDataService = {
  savePlayerData(PlayerData) {
    window.localStorage.setItem(config.PLAYER_DATA, PlayerData)
  },
  saveCharData(CharData){
    window.localStorage.setItem(config.CHAR_DATA, CharData)
  },
  saveProgressData(ProgressData){
    window.localStorage.setItem(config.PROGRESS_DATA, ProgressData)
  },
  getPlayerData() {
    return window.localStorage.getItem(config.PLAYER_DATA)
  },
  getCharData(){
    return window.localStorage.getItem(config.CHAR_DATA)
  },
  getProgressData(){
    return window.localStorage.getItem(config.PROGRESS_DATA)
  },
  clearPlayerData() {
    window.localStorage.removeItem(config.PLAYER_DATA)
  },
  hasAuthPlayerData() {
    return !!PlayerDataService.getAuthPlayerData()
  },
}

export default PlayerDataService
