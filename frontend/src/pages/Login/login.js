import React from 'react';
import './Login.css';

class Login extends React.Component {

    state = {
        username: null,
        password: null,
        error: null
    }
    
    changeUsername(input) {
        this.setState({ username: input.target.value });
    }

    changePassword(input) {
        this.setState({ password: input.target.value });
    }

    login() {
        const { username, password } = this.state;

        const credentials = {
            username: username,
            password: password
        };

        if (!username || !password) this.setState({ error: 'missing username or password' });
        else {
            this.setState({ error: null });
            
            fetch('/api/login', {
                method: 'POST',
                credentials: 'same-origin',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(credentials)
            
            }).then(response => {
                if (!response.ok) {
                    this.setState({ error: 'invalid credentials' });
                } else {

                }
                console.log(response)
            })
        }
    }

    onResponse() {

    }

    render() {
        const { username, password, error } = this.state;
        return (<div className="login">
            <div className="login-err">{error}</div>
            <input value={username} onChange={this.changeUsername.bind(this)} type="text"/>
            <br/>
            <input value={password} onChange={this.changePassword.bind(this)} type="password"/>
            <br/>
            <button onClick={this.login.bind(this)}>Login</button>
        </div>);
    }
}

export default Login;