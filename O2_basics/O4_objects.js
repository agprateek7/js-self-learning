//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@email.com",
    fullName: {
        userfullName: {
            firstName: "Prateek",
            lastName: "Agarwal"
        }
    }
}

//console.log(regularUser.fullName.userfullName.firstName)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    2: "a",
    4: "b"
}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "hot@email.com"
    },
    {
        id: 1,
        email: "hot@email.com"
    },
    {
        id: 1,
        email: "hot@email.com"
    },
    {
        id: 1,
        email: "hot@email.com"
    }
]

users[1].email
//console.log(tinderUser)

//console.log(Object.keys(tinderUser))

//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "Learn Javascript",
    price: "999",
    courseInstructor: "Hitesh",
}

//course.courseInstructor
//const {courseInstructor} = course
const {courseInstructor: instructor} = course

//console.log(instructor)

// {
//     "name": "Prateek",
//     "courseName": "Learning Javascript",
//     "courseInstructor": "Hitesh"
// }

[
    {},
    {},
    {}
]

