//array

const myArr = [6, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0])

//Array methods

myArr.push(6)
myArr.push(7)
//console.log(myArr)
myArr.pop()

myArr.unshift(9)
myArr.shift()

//console.log(myArr)

//console.log(myArr.includes(9))
const newArr = myArr.join()

// console.log(newArr)
// console.log(typeof(newArr))

//console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

//console.log(myn1)

//console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myArr)
console.log(myn2)