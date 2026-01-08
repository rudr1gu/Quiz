import { QuizController } from './quiz/quizController.js';
import { DOM } from './ui/dom.js';
import { Messages } from './ui/messages.js';

const quizController = new QuizController();

function initializeApp() {
    DOM.addEventListener('start', 'click', () => {
        quizController.toggleScreens();
        quizController.resetToHome();
    });

    DOM.addEventListener('facil', 'click', () => {
        quizController.startQuiz('easy');
    });

    DOM.addEventListener('medio', 'click', () => {
        quizController.startQuiz('medium');
    });

    DOM.addEventListener('dificil', 'click', () => {
        quizController.startQuiz('hard');
    });

    DOM.addEventListener('proximo', 'click', () => {
        const status = quizController.getGameStatus();
        
        if (status.isFinished) {
            quizController.resetToHome();
        } else if (status.totalQuestions > 0) {
            quizController.nextQuestion();
        }
    });

    console.log('✅ Quiz inicializado com sucesso!');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}