import React from 'react';
import {useFormik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    placeholder={"login"}
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <div>
                <label htmlFor="rememberMe"></label>
                <input type={"checkbox"}/> Remember me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default connect(null, { login })(Login);