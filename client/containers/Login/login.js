import React, {Component} from 'react'
import {Link} from 'react-router'
import { Meteor } from "meteor/meteor";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           error: '',
           email: '',
           password: '',
           dashboard:false,
           data:null,
           loding:false
        };
        this.handleSubmit = this
        .handleSubmit
        .bind(this);
    this.handleChangePassword = this
        .handleChangePassword
        .bind(this)
    this.handleChangeEmail = this
        .handleChangeEmail
        .bind(this)
    }

    componentDidMount() {
      //  componentHandler.upgradeDom();
      
        this.setState({loding:true})
      
     
    }

      handleSubmit(event) {
        event.preventDefault();
        let self = this;
        Meteor.loginWithPassword(this.state.email, this.state.password, (err, result) => {
            if (err) {
                self.setState({error: err.reason});
                console.log('failed login',err)
            } else {
                self
                    .props
                    .router
                    .push({pathname: '/'})
            }
        });
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
        console.log("Email",this.state.email)
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
        console.log("Pass",this.state.password)
    }
      
    render(){
     // console.log('login render now',this.props)
        const error = this.state.error;
        if(!this.state.loding){
            return  ( <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate">
            Loading..</div>)
        }else{ 
        return(
            <div className="mdl-layout mdl-layout-login">
            <main className="mdl-layout__content-login">
                <div className="mdl-card mdl-shadow--6dp">
                    <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 className="mdl-card__title-text">Servic Provider</h2>
                    </div>

                    <div className="mdl-card__supporting-text">
                            <form id="login-form" className="#">
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input
                                        id="login-username"
                                        className="mdl-textfield__input"
                                        type="text"
                                        onChange={this.handleChangeEmail}
                                        value={this.state.email}/>
                                    <label className="mdl-textfield__label" htmlFor="login-username">Username</label>
                                </div>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input
                                        id="login-userpass"
                                        className="mdl-textfield__input"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword}/>
                                    <label className="mdl-textfield__label" htmlFor="login-userpass">Password</label>
                                </div>
                            </form>
                        </div>

                        <div className="mdl-card__actions mdl-card--border">
                        <p>Don't have an account? Register</p>
                            <button className="btn btn-info" 
                             onClick= {()=>this.props.router.push("/signup")}>
                             Creat your accpunt here 
                            </button>
                            {error}
                        </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button
                            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                            onClick={this.handleSubmit}>Log in</button>
                    </div>
                </div>
            </main>
        </div>
        )
    }
    }
            
}


export default Login