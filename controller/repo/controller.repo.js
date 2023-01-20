const dynamodbController = require('../../dynamodb');


const signupDetails = async (data) => {

    try {
        const response = await dynamodbController.SignupDetails(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:SignupDetails --> " + error);
    }
}


const loginDetails = async (data) => {

    try {
        const response = await dynamodbController.LoginDetails(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:remainderLoginDetails -->" + error);
    }
}


const addOperators = async (data) => {

    try {
        const response = await dynamodbController.Add(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const minusOperators = async (data) => {

    try {
        const response = await dynamodbController.Minus(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const timesOperators = async (data) => {

    try {
        const response = await dynamodbController.Times(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const dividedbyOperators = async (data) => {

    try {
        const response = await dynamodbController.Dividedby(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const one = async (data) => {

    try {
        const response = await dynamodbController.One(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const two = async (data) => {

    try {
        const response = await dynamodbController.Two(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}



const three = async (data) => {

    try {
        const response = await dynamodbController.Three(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const four = async (data) => {

    try {
        const response = await dynamodbController.Four(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const five = async (data) => {

    try {
        const response = await dynamodbController.Five(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const six = async (data) => {

    try {
        const response = await dynamodbController.Six(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const seven = async (data) => {

    try {
        const response = await dynamodbController.Seven(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const eight = async (data) => {

    try {
        const response = await dynamodbController.Eight(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}


const nine = async (data) => {

    try {
        const response = await dynamodbController.Nine(data);
        return response;
    }
    catch (error) 
    {
        console.log("Function name:operators -->" + error);
    }
}



module.exports = {
    signupDetails,
    loginDetails,
    addOperators,
    minusOperators,
    timesOperators,
    dividedbyOperators,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
}