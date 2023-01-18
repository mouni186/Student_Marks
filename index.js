const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const controller = require('./controller/index')

app.use(bodyParser.json());
app.use(cors());



app.post('/remainder-signup',controller.remainderSignup);  //email,name,password                            --
app.post('/remainder-login',controller.remainderLogin);    //email,password                                userid
app.post('/add-remainder',controller.remainderDetails); 


const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})