// iife - Immediately Invoked Function Exprassion

// (function chai() {
//     console.log(`Db Connected`)
// })();

(() => {
    console.log(`Db Connected 2`)
})();
//chai()

((name) => {
    console.log(`this name is ${name}`)
})("Typhon");

