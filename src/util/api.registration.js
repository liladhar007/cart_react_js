import axios from "axios";

const baseURL = "http://localhost:3000";

const postRegistration = async (name, age, number, email, password) => {
    try {
        const url = baseURL + "/user/registration";
        console.log(`url is : ${url}`);
        return await axios.post(url,{
            name: name,
            age: age,
            number: number,
            email: email,
            password: password
        });

    } catch (error) {
        console.log(error);
    }
}

export default postRegistration;