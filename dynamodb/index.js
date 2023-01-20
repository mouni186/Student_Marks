const CRUDOperationInDynamodb = require('./repo/CRUD.repo');



const SignupDetails = async (data) => {
    let returnObject;

    try {
        const param = {
            TableName: "Student-Master-Signup",
            Key: {
                email: data.email
            }
        }

        const result = await CRUDOperationInDynamodb.getRecordInDynamodb(param);

        if (result.Item) {
            returnObject = {
                message: "You are already signed in",
                status: 504
            }
        }
        else {
            const params = {
                TableName: "Student-Master-Signup",
                Item: {
                    email: data.email,
                    name: data.name,
                    password: data.password,
                    uuid: data.uuid
                }
            }

            await CRUDOperationInDynamodb.createRecordInDynamodb(params);
            returnObject = {
                message: "user created succesfully",
                status: 200
            }
        }
    }
    catch (error) {
        returnObject = {
            message: "Invalid user",
            status: 500
        }
    }
    return returnObject;
}


const LoginDetails = async (data) => {

    let returnObject;

    try {
        const params = {
            TableName: "Student-Master-Signup",
            Key: {
                email: data.email
            }
        }

        const result = await CRUDOperationInDynamodb.getRecordInDynamodb(params);
        if (result.Item) {
            if (result.Item.password == data.password) {
                returnObject = {
                    uuid: result.Item.uuid,
                    status: 200
                }
            }
            else {
                returnObject = {
                    message: "Incorrect Username or Password",
                    status: 504
                }
            }
        }

    }
    catch (error) {
        console.log("Function name:loginDetails -->" + error);
    }
    return returnObject;
}


const Add = async (data) => {
    let returnObject;
    try {
        const c = data.B + data.A;
        returnObject = {
            message: c,
            status: 200
        }
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
    return returnObject;
}


const Minus = async (data) => {
    let returnObject;
    try {
        const c = data.B - data.A;
        returnObject = {
            message: c,
            status: 200
        }
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
    return returnObject;
}


const Times = async (data) => {
    let returnObject;
    try {
        const c = data.B * data.A;
        returnObject = {
            message: c,
            status: 200
        }
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
    return returnObject;
}


const Dividedby = async (data) => {
    let returnObject;
    try {
        const c = data.B / data.A;
        returnObject = {
            message: c,
            status: 200
        }
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
    return returnObject;
}


const One = async (data) => {
    let returnObject;
    try {
        return 1;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Two = async (data) => {
    let returnObject;
    try {
        return 2;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Three = async (data) => {
    let returnObject;
    try {
        return 3;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Four = async (data) => {
    let returnObject;
    try {
        return 4;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Five = async (data) => {
    let returnObject;
    try {
        return 5;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Six = async (data) => {
    let returnObject;
    try {
        return 6;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Seven = async (data) => {
    let returnObject;
    try {
        return 7;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Eight = async (data) => {
    let returnObject;
    try {
        return 8;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}


const Nine = async (data) => {
    let returnObject;
    try {
        return 9;
    }
    catch (error) {
        console.log("Function name:operations -->" + error);
    }
}



module.exports = {
    SignupDetails,
    LoginDetails,
    Add,
    Minus,
    Times,
    Dividedby,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine
}
