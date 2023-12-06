const questions = [
    {
        question: "1. Quem está cantando?",
        audio: "<audio controls><source src='audios/12 - O Leãozinho (Caetano Veloso).mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Gilberto Gil", correct: false},
            {text : "Milton Nascimento", correct: false},
            {text : "Caetano Veloso", correct: true},
            {text : "Belchior", correct: false}
        ]
    },
    {
        question: "2. Quem está cantando?",
        audio: "<audio controls><source src='audios/08 Não sei dançar.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Gal Costa", correct: false},
            {text : "Rita Lee", correct: false},
            {text : "Nara Leão", correct: false},
            {text : "Marina Lima", correct: true}
        ]
    },
    {
        question: "3. Quem está cantando?",
        audio: "<audio controls><source src='audios/03 - Como Nossos Pais.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Nando Reis", correct: false},
            {text : "Belchior", correct: true},
            {text : "Tim Maia", correct: false},
            {text : "Cazuza", correct: false}
        ]
    },
    {
        question: "4. Quem está cantando?",
        audio: "<audio controls><source src='audios/01 - Tempo Perdido.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Skank", correct: false},
            {text : "Roberto Carlos", correct: false},
            {text : "Tribalistas", correct: false},
            {text : "Legião Urbana", correct: true}
        ]
    },
    {
        question: "5. Quem está cantando?", //all star
        audio: "<audio controls><source src='audios/07- Relicário - Nando Reis.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Samuel Rosa", correct: false},
            {text : "Renato Russo", correct: false},
            {text : "Cazuza", correct: false},
            {text : "Nando Reis", correct: true}
        ]
    },
    {
        question: "6. Quem está cantando?",
        audio: "<audio controls><source src='audios/05 Acima Do Sol (1).mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Legião Urbana", correct: false},
            {text : "Os Paralamas do Sucesso", correct: false},
            {text : "Skank", correct: true},
            {text : "Capital Inicial", correct: false}
        ]
    },
    {
        question: "7. Quem está cantando?", 
        audio: "<audio controls><source src='audios/07 Aonde Quer Que Eu Vá.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Legião Urbana", correct: false},
            {text : "Os Paralamas do Sucesso", correct: true},
            {text : "Barão Vermelho", correct: false},
            {text : "Skank", correct: false}
        ]
    },
    {
        question: "8. Quem está cantando?",
        audio: "<audio controls><source src='audios/02 - NADA SEI - KID ABELHA.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Kid Abelha", correct: true},
            {text : "Os Paralamas do Sucesso", correct:false},
            {text : "Barão Vermelho", correct: false},
            {text : "Engenheiros do Hawaii", correct: false}]
    },
    {
        question: "9. Quem está cantando?",
        audio: "<audio controls><source src='audios/Tim Maia - Gostava Tanto de Você.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Milton Nascimento", correct: false},
            {text : "Djavan", correct: false},
            {text : "João Gilberto", correct: false},
            {text : "Tim Maia", correct: true}
        ]
    },
    {
        question: "10. Quem está cantando?",//erva venenosa
        audio: "<audio controls><source src='audios/02. Desculpe o Auê.mp3' type='audio/mp3'></audio>",
        answers: [
            {text : "Rita Lee", correct: true},
            {text : "Maria Bethania", correct: false},
            {text : "Nara Leão", correct: false},
            {text : "Marina Lima", correct: false}
        ]
    }
];
let currentQuestionIndex = 0;
let score = 0;


function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    questionElement.textContent = question.question;
    questionElement.innerHTML = question.question + "<br>" + question.audio;

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Sua pontuação é ${score} de ${questions.length}`;

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    const nextButton = document.getElementById("next-btn");
    nextButton.textContent = "Jogue novamente";
    nextButton.addEventListener("click", startQuiz);
    nextButton.style.display = "block";
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

startQuiz();
