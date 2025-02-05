import Account from "../data/accounts.data";

class LoginPage {
    get username() {
		return $('~test-Username');
	}

	get password() {
		return $('~test-Password');
	}

    get loginButton() {
        return $('~test-LOGIN');
    }

    async login(account: Account) {
        await this.username.setValue(account.username);
        await this.password.setValue(account.password);
        await this.loginButton.click();
    }
}

export default new LoginPage();