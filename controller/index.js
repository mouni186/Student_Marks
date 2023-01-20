const controllerRepo = require('./repo/controller.repo');
const { v4: uuidv4 } = require('uuid');


const signupDetail = async (req, res) => {

    try {
        const userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            uuid: uuidv4(8)
        }
        
        const result = await controllerRepo.signupDetails(userData);
        console.log(userData.uuid);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function Name:Signup --> " + error);
    }
}


const loginDetail = async (req, res) => {

    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password
        }

        const result = await controllerRepo.loginDetails(loginData);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Login --> " + error);
    }
}


const addOperator = async (req, res) => {

    try {
        const data = {
            A: req.body.A,
            B: req.body.B
        }

        const result = await controllerRepo.addOperators(data);
        res.status(result.status).send(result);
    }
    catch (error)
    {
        console.log("Function name:Operator --> " + error);
    }
}


const minusOperator = async (req, res) => {

    try {
        const data = {
            A: req.body.A,
            B: req.body.B
        }

        const result = await controllerRepo.minusOperators(data);
        res.status(result.status).send(result);
    }
    catch (error)
    {
        console.log("Function name:Operator --> " + error);
    }
}


const timesOperator = async (req, res) => {

    try {
        const data = {
            A: req.body.A,
            B: req.body.B
        }

        const result = await controllerRepo.timesOperators(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const dividedbyOperator = async (req, res) => {

    try {
        const data = {
            A: req.body.A,
            B: req.body.B
        }

        const result = await controllerRepo.dividedbyOperators(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueOne = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.one(data);
        res.status(result.status).send(result);
    }
    catch (error) {
        console.log("Function name:Operator --> " + error);
    }
}

const valueTwo = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.two(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueThree = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.three(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueFour = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.four(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueFive = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.five(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueSix = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.six(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueSeven = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.seven(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueEight = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.eight(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}


const valueNine = async (req, res) => {

    try {
        const data = {
            A: req.body,
            B: req.body
        }

        const result = await controllerRepo.nine(data);
        res.status(result.status).send(result);
    }
    catch (error) 
    {
        console.log("Function name:Operator --> " + error);
    }
}




module.exports = {
    signupDetail,
    loginDetail,
    addOperator,
    minusOperator,
    timesOperator,
    dividedbyOperator,
    valueOne,
    valueTwo,
    valueThree,
    valueFour,
    valueFive,
    valueSix,
    valueSeven,
    valueEight,
    valueNine

}
