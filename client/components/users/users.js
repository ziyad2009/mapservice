
import React, {Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import UserCard from './userCard'

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


const PEAR_PAGW=2

class Users extends Component {
    constructor(props) {
        super(props)
        this.handleBtnclicke.bind(this)
        this.state = {
            St:''
        }

    }

    componentDidMount() {
        //this.views=Blaze.render(Template.mainLayout ,ReactDOM.findDOMNode(this.refs.container))
        this.PAGE=1
    }

    

    handleBtnclicke(){
     Meteor.subscribe('Provider.listbyuser',PEAR_PAGW *(this.PAGE+1)) 
     this.PAGE+=1;
    }
    
    
    handuserOnOf(){
        console.log('start')
        Meteor.users.find({ "status.online": true }).observe({
            added: function(id) {
              // id just came online
              console.log('on,',id)
            },
            removed: function(id) {
              // id just went offline
              console.log('of,',id)
            }
          });
    }
    renderUser = () => {
        if(!this.props.userRedy){ 
            return  (
                <div className="spinner-border">
                 Loading now>..</div>
            )
        } else{
           return this.props.user.map(((item,index)=>{
           return(
            <div className="table-responsive"  key={item._id}>
            <UserCard key={index} navigate={this.props} cardItem={item}/>
            </div>
           )
       }))
    }
       }
    
       goBack(){
        this.props.router.push({pathname: '/'})
       }

render(){
  //console.log("user props",this.props)
    return(
        <Row>
        <Col md="12">
            <Card className="main-card mb-3">
            <div className="card-header-user">
                    <h4 className="corner-text">قائمة الستخدمين</h4>
                 <div className="btn-actions-pane-right">
                     <div role="group" className="btn-group-sm btn-group">
                         <Button 
                         color="danger"  size="2g"
                         className="active btn btn-danger">العودة لصفحة الرئيسية</Button>
                         
                     </div>
                 </div>
            </div>
          
             {this.renderUser()}
        
       
        <div>

             <div className="d-flex text-center card-footer">
            
            <Button className="btn-wide btn btn-success"
              onClick={this.handleBtnclicke.bind(this)}>
            المزيد..</Button>
        </div>


        
        </div>

        </Card>
        </Col>
        </Row>

    )
}



}


export default withTracker((prama) => {
    const handelUseronline=Meteor.subscribe('Provider.allUserstatuse')  
    const handle =   Meteor.subscribe('Provider.listbyuser',PEAR_PAGW) 
    
    return {
      user: Meteor.users.find().fetch(),
      allUsers:handelUseronline.ready,
      userRedy:handle.ready(),
      userSt:Meteor.users.find({}).fetch(),
     
    };
  })(Users);
   
 
// // Validate username, sending a specific error message on failure.
// Accounts.validateNewUser((user) => {
//     if (user.username && user.username.length >= 3) {
//       return true;
//     } else {
//       throw new Meteor.Error(403, 'Username must have at least 3 characters');
//     }
//   });
  
//   // Validate username, without a specific error message.
//   Accounts.validateNewUser((user) => {
//     return user.username !== 'root';
//   });