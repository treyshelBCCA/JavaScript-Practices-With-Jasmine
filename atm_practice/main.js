class ATM {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = 0;
        this.isOverdraft = false;
    }

    deposit(amountToDeposit) {
        this.balance += amountToDeposit;
        if (this.balance >= 0) {
            this.isOverdraft = false;
        }
    }

    withdraw(amountToWithdraw) {
        if (this.isOverdraft) {
            return "You are overdraft. You cannot withdraw any funds."
        }
        this.balance -= amountToWithdraw;
        if (this.balance < 0) {
            this.isOverdraft = true
        }
    }

    checkBalance() {
        return `${this.firstName} ${this.lastName}'s balance is $${this.balance.toFixed(2)}`
    }

    checkIsOverdraft() {
        if (!this.isOverdraft) {
            return `${this.firstName} ${this.lastName}'s account has $${this.balance.toFixed(2)} funds available to withdraw.`
        }
        else {
            var turnNegativeToPositive = this.balance * -1
            return `${this.firstName} ${this.lastName}'s account is OVERDRAFT by -$${turnNegativeToPositive.toFixed(2)}`
        }
    }

}