const isUserLoggedIn = true
// if(isUserLoggedIn){
    
// }
// if(2 == '2'){
    //     console.log('executed')
// }

const debitCard = true

if(isUserLoggedIn && debitCard){
    //console.log("Allowed to buy courses")
}

const month = 2;

switch (month) {
    case 1:
        //console.log("jan")
        break;
    case 2:
        //console.log("Feb")
        break;
    case 3:
        //console.log("Mar")
        break;
    case 4:
        //console.log("apr")
        break;

    default:
        break;
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1)