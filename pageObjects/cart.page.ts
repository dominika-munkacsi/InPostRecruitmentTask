import LocatorStrategy from "../utils/locatorStrategy.utils";

class CartPage {
	get checkout() {
		return $('~test-CHECKOUT');
	}

	product(text: string) {
		return LocatorStrategy.staticText(text);
	}

	async assertProductDisplayed(name: string) {
		await this.product(name).scrollIntoView();
	}

    async goToCheckout() {
		await this.checkout.scrollIntoView();
		await this.checkout.click();
	}
}

export default new CartPage();