import axios from "axios";

const baseURL = "http://localhost:3000";

const postProduct = async (productName, Weight, prize, detail, categoryId) => {
    try {
        const url = baseURL + "/postProduct/List";
        console.log(`url is = ${url}`);
        return await axios.post(url, {
            productName,
            Weight,
            prize,
            detail,
            categoryId
        })
    } catch (error) {
        console.log(error);
    }
}
export default postProduct;