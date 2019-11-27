import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown,heart,faCheckSquare, faCoffee, faHeart, faHeartbeat, faComment, faStar ,
} from '@fortawesome/free-solid-svg-icons';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

class CardIcon extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            St:''
        }

    }


    render(){   
        return(
            <Row className="card-icon">
                <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                     <div className="card-icon-heart">
                        <FontAwesomeIcon  size="2x" color={this.props.color} icon={this.props.iconName}/>
                 </div>
                <div className="widget-numbers">
                   {this.props.number}
                </div>
                <div className="widget-subheading">
                   {this.props.title}
                </div>
                <div className="widget-description text-white">
                    <FontAwesomeIcon icon={faAngleUp}/>
                    <span className="pl-1">{this.props.numberpercent}</span>
                </div>
            </div>
             
            </Row>
        )
    }
}
export default CardIcon;