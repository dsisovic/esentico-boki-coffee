import { businessLogic } from './business-logic.js';
import { ui } from './ui.js';
import { http } from './http.js';
class Translation {

    constructor() { }

    translateText() {
        const language = businessLogic.getLocalstorageItem('esenticoBokiLanguage') || 'uk';

        http.fetchLanguageConfiguration(language, this.replaceAllTranslations.bind(this));
    }

    replaceText(element, fetchedConfiguration) {
        const key = Object
            .keys(element.dataset)
            .find(key => key !== 'i18n' && key.includes('i18n'));

        element.innerText = fetchedConfiguration[key] || key;
    }

    replaceAllTranslations(languageConfiguration) {
        const elements = ui.getMultipleElements('[data-i18n]');

        elements.forEach(element => this.replaceText(element, languageConfiguration));
    }

}

const translation = new Translation();

export { translation };