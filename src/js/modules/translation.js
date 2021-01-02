import ui from './ui';
import http from './http';

class Translation {
    replaceText(element, fetchedConfiguration) {
        const configurationKey = Object
            .keys(element.dataset)
            .find((key) => key !== 'i18n' && key.includes('i18n'));

        // eslint-disable-next-line no-param-reassign
        element.innerText = fetchedConfiguration[configurationKey] || configurationKey;
    }

    replaceAllTranslations(languageConfiguration) {
        const elements = ui.getMultipleElements('[data-i18n]');
        elements.forEach((element) => this.replaceText(element, languageConfiguration));
    }

    translateText(language) {
        http.fetchLanguageConfiguration(language, this.replaceAllTranslations.bind(this));
    }
}

const translation = new Translation();

export default translation;
