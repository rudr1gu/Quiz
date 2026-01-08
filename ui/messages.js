export class Messages {
    static FEEDBACK_MESSAGES = {
        poor: "Não desanime. Mostre para o que você veio!",
        average: "Você se saiu bem, mas pode melhorar!",
        good: "Parabéns, foi por pouco!",
        excellent: "Você foi extraordinário! Parabéns."
    };

    static UI_TEXTS = {
        selectDifficulty: "Selecione o nível de dificuldade:",
        easy: "Fácil",
        medium: "Médio",
        hard: "Difícil",
        next: "Próximo",
        playAgain: "Jogar Novamente",
        score: "Sua Pontuação foi:",
        start: "START"
    };

    static START_TEXTS = {
        welcome: "Seja Bem-Vindo ao Quiz!",
        description: "Este quiz foi elaborado para desafiar seus conhecimentos gerais na área da tecnologia.",
        challenge: "Você está preparado para este desafio?"
    };

    static FOOTER_TEXTS = {
        developedBy: "Desenvolvido por:",
        aboutQuiz: "Sobre Quiz:",
        aboutDescription: "Este projeto foi desenvolvido a fim de testar o conhecimento tecnológico de seus participantes. Com o intuito de ensinar sobre a área de uma maneira dinâmica e descontraída.",
        technologies: "Tecnologias usadas:",
        copyright: "Etec Zona Leste | Centro Paula Souza © 2023"
    };

    static getFeedbackMessage(score, total) {
        const percentage = (score / total) * 100;

        if (percentage < 50) return this.FEEDBACK_MESSAGES.poor;
        if (percentage < 80) return this.FEEDBACK_MESSAGES.average;
        if (percentage < 100) return this.FEEDBACK_MESSAGES.good;
        return this.FEEDBACK_MESSAGES.excellent;
    }

    static formatQuestion(number, question) {
        return `${number}. ${question}`;
    }

    static formatScore(score, total) {
        return `${this.UI_TEXTS.score} ${score} de ${total}`;
    }
}
