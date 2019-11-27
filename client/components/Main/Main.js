import React, {Component} from 'react'
import {browserHistory, Link} from 'react-router'

import * as AllActions from '../../actions'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown,heart,faCheckSquare, faCoffee, faHeart, faHeartbeat, faComment, faStar ,faTools
} from '@fortawesome/free-solid-svg-icons';
import CardIcon from '../../components/CardIcon/cardIcon'
 
 export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.logout = this
            .logout
            .bind(this)
            this.state={
                username:'',
                redirectToLogin: false,
                redirectToUser:false,
                logo:null
            }
    }
 componentDidMount(){
     this.setState({logo:logo})
 }
logout(e) {
    e.preventDefault();
     Meteor.logout();
     browserHistory.push('/login');
}

goUsers(e){
e.preventDefault();
browserHistory.push('/users')


}


goRegUsers(e){
    e.preventDefault();
    browserHistory.push('/signup')
    
    
    }

render() {
  
    return (
        <div className="mdl-layout mdl-js-layout">
         <header className="mdl-layout__header">
            <div className="mdl-layout-icon">
            <FontAwesomeIcon  size="2x" color={"white"} icon={faTools}/>
            
             </div>

             <div className="mdl-layout__header-row">
                        <span className="txt-main-logo">   مرحبا   {this.props.user.loggedin_user}
                        </span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" onClick={this.logout} href="#">تسجيل خروج</a>
                        </nav>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" onClick={this.goUsers} href="#">ادارة المستخدمين</a>
                        </nav>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" onClick={this.goRegUsers} href="#">انشاء مستخدم</a>
                        </nav>
                    </div>
         </header>
                    <main className="mdl-layout__content">
                        {this.props.children}
                    </main>
        </div>
            
    );
}
}


// const mapStateToProps = state => {
//   return {
//     posts: state.posts, 
//    userName: state.user
//  }
// }
// const mapDispatchToProps = dispatch => ({
// actions: bindActionCreators(AllActions, dispatch)
// })

// export default connect(mapStateToProps, mapDispatchToProps) (MainPage)