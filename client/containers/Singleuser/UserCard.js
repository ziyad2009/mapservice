import React, {Component} from 'react'
import {Link} from 'react-router'
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data'

import {
    Row, Col,
    Button,
    CardHeader,
    CardTitle,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,CardSubtitle
} from 'reactstrap';
import Header from '../../components/header'

class UserCard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        console.log('Usercard',this.props)
        const{ditail}=this.props
        return(
            <Card className="mb-3"  id="listItem" body>
            <CardTitle className= "headertxtcard" >معلومات عام حول المستخدم</CardTitle>
            <div className="txt-info">
            <p className="txtuser">رقم المستخدم: </p><h5 className="txtuser ">{ditail._id}</h5>
            <p className="txtuser">اسم المستخدم:</p> <h5 className="txtuser">{ditail.username}</h5>
            <p className="txtuser">تاريخ الانشاء :</p> <h5 className="txtuser">{Date(ditail.createdAt)}</h5>
            </div>
            </Card> 
        )
    }
}
 
// <div className="user-content">
// <Card className="mb-3" body>
// <CardTitle  className= "card-header" >Main information about user</CardTitle>
// <h5>ID User: </h5><p> {selectUser._id}</p>
// <h5>Name User:</h5> <p> {selectUser.username}</p>
// <h5>Creat At :</h5> <p>{Date(selectUser.createdAt)}</p>
// </Card>
// </div>
export default UserCard;


// <Card className="mb-3" id="listItem" body inverse style={{backgroundColor: '#3b5998', borderColor: '#333'}}>
// <CardTitle className="text-white">معلومات عام حول المستخدم</CardTitle>
// <CardSubtitle>
// <p>رقم المستخدم: </p><p> {ditail._id}</p>
// <p>اسم المستخدم:</p> <p> {ditail.username}</p>
// <p>تاريخ الانشاء :</p> <p>{Date(ditail.createdAt)}</p>
// </CardSubtitle>
// </Card> 