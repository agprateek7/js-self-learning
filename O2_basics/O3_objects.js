// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser =  {
    name: "Prateek",
    "full name": "Prateek Agarwal",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "Prateek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])

console.log(typeof JsUser[mySym])

JsUser.email = "prateek@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "Prateek@chatgptO3.com"

console.log(JsUser["email"])

console.log(JsUser)

