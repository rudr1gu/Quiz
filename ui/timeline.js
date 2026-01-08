export class Timeline {
    constructor(containerId = 'linhatempo') {
        this.container = document.getElementById(containerId);
        this.questions = [];
    }

    initialize(questionCount) {
        this.questions = new Array(questionCount).fill(null);
        this.render();
    }

    updateQuestion(questionIndex, isCorrect) {
        this.questions[questionIndex] = isCorrect;
        this.updateDot(questionIndex, isCorrect);
    }

    updateDot(index, isCorrect) {
        if (!this.container) return;

        const dots = this.container.querySelectorAll('div');
        if (dots[index]) {
            dots[index].classList.remove('correct', 'incorrect');
            dots[index].classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = '';

        this.questions.forEach((result, index) => {
            const dot = document.createElement('div');
            dot.textContent = index + 1;

            if (result === true) {
                dot.classList.add('correct');
            } else if (result === false) {
                dot.classList.add('incorrect');
            }

            this.container.appendChild(dot);
        });
    }

    show() {
        if (this.container) this.container.style.display = 'flex';
    }

    hide() {
        if (this.container) this.container.style.display = 'none';
    }

    clear() {
        this.questions = [];
        if (this.container) this.container.innerHTML = '';
    }

    getQuestionResult(index) {
        return this.questions[index] || null;
    }

    getAllResults() {
        return this.questions;
    }
}
