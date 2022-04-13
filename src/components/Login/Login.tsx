import React from 'react';
import {useFormik, FormikProps} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {loginValidator} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'
import {AppStateType} from "../../redux/redux-store";

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    if (props.isAuth)
        return <Redirect to={"/profile"} />

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} captchaUrl={props.captchaUrl} />
        </div>
    );
};

type MyValuesTypes = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string, actions: any) => void
    captchaUrl: string | null
}

const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    const formik: FormikProps<MyValuesTypes> = useFormik<MyValuesTypes>({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validationSchema: loginValidator,
        onSubmit: (values, actions) => {
            props.login(values.email, values.password, values.rememberMe, values.captcha, actions)
            actions.setSubmitting(false)
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
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </label>
            </div>
            <div>
                <label htmlFor="rememberMe">
                <input type="checkbox" name="rememberMe" onChange={formik.handleChange} />RememberMe
                </label>
            </div>
            {formik.status && <div className={styles.statusError}>{formik.status}</div> }
            {props.captchaUrl && <img src={props.captchaUrl} alt={props.captchaUrl} /> }
            {props.captchaUrl && <input
                name="captcha"
                type="text"
                placeholder="Enter captcha"
                onChange={formik.handleChange}
                value={formik.values.captcha}
                onBlur={formik.handleBlur}
            /> }
            <div>
                <Button type="submit" color="primary" variant="contained" >Login</Button>
            </div>
        </form>
    )
}

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string, actions: any) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);