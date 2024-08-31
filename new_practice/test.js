describe('Stereo', () => {
    it ('creates a stereo with a default volume of 50, is on the AM station, and is powered off.', () => {
        const stereo = new Stereo()

        expect(stereo.volume).toBe(50)
        expect(stereo.isOn).toBe(false)
        expect(stereo.station).toBe('AM')
});


it ('powers on and off', () => {
    const stereo = new Stereo()

    stereo.powerSwitch()
    expect(stereo.isOn).toBe(true)
    stereo.powerSwitch()
    expect(stereo.isOn).toBe(false)
});

it ('only allows you to change volume and switch stations when powered on', () => {
    const stereo = new Stereo()
    
    expect(stereo.isOn).toBe(false)
    stereo.volumeUp()
    expect(stereo.volume).toBe(50)
    stereo.volumeDown()
    expect(stereo.volume).toBe(50)
    stereo.stationSwitch()
    expect(stereo.station).toBe('AM')

});

it ('volume goes up by ten and maxes at 100', () => {
    const stereo = new Stereo()

    stereo.powerSwitch()
    expect(stereo.volume).toBe(50)
    stereo.volumeUp()
    expect(stereo.volume).toBe(60)
    stereo.volumeUp()
    expect(stereo.volume).toBe(70)
    stereo.volumeUp()
    expect(stereo.volume).toBe(80)
    stereo.volumeUp()
    expect(stereo.volume).toBe(90)
    stereo.volumeUp()
    expect(stereo.volume).toBe(100)
    stereo.volumeUp()
    expect(stereo.volume).toBe(100)
});

it ('volume goes down by ten and mins at 0', () => {
    const stereo = new Stereo()

    stereo.powerSwitch()
    expect(stereo.volume).toBe(50)
    stereo.volumeDown()
    expect(stereo.volume).toBe(40)
    stereo.volumeDown()
    expect(stereo.volume).toBe(30)
    stereo.volumeDown()
    expect(stereo.volume).toBe(20)
    stereo.volumeDown()
    expect(stereo.volume).toBe(10)
    stereo.volumeDown()
    expect(stereo.volume).toBe(0)
    stereo.volumeDown()
    expect(stereo.volume).toBe(0)
});

it ('stereo switches stations in order', () => {
    const stereo = new Stereo()

    stereo.powerSwitch()
    expect(stereo.station).toBe('AM')
    stereo.stationSwitch()
    expect(stereo.station).toBe('FM')
    stereo.stationSwitch()
    expect(stereo.station).toBe('XM')
    stereo.stationSwitch()
    expect(stereo.station).toBe('AM')

});

});