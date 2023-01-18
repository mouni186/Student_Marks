const dynamodbController = require('../../dynamodb');


const SignupDetails = async (data) => {

    try {
        const response = await dynamodbController.signupDetails(data);
        return response;
    }
    catch (error) {
        console.log("Function name:SignupDetails --> " + error);
    }
}