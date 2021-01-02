class UI {
    static getSingleElement(elementSelector) {
        return document.querySelector(elementSelector);
    }

    static getMultipleElements(elementSelector) {
        return document.querySelectorAll(elementSelector);
    }
}

export default UI;
