class ProductsPage {
    productItem(index: number) {
        return $$('~test-Item')[index];
    }

    productTitle(productItem: ChainablePromiseElement) {
        return productItem.$('~test-Item title');
    }

    addToCartButton(productItem: ChainablePromiseElement) {
		return productItem.$('~test-ADD TO CART');
	}

    removeFromCartButton(productItem: ChainablePromiseElement) {
		return productItem.$('~test-REMOVE');
	}

    async getProductName(productItem: ChainablePromiseElement) {
        await productItem.scrollIntoView();       

        let productTitle = this.productTitle(productItem);
        await productTitle.scrollIntoView();
        
        return await productTitle.getText();
    }

    async addToCart(productItem: ChainablePromiseElement) {
        await productItem.scrollIntoView();
        
        let addToCartItem = this.addToCartButton(productItem);
        await addToCartItem.scrollIntoView();
        await addToCartItem.click();
    }

    async removeFromCart(productItem: ChainablePromiseElement) {
        await productItem.scrollIntoView();
        
        let removeFromCartItem = this.removeFromCartButton(productItem);
        await removeFromCartItem.scrollIntoView();
        await removeFromCartItem.click();
    }
}

export default new ProductsPage();