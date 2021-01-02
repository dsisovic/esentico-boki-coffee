import { businessLogic } from './business-logic.js';
import { form } from './form.js';
class HTTP {

    coffeeProductsUrl = 'assets/products/products.json';
    languageConfigurationPathUrl = 'assets/translations/';

    constructor() { }

    async setCoffeeProducts() {
        const coffeRequest = await fetch(this.coffeeProductsUrl);
        const coffeeResponse = await coffeRequest.json();

        businessLogic.renderCoffeeProducts(coffeeResponse);
    }

    async sendEmail(contactName, email, message) {
        try {
            const sendRequest = await Email.send({
                Host: "smtp.gmail.com",
                Username: "siskoftn@gmail.com",
                Password: "mcreotjruuzliyvi",
                To: 'siskoftn@gmail.com',
                From: email,
                Subject: contactName,
                Body: message
            });

            const response = await sendRequest;

            const messageSentOk = response.includes('OK');
            const messageInformation = messageSentOk ? 'Message sent successfully' : response;

            if (messageSentOk) {
                form.clearForm();
            }

            alert(messageInformation);
        } catch {
            alert('Error sending the message. Please try again');
        }
    }

    async fetchLanguageConfiguration(language, languageCallback) {
        const languageJsonConfiguration = await fetch(this.languageConfigurationPathUrl + language + '.json');
        const languageResponse = await languageJsonConfiguration.json();

        languageCallback(languageResponse);
    }
}

const http = new HTTP();

export { http };