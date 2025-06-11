import express from 'express';
import user from './routes/user.js';

const app = express();
const port = 3000;

app.use('/users', user)
app.get('/', (req, res) =>{
    console.log('Hola Brooklyn!')
    res.send(`Hola Brooklyn!`)
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);

})