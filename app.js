
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response, next)=> {
  response.sendFile(__dirname + '/index.html')
});

app.post('/test', (req, res, next)=> {
    const inputOne = parseInt (req.body.inputOne);
    const inputTwo = parseInt (req.body.inputTwo);
    const operator = req.body.operator;

    if (operator === '*') {
        console.log(inputOne * inputTwo);
    }
    else if (operator === '+') {
        console.log(inputOne + inputTwo);
    }
    else if (operator === '/') {
        console.log(inputOne / inputTwo);
    }
    else if (operator === '-') {
        console.log(inputOne - inputTwo);
    } else {
      console.log('Invalid Input');
    }

    res.redirect('/');
});

app.listen(3000, ()=> {
    console.log('Server Started');
});
