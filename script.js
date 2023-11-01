function startEasy(){ //função para iniciar o nivel facil
    const questoes = [ 
       {
           questoes: "Qual atalho usar para copiar e colar?",
           alternativas: [
               {text: "CTRL C + CTRL C", correct: false},
               {text: "CTRL C + CTRL X", correct: false},
               {text: "CTRL V + CTRL C", correct: false},
               {text: "CTRL C + CTRL V", correct: true},
           ]
       },
       {
           questoes: "Para que serve o roteador wi-fi?",
           alternativas: [
               {text: "Para gerar internet cabeada.", correct: false},
               {text: "Para gerar internet móvel.", correct: false},
               {text: "Para gerar conexão sem cabos.", correct: true},
               {text: "Para operadora roubar dados pessoais. ", correct: false},
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
           questoes: "O que é um pen-drive?",
           alternativas: [
               {text: "Armazenamento Online.", correct: false},
               {text: "Armazenamento Rápido.", correct: false},
               {text: "Armazenamento Bluetooth.", correct: false},
               {text: "Armazenamento Portátil.", correct: true},
           ]   
       },
       {
           questoes: "Qual site mais usado para pesquisa?",
           alternativas: [
               {text: "Safari", correct: false},
               {text: "Pera site", correct: false},
               {text: "Google", correct: true},
               {text: "Firefox", correct: false},
           ]   
       },
       {
           questoes: "Qual nome da pessoa que invade computadores?",
           alternativas: [
               {text: "Técnico de celular", correct: false},
               {text: "Hacker", correct: true},
               {text: "Desenvolvedor Web", correct: false},
               {text: "Ladrão de casa", correct: false},
           ]   
       },
       {
           questoes: "Para qual palavra usamos a abreviação: 'Add'?",
           alternativas: [
               {text: "Adicionar", correct: true},
               {text: "Adidas ", correct: false},
               {text: "Android", correct: false},
               {text: "A doença do computador ", correct: false},
           ]   
       },
       {
           questoes: "Qual nome do sistema operacional mobile mais utilizado hoje em dia?",
           alternativas: [
               {text: "Windows", correct: false},
               {text: "Peralix", correct: false},
               {text: "Linux", correct: false},
               {text: "Android", correct: true},
           ]   
       },
       {
           questoes: "Qual o celular é da marca Apple?",
           alternativas: [
               {text: "Galaxy A04", correct: false},
               {text: "Moto G30", correct: false},
               {text: "iPhone 11", correct: true},
               {text: "Redmi 12C", correct: false},
           ]   
       },
       {
           questoes: "Quais componentes externos de um computador?",
           alternativas: [
               {text: "Processador, teclado, monitor e fonte.", correct: false},
               {text: "Caixa de som, teclado, mouse e impressora.", correct: true},
               {text: "Impressora, placa-mãe e placa de vídeo.", correct: false},
               {text: "Caixa de som, teclado, mouse, impressora e placa-mãe.", correct: false},
           ]   
       },
   ];

    const questoesElement = document.getElementById("questoes") //vai receber as questoes
    const alternativasButton = document.getElementById("alternativasButton") //vai receber as alternativas
    const proximo = document.getElementById("proximo") //botão para pular para proximas questoes

    let currentQuestionIndex = 0; //variavel para selecionar o elemento das questoes
    let score = 0; //pontuação

    function startQuiz(){ //define a pontuaçao e elemento quando inicia o quiz
        currentQuestionIndex = 0;
        score = 0;
        proximo.innerHTML = "Proximo"

        showQuestion(); //mostrar as questoes e alternativas
    }

    function showQuestion(){ //função para criar os elementos de questoes e alternativas
        resetState(); //apaga os botões e as questoes anterior para criar as novas
        let currentQuestion = questoes[currentQuestionIndex] //seleciona a questão 
        let questoesNo = currentQuestionIndex + 1; //numero da questão
        questoesElement.innerHTML = questoesNo + ". " + currentQuestion.questoes;

        currentQuestion.alternativas.forEach(alternativas => { //função para criar os botões das alternativas
            const button = document.createElement("button")
            button.innerHTML = alternativas.text;
            button.classList.add("btn"); //criar uma classe para os botões
            alternativasButton.appendChild(button)
            if (alternativas.correct){
                button.dataset.correct = alternativas.correct 
            }
            button.addEventListener("click", selectAlternativas) //cria um evento quando clica na alternativa
        });
    }

    function resetState(){ //função para resetar a pagina 
        proximo.style.display = "none"
        while(alternativasButton.firstChild){
            alternativasButton.removeChild(alternativasButton.firstChild)
        }
    }

    function selectAlternativas(e){  //evento para quando a alternativa for selecionada
        const selectedBtn = e.target
        const isCorrect = selectedBtn.dataset.correct === "true";

        if(isCorrect){
            selectedBtn.classList.add("correct"); //caso a alternativa correta for selecionada cria um classe para botão e soma pontuação
            score++
        }else {
            selectedBtn.classList.add("incorrect");  //caso a alternativa estiver incorreta add classe 
        }
        Array.from(alternativasButton.children).forEach(button => { //indica qual alternativa correta
            if(button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            button.disabled = true; //desabilita o click dos botões das alternativas quando selecionada
        });
        proximo.style.display = "block";  //habilita o botão para proxima alternativa 
    }

    function showScore(){  //função para tela final onde mostra a pontuação e criar opção de jogar novamente
        resetState()
        questoesElement.innerHTML = `Sua Pontuação foi: ${score} de ${questoes.length}`
        proximo.innerHTML = "Jogar Novamente" //mudar o texto do botão de proximo para jogar novamente
        proximo.style.display = "block"

    }

    function handleNextButton(){ //evento para quando o botão do proximo for selecionado
        currentQuestionIndex++ //muda o elemento da questão pulando para proxima questão
        if(currentQuestionIndex < questoes.length){  //caso verdadeiro mostrar proxima questão falso mostrar a tela final com pontuação
            showQuestion()
        }else{
            showScore() //função para mostrar a pontuação
            let creditos = document.getElementById("creditos")
            creditos.style.display = "flex"
            let frase = document.getElementById("frase")

            if (score < 5){ 
                frase.innerHTML = "Você pode tentar novamene e se superar!"
            }
            else if (score < 9 ){
                frase.innerHTML = "Você consegue mais do que isso!"
            }
            else {
                frase.innerHTML = "Isso foi perfeito, por que não tentar um nível mais díficil? "
            }
        }
    }

    proximo.addEventListener("click", ()=>{ //quando acabar as questoes botão de proximo receber a função para tela inicial
        if(currentQuestionIndex < questoes.length){
            handleNextButton()
        }else{
            window.location.replace("start.html")
        }
    })

    startQuiz() //função para inicial o jogo
   
   }

   function startMed(){
    const questoes = [
        {
            questoes: "Qual é o sistema operacional dos celulares da apple?",
            alternativas: [
                {text: "Windows", correct: false},
                {text: "iCloud", correct: false},
                {text: "IoS", correct: true},
                {text: "Mac", correct: false},
            ]
        },
        {
            questoes: "Qual a última versão do windows?",
            alternativas: [
                {text: "Windows 11", correct: true},
                {text: "Windows 12", correct: false},
                {text: "Windows 13", correct: false},
                {text: "Windows 14", correct: false},
            ]   
        },
        {
            questoes: "Quais desses contém no pacote office?",
            alternativas: [
                {text: "Word, Excel, Power Point e Photoshop.", correct: false},
                {text: "Excel, Power Point, Microsoft Teams e Word.", correct: true},
                {text: "Noteapd, Word, Photoshop e Excel.", correct: false},
                {text: "Paint, Windows, Apple e Microsoft Teams.", correct: false},
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
            questoes: "O que é um sistema operacional?",
            alternativas: [
                {text: "Conjunto de programas com a função de gerenciar um sistema.", correct: true},
                {text: "Um conjunto de peças de um computador.", correct: false},
                {text: "Uma linguagem de programação.", correct: false},
                {text: "Um conjunto de aplicativos para escritório.", correct: false},
            ]   
        },
        {
            questoes: "O que é um hardware?",
            alternativas: [
                {text: "Um jogo que foi tendência nos anos 2000.", correct: false},
                {text: "Componentes lógicos", correct: false},
                {text: "Aplicativos", correct: false},
                {text: "Componentes físicos, internos ou externos.", correct: true},
            ]   
        },
        {
            questoes: "O que é um software?",
            alternativas: [
                {text: "Um periférico de um computador.", correct: false},
                {text: "Componentes físicos, internos ou externos.", correct: false},
                {text: "Conjunto de componentes lógicos.", correct: true},
                {text: "O editor de texto mais famoso do mundo.", correct: false},
            ]   
        },
        {
            questoes: "Para que serve gabinete?",
            alternativas: [
                {text: "Para melhorar o desempenho do computador.", correct: false},
                {text: "Para aumentar a memória do computador.", correct: false},
                {text: "Para colocar o computador em cima.", correct: false},
                {text: "Para armazenar os componentes do computador.", correct: true},
            ]   
        },
        {
            questoes: "Qual a principal diferença de HD para o SSD",
            alternativas: [
                {text: "O SSD oferece mais velocidade de leitura/gravação.", correct: true},
                {text: "O SSD tem ventilação própria.", correct: false},
                {text: "Somente o design.", correct: false},
                {text: "O HD oferece mais velocidade de leitura/gravação.", correct: false},
            ]   
        },
        {
            questoes: "Quais destes são softwares para edição de arte?",
            alternativas: [
                {text: "Photoshop, Canva e Notepad.", correct: false},
                {text: "GIMP, Photoshop e Canva.", correct: true},
                {text: "Canva, Word e Excel.", correct: false},
                {text: "PowerPoint, Photoshop e Canva.", correct: false},
            ]   
        },
    ];

    const questoesElement = document.getElementById("questoes")
    const alternativasButton = document.getElementById("alternativasButton")
    const proximo = document.getElementById("proximo")

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        proximo.innerHTML = "Próximo"

        showQuestion();
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
    }

    function showScore(){
        resetState()
        questoesElement.innerHTML = `Sua Pontuação foi: ${score} de ${questoes.length}`
        proximo.innerHTML = "Jogar Novamente"
        proximo.style.display = "block"

    }

    function handleNextButton(){
        currentQuestionIndex++
        if(currentQuestionIndex < questoes.length){
            showQuestion()
        }else{
            showScore()
            let creditos = document.getElementById("creditos")
            creditos.style.display = "flex"

            let frase = document.getElementById("frase")

            if (score < 5){
                frase.innerHTML = "Esse nível é mais complicado mesmo, mas você consegue!"
            }
            else if (score < 9 ){
                frase.innerHTML = "Você é melhor que isso, leia com atenção."
            }
            else {
                frase.innerHTML = "Você é um gênio, vá para o próximo nível e teste a fundo o seu conhecimento! "
            }
        }
    }

    proximo.addEventListener("click", ()=>{
        if(currentQuestionIndex < questoes.length){
            handleNextButton()
        }else{
            window.location.replace("start.html")
        }
    })

    startQuiz()

   }



    function startHard(){

    const questoes = [
        {
            questoes: "Qual a definição de BIOS?",
            alternativas: [
                {text: "Back Input-Output Server", correct: false},
                {text: "Basic Input-Output Server", correct: false},
                {text: "Basic Input-Output System", correct: true},
                {text: "Back Input-Output System", correct: false},
            ]
        },
        {
            questoes: "Qual a definição de HTML",
            alternativas: [
                {text: "Hypertext Language Serial", correct: false},
                {text: "Hypertext Markup Language", correct: true},
                {text: "Hypertext Mainframe Language", correct: false},
                {text: "Hypertext Mainframe List", correct: false},
            ]   
        },
        {
            questoes: "Qual a Definação CSS?",
            alternativas: [
                {text: "Cascading Server Sheets", correct: false},
                {text: "Cascading Style Sheets", correct: true},
                {text: "Cascading Sheets Style", correct: false},
                {text: "Cascading Server Style", correct: false},
            ]   
        },
        {
            questoes: "Quais hardware precisa usar pasta termica",
            alternativas: [
                {text: "Processador e Fonte.", correct: false},
                {text: "Placa de video e Processador.", correct: true},
                {text: "Placa de video e Memória RAM.", correct: false},
                {text: "Processador e HD (Hard Disk).", correct: false},
            ]   
        },
        {
            questoes: "Qual a função da memória RAM?",
            alternativas: [
                {text: "Armazenar temporariamente toda a informação que o computador precisar.", correct: true},
                {text: "Armazenar permanentemente toda a informação que o computador precisar.", correct: false},
                {text: "Otimizar as funções gráficas do computador.", correct: false},
                {text: "Otimizar a velocidade de Internet.", correct: false},
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
            questoes: "Qual sistema operacional é mais utilizado?",
            alternativas: [
                {text: "Android", correct: true},
                {text: "IoS", correct: false},
                {text: "Windows", correct: false},
                {text: "Linux", correct: false},
            ]   
        },
        {
            questoes: "Para onde vai os dados armazenados na nuvem?",
            alternativas: [
                {text: "Internet", correct: false},
                {text: "Memoria RAM", correct: false},
                {text: "Supercomputadores", correct: false},
                {text: "Servidor", correct: true},
            ]   
        },
        {
            questoes: "Quais são os dois servidores mais utilizado do mundo?",
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
                {text: "Otimizar a velocidade da internet via IP/DHCP.", correct: false},
            ]   
        },
    ];

    const questoesElement = document.getElementById("questoes")
    const alternativasButton = document.getElementById("alternativasButton")
    const proximo = document.getElementById("proximo")

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        proximo.innerHTML = "Próximo"

        showQuestion();
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
    }

    function showScore(){
        resetState()
        questoesElement.innerHTML = `Sua Pontuação foi: ${score} de ${questoes.length}`
        proximo.innerHTML = "Jogar Novamente"
        proximo.style.display = "block"

    }

    function handleNextButton(){
        currentQuestionIndex++
        if(currentQuestionIndex < questoes.length){
            showQuestion()
        }else{
            showScore()
            let creditos = document.getElementById("creditos")
            creditos.style.display = "flex"

            let frase = document.getElementById("frase")

            if (score < 5){
                frase.innerHTML = "Isso realmente pra quem é um gênio da programação, mas não desista!"
            }
            else if (score < 9 ){
                frase.innerHTML = "Não se deixe vencer pela pressão, mostre para o que você veio!"
            }
            else {
                frase.innerHTML = "Você realmente é o técnico. Parabéns você é um gênio! "
            }
        }

    }

    proximo.addEventListener("click", ()=>{
        if(currentQuestionIndex < questoes.length){
            handleNextButton()
        }else{
            window.location.replace("start.html")
        }
    })

    startQuiz()
    }