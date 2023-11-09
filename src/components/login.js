
import postData from "../util/api.login";

import { useRef } from "react";




const LoginInfo = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const userInfo = async () => {
        const e = emailRef.current.value;
        const p = passwordRef.current.value;

        const response = await postData(e, p);
        console.log(response)
    }


    // const Info = () => {
    // const e = emailRef.current.value
    // const p = passwordRef.current.value
    // if (e && p) {
    //     alert(emailRef.current.value);
    //     alert(passwordRef.current.value);
    // }
    // else {
    //     alert("cannot leave empty")
    // }
    // }
    return (

        <div>
            <form style={{ backgroundColor: "yellow" }}>
                <label>Enter Email:-</label>
                <input type="text" placeholder="Enter Email" id="gitByGmail" ref={emailRef}/>
                <br></br>
                <label>Enter password:-</label>
                <input type="password" placeholder="Enter password" id="gitByPassword" ref={passwordRef}/>
                <br></br>
                <button type="button" onClick={e => userInfo()} style={{ backgroundColor: "blue" }}> LOGIN </button>
            </form>
        </div>
    )
}


export default LoginInfo;