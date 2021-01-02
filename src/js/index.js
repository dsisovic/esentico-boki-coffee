import { businessLogic } from './modules/business-logic.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        businessLogic.intializeApp();
    });

    window.addEventListener('load', () => {
        businessLogic.fetchMainImage();
    });
})();