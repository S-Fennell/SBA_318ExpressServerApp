//This file for organizing my routes
import express from 'express';

const router = express.Router();

const users = [//thisis jsut a test array
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
    users.push(user);

    res.send(`Hey ${user.firstName}${user.lastName}! Where is the next fight for freedom?`);
});

router.get('/:id', (req, res)=>{
    console.log(req.params);
    const id = req.params;

    
    res.send(req.params)
})


export default router;//exporting router for index.js