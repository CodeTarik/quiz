let questions = [
    {
        //Frage 1
        "question": "Wer war Nikola Tesla?",
        "answer_1": "Ein Bauer",
        "answer_2": "Ein Elektroingenieur und Erfinder",
        "answer_3": "Ein Lagerist",
        "answer_4": "Ein Elektriker",
        "right_answer": 2
    },

    {
        //Frage 2
        "question": "Wie lange war Frau Merkel im Amt?",
        "answer_1": "4 Jahre",
        "answer_2": "8 Jahre",
        "answer_3": "16 Jahre",
        "answer_4": "1 Monat",
        "right_answer": 3
    },


    {
        //Frage 3
        "question": "Wer hat Javascript erfunden?",
        "answer_1": "Ottmar Hitzfeld",
        "answer_2": "Karl-Heinz Rummenigge",
        "answer_3": "Zinedine Zidane",
        "answer_4": "Brendan Eich",
        "right_answer": 4
    },



    {
        //Frage 4
        "question": "Wer hat Angular erfunden?",
        "answer_1": "Apple",
        "answer_2": "Google",
        "answer_3": "Github",
        "answer_4": "Albert Einstein",
        "right_answer": 2
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('dynamic').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    

    let question = questions[currentQuestion]; //
    console.log('Selected answer is', selection) //
    let selectedQuestionNumber = selection.slice(-1); //
    console.log('SelectedQuestionNumber is', selectedQuestionNumber); // wird in der Konsole angezeigt
    console.log('Current questiion is ', question['right_answer']); //

    if(selectedQuestionNumber == question['right_answer']) { //
        console.log('Richtige Antwort') //
        document.getElementById(selection) .classList.add('bg-success');
        document.getElementById(selection) .classList.add('text-white');
        
    } else {
        console.log('Falsche Antwort!!') //
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(selection).classList.add('text-white');
    }
}