import React, {Component} from 'react'
import {Link} from 'react-router'
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data'
import Header from '../../components/header/Header'
import Singleuser from '../../containers/Singleuser/Singleroter'
class UserView  extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           recorde:{},
           loding:false
        };
    }
    componentDidMount(){
       
       
    }
    
    

    render(){
        
        console.log('userview',this.props)
      return( 
        <div>
        <Header header={this.props} />
        <Singleuser service={this.props}/>
            </div>
        )
    
       
    
}
}
 
export default withTracker((props) => {
   
    const{params}=props
    
    const handle =   Meteor.subscribe('Provider.Userstatuse',params.id) 
    
      
    return {
      user: Meteor.users.find().fetch(),
      allUsers:handle,
      userRedy:handle.ready(),
      userSt:Meteor.users.find({}).fetch(),
      
    };
  })(UserView);
