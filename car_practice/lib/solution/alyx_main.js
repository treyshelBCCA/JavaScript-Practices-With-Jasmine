class Car {
    mileage = 0
    state = 'PARKED'

    constructor (make, model) {
        this.make = make
        this.model = model
    }

    drive(milesDriven) {
        this.mileage += milesDriven
        this.state = 'DRIVING'
    }

    brake() {
        this.state = 'STOPPED'
    }

    park() {
        if (this.state === 'STOPPED') 
        {this.state = 'PARKED'}

    }


}