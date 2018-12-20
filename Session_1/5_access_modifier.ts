//public,private,protected
//default access specifier is public

class Point_5 {
    x: number;
    private y: number;
    protected z: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

let pointC: Point_5 = new Point_5(1, 2);
pointC.x = 100;
//private variable not accessible
//pointC.y=200;

//protected member is only accessible in subclass
//pointC.z

class Point_5_A extends Point_5 {
    draw() {
        //public so accessible
        console.log(this.x);

        //private so not accessible
        //console.log(this.y);

        //protected so accessible in subclass
        console.log(this.z);
    }
}

let p: Point_5_A = new Point_5_A(1, 100);
p.draw();



