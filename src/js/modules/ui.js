class UI {
    constructor() { }

    getSingleElement(elementSelector) {
        return document.querySelector(elementSelector);
    }

    getMultipleElements(elementSelector) {
        return document.querySelectorAll(elementSelector);
    }
}

const ui = new UI();

export { ui };