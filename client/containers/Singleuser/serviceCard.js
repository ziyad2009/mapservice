import React, {Component} from 'react'
import {Link} from 'react-router'
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data'

import {
    Row, Col,ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Button,
    CardHeader,
    CardTitle,
    Card,CardImg,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';
import Header from '../../components/header'

class ServiceCard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        console.log("Service card",this.props.service)
        const userRecord=this.props.service
        return(
           
            <ListGroup >
                {userRecord.map((item,i)=>{
                   return <Col  key={i} md="4">
                   <Card  className="card-content" key={i}>
                    <CardImg top  className="avatar"  src={item.userImage}   alt="Card image cap" />
                       
                            <ListGroupItem className="item-card" active>    
                                <ListGroupItemHeading className="text-center" >معلومات عامة حول النشاط</ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem className={"list-items"}>
                                <ListGroupItemHeading className="list-item-txt"> اسم المحل:-{item.brandName}</ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem className={"list-items"}>
                                <ListGroupItemHeading className="list-item-txt"> اوقات العمل:-{item.servicetime}</ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem className={"list-items"}>
                                <ListGroupItemHeading className="list-item-txt"> الخدمة المقدمة:-{item.service}</ListGroupItemHeading>
                            </ListGroupItem>
                            <ListGroupItem className={"list-items"}>
                                <ListGroupItemHeading className="list-item-txt"> تفاصيل النشاط:-{item.serviceinfo}</ListGroupItemHeading>
                            </ListGroupItem>
                            <div className="text-center" style={{width:'100%',justifyContent:'center', padding: '.5rem' }}>
                            <Button color="danger" size="1g"   block>سجل النشاط</Button>{' '}
                            </div>
                       </Card>
                       </Col>
                })}
               
             </ListGroup>
            
        )
    }
}
//<Card className="mb-3" body inverse color="primary">
{/* <ListGroup className="container-fluid">
<h5 className="card-title">  Record For user</h5>
    
</div>

<div className="card-group">
    {userRecord.map((item,i)=>{
       return <div  className="card-content" key={i}>
            <img src={item.userImage}  
            alt="service profile image"
            id="imgsize"
            className="card-img-top"
            />
          <div className="card">
         <ul className="list-group">   
        <li className="list-group-item active">Main Information User</li>
        <li className="list-group-item"> ShopName:-{item.brandName}</li>
        <li className="list-group-item"> shift time:-{item.servicetime}</li>
        <li className="list-group-item"> Service:-{item.service}</li>
        <li className="list-group-item"> information:-{item.serviceinfo}</li>
       </ul>
       </div>
           </div>
    })}
        


 </div> */}
export default ServiceCard;