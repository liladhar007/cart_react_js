import { useState } from "react";
import getData from "../util/api.user";
import { useEffect } from "react";

const User = () => {

    const [user, setUser] = useState([]);
    const gettingData = async () => {
        const response = await getData();
        console.log(response)
        setUser(response.data.data);
    }

    useEffect(() => {
        gettingData();
    }, []);

    return <>
        <div>
            <table style={{ border: "1px solid red" }}>

                <th>name</th>
                <th>age</th>
                <th>number</th>

                {
                    user.map(e => {
                        return <tr>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.number}</td>
                        </tr>

                    })
                }
            </table>
        </div>
        <hr></hr>
    </>
}

export default User;