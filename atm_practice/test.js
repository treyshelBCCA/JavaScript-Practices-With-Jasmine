describe('ATM', () => {
    it('creates atm with a default of 0 as the current balance and defaulted to not overdraft', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        expect(atm.firstName).toBe('Alyx')
        expect(atm.lastName).toBe('Chaivre')
        expect(atm.balance).toBe(0)
        expect(atm.isOverdraft).toBe(false)
    });

    it('allows you to deposit funds', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(50)
        expect(atm.balance).toBe(50)


    });
    it('allows you to withdraw funds', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(100)
        expect(atm.balance).toBe(100)
        atm.withdraw(75)
        expect(atm.balance).toBe(25)


    });
    it('allows you to withdraw funds over balance and then you become overdraft', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(100)
        expect(atm.balance).toBe(100)
        atm.withdraw(175)
        expect(atm.balance).toBe(-75)
        expect(atm.isOverdraft).toBe(true)
    });

    it('allows you to withdraw funds over balance and then you become overdraft but not withdraw again', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(100)
        expect(atm.balance).toBe(100)
        atm.withdraw(175)
        expect(atm.balance).toBe(-75)
        expect(atm.isOverdraft).toBe(true)
        expect(atm.withdraw(75)).toBe(`You are overdraft. You cannot withdraw any funds.`)
        expect(atm.balance).toBe(-75)
    });
    it('allows you to withdraw funds over balance and then you become overdraft and then deposit funds to not be overdraft', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(100)
        expect(atm.balance).toBe(100)
        atm.withdraw(175)
        expect(atm.balance).toBe(-75)
        expect(atm.isOverdraft).toBe(true)
        atm.deposit(75)
        expect(atm.balance).toBe(0)
        expect(atm.isOverdraft).toBe(false)

    });
    it('allows you to check your balance and returns a string.', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(100)
        expect(atm.balance).toBe(100)
        expect(atm.checkBalance()).toBe(`Alyx Chaivre's balance is $100.00`)

    });
    it('allows you to check if your overdraft and returns a string.', () => {
        const atm = new ATM('Alyx', 'Chaivre')

        atm.deposit(100)
        expect(atm.balance).toBe(100)
        expect(atm.checkIsOverdraft()).toBe(`Alyx Chaivre's account has $100.00 funds available to withdraw.`)
        atm.withdraw(700)
        expect(atm.balance).toBe(-600)
        expect(atm.checkIsOverdraft()).toBe(`Alyx Chaivre's account is OVERDRAFT by -$600.00`)

    });
});