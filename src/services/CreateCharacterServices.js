
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
}

export default CreateCharacterService
