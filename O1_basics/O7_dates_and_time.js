let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))

