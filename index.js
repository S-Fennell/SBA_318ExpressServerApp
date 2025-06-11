import express from 'express';
import user from './routes/user.js';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use('/users', user)

app.get('/', (req, res) =>{
    console.log('Hola Brooklyn!')

    res.send(`Hola Brooklyn!`)
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);

})