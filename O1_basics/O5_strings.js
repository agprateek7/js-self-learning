const name = "Prateek"
const repoCount = 50

// console.log(name + repoCount)

// console.log(`my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`)

const gameName = new String("    Prateek-Ag")
console.log(gameName)

// console.log(gameName)

// console.log(gameName[3])
// console.log(gameName.charAt(3))

// console.log(gameName.indexOf('A'))

let newString = gameName.substring(7, 4)
// console.log(newString)

newString = gameName.slice(-8, 4)
// console.log(newString)

newString = gameName.trim();
// console.log(newString)

const url = "https://prateek.com/prateek%20agarwal"

// console.log(url.replace('%20', ''));

// console.log(url.includes('prateek'))

// console.log(url.split('%20'))

const arr = url.split('');

console.log(arr[4])

