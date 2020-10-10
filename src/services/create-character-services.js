
const CreateCharacterService = {
    findSlotFunctionBySlot(slotNum) {
        let funcName = "";
        if (slotNum === "slot-1") {
            funcName = "makeCharacterOne";
        } else if (slotNum === "slot-2") {
            funcName = "makeCharacterTwo";
        } else if (slotNum === "slot-3") {
            funcName = "makeCharacterThree"
        }
        return funcName;
    },
    translateCharResponse(charData) {
        let translatedClass = "";
        let translatedRace = "";
        switch (charData.char_class) {
            case 1:
                translatedClass = "space_wizard"
                break;
            case 2:
                translatedClass = "astral_thief"
                break;
            case 3:
                translatedClass = "cosmic_warrior"
                break;
            default:
        }
        switch (charData.char_race) {
            case 1:
                translatedRace = "human"
                break;
            case 2:
                translatedRace = "alien"
                break;
            case 3:
                translatedRace = "goblin"
                break;
            default:
        }
        const newChar = {
            name: charData.char_name,
            class: translatedClass,
            race: translatedRace
        }

        return newChar;
    },
    translateCharRace(race){
        let translatedRace = "";
        switch (Number(race)) {
            case 1:
                translatedRace = "human"
                break;
            case 2:
                translatedRace = "alien"
                break;
            case 3:
                translatedRace = "goblin"
                break;
            default:
        }
        return translatedRace;
    },
    translateCharDataToNum(char){
        let char_race = 0;
        let char_class = 0;

        switch(char.race){
            case 'human':
                char_race = 1
                break;
            case 'alien':
                char_race = 2
                break;
            case 'goblin':
                char_race = 3
                break;
            default:
                char_race = 1
        }

        switch(char.class){
            case 'space_wizard':
                char_class = 1
                break;
            case 'astral_thief':
                char_class = 2
                break;
            case 'cosmic_warrior':
                char_class = 3
                break;
            default:
                char_class = 1
        }
        return { 
            char_name: char.name,
            char_race: char_race,
            char_class: char_class,
        }
    }
}

export default CreateCharacterService
