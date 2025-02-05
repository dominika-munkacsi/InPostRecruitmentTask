class ActionBarPage {
    get cart() {
        return $('~test-Cart');
	}

    async goToCart() {
        await this.cart.click();
    }
}

export default new ActionBarPage();