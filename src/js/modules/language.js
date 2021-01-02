import { ui } from './ui.js';
import { businessLogic } from './business-logic.js';
import { translation } from './translation.js';
class Language {

    constructor() { }

    setEventListeners() {
        const languageIcon = ui.getSingleElement('#language');
        const languageDialectElement = ui.getSingleElement('.header__dialect');
        const languageSelection = ui.getSingleElement('.header__language--expanded');

        languageIcon.addEventListener('click', () => this.onOpenLanguageSelection());
        languageSelection.addEventListener('click', (event) => this.onLanguageSelection(event));
        languageDialectElement.addEventListener('click', (event) => this.onLanguageDialectSelect(event));
    }

    onOpenLanguageSelection() {
        const languageSelection = ui.getSingleElement('.header__language--expanded');
        const isExpanded = languageSelection.style.display === 'block';

        languageSelection.style.display = isExpanded ? 'none' : 'block';
    }

    onLanguageSelection(event) {
        const selectedDiv = event.target.closest('.language__selection');

        if (selectedDiv) {
            const selectedLanguage = selectedDiv.dataset.language;
            const language = selectedLanguage.includes('serbian') ? 'serbian-latin' : selectedLanguage;
            this.setDefaultLanguage(language);
            translation.translateText();
        }
    }

    setDefaultLanguage(language) {
        if (language && /(uk|serbian-latin|serbian-cyrillic)/.test(language)) {
            const dialectElement = ui.getSingleElement('.header__dialect');
            const languageSelections = ui.getMultipleElements('.language__selection');

            languageSelections.forEach(languageSelection => languageSelection.classList.remove('active'));
            const matchingLanguageDiv = [...languageSelections].find(languageSelection => language.includes(languageSelection.dataset.language));
            matchingLanguageDiv.classList.add('active');

            dialectElement.style.display = language === 'uk' ? 'none' : 'flex';

            businessLogic.setLocalstorageItem('esenticoBokiLanguage', language);
            this.checkToSetLanguageDialect(language, language !== 'uk', true);
        }
    }

    onLanguageDialectSelect(event) {
        const dialectElement = event.target.closest('.language__dialect');

        if (dialectElement) {
            this.removeSelectedDialects();
            const languageSelection = ui.getSingleElement('.header__language--expanded');
            const dialectLanguageSelected = dialectElement.dataset.dialect;

            dialectElement.classList.add('active');
            languageSelection.style.display = 'none';
            businessLogic.setLocalstorageItem('esenticoBokiLanguage', dialectLanguageSelected);
            translation.translateText();
        }
    }

    checkToSetLanguageDialect(language, isDialectSupported, manualTrigger) {
        const languageSelection = ui.getSingleElement('.header__language--expanded');

        if (isDialectSupported) {
            this.removeSelectedDialects();
            const dialectElement = ui.getSingleElement(`[data-dialect="${language}"]`);

            dialectElement.classList.add('active');
        } else {
            languageSelection.style.display = 'none';
        }
    }

    removeSelectedDialects() {
        const dialectElements = ui.getMultipleElements('.language__dialect');
        dialectElements.forEach(dialectElement => dialectElement.classList.remove('active'));
    }
}

const language = new Language();

export { language };