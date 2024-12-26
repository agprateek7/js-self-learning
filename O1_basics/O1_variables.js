const accountId = 144523 // value cant be changed
let accountEmail = "prateek@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "prateek@microsoft.com"
accountPassword = "98765"
accountCity = "Bengaluru"


//console.log(accountId);

/*
    Prefer not to use var because of issue in block scope, variables declared with var have changes occured in all files with same variable name
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])