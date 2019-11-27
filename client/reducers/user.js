import {CURREN_USER} from '../constants/ActionTypes'
export default function user(state = {}, action) {
   switch (action.type) {
       case CURREN_USER:
      let result = {
            ...state,
            loggedin_user: action.current_user.username,
            user_id: action.current_user.user_id
      }
return result;
   default:
     return state;
    }
}