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

const CharacterSaveContext = React.createContext({
  characterOne: createdCharacter,
  characterTwo: emptyCharacter,
  characterThree: emptyCharacter,
  makeCharacterOne: () => {},
  makeCharacterTwo: () => {},
  makeCharacterThree: () => {},
})

export default CharacterSaveContext
