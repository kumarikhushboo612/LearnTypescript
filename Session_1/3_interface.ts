//An interface is a syntactical contract that an entity should conform to

function draw(point: { x: number, y: number }) {
    console.log(point.x);
    console.log(point.y);
}

draw({ x: 1, y: 1 });

//There may be other functions also requires same argument signature then we will have to
//write the whole signature again

function getDistance(point: { x: number, y: number }) {

}

//Better apporach define a interface
interface Point {
    x: number,
    y: number
}


function drawPoint(point: Point) {
    console.log(point.x);
    console.log(point.y);
}

drawPoint({ x: 1 , y: 10 });
