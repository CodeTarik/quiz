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

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCES = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('dynamic').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if(gameIsOver()){ //sihe Zeile 68
    showEndScreen(); // Siehe Zeile 125
    }else{ 
    updateToProgress(); // siehe Zeile 135
    updateNextQuestion(); // siehe Zeile 142
    
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function answer(selection) {

    let question = questions[currentQuestion]; //
    console.log('Selected answer is', selection) //
    let selectedQuestionNumber = selection.slice(-1); //
    console.log('SelectedQuestionNumber is', selectedQuestionNumber); // wird in der Konsole angezeigt
    console.log('Current questiion is ', question['right_answer']); //

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(questionNumber(selectedQuestionNumber)) {  // siehe Zeile 99
        console.log('Richtige Antwort') //
        document.getElementById(selection) .parentNode.classList.add('bg-success');
        AUDIO_SUCCES.play();
        rightQuestions ++; // Zahl um eine Stelle nach oben; -- um eins verringert

    } else {
        console.log('Falsche Antwort!!') //
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')//document.getElementById(selection) .parentNode.classList.add('text-white');
        AUDIO_FAIL.play();
    }


    document.getElementById('next-button').disabled = false;
}

function questionNumber(question, selectedQuestionNumber){
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++; // von 0 auf 1 die globale Variable
    resetAnswer();
    showQuestion(); // 

    document.getElementById('next-button').disabled = true;

    
}

function resetAnswer() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success'); 
}

function restartOfGame(){
    document.getElementById('header-image').src = 'img/quiz-card.jpg'; // austausch der Image auf dem Endscreen
    document.getElementById('body').style = ''; // 'body' wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; // Endscreen ausblenden

    rightQuestions =  0; // die Variable wird hier überschrieben
    currentQuestion = 0; // die Variable wird hier überschrieben
    init();
}

function showEndScreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('body').style = 'display: none';

    document.getElementById('amount-of-question').innerHTML = questions.length; // die Länge über JSON eingefügt
    document.getElementById('amount-of-right-question').innerHTML = rightQuestions; // die Anzahl der richtigen Antworten
    document.getElementById('header-image').src = '/img/trophy.png';
}

function updateToProgress(){
    let percent = (currentQuestion +1)  / questions.length * 100;
    percent = Math.round(percent); 

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function updateNextQuestion(){


    let question = questions[currentQuestion];

    document.getElementById('change-number').innerHTML = currentQuestion + 1;

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}