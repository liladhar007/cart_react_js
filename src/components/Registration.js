import { useNavigate } from "react-router-dom";
import postRegistration from "../util/api.registration";

import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserRegistration = () => {

    const [name, setName] = useState();
    const [errorName, setErrorName] = useState();
    const [age, setAge] = useState();
    const [errorAge, setErrorAge] = useState();
    const [number, setNumber] = useState();
    const [errorNumber, setErrorNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorEmail, setErrorEmail] = useState();
    const [errorPassword, setErrorPassword] = useState();
    const regX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const navigate = useNavigate();

    const Registration = async () => {
        if ((errorEmail == '' && errorPassword == '') && (errorName == '' && errorAge == '') && errorNumber == '') {
            console.log(name);
            const response = await postRegistration(name, age, number, email, password);
            console.log(response);
            // if (response?.data?.token) {
            //     localStorage.setItem("token", response?.data?.token);
            //     console.log(response);
            navigate("/login");
        }
        else {
            toast.info('"\u2716" invalid email or password!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const checkName = (e) => {
        setName(e.target.value);
        if (name == '') {
            setErrorPassword(' name Failed Cannot empty');
        }
        else {
            setErrorName('');
        }
    }


    const checkAge = (e) => {
        setAge(e.target.value);
        if (age == '') {
            setErrorAge(' age Failed Cannot empty');
        }
        else {
            setErrorAge('');
        }
    }


    const checkNumber = (e) => {
        setNumber(e.target.value);
        if (number == '') {
            setErrorNumber(' number Failed Cannot empty');
        }
        else {
            setErrorNumber('');
        }
    }

    const checkEmail = (e) => {
        setEmail(e.target.value);
        if (regX.test(email) === false) {
            setErrorEmail('Invalid Email');
        } else {
            setErrorEmail('')
        }
    }

    const checkPassword = (e) => {
        setPassword(e.target.value);
        if (password == '') {
            setErrorPassword(' password Failed Cannot empty');
        }
        else {
            setErrorPassword('');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (email == '') {
            setErrorEmail('Email Can Not be Empty');
        } else if (password == '') {
            setErrorPassword('password Can Not be Empty');
        }
    }



    return <>
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: '1rem' }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                                alt="login form"
                                                className="img-fluid"
                                                style={{ borderRadius: '1rem 0 0 1rem' }}
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form>
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                        <span className="h1 fw-bold mb-0">Sign up now</span>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                                                        Sign into your account
                                                    </h5>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form2Example27">
                                                            Name
                                                        </label>

                                                        <input type="text" id="form2Example27" className="form-control form-control-lg" placeholder="" onChange={e => checkName(e)} />
                                                        <div style={{ color: 'red' }}>{errorName}</div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form2Example27">
                                                            Age
                                                        </label>

                                                        <input type="Age" id="form2Example27" className="form-control form-control-lg" placeholder="" onChange={e => checkAge(e)} />
                                                        <div style={{ color: 'red' }}>{errorAge}</div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form2Example27">
                                                            Mobile Number
                                                        </label>

                                                        <input type="Mobile number" id="form2Example27" className="form-control form-control-lg" placeholder="" onChange={e => checkNumber(e)} />
                                                        <div style={{ color: 'red' }}>{errorNumber}</div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form2Example17">
                                                            Email address
                                                        </label>

                                                        <input type="email" id="form2Example17" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="" onChange={e => checkEmail(e)} />
                                                        <div style={{ color: 'red' }}>{errorEmail}</div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form2Example27">
                                                            Password
                                                        </label>

                                                        <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="" onChange={e => checkPassword(e)} />
                                                        <div style={{ color: 'red' }}>{errorPassword}</div>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={e => Registration()}>
                                                            Registration
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    </>
}

export default UserRegistration;