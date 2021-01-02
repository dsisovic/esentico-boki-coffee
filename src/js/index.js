import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
    faTimes, faMapMarkerAlt, faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare, faTwitterSquare, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import businessLogic from './modules/business-logic';
import language from './modules/language';
import '../styles/index.scss';

library.add(faTimes, faMapMarkerAlt, faGlobe, faFacebookSquare, faTwitterSquare, faInstagram);
dom.watch();

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        businessLogic.intializeApp();
        language.setEventListeners();
        language.setDefaultLanguage(businessLogic.getLocalstorageItem('esenticoBokiLanguage') || 'uk');
    });

    window.addEventListener('load', () => {
        businessLogic.fetchMainImage();
    });
})();
