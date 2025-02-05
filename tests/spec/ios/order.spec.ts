import ActionBarPage from "../../../pageObjects/actionbar.page";
import Account from "../../../data/accounts.data";
import Checkout from "../../../data/checkout.data";
import LoginPage from "../../../pageObjects/login.page";
import ProductsPage from "../../../pageObjects/products.page";
import CartPage from "../../../pageObjects/cart.page";
import CheckoutInformationPage from "../../../pageObjects/checkoutInformation.page";
import CheckoutOverviewPage from "../../../pageObjects/checkoutOverview.page";
import CheckoutCompletePage from "../../../pageObjects/checkoutComplete.page";

describe("Order Tests", () => {
  it("should be able to place an order", async () => {
    await LoginPage.login(Account.Standard);

    let product1 = ProductsPage.productItem(0);
    let product2 = ProductsPage.productItem(1);
    let product3 = ProductsPage.productItem(2);

    await ProductsPage.addToCart(product1);
    let productName1 = await ProductsPage.getProductName(product1);

    await ProductsPage.addToCart(product2);
    let productName2 = await ProductsPage.getProductName(product2);

    await ProductsPage.getProductName(product3);
    await ProductsPage.addToCart(product3);
    await ProductsPage.removeFromCart(product3);

    await ActionBarPage.goToCart();

    await CartPage.assertProductDisplayed(productName1);
    await CartPage.assertProductDisplayed(productName2);
    await CartPage.goToCheckout();

    await CheckoutInformationPage.enterInformation(Checkout.Standard);
    await CheckoutInformationPage.continue();

    await CheckoutOverviewPage.assertProductDisplayed(productName1);
    await CheckoutOverviewPage.assertProductDisplayed(productName2);

    await CheckoutOverviewPage.finish();
    await CheckoutCompletePage.backHome();
  });
});