import { TPoint } from '../interfaces/point'

class myPoint implements TPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    translate(delta_x: number, delta_y: number) {
        this.x += delta_x;
        this.y += delta_y;

        console.log('hello')
    }
}

let point = new myPoint(2,5);
let point_2 = new myPoint(3,7);
let display = (p: TPoint) => {console.log(p.x, p.y)}

display(point);
display(point_2);

point.translate(2,5);
point_2.translate(3,7);

display(point);
display(point_2);
