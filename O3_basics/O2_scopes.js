let a = 100
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log(a)
}

//console.log(c)
//console.log(a)
//console.log(b)

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

function one(){
    const username = "prateek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website)

    two()
}

//one()

if(true){
    const username = "prateek"
    if(username === "prateek"){
        const website = "youtube"
        //console.log(username + " " + website);
    }
    //console.log(website)
}

//console.log(username);

console.log(addOne(5))

function addOne(num){
    return num + 1
}

//addTwo(5)

const addTwo = function(num){
    return num + 2
}

