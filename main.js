function iniciar(){
    const telastart = document.getElementById('iniciar')
    const telajogo = document.getElementById('corpo')

    telastart.style.display = 'none'
    telajogo.style.display = 'flex'
}


// let questoes;

function createQuestions(difficulty) {
    const levels = {
        easy: [{
                questoes: "Qual atalho é utilizado para copiar e colar?",
                alternativas: [
                    {text: "CTRL C + CTRL C", correct: false},
                    {text: "CTRL C + CTRL X", correct: false},
                    {text: "CTRL V + CTRL C", correct: false},
                    {text: "CTRL C + CTRL V", correct: true},
                ]
            },
            {
                questoes: "Para que serve o roteador Wi-Fi?",
                alternativas: [
                    {text: "Para gerar internet cabeada.", correct: false},
                    {text: "Para gerar internet móvel", correct: false},
                    {text: "Para gerar conexão sem cabos", correct: true},
                    {text: "Para operadora roubar seus dados pessoais", correct: false},
                ]   
            },
            {
                questoes: "Qual botão do teclado atualiza o navegador? ",
                alternativas: [
                    {text: "ALT", correct: false},
                    {text: "F11", correct: false},
                    {text: "F5", correct: true},
                    {text: "ENTER", correct: false},
                ]   
            },
            {
                questoes: "Para que serve o Pen Drive?",
                alternativas: [
                    {text: "Armazenamento Online", correct: false},
                    {text: "Armazenamento Rápido", correct: false},
                    {text: "Armazenamento Bluetooth", correct: false},
                    {text: "Armazenamento Portátil", correct: true},
                ]   
            },
            {
                questoes: "Qual o site mais utilizado para pesquisas?",
                alternativas: [
                    {text: "Safari", correct: false},
                    {text: "Opera", correct: false},
                    {text: "Google", correct: true},
                    {text: "Firefox", correct: false},
                ]   
            },
            {
                questoes: "Qual o termo utilizado para quem invade computadores?",
                alternativas: [
                    {text: "Técnico de celular", correct: false},
                    {text: "Hacker", correct: true},
                    {text: "Desenvolvedor web", correct: false},
                    {text: "Ladrão de casa", correct: false},
                ]   
            },
            {
                questoes: "Para qual palavra utilizamos a abreviação 'ADD'?",
                alternativas: [
                    {text: "Adicionar", correct: true},
                    {text: "Adidas ", correct: false},
                    {text: "Android", correct: false},
                    {text: "A doença do computador ", correct: false},
                ]   
            },
            {
                questoes: "Qual o sistema operacional mais utilizado nos smartphones?",
                alternativas: [
                    {text: "Windows", correct: false},
                    {text: "Peralix", correct: false},
                    {text: "Linux", correct: false},
                    {text: "Android", correct: true},
                ]   
            },
            {
                questoes: "Qual é um celular da Apple?",
                alternativas: [
                    {text: "Galaxy A04", correct: false},
                    {text: "Moto G30", correct: false},
                    {text: "iPhone 11", correct: true},
                    {text: "Redmi 12C", correct: false},
                ]   
            },
            {
                questoes: "Quais os componentes externos de um computador?",
                alternativas: [
                    {text: "Processador, teclado, monitor e fonte", correct: false},
                    {text: "Caixa de som, teclado, mouse e impressora", correct: true},
                    {text: "Impressora, placa-mãe e placa de vídeo", correct: false},
                    {text: "Caixa de som, teclado, mouse, impressora e placa-mãe", correct: false},
                ]   
            },
        ],
        medium: [
            {
                questoes: "Qual é o sistema operacional utilizado nos smartphones da Apple?",
                alternativas: [
                    {text: "Windows", correct: false},
                    {text: "iCloud", correct: false},
                    {text: "IoS", correct: true},
                    {text: "Mac", correct: false},
                ]
            },
            {
                questoes: "Qual é a última versão do Windows?",
                alternativas: [
                    {text: "Windows 10", correct: false},
                    {text: "Windows 11", correct: true},
                    {text: "Windows 12", correct: false},
                    {text: "Windows 13", correct: false},
                ]   
            },
            {
                questoes: "Quais softwares pertencem ao Microsoft 365?",
                alternativas: [
                    {text: "Word, Excel, PowerPoint e Photoshop", correct: false},
                    {text: "Excel, PowerPoint, Microsoft Teams e Word", correct: true},
                    {text: "Notepad, Word, Photoshop e Excel", correct: false},
                    {text: "Paint, Windows, Apple e Microsoft Teams", correct: false},
                ]   
            },
            {
                questoes: "Quem fundou a Apple?",
                alternativas: [
                    {text: "Silvio Santos", correct: false},
                    {text: "Steve Jobs", correct: true},
                    {text: "Bill Gates", correct: false},
                    {text: "Mark Zuckerberg", correct: false},
                ]   
            },
            {
                questoes: "O que é um sistema Operacional?",
                alternativas: [
                    {text: "Conjunto de programas com a função de gerenciar um sistema", correct: true},
                    {text: "Um conjunto de peças de um computador", correct: false},
                    {text: "Uma linguagem de programação", correct: false},
                    {text: "Um conjunto de aplicativos para escritório", correct: false},
                ]   
            },
            {
                questoes: "Qual a definição de Hardware?",
                alternativas: [
                    {text: "Um jogo que foi tendência nos anos 2000", correct: false},
                    {text: "Componentes lógicos", correct: false},
                    {text: "Aplicativos", correct: false},
                    {text: "Componentes físicos, internos ou externos", correct: true},
                ]   
            },
            {
                questoes: "Qual a definição de Software?",
                alternativas: [
                    {text: "Um periférico de um computador", correct: false},
                    {text: "Componentes físicos, internos ou externos", correct: false},
                    {text: "Conjunto de componentes lógicos", correct: true},
                    {text: "O editor de texto mais famoso do mundo", correct: false},
                ]   
            },
            {
                questoes: "Para que serve o Gabinete?",
                alternativas: [
                    {text: "Para melhorar o gráfico", correct: false},
                    {text: "Para aumentar a memória do computador", correct: false},
                    {text: "Para colocar o computador em cima", correct: false},
                    {text: "Para armazenar os componentes do computador", correct: true},
                ]   
            },
            {
                questoes: "Qual a principal diferença do HD para o SSD?",
                alternativas: [
                    {text: "O SSD oferece mais velocidade de leitura/gravação", correct: true},
                    {text: "O SSD tem ventilação própria", correct: false},
                    {text: "Somente o design", correct: false},
                    {text: "O HD oferece mais velocidade de leitura/gravação", correct: false},
                ]   
            },
            {
                questoes: "Quais destes são softwares para edição de arte?",
                alternativas: [
                    {text: "Photoshop, Canva e Notepad", correct: false},
                    {text: "GIMP, Photoshop e Canva", correct: true},
                    {text: "Canva, Word e Excel", correct: false},
                    {text: "PowerPoint, Photoshop e Canva", correct: false},
                ]   
            },
        ],
    
        hard: [{
                    questoes: "O que significa a sigla BIOS?",
                    alternativas: [
                        {text: "Back Input-Output Server", correct: false},
                        {text: "Basic Input-Output Server", correct: false},
                        {text: "Basic Input-Output System", correct: true},
                        {text: "Back Input-Output System", correct: false},
                    ]
                },
                {
                    questoes: "O que significa a sigla HTML?",
                    alternativas: [
                        {text: "Hypertext Language Serial", correct: false},
                        {text: "Hypertext Markup Language", correct: true},
                        {text: "Hypertext Mainframe Language", correct: false},
                        {text: "Hypertext Mainframe List", correct: false},
                    ]   
                },
                {
                    questoes: "O que significa a sigla CSS?",
                    alternativas: [
                        {text: "Cascading Server Sheets", correct: false},
                        {text: "Cascading Style Sheets", correct: true},
                        {text: "Cascading Sheets Style", correct: false},
                        {text: "Cascading Server Style", correct: false},
                    ]   
                },
                {
                    questoes: "Quais hardwares utilizam pasta térmica?",
                    alternativas: [
                        {text: "Processador e Fonte", correct: false},
                        {text: "Placa de video e Processador", correct: true},
                        {text: "Placa de video e Memória RAM", correct: false},
                        {text: "Processador e HD (Hard Disk)", correct: false},
                    ]   
                },
                {
                    questoes: "Qual a função da memória RAM?",
                    alternativas: [
                        {text: "Armazenar temporariamente toda a informação que o computador precisar", correct: true},
                        {text: "Armazenar permanentemente toda a informação que o computador precisar", correct: false},
                        {text: "Otimizar as funções gráficas do computador", correct: false},
                        {text: "Otimizar a velocidade de Internet", correct: false},
                    ]   
                },
                {
                    questoes: "Quantos bits tem um byte?",
                    alternativas: [
                        {text: "8", correct: true},
                        {text: "16", correct: false},
                        {text: "32", correct: false},
                        {text: "10", correct: false},
                    ]   
                },
                {
                    questoes: "Qual o sistema operacional mais utilizado no mundo?",
                    alternativas: [
                        {text: "Android", correct: true},
                        {text: "IoS", correct: false},
                        {text: "Windows", correct: false},
                        {text: "Linux", correct: false},
                    ]   
                },
                {
                    questoes: "Para onde vão os dados armazenados na nuvem?",
                    alternativas: [
                        {text: "Internet", correct: false},
                        {text: "Memoria RAM", correct: false},
                        {text: "Céu", correct: false},
                        {text: "Servidor", correct: true},
                    ]   
                },
                {
                    questoes: "Quais destes são serviços instalados em servidores?",
                    alternativas: [
                        {text: "Apache e Nginx", correct: true},
                        {text: "Figma e Adobe Spark", correct: false},
                        {text: "Bootstrap e Git", correct: false},
                        {text: "Ubuntu e CentOS", correct: false},
                    ]   
                },
                {
                    questoes: "Qual a função do software GIMP?",
                    alternativas: [
                        {text: "Editar videos", correct: false},
                        {text: "Editar fotos", correct: true},
                        {text: "Legendar videos", correct: false},
                        {text: "Otimizar a velocidade da internet via IP/DHCP", correct: false},
                    ]   
                },
        ]
    };

    questoes = levels[difficulty];
    return questoes;
}

