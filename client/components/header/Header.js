import React,{Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown,heart,faCheckSquare, faCoffee, faHeart, faHeartbeat, faComment, faStar, faWater, faUser ,
} from '@fortawesome/free-solid-svg-icons';

class Header  extends Component {
        constructor(props) {
                super(props);
                this.state = {
                 loding:false
                };
            }
render(){
        console.log('from header',this.props.header)
        return(
                <div className="header-btn-lg pr-0">
                   
                <header className="mdl-layout__header">
               
                   <div className="mdl-layout__header-row">
                        <div className= "header-icon">
                        <FontAwesomeIcon  size="2x" color={'white'} icon={faUser}/>
                        </div>
                        <span className="mdl-layout__title">I-connect page  </span>
                         <div className="mdl-layout-spacer"></div>
                           <nav className="nav-item-header">
                               <a className="mdl-navigation__link" onClick={()=> this.props.header.router.push({pathname: '/users'})} href="#">Back To User Mangemen</a>
                           </nav>
                           <nav className="nav-item-header">
                           <a className="mdl-navigation__link" onClick={()=> this.props.header.router.push({pathname: '/'})} href="#">User Mangement</a>
                           </nav>
                    </div>
                   </header>
               </div>
        )
}

}

export default Header;
 