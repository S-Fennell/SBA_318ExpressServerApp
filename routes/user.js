//This file for organizing my routes
import express from 'express';

const router = express.Router();

router.get('/', (req, res)=>{
    console.log(`Hello Halrem!`)
    res.send('Hello Harlem!')
})


export default router;