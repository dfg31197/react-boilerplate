import React from 'react';
import './login.scss';

const styles = {
    wrapper: 'login__wrapper',
    contentContainer: 'login__content-container',
}

class Login extends React.Component {


    render() {
        return (
            <div className={styles.wrapper}>Login</div>
        )
    }
}

export default Login;