import express from 'express';
//import user from './routes/user.js';//connecting/importing my router from user.js
//import bodyParser from 'body-parser';
const app = express();

//app.set('view engine', 'ejs');// so I can render things to the user
//app.use(bodyParser.json());// this is so I can read my json
const port = 3000;

//app.use('/users', user);//connecting my user router
// app.use(express.static('public'))

app.get('/', (req, res) =>{
    console.log('Hola Brooklyn!');
    res.status(200).send(`Hola Brooklyn!`);
    //res.render('index', { text: 'We have the best pizza!'});
})



// app.get('/users', (req, res) =>{
//     console.log('Hola Brooklyn!');
//     res.status(200).send(`Hola Brooklyn!`);
// })


app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);

})