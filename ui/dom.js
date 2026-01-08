export class DOM {
    static getElementById(id) {
        return document.getElementById(id);
    }

    static getByClass(className) {
        return document.querySelectorAll(`.${className}`);
    }

    static getBySelector(selector) {
        return document.querySelector(selector);
    }

    static setHTML(element, html) {
        const el = this._getElement(element);
        if (el) el.innerHTML = html;
    }

    static setText(element, text) {
        const el = this._getElement(element);
        if (el) el.textContent = text;
    }

    static getHTML(element) {
        const el = this._getElement(element);
        return el ? el.innerHTML : '';
    }

    static setStyle(element, property, value) {
        const el = this._getElement(element);
        if (el) el.style[property] = value;
    }

    static addClass(element, className) {
        const el = this._getElement(element);
        if (el) el.classList.add(className);
    }

    static removeClass(element, className) {
        const el = this._getElement(element);
        if (el) el.classList.remove(className);
    }

    static addEventListener(element, event, callback) {
        const el = this._getElement(element);
        if (el) el.addEventListener(event, callback);
    }

    static remove(element) {
        const el = this._getElement(element);
        if (el) el.remove();
    }

    static createElement(tag, className = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        return element;
    }

    static appendChild(parent, child) {
        const parentEl = this._getElement(parent);
        if (parentEl) parentEl.appendChild(child);
    }

    static clearChildren(element) {
        const el = this._getElement(element);
        if (el) while (el.firstChild) el.removeChild(el.firstChild);
    }

    static setDataAttribute(element, key, value) {
        const el = this._getElement(element);
        if (el) el.dataset[key] = value;
    }

    static getDataAttribute(element, key) {
        const el = this._getElement(element);
        return el ? el.dataset[key] : undefined;
    }

    static disable(element) {
        const el = this._getElement(element);
        if (el) el.disabled = true;
    }

    static enable(element) {
        const el = this._getElement(element);
        if (el) el.disabled = false;
    }

    static _getElement(element) {
        if (typeof element === 'string') {
            return document.getElementById(element) || document.querySelector(element);
        }
        return element;
    }
}
