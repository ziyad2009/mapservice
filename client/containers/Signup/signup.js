import React, {Component} from 'react'
import {Link} from 'react-router'
import {Accounts} from 'meteor/accounts-base'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AllActions from '../../actions'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            username: '',
            email: '',
            password: '',
            phone:'',
            avatar:'',
            brandName:'',
            userImage:""
        };
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChangeUserName = this
            .handleChangeUserName
            .bind(this)
        this.handleChangeEmail = this
            .handleChangeEmail
            .bind(this)
        this.handleChangePassword = this
            .handleChangePassword
            .bind(this)
        this.handleChangeuserimage = this.handleChangeuserimage.bind(this)
        this.handleChangephone = this.handleChangephone.bind(this)
    }
    handleChangeUserName(event) {
        this.setState({username: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    handleChangeuserimage(event) {
        this.setState({userImage: event.target.value});
    }
    handleChangephone(event) {
        this.setState({phone: event.target.value});
    }
    componentDidMount() {
        componentHandler.upgradeDom();
    }
    handleSubmit(event) {
        event.preventDefault();
        Accounts.createUser({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            profile:{ 
                ['phone']: this.state.phone,
                ['surname']: this.state.userImage
            }
        }, (err) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                this
                    .props
                    .actions
                    .create_new_user({user_id: Meteor.userId, username: this.state.username})
                this
                    .props
                    .router
                    .push({pathname: '/'})
            }
        });
    }

    render() {
        const error = this.state.error;
        return (
            <div>

                <div className="mdl-layout mdl-layout-login">
                    <main className="mdl-layout__content-login">
                        <div className="mdl-card mdl-shadow--6dp">
                            <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                                <h2 className="mdl-card__title-text">Map</h2>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <form className="#">
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input
                                            id="signup-username"
                                            className="mdl-textfield__input"
                                            type="text"
                                            onChange={this.handleChangeUserName}
                                            value={this.state.username}/>
                                        <label className="mdl-textfield__label" htmlFor="signup-username">Username</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input
                                            id="signup-mail"
                                            className="mdl-textfield__input"
                                            type="text"
                                            onChange={this.handleChangeEmail}
                                            value={this.state.email}/>
                                        <label className="mdl-textfield__label" htmlFor="signup-mail">Email</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input
                                            id="signup-user-pass"
                                            className="mdl-textfield__input"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleChangePassword}/>
                                        <label className="mdl-textfield__label" htmlFor="signup-user-pass">Password</label>
                                    </div>

                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input
                                            id="signup-mail"
                                            className="mdl-textfield__input"
                                            type="text"
                                            value={this.state.userImage}
                                            onChange={this.handleChangeuserimage}/>
                                        <label className="mdl-textfield__label" htmlFor="signup-user-pass">Password</label>
                                    </div>
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <input
                                            id="signup-mail"
                                            className="mdl-textfield__input"
                                            type="text"
                                            value={this.state.phone}
                                            onChange={this.handleChangephone}/>
                                        <label className="mdl-textfield__label" htmlFor="signup-user-pass">Password</label>
                                    </div>
                                </form>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <p className="text-center">Already have an account? Login
                                    <Link to="/login">here</Link>
                                </p>
                                {error}
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button
                                    className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                                    type="submit"
                                    onClick={this.handleSubmit}
                                    id="login-button">Join</button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {users: null}
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)