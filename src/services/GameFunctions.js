import React from 'react';

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
function grabResponse(responses, questionId, choiceAlignment) {
    let correctResponse = " ";
    for (let i = 0; i < responses.length; i++) {
        const response = responses[i]
        if (response.linkedTo === questionId
            && response.alignment === choiceAlignment) {
            correctResponse = response;
        }
    }
    return correctResponse;
}
function grabChoices(choiceList, charRace, charClass, question) {
    //We need to grab the right choices for the question asked
    const neededChoices = [];
    //Loop through
    for (let i = 0; i < choiceList.length; i++) {
        const choice = choiceList[i];
        if (choice.linkedTo === question.id) {
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

    //Add the first question back in the shuffled store and ORIGINAL
    shuffledStore.unshift([firstQ]);
    QUESTIONS.unshift(firstQ);

    // //Add the last offical question
    // shuffledStore.push([LastQuestionHere]) 

    //Remove the sets from the shuffledStores
    const finalArr = removeQuestionsFromSets(shuffledStore);
    return finalArr;
}

function setUpScoreList(scores) {
    let scoreList = [];
    if (scores.length === 0) {
        return <p>No scores found :(</p>
    } else if (scores.length === 1) {
        scoreList.push(
            <div className="scoreEntry" key={scores[0].id}>
                <h2>{scores[0].nick_name}</h2>
                <h2>{scores[0].score}</h2>
            </div>
        )
    } else if (scores.length === 2) {
        scoreList.push(
            <div className="scoreEntry" key={scores[0].id}>
                <h2>{scores[0].nick_name}</h2>
                <h2>{scores[0].score}</h2>
            </div>
        )
        scoreList.push(
            <div className="scoreEntry" key={scores[1].id}>
                <h3>{scores[1].nick_name}</h3>
                <h3>{scores[1].score}</h3>
            </div>
        )
    } else if (scores.length === 3) {
        scoreList.push(
            <div className="scoreEntry" key={scores[0].id}>
                <h2>{scores[0].nick_name}</h2>
                <h2>{scores[0].score}</h2>
            </div>
        )
        scoreList.push(
            <div className="scoreEntry" key={scores[1].id}>
                <h3>{scores[1].nick_name}</h3>
                <h3>{scores[1].score}</h3>
            </div>
        )
        scoreList.push(
            <div className="scoreEntry" key={scores[2].id}>
                <h4>{scores[2].nick_name}</h4>
                <h4>{scores[2].score}</h4>
            </div>
        )
    } else {

        //Push the first 3 scores
        scoreList.push(
            <div className="scoreEntry" key={scores[0].id}>
                <h2>{scores[0].nick_name}</h2>
                <h2>{scores[0].score}</h2>
            </div>
        )
        scoreList.push(
            <div className="scoreEntry" key={scores[1].id}>
                <h3>{scores[1].nick_name}</h3>
                <h3>{scores[1].score}</h3>
            </div>
        )
        scoreList.push(
            <div className="scoreEntry" key={scores[2].id}>
                <h4>{scores[2].nick_name}</h4>
                <h4>{scores[2].score}</h4>
            </div>
        )
        //Loop and Push the remaining scores

        for (let i = 3; i < scores.length; i++) {
            scoreList.push(
                <div className="scoreEntry" key={scores[i].id}>
                    <p>{scores[i].nick_name}</p>
                    <p>{scores[i].score}</p>
                </div>
            )
        }
    }

    return scoreList;
}

function translateServerText(text, charName){
    let translatedText = text;
    translatedText = translatedText.replace(/\\n/g, '\n');
    translatedText = translatedText.replace(/{name}/g, `${charName}`)
    //translatedText = translatedText.replace(/{play}/g, ``)
    return translatedText; 
}

export default {
    shuffle,
    grabChoices,
    makeShuffledQuestions,
    grabResponse,
    setUpScoreList,
    translateServerText, 
};