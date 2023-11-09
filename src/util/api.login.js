import axios from "axios";

const baseURL = "http://localhost:3000";

const postData = async (email,password) => {
    try {
        const url = baseURL + "/user/Login";
        console.log(`url is : ${url}`);
        return await axios.post(url,{
            email:email,
            password:password
        });

    } catch (error) {
        console.log(error);
    }
}



export default postData