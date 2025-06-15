//This file for organizing my routes
import express from 'express';
const router = express.Router();

const users = [//this is jsut a test array
    {
        firstName: "Captain",
        lastName: "America",
        age: 80
    }   
]

router.get('/', (req, res)=>{
    console.log(`Hello Halrem!`);
    //res.send('Hello Harlem!');
    console.log(users);
    
    res.send(users);
    
});

router.post('/', (req, res)=>{
    console.log(`West-Side`);
    //console.log(req.body);
    const user = req.body//This is where my post is being stored. I can push my post into the array below
    users.push(user);//This is to add posts/objects/users to my array.

    res.send(`Hey ${user.firstName}${user.lastName}! Where is the next fight for freedom?`);//testing post requests and variables from user
});

router.get('/:id', (req, res)=>{// I want to access users
    console.log(req.params);
    const id = req.params;
    res.send(`Your user is ` + id)//don't know why this is not working as expected
})

router.put('/:id', (req, res)=>{// I want to access users
    res.send(`Your new user is ` + id)//don't know why this is not working as expected
})

router.delete('/:id', (req, res)=>{// I want to access users
    res.send(`Delete user of id ` + id)//don't know why this is not working as expected
})


export default router;//exporting router for index.js