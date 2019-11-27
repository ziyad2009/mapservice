import React, {Component} from 'react'
import {Link} from 'react-router'
import { Meteor } from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data'

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    div,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown,heart,faCheckSquare, faCoffee, faHeart, faHeartbeat, faComment, faStar 
} from '@fortawesome/free-solid-svg-icons';


import CardIcon from '../../components/CardIcon/cardIcon'
import Header from '../../components/header'
import UserCard from './UserCard'
import ServiceCard from './serviceCard'
class Singleuser  extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           recorde:{},
           loding:false
        };
    }
    componentDidMount(){
       
       
    }
    renderUser(item){
        if (item){
           return (
            item.online ?
            <h>status:Online</h>:<h>status:Ofline!</h>
            )
        }        
            }

    recordUser(){
        const{params}=this.props
        let records={}
         Meteor.call('findprofileOnbyuser', params.id, (err, data) => {
            
            if (!err) {
                return this.setState({recorde:data})
                // return <div  className="jumbotron" >
                //                 <p className="display-4">Last activate..</p>
                //                  <h>{data.name}</h>
                //                 <h>in mon user 1s</h>
                //                 <h>in mon user 1qq</h>
                //                <button onClick={()=>console.log('state record')}>see records</button>
                //                </div>

                //    return data.map((item,i)=>{
                //          return this.setState({recorde:item})
                //          })
                     
           
        }else console.log(data)
            
         })
         
        //  (<div  className="jumbotron" >
        //                 <p className="display-4">Last activate..</p>
        //                  <h>{records.name}</h>
        //                 <h>in mon user 1s</h>
        //                 <h>in mon user 1qq</h>
        //                 <button onClick={()=>console.log('state record')}>see records</button>
        //                 </div>)
    }
    

    render(){
        console.log('from singleruser',this.props.service)
        const{params}=this.props.service
        const{selectUser,userRecord}=this.props.service.location.state
        const {recorde}=this.state
       const userinfo=this.props.service.user 
        console.log('m000m',userRecord)
    
       const acount=[44,55,33]

       if(!this.props.userRedy){ 
        
        return  ( 
            <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate">Loading..</div>)    
        }else 
        return( 

            <div>
                <div >
                <div className="user-top-card" >
                    <UserCard ditail={selectUser}/>
                    <CardIcon acount 
                    color="#a83f39 "
                    iconName={faHeart}
                    number={'81.9'}
                    title={"User like"} 
                    numberpercent={"%49"}/>

                    <CardIcon acount 
                     color="#fffa86 "
                    iconName={faStar}
                    number={'81.9'}
                    title={"User Revew"} 
                    numberpercent={"%49"}/>
                   
                    <CardIcon acount 
                    color="#EDEBEB"
                    iconName={faComment}
                    number={'81.9'}
                    title={"User Comment"} 
                    numberpercent={"%49"}/>
                    </div>
            
                </div>

           <div className="container-fluid">
            <h5 className="card-title-line"> سجلات المستخدم</h5>
            </div>
            <div className="container-fluid2"/>
            
           <ServiceCard service={userRecord}/>
           
            </div>
            
        )
    
       
    
}
}
 
export default withTracker((props) => {
   
    const{params}=props.service
    
    const handle =   Meteor.subscribe('Provider.Userstatuse',params.id) 
    
      
    return {
      user: Meteor.users.find().fetch(),
      allUsers:handle,
      userRedy:handle.ready(),
      userSt:Meteor.users.find({}).fetch(),
      
    };
  })(Singleuser);



//   <div>singluser
//                     {params.id}
//                     <div key={i}>
//                      <h>Name: {selected.username }</h>
//                     <p> {this.renderUser(userInfo.status)}</p>
//                     </div>
                    
//                 })
                
                 
               
//             </div>