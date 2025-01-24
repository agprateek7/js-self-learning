// console.log("Hello World")
// console.log(a)

// let first_name = 'prateek'
// let last_name = 'agarwal'
// printName(first_name, last_name)
// function printName(first_name, last_name){
//     console.log(`Hello, ${first_name} ${last_name} you are welcome here`)
// }

// const gender = 'male'
// if(gender === 'male'){
//     console.log('you are male')
// } else if(gender === 'female'){
//     console.log('you are female')
// } else {
//     console.log('please specify as male and female only')
// }

// for(let i = 0; i <= 1000; i++){
//     console.log(i)
// }

// const arr = [2, 3, 4, 5, 6, 7, 8, 9]
// let mx = 0
// for(let i = 0; i < arr.length/2; i++){
//     let temp = arr[i];
//     arr[i] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = temp;
// }
// console.log(arr)

// const user1 = {
//     firstName: "Prateek",
//     gender: "Male"
// }
// console.log(user1["firstName"])

// const allUsers = [{
//     firstName: "Prateek",
//     gender: "male"
// }, {
//     firstName: "Harkirat",
//     gender: "male"
// }, {
//     firstName: "Hitesh",
//     gender: "male"
// }, {
//     firstName: "priya",
//     gender: "female"
// }]

//console.log(allUsers)

// for(let i = 0; i < allUsers.length; i++){
//     if(allUsers[i]["gender"] === "female"){
//         console.log(allUsers[i]["firstName"])
//     }
// }

// let num1 = 2
// let num2 = 7
// let sum = findSum(num1, num2)
// function findSum(num1, num2){
//     return num1 + num2
// }
// console.log(sum)

// let sum = 0
// for(let i = 0; i < 100000000000; i++){
//     sum = sum + i
// }
// console.log(sum)

// function sum(num1, num2, fnToCall){
//     let result = num1 + num2
//     fnToCall(result)
// }

// function displayResult(data){
//     console.log("Result of the sum is : " + data)
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : " + data)
// }

// sum(3, 5, displayResultPassive)

// for(let i = 30; i >= 0; i--){
//     console.log(i)
// }

// function greet(){
//     console.log("Hello World")
//     const currTime = new Date()
//     const secs = currTime.getSeconds()
//     const milliSec = currTime.getMilliseconds()
//     console.log(secs, milliSec)
// }

// setTimeout(greet, 2000)
// const currTime = new Date()
// const secs = currTime.getSeconds()
// const milliSec = currTime.getMilliseconds()
// console.log(secs, milliSec)

// const currDate = new Date()
// console.log(currDate.toLocaleTimeString())

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//     const sorted1 = str1.split('').sort().join('')
//     const sorted2 = str2.split('').sort().join('')
//     if(sorted1 === sorted2){
//         return true;
//     } else {
//         return false;
//     }
// }

// module.exports = isAnagram;