const questoesElement = document.getElementById("questoes")
const alternativasButton = document.getElementById("alternativasButton")
const proximo = document.getElementById("proximo")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(questoes) {
    currentQuestionIndex = 0;
    score = 0;
    proximo.innerHTML = "Próximo"

    showQuestion(questoes);
}

// Funções para iniciar os diferentes níveis
function startEasy() {
    const questoes = createQuestions("easy");
    startQuiz(questoes);
}

function startMed() {
    const questoes = createQuestions("medium");
    startQuiz(questoes);
}

function startHard() {
    const questoes = createQuestions("hard");
    startQuiz(questoes);
}

function showQuestion(){
    resetState();
    let currentQuestion = questoes[currentQuestionIndex]
    let questoesNo = currentQuestionIndex + 1;
    questoesElement.innerHTML = questoesNo + ". " + currentQuestion.questoes;

    currentQuestion.alternativas.forEach(alternativas => {
        const button = document.createElement("button")
        button.innerHTML = alternativas.text;
        button.classList.add("btn");
        alternativasButton.appendChild(button)
        if (alternativas.correct){
            button.dataset.correct = alternativas.correct
        }
        button.addEventListener("click", selectAlternativas)
    });
}

function resetState(){
    proximo.style.display = "none"
    while(alternativasButton.firstChild){
        alternativasButton.removeChild(alternativasButton.firstChild)
    }
}

