const controllerRepo = require('./repo/controller.repo');
// const { nanoid } = require('nanoid');


const Signup = async (req, res) => {

    try {
        const userData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            // userNanoid: nanoid(8)
        }

        const result = await controllerRepo.SignupDetails(userData);
        res.status(result.status).send(result);
    }
    catch (error) {
        console.log("Function Name:Signup --> " + error);
    }
}
