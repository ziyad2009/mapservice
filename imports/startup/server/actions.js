import {Meteor} from 'meteor/meteor'
import {Provider} from '../../api/provider/provider'
import {Accounts} from 'meteor/accounts-base'

  Meteor.methods({
    get_loggedin_user() {
        let user = Meteor.user();
        return {username: user.username, user_id: user._id};
    },
    findprofileOn(){
      let userid = Meteor.user();
   
      return Provider.find({}).fetch()
    },
    findprofileOnbyuser(userid){
   console.log('start serch record by user',userid)
      return  Provider.find({userId:userid}, { limit: 10 }).fetch();
    },
    userProfile(data){
      const{userId,userImage,phone}=data
      console.log('new',data)
    return  Meteor.users.update(userId, {
        $set: {
          profile:{
            userImage:userImage,
            phone:phone
          }  
        }
      })
     // return console.log('+++',data)
    }
    
    
  }) 