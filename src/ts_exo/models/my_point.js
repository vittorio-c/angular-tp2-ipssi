"use strict";
exports.__esModule = true;
var myPoint = /** @class */ (function () {
    function myPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    myPoint.prototype.translate = function (delta_x, delta_y) {
        this.x += delta_x;
        this.y += delta_y;
        console.log('hello');
    };
    return myPoint;
}());
var point = new myPoint(2, 5);
var point_2 = new myPoint(3, 7);
var display = function (p) { console.log(p.x, p.y); };
display(point);
display(point_2);
point.translate(2, 5);
point_2.translate(3, 7);
display(point);
display(point_2);
