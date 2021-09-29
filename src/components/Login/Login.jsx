import React from 'react';
import {useFormik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {loginValidator} from "../../utils/validators/validators";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} />
        </div>
    );
};

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: loginValidator,
        onSubmit: values => {
            props.login(values.email, values.password, values.rememberMe)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
            <label htmlFor="email">
                <TextField
                    variant="standard"
                    name="email"
                    type="text"
                    placeholder={"email"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </label>
            </div>
            <div>
            <label htmlFor="password">
                <TextField
                    variant="standard"
                    name="password"
                    type="password"
                    placeholder={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </label>
            </div>
            <div>
                <label htmlFor="rememberMe">
                <input type="checkbox" name="rememberMe" onChange={formik.handleChange} />RememberMe
                </label>
            </div>
            <div>
                <Button type="submit" color="primary" variant="contained" >Login</Button>
            </div>
        </form>
    )
}

export default connect(null, { login })(Login);