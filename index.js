const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const users = ['Ali', 'Mali', 'Bali', 'kali', 'Hali', 'Gali', 'Dali'];

app.get('/',(req, res) => {
    const food = {
        name: 'KFC pizza',
        price: 290,
    }
    res.send(food);
});
app.get('/fruits/banana',(req, res) => {
    res.send({fruit: 'banana',price: 290,quantity: 19});
})

app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

//post
app.post('/addUser',(req, res) => {
    //save to database
    const user = req.body;
    user.id = 50;
    res.send(user);
    // console.log('data receive',req.body);
})

app.listen(3000, () => console.log("Listening to port 3000"))