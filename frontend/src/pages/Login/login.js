import React from 'react';
import './login.css';

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

        if (!username || !password) this.setState({ error: 'missing username or password' });
        else {
            this.setState({ error: null });
            
            fetch('/login', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify('')
            
            }).then(response => {
                if (!response.ok) {
                    this.setState({ error: 'invalid credentials' });
                }
            });
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

export {
    Login
}