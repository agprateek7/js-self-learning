 // const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: "jcds", email: "kjbsc"})
//     }, 2000)
// })

// promiseThree.then(function(user){   
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({userName: "shcj", email: "jdc"});
//         } else {
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     return user.userName;
// })
// .then((myUserName) => {
//     console.log(myUserName);
// })
// .catch(function(err){
//     console.log(err);
// }).finally(() => {
//     console.log("Finally");
// })

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username: "bjcs"});
//         } else {
//             reject('Error: Js went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch(error) {
//         console.log("E: ", error) 
//     }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// function printMessage(fn) {
//     fn("Hii There");
// }

// function printer() {
//     printMessage((value) => {
//         console.log(value);
//     })
// }

// printer();

// function printMessage(fn) {
//     fn("Hii There");
// }

// async function printer() {
//     printMessage((value) => {
//         console.log(value);
//     })
// }

// printer();

// function printMessage() {
//     let p = new Promise(function(resolve) {
//         resolve("Hi there")
//     });
//     return p;
// }

// function printer() {
//     printMessage()
//     .then((value) => {
//         console.log(value);
//     })
// }

// printer();

// function printMessage() {
//     let p = new Promise(function(resolve) {
//         resolve("Hii there")
//     })
//     return p;
// }

// async function printer() {
//     const value = await printMessage();
//     console.log(value);
// }

// printer();

// CALLBACK FUNCTION ---->
// function square(n){
//     return n * n;
// }

// function cube(n) {
//     return n * n * n;
// }

// function sumOfValues(a, b, fn){
//     return fn(a) + fn(b);
// }

// let ans = sumOfValues(1, 2, square);
// console.log(ans);

// function myOwnSetTimeout(fn, duration){
//     setTimeout(fn, duration);
// }

// myOwnSetTimeout(() => {
//     console.log("Hii There");
// }, 1000)

// function myOwnTimer(duration) {
//     let p = new Promise((resolve) => {
//         setTimeout(resolve, duration);
//     })
//     return p;
// }

// myOwnTimer(2000).then(() => {
//     console.log("Done");
// })

