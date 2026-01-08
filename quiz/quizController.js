import { QuizState } from '../state/quizState.js';
import { QuestionFactory } from './questionsFactory.js';
import { DOM } from '../ui/dom.js';
import { Messages } from '../ui/messages.js';
import { Timeline } from '../ui/timeline.js';

export class QuizController {
    constructor() {
        this.state = new QuizState();
        this.timeline = new Timeline();
        this.isAnswerSelected = false;
    }

    startQuiz(difficulty) {
        try {
            this.state.reset();
            this.state.setDifficulty(difficulty);

            const questions = QuestionFactory.getPreparedQuestions(difficulty, false);
            this.state.setQuestions(questions);

            this.timeline.initialize(questions.length);
            this.timeline.show();

            this.hideDifficultyButtons();

            this.showCurrentQuestion();
        } catch (error) {
            console.error('Erro ao iniciar quiz:', error);
            alert('Erro ao carregar o quiz. Tente novamente.');
        }
    }

    showCurrentQuestion() {
        const question = this.state.getCurrentQuestion();

        if (!question) {
            this.finishQuiz();
            return;
        }

        this.isAnswerSelected = false;

        const questionNumber = this.state.getCurrentQuestionNumber();
        const totalQuestions = this.state.getTotalQuestions();
        DOM.setHTML(
            'questoes',
            Messages.formatQuestion(questionNumber, question.questoes)
        );

        this.clearQuestionAlternatives();

        question.alternativas.forEach((alternativa) => {
            const button = DOM.createElement('button', 'btn');
            button.textContent = alternativa.text;
            button.dataset.questionButton = 'true';

            if (alternativa.correct) {
                DOM.setDataAttribute(button, 'correct', 'true');
            }

            button.addEventListener('click', (e) => this.handleAnswerSelection(e));
            DOM.appendChild('alternativasButton', button);
        });

        DOM.setStyle('proximo', 'display', 'none');
    }

    handleAnswerSelection(event) {
        if (this.isAnswerSelected) return;

        this.isAnswerSelected = true;

        const selectedButton = event.target;
        const isCorrect = DOM.getDataAttribute(selectedButton, 'correct') === 'true';

        if (isCorrect) {
            DOM.addClass(selectedButton, 'correct');
            this.state.incrementScore();
        } else {
            DOM.addClass(selectedButton, 'incorrect');
        }

        const allButtons = DOM.getByClass('btn');
        allButtons.forEach(button => {
            if (button.dataset.questionButton === 'true') {
                DOM.disable(button);

                if (DOM.getDataAttribute(button, 'correct') === 'true') {
                    DOM.addClass(button, 'correct');
                }
            }
        });

        const currentIndex = this.state.currentQuestionIndex;
        this.timeline.updateQuestion(currentIndex, isCorrect);

        DOM.setStyle('proximo', 'display', 'block');
    }

    nextQuestion() {
        if (!this.state.nextQuestion()) {
            this.finishQuiz();
        } else {
            this.showCurrentQuestion();
        }
    }

    finishQuiz() {
        this.state.markQuizAsFinished();

        this.timeline.hide();

        const score = this.state.getScore();
        const total = this.state.getTotalQuestions();
        const scoreText = Messages.formatScore(score, total);

        DOM.setHTML('questoes', scoreText);
        this.clearQuestionAlternatives();

        const feedback = Messages.getFeedbackMessage(score, total);
        DOM.setHTML('frase', feedback);

        DOM.setText('proximo', Messages.UI_TEXTS.playAgain);
        DOM.setStyle('proximo', 'display', 'block');

        DOM.setStyle('creditos', 'display', 'flex');
    }

    resetToHome() {
        this.state.reset();
        this.timeline.clear();

        this.showDifficultyButtons();

        DOM.setHTML('questoes', Messages.UI_TEXTS.selectDifficulty);
        DOM.setText('proximo', Messages.UI_TEXTS.next);
        DOM.setStyle('proximo', 'display', 'none');
        DOM.setStyle('creditos', 'display', 'none');
        DOM.setHTML('frase', '');
    }

    clearQuestionAlternatives() {
        const alternativasButton = DOM.getElementById('alternativasButton');
        if (alternativasButton) {
            const dynamicButtons = alternativasButton.querySelectorAll('button[data-question-button="true"]');
            dynamicButtons.forEach(btn => btn.remove());
        }
    }

    hideDifficultyButtons() {
        DOM.setStyle('facil', 'display', 'none');
        DOM.setStyle('medio', 'display', 'none');
        DOM.setStyle('dificil', 'display', 'none');
    }

    showDifficultyButtons() {
        DOM.setStyle('facil', 'display', 'block');
        DOM.setStyle('medio', 'display', 'block');
        DOM.setStyle('dificil', 'display', 'block');
        
        DOM.enable('facil');
        DOM.enable('medio');
        DOM.enable('dificil');
    }

    toggleScreens() {
        const startScreen = DOM.getElementById('iniciar');
        const quizScreen = DOM.getElementById('corpo');

        startScreen.style.display = 'none';
        quizScreen.style.display = 'flex';
    }

    getGameStatus() {
        return {
            difficulty: this.state.difficulty,
            currentQuestion: this.state.getCurrentQuestionNumber(),
            totalQuestions: this.state.getTotalQuestions(),
            score: this.state.getScore(),
            isFinished: this.state.isQuizFinished()
        };
    }
}
