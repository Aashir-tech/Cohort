//Prechecks are of two types : 1. Authentication 2. Input Validation

// const express = require("express")

// const app = express();

// app.get('/health-checkup', function(req,res) {
//     const username = req.headers.username
//     const password = req.headers.password
//     const kidneyId = req.query.kidneyId;

//     if(username != 'Aashir' || password != "1234"){
//         res.status(400).json({
//             'msg' : "Somethings up with your inputs"
//         })
//         return
//     }

//     if(kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({
//             'msg' : "Somethings up with your inputs"
//         })
//         return
//     }

//     //do something with kidney here
//     res.json({
//         msg: "Your kidney is fine !"
//     })
// });

// app.listen(3000)


//Learning input validation

const express = require("express")
// ZOD is popular input validation library
const zod = require("zod")
//We create a schema on which we validate our data
const schema = zod.array(zod.number());
//Use for Describing the structure of input => which is above array of numbers.
const schema2 = zod.object({
    email: zod.string(),
    password:zod.string(),
    country : zod.literal("IN").or(zod.literal("US"))
})

const app = express()

app.use(express.json()) // Extract

app.post('/health-checkup' , function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success) {
        res.status(411).json({
            msg : 'input is invalid'
        })
    } else{ 
        res.json({
            response
        })
    }
    

    // const kidneyLength = kidneysLength;

    // res.send("you have " + kidneyLength + "kidneys");

});

// app.use((error,req,res,next) => {
//     //console.log(error); //Log the error for debugging
//     res.status(500).send("An internal server error occured")
// })

app.listen(3000)

/*
Global Catches help you give the user a better error message
It catches the exception for the defined route instead of throwing that 
exception to user
*/

/*
Express recognises as error handling middleware because of these four arguments
Express knows any time an exception occurs in any route , send the control in
middleware
*/


