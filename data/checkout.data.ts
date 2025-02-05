class Checkout {
    private constructor(public readonly firstName: string, public readonly lastName: string, public readonly zipCode: string) {
        this.firstName = firstName;
        this.lastName = lastName;

        /** Adding '\n' in the end to hide keyboard. [driver.hideKeyboard()] fails to do that on iOS devices. */
        this.zipCode = `${zipCode}\n`;
    }
    public static readonly Standard = new Checkout('Sheldon', 'Cooper', '88597');
}

export default Checkout