// interface Person {
//     name: string
// }

// type Person = {
//     name: string
// }

// type bolOrStr = string | boolean

// const person: Person = {name: 'penny'}
// const isMarried: bolOrStr = true;

// interface Point {
//     x: number
// }

// interface Point{
//     y: number
// }

// const point: Point = {x: 122, y: 234}

// type PointX = {
//     x: number
// }

// type PointY = {
//     y: number
// }

// type Point = PointX & PointY

// const point: Point = {x: 122, y: 234}

interface Color {
    color: {r: number, g: number, b: number}
}

interface Shape{
    area: number
}

class Square implements Color, Shape {
    color: {r: number, g: number, b: number}
    area: number
    constructor(color: {r: number, g: number, b: number}, area: number){
        this.color = color;
        this.area = area;
    }    
}

const sq = new Square({r: 125, g: 0, b: 255}, 60)