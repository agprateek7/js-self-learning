// for
// for (let i = 0; i < 10; i++) {
//     //console.log(i)
//     if(i == 5){
//         //console.log("Wow, 5 is here")
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     //console.log(`Outer Loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`Inner Loop Value ${j} and Outer loop ${i}`)
//     }
// }

let myArray = ["flash", "superman", "batman"]

// console.log(myArray.length)
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

// for of
const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i)
// }

const s = "greetings"
// for (const x of s) {
//     console.log(x)
// }

// Maps
const mp = new Map()
mp.set('a', 1)
mp.set('b', 2)
mp.set('c', 3)
//console.log(mp.get('b'))
//console.log(mp)

// for (const [key, value] of mp) {
//     console.log(key, ':-', value)
// }

const myObj = {
    'Game1' : 'nfs',
    'Game2' : 'bgmi'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value)
// }

for (const key in myObj) {
    console.log(myObj[key])
}