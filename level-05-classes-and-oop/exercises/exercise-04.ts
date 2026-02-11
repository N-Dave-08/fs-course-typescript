{
	class BankAccount {
		private balance: number = 0;

		deposit(amount: number): void {
			if (amount <= 0) {
				throw new Error("Amounce cannot be less than or zero");
			}
			this.balance += amount;
		}

		widthraw(amount: number): void {
			if (amount <= 0) {
				throw new Error("Amounce cannot be less than or zero");
			}
			if (amount > this.balance) {
				throw new Error("Insufficient balance");
			}
			this.balance -= amount;
		}

		getBalance(): number {
			return this.balance;
		}
	}

	const balance = new BankAccount();

	balance.deposit(1200);
	console.log("Current balance after depositting 1200: ", balance.getBalance());

	balance.widthraw(1000);
	console.log(
		"Current balance after a withdrawal of 1000: ",
		balance.getBalance(),
	);

	// this will cause error as balance identifier is private an accessible only inside that class
	// balance.balance
}
