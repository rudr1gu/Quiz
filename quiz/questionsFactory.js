import { easy } from '../data/easyQuestion.js';
import { medium } from '../data/mediumQuestion.js';
import { hard } from '../data/hardQuestion.js';

export class QuestionFactory {
    static DIFFICULTY_LEVELS = {
        easy: 'easy',
        medium: 'medium',
        hard: 'hard'
    };

    static QUESTIONS_REPOSITORY = {
        easy: easy,
        medium: medium,
        hard: hard
    };

    static getQuestionsByDifficulty(difficulty) {
        if (!this.QUESTIONS_REPOSITORY.hasOwnProperty(difficulty)) {
            throw new Error(`Dificuldade inválida: ${difficulty}`);
        }

        const questions = this.QUESTIONS_REPOSITORY[difficulty];
        
        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error(`Nenhuma pergunta encontrada para: ${difficulty}`);
        }

        return questions;
    }

    static getClonedQuestions(difficulty) {
        const original = this.getQuestionsByDifficulty(difficulty);
        return JSON.parse(JSON.stringify(original));
    }

    static shuffleQuestions(questions) {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    static shuffleAlternatives(question) {
        const shuffled = { ...question };
        const alternatives = [...question.alternativas];
        
        for (let i = alternatives.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [alternatives[i], alternatives[j]] = [alternatives[j], alternatives[i]];
        }
        
        shuffled.alternativas = alternatives;
        return shuffled;
    }

    static getPreparedQuestions(difficulty, shuffle = false) {
        let questions = this.getClonedQuestions(difficulty);

        questions = questions.map(q => this.shuffleAlternatives(q));

        if (shuffle) {
            questions = this.shuffleQuestions(questions);
        }

        return questions;
    }

    static isAnswerCorrect(question, selectedText) {
        return question.alternativas.some(alt =>
            alt.text === selectedText && alt.correct === true
        );
    }

    static getCorrectAlternative(question) {
        return question.alternativas.find(alt => alt.correct === true) || null;
    }

    static getQuestionsStats() {
        return {
            easy: easy.length,
            medium: medium.length,
            hard: hard.length,
            total: easy.length + medium.length + hard.length
        };
    }
}
