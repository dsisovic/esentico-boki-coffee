import ui from './ui';
import http from './http';

class Form {
    formValid = false;

    setFormEvents() {
        const textArea = ui.getSingleElement('#contact-message');
        const contactName = ui.getSingleElement('#contact-name');
        const contactEmail = ui.getSingleElement('#contact-email');

        textArea.addEventListener('input', () => this.handleFormElementChange());
        contactName.addEventListener('input', () => this.handleFormElementChange());
        contactEmail.addEventListener('input', () => this.handleFormElementChange());
    }

    handleFormElementChange() {
        const [textAreaValue, contactNameValue, contactEmailValue] = this.getFormElementValues();

        const contactNameMessage = ui.getSingleElement('#contact-message-name');
        const contactEmailMessage = ui.getSingleElement('#contact-message-email');
        const contactTextareaMessage = ui.getSingleElement('#contact-message-textarea');

        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const validContactName = this.validateFormElement(
            contactNameValue.trim(), contactNameMessage, 'Please enter contact name',
            // eslint-disable-next-line quotes
            `Contact name shouldn't have more than 50 characters`, contactNameValue.length > 50,
        );

        const validEmail = this.validateFormElement(
            contactEmailValue.trim(), contactEmailMessage, 'Please enter valid email address',
            'Email should have valid format', !emailPattern.test(contactEmailValue),
        );

        const validMessage = this.validateFormElement(
            textAreaValue.trim(), contactTextareaMessage, 'Please enter some message',
            // eslint-disable-next-line quotes
            `Message shouldn't contain more than 2000 characters`, textAreaValue.length > 2000,
        );

        this.setFormValidity(validContactName && validEmail && validMessage);
    }

    validateFormElement(
        valueToCompare, messageContainer, errorMessageLength, specialErrorMessage, specialConditionMatch,
    ) {
        if (valueToCompare.length === 0) {
            this.showFormElementErrorMessage(messageContainer, errorMessageLength);
            return false;
        }

        if (specialConditionMatch) {
            this.showFormElementErrorMessage(messageContainer, specialErrorMessage);
            return false;
        }

        this.showFormElementErrorMessage(messageContainer, '');
        return true;
    }

    showFormElementErrorMessage(element, errorText) {
        // eslint-disable-next-line no-param-reassign
        element.textContent = errorText;
    }

    onSubmitForm(event) {
        event.preventDefault();

        if (this.formValid) {
            const [textAreaValue, contactNameValue, contactEmailValue] = this.getFormElementValues();

            http.sendEmail(contactNameValue, contactEmailValue, textAreaValue, () => this.clearForm());
        }
    }

    getFormElementValues() {
        const textAreaValue = ui.getSingleElement('#contact-message').value;
        const contactNameValue = ui.getSingleElement('#contact-name').value;
        const contactEmailValue = ui.getSingleElement('#contact-email').value;

        return [textAreaValue, contactNameValue, contactEmailValue];
    }

    clearForm() {
        ui.getSingleElement('#contact-name').value = '';
        ui.getSingleElement('#contact-email').value = '';
        ui.getSingleElement('#contact-message').value = '';

        this.handleFormElementChange();
    }

    setFormValidity(formState) {
        const submitFormButton = ui.getSingleElement('#submit-message');
        this.formValid = formState;

        const submitButtonOpacity = this.formValid ? 1 : 0.4;
        submitFormButton.style.opacity = submitButtonOpacity;
    }
}

const form = new Form();

export default form;
