export interface Point {
    x: number,
    y: number
}

export interface TPoint extends Point {
    translate(delta_x: number, delta_y: number): void
}



/* interface LabeledValue { */
/*   label: string; */
/* } */

/* function printLabel(labeledObj: LabeledValue) { */
/*   console.log(labeledObj.label); */
/* } */

/* let myObj = { size: 10, label: "Size 10 Object" }; */
/* printLabel(myObj); */