function selectAlternativas(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(alternativasButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    proximo.style.display = "block";

    updateTimeline(isCorrect);
}

function updateTimeline(isCorrect) {
    const linhaDoTempo = document.getElementById("linhatempo");
  
    // Cria um elemento de ponto na linha do tempo
    const ponto = document.createElement("div");
    
    // Adiciona a classe apropriada com base na resposta
    ponto.classList.add(isCorrect ? "correct" : "incorrect");
  
    // Adiciona o ponto à linha do tempo
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
    if(currentQuestionIndex < questoes.length){
        showQuestion()
    }else{
        showScore()
        let creditos = document.getElementById("creditos")
        let frase = document.getElementById("frase")
        creditos.style.display = "flex"

        if (score < 5){
            frase.innerHTML = "Não desanime. Mostre para o que você veio!"
        }else if (score < 8){
            frase.innerHTML = "Você se saiu bem, mas pode melhorar!"
        }else if( score < 10){
            frase.innerHTML = "Parabéns, foi por pouco!"
        }else {
            frase.innerHTML = "Você foi extraordinário! Parabéns."
        }
    }
}

proximo.addEventListener("click", ()=>{
    if(currentQuestionIndex < questoes.length){
        handleNextButton()
    }else{
        window.location.replace("index.html")
    }
})