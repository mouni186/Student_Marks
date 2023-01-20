const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const controller = require('./controller/index')

app.use(bodyParser.json());
app.use(cors());

// Signup and Login
app.post('/Signup',controller.signupDetail);  
app.post('/login',controller.loginDetail);    


// Operator function
app.post('/add',controller.addOperator); 
app.post('/minus',controller.minusOperator);
app.post('/times',controller.timesOperator);
app.post('/dividedby',controller.dividedbyOperator);



// Numeric function
app.post('/one',controller.valueOne);
app.post('/two',controller.valueTwo);
app.post('/three',controller.valueThree);
app.post('/four',controller.valueFour);
app.post('/five',controller.valueFive);
app.post('/six',controller.valueSix);
app.post('/seven',controller.valueSeven);
app.post('/eight',controller.valueEight);
app.post('/nine',controller.valueNine);



const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})