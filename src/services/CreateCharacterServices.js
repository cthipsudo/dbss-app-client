
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
}

export default CreateCharacterService
