class MyPoint {
    x: number;
    y: number;
    draw() {
        console.log("X=" + this.x + " Y=" + this.y);
    }
}

let pointA: MyPoint = new MyPoint();
pointA.x = 1;
pointA.y = 2;
pointA.draw();


//Constructor
class MyUpdatedPoint {
    x: number;
    y: number;

    /* constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    } */

    ////TypeScript class can't have more than one constructor

    /* constructor(){

    } */

    //optional argument in constructor, in this case x is mandatory and y is optional
    constructor(x: number , y: number) {
        this.x = x;
        this.y = y;
    }



    draw() {
        console.log("X=" + this.x + " Y=" + this.y);
    }
}

let pointB : MyUpdatedPoint = new MyUpdatedPoint(100,200);
pointB.draw();