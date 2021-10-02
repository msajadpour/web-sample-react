import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [privacy, setPrivacy] = useState(true);

    const reset = () => {
        setUserName('')
        setEmail('')
        setPassword('')
    }
    const handleSubmit = e => {
        e.preventDefault();
        let registerData = {
            userName: userName,
            email: email,
            password: password,
            privacyStatus: privacy,
        };
        console.log(registerData);
        toast('ثبت شدند')
        reset()
    };
    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> عضویت در سایت </h2>
                </header>

                <div className="form-layer">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={userName}
                                onChange={e => {
                                    setUserName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="accept-rules">
                            <label>
                                <input
                                    type="checkbox"
                                    name=""
                                    checked={privacy}
                                    onChange={e => setPrivacy(e.target.checked)}
                                />{" "}
                                قوانین و مقررات سایت را میپذیرم{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i> قوانین
                                و مقررات سایت !
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> ورود به
                                سایت{" "}
                            </a>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            عضویت در سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </main>
    );
};

export default Register;
