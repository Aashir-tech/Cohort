const { Router } = require("express");
const router = Router();
const {User, Course} = require('../db');
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully"
    })

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
  Course.find({})
  .then((response) => {
    res.json({
        courses : response
    })
  })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses : courseId
        }
    })
    .then(() => {
        res.json({
            message: "Purchase complete"
        })
    })
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    // Using .then method 

    /*
    // User.findOne({
    //     username: req.headers.username
    // }).then((user) => {
    //     return Course.find({
    //         _id : {
    //             "$in" : user.purchasedCourses
    //         }
    //     })
    // }).then((courses) => {
    //     res.json({
    //         courses : courses
    //     })
    // })
    */

    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        courses : courses
    })
});

module.exports = router