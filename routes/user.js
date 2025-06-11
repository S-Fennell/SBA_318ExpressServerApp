//This file for organizing my routes
import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Captain",
        lastName: "America",
        age: 80
    }
    
]


router.get('/', (req, res)=>{
    console.log(`Hello Halrem!`)
    //res.send('Hello Harlem!');
    console.log(users);
    
    res.send(users);
    
});

router.post('/', (req, res)=>{
    console.log(`West-Side`);
    
    console.log(req.body);
    //users.push()

    res.send('WEst-Side');
});


export default router;