class CheckoutCompletePage {
    get backHomeButton() {
		return $('~test-BACK HOME');
	}

    async backHome() {
        await this.backHomeButton.click();
    }
}

export default new CheckoutCompletePage();