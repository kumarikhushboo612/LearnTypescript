//To use a class defines in a file we need to export the class
//once we export a class it becomes a module which can be reuses anywhere else

export class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X=" + this.x+" Y="+this.y);
    }
}