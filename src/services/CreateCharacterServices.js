
const CreateCharacterService = {
    findSlotFunctionBySlot(slotNum) {
        let funcName = "";
        if (slotNum === "slot-one") {
            funcName = "makeCharacterOne";
        } else if (slotNum === "slot-two") {
            funcName = "makeCharacterTwo";
        } else if (slotNum === "slot-one") {
            funcName = "makeCharacterThree"
        }
        return funcName;
    },
}

export default CreateCharacterService
