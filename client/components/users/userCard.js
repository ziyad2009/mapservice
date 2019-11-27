// import User from './users';
import React, {Component} from 'react'
import {Accounts} from 'meteor/accounts-base'
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

const images="http://www.clker.com/cliparts/d/s/V/U/u/W/male-formal-business-md.png"

 class UserCard extends  Component{
    constructor(props) {
        super(props)
        
        this.state = {
            St:''
        }
        this.userProfile=this.userProfile.bind(this)
    }

    async handleUser(item){
        // e.preventDefault()
        console.log('item',item)
        let recorde={}
        Meteor.call('findprofileOnbyuser', item._id, (err, data) => {
             
         if (!err) {
             // console.log('data push',data)
             this.vistUser(item,data)
           
             
         }else{alert('no user found!')}
     })
       
    }
    
    vistUser=(item,data)=>{
        console.log("vost user",data)
        this.props.navigate.router.push({
            pathname:`/users/${item._id}`,
            state: {
             selectUser: item,
             userRecord:data
           }})
    }
    
    renderSt(item){
        if(!item.status.online){
        return   <div className="badge badge-warning" id="oflaine">oflaine</div>
        }else{
         return  <div className="badge badge-success" id="onlaine">onlaine</div> } 
         
    }

    userProfile(user){
        console.log("update=> user",user)
        this.props.navigate.router.push({
            pathname:'/updateuser',
            state: {
             selectUser: user,
           
           }})
 
    }

    
  render(){
     console.log("pross",this.props )
      const  item= this.props.cardItem 
      
        return(
        <Card className="main-card mb-3">
        
            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
             <thead>
            
             <tr>
             <th className="text-center">#تسلسل</th>
             <th>الحساب</th>
             <th className="text-center">الايميل</th>
             <th className="text-center">الحاله</th>
             <th className="text-center">تفاصيل</th>
             <th className="text-center">تحديث</th>            
             </tr>

             </thead>
             <tbody>
               <tr >
               <td className="text-center text-muted">{item._id}</td>
               <td>
               <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                             <div className="widget-content-left">
                                 <img width={40} className="rounded-circle" src={images} alt="Avatar" /></div>
                        </div>
                        <div className="widget-content-left flex2">
                             <div className="widget-heading">{item.username}</div>
                             <div className="widget-subheading opacity-7">UI Designer</div>
                        </div>
                    </div>
                </div>

                </td>

                <td className="text-center">{item.emails[0].address}</td>

                 <td className="text-center"> {this.renderSt(item)}  </td>

               <td className="text-center">
                   <button onClick={()=>this.handleUser(item)} type="button" className="btn btn-primary btn-sm">Details</button>
               </td>
               <td className="text-center">
                   <button onClick={()=>this.userProfile(item)} type="button" className="btn btn-primary btn-sm">call Details</button>
               </td>                        

               </tr>
               </tbody>
           </table>

        </Card>
        
        
            )

  }
   
}
export default UserCard;



// <div id="leftbox" key={item._id}>
// <ul  id="listItem" className= "list-group">
//   <div className="thumpnail">
        
//         <li >
//         <i className= "material-icons mdl-list__item-avatar">person</i>
//             <p>{item.username} </p> 
//         </li>

//         <li>  <p> {item.emails[0].address}</p> </li>
//         <li> {this.renderSt(item)} </li>
//   </div>

//     <div id="btnContainer">
//             <button 
//             onClick={()=>this.handleUser(item)}
//           //  onClick={()=>console.log(item)}
//             className="btn btn-primary">
//                 vesite
//             </button>
             
//     </div>

// </ul>
   
// </div>