class HTTP {
    static async sendEmail(contactName, email, message, okCallback) {
        try {
            // eslint-disable-next-line no-undef
            const sendRequest = await Email.send({
                Host: 'smtp.gmail.com',
                Username: 'siskoftn@gmail.com',
                Password: 'mcreotjruuzliyvi',
                To: 'siskoftn@gmail.com',
                From: email,
                Subject: contactName,
                Body: message,
            });

            const response = await sendRequest;

            const messageSentOk = response.includes('OK');
            const messageInformation = messageSentOk ? 'Message sent successfully' : response;

            if (messageSentOk) {
                okCallback();
            }

            alert(messageInformation);
        } catch {
            alert('Error sending the message. Please try again');
        }
    }

    static async fetchLanguageConfiguration(language, languageCallback) {
        const languageJsonConfiguration = await fetch(`assets/translations/${language}.json?cache=bojantest123`);
        const languageResponse = await languageJsonConfiguration.json();

        languageCallback(languageResponse);
    }
}

export default HTTP;
