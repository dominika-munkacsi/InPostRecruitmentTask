class Account {
    private constructor(public readonly username: string, public readonly password: string) {
        this.username = username;
        this.password = password;
    }
    public static readonly Standard = new Account('standard_user', 'secret_sauce');
}

export default Account