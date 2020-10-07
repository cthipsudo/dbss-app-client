function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

function grabChoices(choiceList, charRace, charClass, question) {
    //console.log(choiceList);
    // console.log(charRace);
    // console.log(charClass);
    //console.log(question);

    //We need to grab the right choices for the question asked
    const neededChoices = [];

    for (let i = 0; i < choiceList.length; i++) {
        const choice = choiceList[i];
        if (choice.linkedTo === question.questionId) {
            switch (choice.choiceType) {
                case charRace:
                    neededChoices.push(choice);
                    break;
                case charClass:
                    neededChoices.push(choice);
                    break;
                case "default":
                    neededChoices.push(choice);
                    break;
                default:
            }
        }
    }
    
    //console.log(neededChoices);
    return neededChoices;
}
function linkQuestionsTogetherInSets(questions) {
    // we want to return something like this 
    // [[{b1}, {b2}],[{c1}, {c2} , {c3}]] or [[{c1}, {c2} , {c3}], [{b1}, {b2}]] 

    //Set your intial variables
    let linkedTo = " ";
    const finalArr = [];
    let setHolderArr = [];

    //Loop and make the sets
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i]
        //Check if the questions linkedTo matches up
        if (linkedTo !== question.linkedTo) {
            //We found a new set!
            //console.log("New Set, set for question:", question.linkedTo);

            //Push the set into the final array
            finalArr.push(setHolderArr)

            // Reset the holder for the new set
            setHolderArr = [];
            linkedTo = question.linkedTo;

            //Add the question into the holder
            setHolderArr.push(question)
        } else {

            //We should be in the same set still
            //Add the question into the holder
            setHolderArr.push(question)
        }

        //Push in the last set if we reach the last one
        if (i === questions.length - 1) {
            finalArr.push(setHolderArr);
        }
    }

    //Shift out the first set since intialization issues
    finalArr.shift();
    //console.log(finalArr);


    return finalArr;
}
function removeQuestionsFromSets(STORE) {
    //Take in the store
    //Remove each "set" and make a singular array

    //Set intial variables
    const finalArr = [];

    //Loop and remove
    for (let i = 0; i < STORE.length; i++) {
        //Loop into the set
        for (let j = 0; j < STORE[i].length; j++) {
            finalArr.push(STORE[i][j]);
        }
    }

    return finalArr;
}
function makeShuffledQuestions(QUESTIONS) {
    //Working with these questions
    //console.log("Working with these questions", QUESTIONS);
    //Removed the first question since its fixed
    const firstQ = QUESTIONS.shift();

    // We need to grab the questions that are linked 
    // Assign them to a new arr
    // So we can shuffle them  while still being linked in order
    const questionsInSets = linkQuestionsTogetherInSets(QUESTIONS)

    //Assign a new shuffled variable
    let shuffledStore = questionsInSets;

    //Shuffle the questions that can be shuffled
    shuffledStore = shuffle(shuffledStore);
    //console.log(shuffledStore);

    //Add the first question back in the shuffled store and ORIGINAL
    shuffledStore.unshift([firstQ]);
    QUESTIONS.unshift(firstQ);
    //console.log(shuffledStore);

    // //Add the last offical question
    // shuffledStore.push([LastQuestionHere]) 

    //Remove the sets from the shuffledStores
    //console.log("This is the shuffled store in sets", shuffledStore);
    const finalArr = removeQuestionsFromSets(shuffledStore);
    //console.log("This is the shuffled store out of their sets", finalArr);
    return finalArr;
}

export default {
    shuffle,
    grabChoices,
    makeShuffledQuestions,
};