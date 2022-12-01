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

type PointX = {
    x: number
}

type PointY = {
    y: number
}

type Point = PointX & PointY

const point: Point = {x: 122, y: 234}