import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Logo from './components/logo';
import ErrorMessage from './components/errorMessage';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logoSpin: false,
            user: {},
            errorOrNot: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.signIn = this.signIn.bind(this)
    }

    handleChange(e) {
        this.state.user[e.target.name] = e.target.value
        this.state.user[e.target.name] = e.target.value
        this.setState(
            this.state
        )
    }

    signIn() {
        this.setState({ errorOrNot: false })
        this.setState({ logoSpin: true })
        console.log('signIn Activate')
        axios.post('http://localhost:3000/api/login', this.state.user)
            .then((res) => {
                this.setState({ logoSpin: false })
                console.log(res.data)
                alert("Login Successed");
            }).catch(error => {
                this.setState({ logoSpin: false, errorOrNot: true })
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <div id="column" className="col-sm-4 center-block">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="Container">

                                <Logo logoSpin={this.state.logoSpin} />

                                <div className="form-group ">
                                    <p className="letter-space">E-mail address</p>
                                    <input type="text" className="form-control" id="email" name="email" onChange={this.handleChange} /> <br />
                                    <p className="letter-space">Password</p>
                                    <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange} />
                                </div>

                                <ErrorMessage errorOrNot={this.state.errorOrNot} />

                                <button id="signinBtn" type="button" className="btn btn-default center-block" onClick={this.signIn}>SIGN IN</button>
                               
                                <div className="forgot-password">
                                    <a>Forgot Password ?</a>
                                </div>

                                <div className="create-account">
                                    <a >Create a new account</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
};


export default App;
