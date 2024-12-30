function sayMyName (){
    console.log("Prateek")
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

//addTwoNumbers(2, 4)
//addTwoNumbers(3, "a")
//addTwoNumbers(3, null)

const sum = addTwoNumbers(3, 5)
//console.log("Result: ", sum)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// function loginUserMessage(username = "user"){
//     return `${username} just logged in`
// }

//console.log(loginUserMessage("Prateek"))
console.log(loginUserMessage())

