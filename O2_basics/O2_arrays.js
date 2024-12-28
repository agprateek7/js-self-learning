const marvel_heroes = ["Thor", "Captain America", "Iron Man"]
const dc_heroes = ["SuperMan", "BatMan", "Flash"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)

//console.log(marvel_heroes.concat(dc_heroes))
//console.log(marvel_heroes)

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

//console.log(all_new_heroes)

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity)

//console.log(real_another_arr)

console.log(Array.isArray("Prateek"))
console.log(Array.from("Prateek"))
console.log(Array.from({name: "Prateek"}))

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3))

