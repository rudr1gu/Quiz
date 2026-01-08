# 🎯 Quiz Tecnológico - Documentação Completa

Um quiz interativo sobre tecnologia desenvolvido com HTML5, CSS3 e JavaScript Vanilla (ES6 Modules) com arquitetura modular orientada a objetos.

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquitetura e Padrões](#arquitetura-e-padrões)
- [Documentação de Classes](#documentação-de-classes)
- [Como Usar](#como-usar)
- [Fluxo da Aplicação](#fluxo-da-aplicação)
- [Desenvolvimento](#desenvolvimento)

---

## 🎨 Visão Geral

O Quiz Tecnológico é uma aplicação web interativa que desafia usuários com perguntas sobre tecnologia em três níveis de dificuldade:
- **Fácil**: 10 perguntas básicas
- **Médio**: 10 perguntas intermediárias
- **Difícil**: 10 perguntas avançadas

### Características
- ✅ Arquitetura modular com POO
- ✅ Sem dependências externas (Vanilla JS)
- ✅ Responsivo para mobile e desktop
- ✅ Feedback visual em tempo real
- ✅ Timeline de progresso
- ✅ Sistema de pontuação com mensagens personalizadas

---

## 📁 Estrutura do Projeto

```
quiz/
├── index.html              # Estrutura HTML principal
├── main.js                 # Ponto de entrada da aplicação
├── estilo.css              # Estilos CSS com gradientes e responsive
├── README.md               # Esta documentação
│
├── data/                   # Bancos de dados de perguntas
│   ├── easyQuestion.js     # 10 perguntas fáceis
│   ├── mediumQuestion.js   # 10 perguntas médias
│   └── hardQuestion.js     # 10 perguntas difíceis
│
├── quiz/                   # Lógica principal do jogo
│   ├── quizController.js   # Controller MVC - orquestra o fluxo
│   └── questionsFactory.js # Factory Pattern - gerencia perguntas
│
├── state/                  # Gerenciamento de estado
│   └── quizState.js        # Singleton - estado global
│
└── ui/                     # Componentes de interface
    ├── dom.js              # Utilities para manipulação do DOM
    ├── messages.js         # Centraliza textos da aplicação
    └── timeline.js         # Gerencia visualização do progresso
```

---

## 🏗️ Arquitetura e Padrões

### Padrões de Design Implementados

#### 1. **Singleton Pattern** (`QuizState`)
Garante uma única instância global do estado do quiz.

```javascript
const state = new QuizState();
const state2 = new QuizState(); // Retorna a mesma instância
```

#### 2. **Factory Method Pattern** (`QuestionFactory`)
Centraliza a lógica de carregamento e manipulação de perguntas.

```javascript
const questions = QuestionFactory.getPreparedQuestions('easy');
```

#### 3. **MVC Pattern** (`QuizController`)
Separa lógica (Model), interface (View) e orquestração (Controller).

#### 4. **Static Utility Classes** (`DOM`, `Messages`)
Métodos reutilizáveis sem necessidade de instância.

```javascript
DOM.setHTML('elemento', 'conteúdo');
Messages.getFeedbackMessage(score, total);
```

### Princípios SOLID

- ✅ **S** - Single Responsibility: cada classe tem uma responsabilidade
- ✅ **O** - Open/Closed: fácil estender sem modificar existente
- ✅ **L** - Liskov Substitution: classes substituíveis
- ✅ **I** - Interface Segregation: interfaces mínimas e claras
- ✅ **D** - Dependency Inversion: depende de abstrações

---

## 📚 Documentação de Classes

### 1. **QuizState** (`state/quizState.js`)

**Padrão**: Singleton  
**Responsabilidade**: Gerenciar estado global do quiz

#### Propriedades
```javascript
questions: Array              // Perguntas carregadas
currentQuestionIndex: Number  // Índice da pergunta atual
score: Number                 // Pontuação do usuário
difficulty: String            // 'easy', 'medium' ou 'hard'
isAnswered: Boolean            // Se pergunta foi respondida
quizFinished: Boolean          // Se quiz foi finalizado
```

#### Métodos Públicos

| Método | Descrição |
|--------|-----------|
| `setQuestions(questions)` | Define array de perguntas |
| `getCurrentQuestion()` | Retorna pergunta atual |
| `nextQuestion()` | Avança para próxima pergunta |
| `incrementScore()` | Soma 1 ponto |
| `setDifficulty(difficulty)` | Define nível selecionado |
| `markAsAnswered()` | Marca pergunta como respondida |
| `isQuizFinished()` | Verifica se quiz terminou |
| `markQuizAsFinished()` | Marca quiz como finalizado |
| `reset()` | Reseta todo o estado |
| `getTotalQuestions()` | Retorna total de perguntas |
| `getCurrentQuestionNumber()` | Retorna número atual (1-based) |
| `getScore()` | Retorna pontuação atual |

---

### 2. **QuestionFactory** (`quiz/questionsFactory.js`)

**Padrão**: Factory Method + Repository  
**Responsabilidade**: Gerenciar carregamento e preparação de perguntas

#### Atributos Estáticos

```javascript
DIFFICULTY_LEVELS = { easy, medium, hard }
QUESTIONS_REPOSITORY = { easy: [...], medium: [...], hard: [...] }
```

#### Métodos Públicos

| Método | Descrição |
|--------|-----------|
| `getQuestionsByDifficulty(difficulty)` | Retorna perguntas da dificuldade |
| `getClonedQuestions(difficulty)` | Retorna cópia clonada |
| `getPreparedQuestions(difficulty, shuffle)` | Embaralha alternativas |
| `shuffleQuestions(questions)` | Embaralha ordem das perguntas |
| `shuffleAlternatives(question)` | Embaralha alternativas de uma pergunta |
| `isAnswerCorrect(question, text)` | Valida se resposta está correta |
| `getCorrectAlternative(question)` | Retorna alternativa correta |
| `getQuestionsStats()` | Retorna contagem de perguntas |

#### Exemplo de Uso
```javascript
const questions = QuestionFactory.getPreparedQuestions('medium', false);
console.log(questions); // Array com 10 perguntas embaralhadas
```

---

### 3. **DOM** (`ui/dom.js`)

**Padrão**: Static Utility Class  
**Responsabilidade**: API padronizada para manipulação do DOM

#### Métodos de Seleção

```javascript
DOM.getElementById(id)           // document.getElementById()
DOM.getByClass(className)        // document.querySelectorAll('.class')
DOM.getBySelector(selector)      // document.querySelector()
```

#### Métodos de Conteúdo

```javascript
DOM.setHTML(element, html)      // Altera innerHTML
DOM.setText(element, text)      // Altera textContent
DOM.getHTML(element)            // Retorna innerHTML
```

#### Métodos de Estilos

```javascript
DOM.setStyle(element, prop, value)  // element.style[prop] = value
DOM.addClass(element, className)     // classList.add()
DOM.removeClass(element, className)  // classList.remove()
```

#### Métodos de Eventos

```javascript
DOM.addEventListener(element, event, callback)  // addEventListener()
```

#### Métodos de Criação

```javascript
DOM.createElement(tag, className)   // document.createElement()
DOM.appendChild(parent, child)      // parent.appendChild()
DOM.clearChildren(element)          // Remove todos os filhos
```

#### Métodos de Atributos

```javascript
DOM.setDataAttribute(element, key, value)   // dataset[key] = value
DOM.getDataAttribute(element, key)          // Retorna dataset[key]
DOM.disable(element)                        // element.disabled = true
DOM.enable(element)                         // element.disabled = false
```

#### Exemplo de Uso
```javascript
DOM.setHTML('questoes', 'Qual é o resultado?');
const button = DOM.createElement('button', 'btn');
button.textContent = 'Responder';
DOM.appendChild('alternativasButton', button);
DOM.addClass(button, 'correct');
```

---

### 4. **Messages** (`ui/messages.js`)

**Padrão**: Constants Repository  
**Responsabilidade**: Centralizar textos da aplicação

#### Constantes de Textos

```javascript
Messages.FEEDBACK_MESSAGES   // Mensagens por pontuação
Messages.UI_TEXTS            // Textos da interface
Messages.START_TEXTS         // Textos iniciais
Messages.FOOTER_TEXTS        // Textos do footer
```

#### Métodos Públicos

| Método | Retorna |
|--------|---------|
| `getFeedbackMessage(score, total)` | Mensagem baseada em pontuação |
| `formatQuestion(number, text)` | "1. Pergunta aqui?" |
| `formatScore(score, total)` | "Sua Pontuação foi: 8 de 10" |

#### Exemplo de Uso
```javascript
const feedback = Messages.getFeedbackMessage(7, 10);
console.log(feedback); // "Você se saiu bem, mas pode melhorar!"

const formatted = Messages.formatQuestion(1, "2+2=?");
console.log(formatted); // "1. 2+2=?"
```

---

### 5. **Timeline** (`ui/timeline.js`)

**Padrão**: Observer-like  
**Responsabilidade**: Gerenciar visualização do progresso

#### Propriedades
```javascript
container: Element   // Div com ID 'linhatempo'
questions: Array     // Resultados de cada pergunta
```

#### Métodos Públicos

| Método | Descrição |
|--------|-----------|
| `initialize(questionCount)` | Cria bolinhas para cada pergunta |
| `updateQuestion(index, isCorrect)` | Marca pergunta como correta/errada |
| `show()` | Exibe timeline |
| `hide()` | Esconde timeline |
| `clear()` | Limpa todos os dados |
| `getQuestionResult(index)` | Retorna resultado de uma pergunta |
| `getAllResults()` | Retorna array com todos os resultados |

#### Visual na Página
```html
<div id="linhatempo">
    <div class="correct">1</div>
    <div class="incorrect">2</div>
    <div>3</div>
</div>
```

---

### 6. **QuizController** (`quiz/quizController.js`)

**Padrão**: MVC Controller  
**Responsabilidade**: Orquestrar fluxo completo do jogo

#### Propriedades
```javascript
state: QuizState         // Singleton de estado
timeline: Timeline       // Gerenciador de timeline
isAnswerSelected: Boolean // Flag de resposta selecionada
```

#### Métodos Públicos

| Método | Descrição |
|--------|-----------|
| `startQuiz(difficulty)` | Inicia novo quiz |
| `showCurrentQuestion()` | Exibe pergunta atual |
| `handleAnswerSelection(event)` | Processa seleção de resposta |
| `nextQuestion()` | Avança para próxima |
| `finishQuiz()` | Finaliza e exibe resultado |
| `resetToHome()` | Volta para seleção de dificuldade |
| `toggleScreens()` | Alterna entre telas inicial/quiz |
| `getGameStatus()` | Retorna status do jogo |

#### Métodos Privados

```javascript
clearQuestionAlternatives()  // Remove botões de perguntas
hideDifficultyButtons()      // Oculta botões de dificuldade
showDifficultyButtons()      // Exibe botões de dificuldade
```

#### Fluxo Interno
```
startQuiz()
  ├─ Reseta estado
  ├─ Carrega perguntas
  ├─ Inicializa timeline
  ├─ Oculta botões de dificuldade
  └─ Exibe primeira pergunta

handleAnswerSelection()
  ├─ Marca resposta correta/errada
  ├─ Desabilita botões de alternativas
  ├─ Atualiza timeline
  └─ Mostra botão "Próximo"

finishQuiz()
  ├─ Marca quiz como finalizado
  ├─ Exibe pontuação e feedback
  ├─ Muda botão para "Jogar Novamente"
  └─ Mostra footer de créditos
```

---

### 7. **main.js**

**Responsabilidade**: Ponto de entrada - inicializa event listeners

#### Event Listeners Configurados

```javascript
#start          → Alterna telas e prepara jogo
#facil          → Inicia quiz fácil
#medio          → Inicia quiz médio
#dificil        → Inicia quiz difícil
#proximo        → Próxima pergunta ou "Jogar Novamente"
```

#### Fluxo de Inicialização
```
DOMContentLoaded
  └─ initializeApp()
     └─ Registra todos os event listeners
```

---

## 🎮 Como Usar

### 1. **Abrir a Aplicação**
```bash
Abrir index.html em qualquer navegador moderno
```

### 2. **Fluxo de Interação**

```
1. Clique em "START"
   ↓
2. Selecione um nível (Fácil, Médio ou Difícil)
   ↓
3. Responda às perguntas (4 opções cada)
   ↓
4. Clique "Próximo" para continuar
   ↓
5. Veja sua pontuação final
   ↓
6. Clique "Jogar Novamente" para tentar outro nível
```

### 3. **Entender o Feedback**

A mensagem final depende da pontuação:

| Pontuação | Mensagem |
|-----------|----------|
| < 50% | "Não desanime. Mostre para o que você veio!" |
| 50-79% | "Você se saiu bem, mas pode melhorar!" |
| 80-99% | "Parabéns, foi por pouco!" |
| 100% | "Você foi extraordinário! Parabéns." |

---

## 🔄 Fluxo da Aplicação

```
┌─────────────────┐
│  TELA INICIAL   │
│  "Bem-vindo"    │
│  Botão START    │
└────────┬────────┘
         │ Clique START
         ↓
┌──────────────────────────┐
│  SELEÇÃO DE DIFICULDADE  │
│  [Fácil] [Médio] [Difícil]│
└────────┬────────┬────────┘
         │        │        │
    [Fácil] [Médio] [Difícil]
         │        │        │
         └────────┼────────┘
                  ↓
    ┌──────────────────────────┐
    │   EXIBIR PERGUNTA        │
    │   Pergunta: ?            │
    │   [Opção1] [Opção2]      │
    │   [Opção3] [Opção4]      │
    │   Timeline: ●① 2 3...    │
    └────────┬────────┬────────┘
             │        │
      [Resposta Correta]
             │
             ↓
    ┌──────────────────────────┐
    │  VALIDAR RESPOSTA        │
    │  ✓ Verde / ✗ Vermelho    │
    │  Mostrar resposta correta │
    │  Botão "Próximo"         │
    └────────┬────────┬────────┘
             │        │
         Próxima pergunta
             │
        [Última pergunta?]
         Sim│    Não│
            │       └─── Mostrar próxima
            │            (volta para exibir)
            ↓
    ┌──────────────────────────┐
    │   RESULTADO FINAL        │
    │   Pontuação: 7 de 10     │
    │   Mensagem personalizada │
    │   Footer com créditos    │
    │   Botão "Jogar Novamente"│
    └────────┬────────┬────────┘
             │        │
    [Jogar Novamente]
             │
    Volta para seleção de dificuldade
             │
             └─────── (Volta ao passo 2)
```

---

## 🔧 Desenvolvimento

### Como Adicionar Novas Dificuldades

1. **Criar arquivo de perguntas** (`data/expertQuestion.js`):
```javascript
export const expert = [
    {
        questoes: "Pergunta?",
        alternativas: [
            { text: "Opção 1", correct: false },
            { text: "Opção 2", correct: true },
            { text: "Opção 3", correct: false },
            { text: "Opção 4", correct: false }
        ]
    }
];
```

2. **Atualizar QuestionFactory** (`quiz/questionsFactory.js`):
```javascript
import { expert } from '../data/expertQuestion.js';

static QUESTIONS_REPOSITORY = {
    easy: easy,
    medium: medium,
    hard: hard,
    expert: expert
};
```

3. **Adicionar botão em HTML** (`index.html`):
```html
<button class="btn" id="expert">Expert</button>
```

4. **Registrar evento em main.js**:
```javascript
DOM.addEventListener('expert', 'click', () => {
    quizController.startQuiz('expert');
});
```

### Como Modificar Mensagens

Editar `ui/messages.js`:

```javascript
static FEEDBACK_MESSAGES = {
    poor: "Sua mensagem aqui",
    average: "...",
    good: "...",
    excellent: "..."
};
```

### Como Estilizar

Editar `estilo.css`:

```css
:root {
    --cor1: #0779EB;
    --cor2: #2607EB;
    --cor3: #07C0EB;
}
```

---

## 📊 Estatísticas do Projeto

```javascript
const stats = QuestionFactory.getQuestionsStats();
// { easy: 10, medium: 10, hard: 10, total: 30 }
```

---

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Gradientes, Grid, Flexbox, Responsividade
- **JavaScript ES6+** - Modules, Classes, Arrow Functions
- **Google Fonts** - Tipografia

---

## 👨‍💻 Autores

- [Marcus Vannucchi](https://github.com/marcusvannucchi)
- [Maria Eduarda](https://github.com/EduardaSerapili)
- [Otavio Fernandes](https://github.com/t4vzz)
- [Rodrigo Santos](https://github.com/Rudr1gu)
- [Tarcísio Neves](https://github.com/cizok)

**Instituição**: Etec Zona Leste | Centro Paula Souza

---

**Versão**: 2.0 (Modularizada com POO)  
**Última atualização**: Janeiro de 2026

