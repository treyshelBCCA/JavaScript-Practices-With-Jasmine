class Glass {
    amount = 0

    constructor(capacity) {
        this.capacity = capacity
    }

    addWater(amount) {
        const newAmount = this.amount + amount
        if (newAmount > this.capacity) {
            this.amount = this.capacity
        } else {
            this.amount = newAmount
        }
    }

    removeWater(amount) {
        const newAmount = this.amount - amount
        if (newAmount < 0) {
            this.amount = 0
        } else {
            this.amount = newAmount
        }
    }

    fillErUp() {
        this.amount = this.capacity
    }

    emptyGlass() {
        this.amount = 0
    }

}