const QUESTIONS = [
    {
        questionId: 'a1',
        linkedTo: 'a',
        question: '(Question A) FIXED first question: Who are you?',
    },
    {
        questionId: 'b1',
        linkedTo: 'b',
        question: `(Question B1) There is a vent in the ship with something glowing inside. What do you do?`,
    },
    {
        questionId: 'b2',
        linkedTo: 'b',
        question: `(Question B2) After gaining access to the inside of the vent. You see the item, grab it?`,
    },
    {
        questionId: 'c1',
        linkedTo: 'c',
        question: `(Question C1) You should get to know your ship a bit more captain, what do you want to look at?`,
    },
    {
        questionId: 'c2',
        linkedTo: 'c',
        question: `(Question C2) You decided to walk to the jukebox. What next?`,
    },
    {
        questionId: 'c3',
        linkedTo: 'c',
        question: `(Question C3) You decided to explore the creepy mysterious hallway on the ship`,
    },
    {
        questionId: 'd1',
        linkedTo: 'd',
        question: `(Question D1) Example Question Part One`,
    },
    {
        questionId: 'd2',
        linkedTo: 'd',
        question: `(Question D2) Example Question Part Two`,
    },
    {
        questionId: 'd3',
        linkedTo: 'd',
        question: `(Question D3) Example Question Part Three`,
    },
];

const CHOICES = [
    {
        choiceId: 'c1',
        linkedTo: 'a1',
        choiceType: 'goblin',
        choice: `Hi I'm goblin`,
        score: 50
    },
    {
        choiceId: 'c2',
        linkedTo: 'a1',
        choiceType: 'alien',
        choice: `Hi I'm alien`,
        score: 50
    },
    {
        choiceId: 'c3',
        linkedTo: 'a1',
        choiceType: 'human',
        choice: `Hi I'm human`,
        score: 50
    },
    {
        choiceId: 'c4',
        linkedTo: 'a1',
        choiceType: 'space_wizard',
        choice: `An elegant wizard at your service`,
        score: 50
    },
    {
        choiceId: 'c5',
        linkedTo: 'a1',
        choiceType: 'astral_thief',
        choice: `Thief extraordinaire`,
        score: 50,
    },
    {
        choiceId: 'c6',
        linkedTo: 'a1',
        choiceType: 'cosmic_warrior',
        choice: `Gwarh! Strong Warrior I am!`,
        score: 50,
    },
    {
        choiceId: 'c7',
        linkedTo: 'a1',
        choiceType: 'default',
        choice: `Default Choice 3 for question A`,
        score: 25,
    },
    {
        choiceId: 'c6',
        linkedTo: 'a1',
        choiceType: 'default',
        choice: `Default Choice 4 from question A`,
        score: 25,
    },

    {
        choiceId: 'c7',
        linkedTo: 'b1',
        choiceType: 'goblin',
        choice: `Goblin race Choice`,
        score: 0,
    },
    
    {
        choiceId: 'c8',
        linkedTo: 'b1',
        choiceType: 'alien',
        choice: `Alien race choice`,
        score: 25,
    },
    
    {
        choiceId: 'c9',
        linkedTo: 'b1',
        choiceType: 'human',
        choice: `Human race choice`,
        score: 25,
    },
    
    {
        choiceId: 'c10',
        linkedTo: 'b1',
        choiceType: 'space_wizard',
        choice: `Wizard choice`,
        score: 0,
    },
    
    {
        choiceId: 'c11',
        linkedTo: 'b1',
        choiceType: 'astral_thief',
        choice: `Thief Choice`,
        score: 0,
    },
    
    {
        choiceId: 'c12',
        linkedTo: 'b1',
        choiceType: 'cosmic_warrior',
        choice: `Warrior Choice`,
        score: 0,
    },
    
    {
        choiceId: 'c13',
        linkedTo: 'b1',
        choiceType: 'default',
        choice: `Default Choice 3 for question b1`,
        score: 0,
    },
    
    {
        choiceId: 'c14',
        linkedTo: 'b1',
        choiceType: 'default',
        choice: `Default Choice 4 for question b1`,
        score: 0,
    },
    
    {
        choiceId: 'c15',
        linkedTo: 'b2',
        choiceType: 'goblin',
        choice: `Goblin race Choice`,
        score: 0,
    },
    
    {
        choiceId: 'c16',
        linkedTo: 'b2',
        choiceType: 'alien',
        choice: `Alien race choice`,
        score: 25,
    },
    
    {
        choiceId: 'c17',
        linkedTo: 'b2',
        choiceType: 'human',
        choice: `Human race choice`,
        score: 25,
    },
    
    {
        choiceId: 'c18',
        linkedTo: 'b2',
        choiceType: 'space_wizard',
        choice: `Wizard choice`,
        score: 0,
    },
    
    {
        choiceId: 'c18',
        linkedTo: 'b2',
        choiceType: 'astral_thief',
        choice: `Thief Choice`,
        score: 0,
    },
    
    {
        choiceId: 'c18',
        linkedTo: 'b2',
        choiceType: 'cosmic_warrior',
        choice: `Warrior Choice`,
        score: 0,
    },
    
    {
        choiceId: 'c19',
        linkedTo: 'b2',
        choiceType: 'default',
        choice: `Default Choice 3 for question b1`,
        score: 0,
    },
    
    {
        choiceId: 'c20',
        linkedTo: 'b2',
        choiceType: 'default',
        choice: `Default Choice 4 for question b1`,
        score: 0,
    },
    
];

export default {
    QUESTIONS,
    CHOICES,
}