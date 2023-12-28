//creating an http server
// express
// node default library => no

// const express = require("express");

// const app = express();

// function sum(n) {
//     let ans = 0;
//     for(let i = 1 ; i <= n; i++) {
//         ans = ans + i;
//     } 
//     return ans
// }
// // '/' states that what route should i listen on
// app.get('/', function(req,res){ // req - request , res - response - 
// // This Callbacks called  any time a person come in the browser
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hi your answer is " + ans)
// })

// app.listen(3000)


const express = require("express")
const app = express()

const users = [{
    name: "Aashir",
    kidneys : [{
        healthy: false
    }]
}];

app.use(express.json())

//query parameters
app.get('/', function(req,res) {
    const johnKidneys = users[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i = 0 ; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            healthyKidneys = healthyKidneys + 1;
        }
    };   
    const unhealthyKidneys = numOfKidneys - healthyKidneys;
    res.json({
        numOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})


app.post('/' , function(req,res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg:'Done!'
    })
})

app.put('/' , function(req,res) {
    if(isThereAtleastOneUnhealthyKidney()) {

        for(let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        
        res.json({})
    } else {
        res.status(411).json({
            msg : "You have no unhealthy kidneys"
        })
    }

})


//removing unhealthy Kidneys
app.delete('/' , function(req,res) {

    if(isThereAtleastOneUnhealthyKidney()){
        
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy : true
            }) 
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg : "done"
    })
    } else {
        res.status(411).json({
            msg : "You have no bad Kidneys"
        })
    }

})


function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
        
    }
    return atleastOneUnhealthyKidney
}


app.listen(3000);



