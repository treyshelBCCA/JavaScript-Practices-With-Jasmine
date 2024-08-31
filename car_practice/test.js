describe('Car', () => {
    it ('starts off parked and with no miles', () => {
        const car = new Car('Nissan', 'Maxima');

        expect(car.state).toBe('PARKED');
        expect(car.mileage).toBe(0);
        expect(car.make).toBe('Nissan');
        expect(car.model).toBe('Maxima');
    })

    it ('drives the car a certain miles and changes the state', () => {
        const car = new Car('Nissan', 'Maxima');
        
        expect(car.mileage).toBe(0)
        car.drive(500)
        expect(car.mileage).toBe(500)
        expect(car.state).toBe('DRIVING')
    })

    it ('only when stopped turns to parked', () => {
        const car = new Car('Nissan', 'Maxima');
        
        expect(car.state).toBe('PARKED')
        car.drive(100)
        expect(car.state).toBe('DRIVING')
        car.park()
        expect(car.state).toBe('DRIVING')
        car.brake()
        expect(car.state).toBe('STOPPED')
        car.park()
        expect(car.state).toBe('PARKED')
    })

});