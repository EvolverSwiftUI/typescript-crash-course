
// Basic Types
let id: number = 5
let salary: number = 12000.86
let organization: string = "okSiva.com"
let isPublished: boolean = true
let x: any = 24
x = true
x = "hello"

// Array
let ids: number[] = [1,2,3,4,5,6]
// ids.push('hello') ===> throws error as type compatablity isPublished
let arr: any[] = [1, true, 'hello']

// Tuple
let person: [number, string, boolean] = [1, "Siva", true]
// Array of Tuple
let employees: [number, string][]
employees = [
    [1, "jhon"],
    [2, "jill"],
    [3, "Brad"],    
]

// Union
let productId: number | string
productId = '22'
productId = 22

// Enum
// enum with numbers
enum Directions1 {
    Up = 1,
    Down,
    Right,
    Left
}
console.log(Directions1.Up)

// enum with strings
enum Directions2 {
    Up = "UP",
    Down = "DOWN",
    Right = "RIGHT",
    Left = "LEFT"
}
console.log(Directions1.Up)

// Objects
// 1st way
let user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'siva'
}
console.log(user)

// 2nd way
type User = {
    id: number,
    name: string
}

let emp: User = {
    id: 1,
    name: 'Vignesh'
}
console.log(emp)

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1,5))

// Void returned Function
function logMsg(message: string | number): void {
    console.log(message)
}
logMsg('hello')
logMsg(87)

// Interfaces
interface UserInterface {
    // id: number,
    readonly id: number,
    name: string,
    // age: number
    age?: number // here 'age' is optional
}

const user2: UserInterface = {
    id: 1,
    name: 'Sivaram',
    // age: 28,
}
// user2.id = 5 ===> readonly prop will not allow to edit

type Point = number | string
const p: Point = 4

interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y:number): number => x - y
console.log(add(1,5))
console.log(sub(1,5))


// Interfaces
interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}

const siva = new Person(1, 'Siva')
const vignesh = new Person(2, 'Vignesh')

console.log(siva, vignesh)
console.log(siva.register())

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp1 = new Employee(3, 'Ram', 'Developer')
console.log(emp1.name)
console.log(emp1.register())

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['hello','good','all'])

numArray.push(7)
strArray.push('goal')

