'use strict';

class Stereo {
    constructor () {
        this.volume = 50;
        this.isOn = false;
        this.station = 'AM';
    };

    powerSwitch (){
        if (this.isOn) {
            this.isOn = false;
        } else {
            this.isOn = true;
        };
    };

    volumeUp () {
        if (this.isOn) {
        this.volume += 10; }
        if (this.volume > 100) {
            this.volume = 100;
        };
    };

    volumeDown() {
        if (this.isOn) {
        this.volume -= 10; }
        if (this.volume < 0) {
            this.volume = 0
        };
    };

    stationSwitch () {
        if (this.isOn) {
        switch (this.station) {
           case 'AM':
            this.station = 'FM';
            break;
            case 'FM':
                this.station = 'XM';
                break;
                case 'XM':
                    this.station = 'AM';
                    break;
                default:
                    this.station = 'AM';
        }}
    }
}
