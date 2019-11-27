import { Meteor } from 'meteor/meteor';
import { Provider } from '../provider';

Meteor.publish(
  'Provider.list', function providerprofile({ userId }) {
  console.log('id  list  proveder',userId) 
  return Provider.find({ userId:userId }, { limit: 20, sort: { createdAt: -1 } })
},
   
)
