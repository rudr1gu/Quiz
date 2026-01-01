import { easy } from './database/easyquestion.js'
import { medium } from './database/mediumQuestion.js'
import { hard } from './database/hardQuestion.js'

let iniciar = () => {
    const telastart = document.getElementById('iniciar')
    const telajogo = document.getElementById('corpo')

    telastart.style.display = 'none'
    telajogo.style.display = 'flex'
}

let start = document.getElementById('start')
start.addEventListener('click', iniciar)

function createQuestions(difficulty) {
    const levels = {
        easy: easy,
        medium: medium,
        hard: hard
    };
    let questoes = levels[difficulty];
    return questoes;
}

let questoes = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    proximo.innerHTML = "Próximo"

    showQuestion();
}

const questoesElement = document.getElementById("questoes")
const alternativasButton = document.getElementById("alternativasButton")
const proximo = document.getElementById("proximo")

function startEasy() {
    questoes = createQuestions("easy");
    console.log(questoes);
    startQuiz();
}

function startMed() {
    questoes = createQuestions("medium");
    console.log(questoes);
    startQuiz();
}

function startHard() {
    questoes = createQuestions("hard");
    console.log(questoes);
    startQuiz();
}

let facil = document.getElementById("facil")
facil.addEventListener("click", startEasy)

let medio = document.getElementById("medio")
medio.addEventListener("click", startMed)

let dificil = document.getElementById("dificil")
dificil.addEventListener("click", startHard)


function showQuestion() {
    resetState();
    console.log("array tem: ", questoes.length)
    let currentQuestion = questoes[currentQuestionIndex]
    let questoesNo = currentQuestionIndex + 1;
    questoesElement.innerHTML = questoesNo + ". " + currentQuestion.questoes;

    currentQuestion.alternativas.forEach(alternativas => {
        const button = document.createElement("button")
        button.innerHTML = alternativas.text;
        button.classList.add("btn");
        alternativasButton.appendChild(button)
        if (alternativas.correct) {
            button.dataset.correct = alternativas.correct
        }
        button.addEventListener("click", selectAlternativas)
    });
}

function resetState() {
    proximo.style.display = "none"
    while (alternativasButton.firstChild) {
        alternativasButton.removeChild(alternativasButton.firstChild)
    }
}

function selectAlternativas(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(alternativasButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    proximo.style.display = "block";

    updateTimeline(isCorrect);
}

function updateTimeline(isCorrect) {
    const linhaDoTempo = document.getElementById("linhatempo");

    const ponto = document.createElement("div");
    ponto.classList.add(isCorrect ? "correct" : "incorrect");
    linhaDoTempo.appendChild(ponto);

    const numero = document.createElement("span");
    numero.textContent = linhaDoTempo.children.length; // Obtém o número sequencial
    ponto.appendChild(numero);
}

function showScore() {
    resetState()
    const linhatempo = document.getElementById('linhatempo')

    questoesElement.innerHTML = `Sua Pontuação foi: ${score} de ${questoes.length}`
    proximo.innerHTML = "Jogar Novamente"
    proximo.style.display = "block"
    linhatempo.style.display = "none"
}

function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questoes.length) {
        showQuestion()
    } else {
        showScore()
        let creditos = document.getElementById("creditos")
        let frase = document.getElementById("frase")
        creditos.style.display = "flex"

        if (score < 5) {
            frase.innerHTML = "Não desanime. Mostre para o que você veio!"
        } else if (score < 8) {
            frase.innerHTML = "Você se saiu bem, mas pode melhorar!"
        } else if (score < 10) {
            frase.innerHTML = "Parabéns, foi por pouco!"
        } else {
            frase.innerHTML = "Você foi extraordinário! Parabéns."
        }
    }
}

proximo.addEventListener("click", () => {
    if (currentQuestionIndex < questoes.length) {
        handleNextButton()
    } else {
        window.location.replace("index.html")
    }
})