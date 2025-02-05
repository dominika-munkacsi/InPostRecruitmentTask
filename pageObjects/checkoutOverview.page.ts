import LocatorStrategy from "../utils/locatorStrategy.utils";

class CheckoutOverviewPage {
	product(text: string) {
		return LocatorStrategy.staticText(text);
	}

    get finishButton() {
        return $('~test-FINISH');
    }

	async assertProductDisplayed(name: string) {
		await this.product(name).scrollIntoView();
	}

    async finish() {
		await this.finishButton.scrollIntoView();
		await this.finishButton.click();
	}
}

export default new CheckoutOverviewPage();