describe('Glass', () => {
    it ('creates glass with a default of 0 as the current amount', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        expect(glass.capacity).toBe(100)
});

    it ('add water to glass', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        glass.addWater(75)
        expect(glass.amount).toBe(75)
    });

    it ('add water more than capacity should equal capacity', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        glass.addWater(200)
        expect(glass.amount).toBe(100)
    });

    it ('remove water from glass that has water', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        glass.addWater(50)
        expect(glass.amount).toBe(50)
        glass.removeWater(25)
        expect(glass.amount).toBe(25)
    });

    it ('remove water from glass that is empty no negative values', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        glass.removeWater(25)
        expect(glass.amount).toBe(0)
    });

    it ('empty glass completely of water', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        glass.addWater(75)
        expect(glass.amount).toBe(75)
        glass.emptyGlass()
        expect(glass.amount).toBe(0)
    });

    it ('fill glass completely of water', () => {
        const glass = new Glass(100)

        expect(glass.amount).toBe(0)
        glass.fillErUp()
        expect(glass.amount).toBe(100)
    });

});