abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void
    getReelTime():number{
        // calc
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(public cameraMode:string,public filter:string,public burts :number){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("get sepia")
    }
    getReelTime(): number {
        return 10
    }
}

const hc  = new Instagram("test","test",1);
const reelTime = hc.getReelTime();
hc.getSepia()
console.log(reelTime)

/**
 * Abstract class:
 * They are  like blueprint classes, we cant create objetcs form this class. it is the responsibility of the class that extends the main class using the abstract class.
 * 
 * Super is used to inherit the properties from parent class
 */