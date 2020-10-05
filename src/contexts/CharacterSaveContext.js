import React from 'react'

const emptyCharacter = {
  exist: false,
  name: null,
  class: null,
  race: null,
}

const createdCharacter = {
  exist: true,
  name: "Bob",
  class: "Warrior",
  race: "Human",
}

export default React.createContext({
  characterOne: null,
  characterTwo: null,
  characterThree: null,
  makeCharacterOne: () => {},
  makeCharacterTwo: () => {},
  makeCharacterThree: () => {},
})


