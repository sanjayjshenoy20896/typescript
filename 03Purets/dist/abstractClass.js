"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // calc
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burts) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burts = burts;
    }
    getSepia() {
        console.log("get sepia");
    }
    getReelTime() {
        return 10;
    }
}
const hc = new Instagram("test", "test", 1);
const reelTime = hc.getReelTime();
hc.getSepia();
console.log(reelTime);
/**
 * Abstract class:
 * They are  like blueprint classes, we cant create objetcs form this class. it is the responsibility of the class that extends the main class using the abstract class.
 *
 * Super is used to inherit the properties from parent class
 */ 
