const input = [1, 2, 3, 4, 5]

const arr = input.map((element) => {
    return element * 2;
});

const even = input.filter((element) => element % 2 === 0)

console.log(even)