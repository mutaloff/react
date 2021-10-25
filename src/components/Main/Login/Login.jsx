import { connect } from "react-redux";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../Common/FormControl/FormControl";
import { login} from "../../../redux/auth-reducer";
import { Form, Field } from 'react-final-form'
import { Redirect } from "react-router-dom";
import { FORM_ERROR } from "final-form";
import styles from './Login.module.css'

const Login = (props) => {
    if(props.isAuth) return <Redirect to='/profile'/>
    return (
        <div>
            <h3>Login</h3> 
            <LoginForm {...props}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const LoginForm = (props) => {
    const onSubmit = async e => {
        props.login(e.email, e.password, e.rememberMe)
        await sleep(1000)
        return {[FORM_ERROR]: "Ошибка при входе"}
    }
    const validate= (e) => {

    }
    return(
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render = {({ handleSubmit, submitError, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="email"
                            component={Input}
                            type="text"
                            placeholder="Login"
                            validate={required}
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            component={Input}
                            type="password"
                            placeholder="Password"
                            validate={required}
                        />
                    </div>
                    {submitError && <div className={styles.error}>{submitError}</div>}
                    <div>
                        <Field
                            name="rememberMe"
                            component="input"
                            type="checkbox"
                        />
                        запомнить меня
                    </div>
                    <div>
                        <button type="submit" disabled={submitting}>Войти</button>
                    </div>
                </form>
            )}
        />
    )
}