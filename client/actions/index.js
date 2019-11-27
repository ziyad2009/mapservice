import * as types from '../constants/ActionTypes';

import { Accounts } from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor' 
export const user = current_user => 
//console.log('crunnt user action',current_user.username)
({
    type: types.CURREN_USER,
    current_user
})
export const load_posts = posts => ({
    type: types.LOAD_POSTS,
    posts
})

export const get_loggedin_user = () => {  
    return dispatch => {
        Meteor.call('get_loggedin_user', (err, result) => {
             if (!err) {
                 console.log('action test',result)
              dispatch(user(result));
            }
     })
  }

} 

export const create_new_user = (params) => {
    return dispatch => {
       // Accounts.createUser({params},(err,data)=>{

            if (!params) {
                // dispatch(load_posts(data))
                console.log('data is from create users',params)
               }
       
        
   }
}



export const load_users_posts = () => {
    return dispatch => {
        console.log('start call load poast')
        Meteor.call('findprofileOn', (err, data) => {
            console.log('posts',data)
            if (!err) {
               dispatch(load_posts(data))
          }
      })
   }
}


export const post = (params) => {
    return dispatch => {
        Meteor.call('post', params, (err, data) => {
            if (!err) {
              //do something if you have an error. another action?
          }
      })
   }
}


export const update_location = (params) => {
    return dispatch => {
        Meteor.call('update_location', params, (err, data) => {
            if (!err) {
               //do something if you have an error. another action
            }
       })
    }
}



export const findrecordByUser = (userId) => {
    return dispatch => {
        Meteor.call('update_location', params, (err, data) => {
            if (!err) {
               //do something if you have an error. another action
            }
       })
    }
}


















































































                 

