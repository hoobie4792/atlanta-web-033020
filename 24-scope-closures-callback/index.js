function multiplyByN(outerNum) {
    // outerNum = 2
    return function (n) {
        // outerNum = 2
        // n = ??
        return outerNum * n
    }
}

debugger;
const multiplyByTen = multiplyByN(10)
const multiplyByFive = multiplyByN(5)
const multiplyByTwo = multiplyByN(2)

multiplyByTen(5) // 50
multiplyByTen(10) // 100

multiplyByFive(5) //25
multiplyByFive(10) //50

multiplyByTwo(2) //4
multiplyByTwo(10) //20


// function someFunc() {
//     var cheese = 'gouda'

//     return function () {
//         return `I like to eat ${cheese}`
//     }
// }

// let x = someFunc()
// console.log(x())
// console.log(cheese)

// let someVar = 'Sample Var'

// let argFunc = function () {
//     console.log('Hello')
// }

// let someFunc = function (callback){
//     return callback
// }

// someFunc(argFunc)()


// var person;

// console.log(person)

// var person = {
//     fname: 'JOhn',
//     lname: 'McLane'
// }


// console.log(sayHello)
// sayHello()

// function sayHello(){
//     var someVal;
//     console.log(someVal)
//     let name = 'This is Robert'
//     console.log(name)

//     var someVal = 'Something'
// }


// const coolVar = 25
// coolVar = 100
// const coolVar = 'Crazy World'

// let coolVar = 'JS'
// console.log(coolVar)
// coolVar = 'JavaScript'
// console.log(coolVar)
// let coolVar = 25

// var name = 'Brandon'
// let name = 'Joey'
// const name = 'Cory'
// name = 'Geoff'

