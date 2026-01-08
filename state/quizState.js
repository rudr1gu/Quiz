export class QuizState {
    constructor() {
        if (QuizState.instance) {
            return QuizState.instance;
        }
        
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.difficulty = null;
        this.isAnswered = false;
        this.quizFinished = false;
        
        QuizState.instance = this;
    }

    setQuestions(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex] || null;
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.isAnswered = false;
            return true;
        }
        return false;
    }

    incrementScore() {
        this.score++;
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }

    markAsAnswered() {
        this.isAnswered = true;
    }

    isQuizFinished() {
        return this.quizFinished;
    }

    markQuizAsFinished() {
        this.quizFinished = true;
    }

    reset() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.difficulty = null;
        this.isAnswered = false;
        this.quizFinished = false;
    }

    getTotalQuestions() {
        return this.questions.length;
    }

    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    }

    getScore() {
        return this.score;
    }
}
