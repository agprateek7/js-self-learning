// const express = require("express");
// const port = 3000
// const app = express()

// // app.get('/', (req, res) => {
// //     res.send('Hello World!')
// // })

// app.get('/route-handler', (req, res) => {
//     res.json({
//         name: "Prateek Agarwal",
//         age: 21
//     })
// })

// app.get('/', (req, res) => {
//     res.send('<b> Hii There again </b>')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// const express = require('express')
// const app = express();
// const port = 3000;

// function sayHello(){
//     return "Hello user";
// }

// app.get('/', function(req, res){
//     console.log("Started");
//     const greeting = sayHello();
//     res.send(greeting);
// })

// app.listen(port);

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
    
// })

// app.listen(port);

const express = require('express');
const app = express()
const port = 3000;

const users = [{
    name: "Xoxo",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.use(express.json()); 

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
    const healthyKidneys = johnKidneys.filter(kidney => kidney.healthy);
    const numOfKidneys = johnKidneys.length;
    const numOfHealthyKidneys = healthyKidneys.length
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.send({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
});

//middlewares
app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done!"
    })
});

app.put('/', function(req, res) {
    const kidneys = users[0].kidneys;
    kidneys.forEach(element => {
        element.healthy = true;
    });
    res.json({
        msg: "Done!"
    })
});

app.delete('/', function(req, res) {
    const healthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy);
    if(healthyKidneys.length == users[0].kidneys.length){
        res.status(411).json({
            msg: "No unhealthy kidneys to be removed"
        });
    }
    users[0].kidneys = healthyKidneys;
    res.json({
        msg: "Done!"
    })
});

app.listen(port);