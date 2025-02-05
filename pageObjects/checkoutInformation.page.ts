import Checkout from "../data/checkout.data";

class CheckoutInformationPage {
	get firstName() {
		return $('~test-First Name');
	}

    get lastName() {
		return $('~test-Last Name');
	}

    get zipCode() {
		return $('~test-Zip/Postal Code');
	}

    get continueButton() {
		return $('~test-CONTINUE');
	}

    async enterInformation(information: Checkout) {
		await this.firstName.setValue(information.firstName);
		await this.lastName.setValue(information.lastName);
		await this.zipCode.setValue(information.zipCode);
	}

    async continue() {
		await this.continueButton.scrollIntoView();
		await this.continueButton.click();
	}
}

export default new CheckoutInformationPage();