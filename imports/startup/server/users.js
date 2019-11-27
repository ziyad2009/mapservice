import { Meteor } from 'meteor/meteor';
Meteor.publish(
  'Provider.listbyuser', function providerprofile1(PEAR_PAGE) {
    // console.log("Trying to publish: " + Meteor.users.find().count() + " users");
    
    if (Meteor.isServer){
      ///console.log('in server'+  Meteor.users.find().fetch() )
      return Meteor.users.find({},{limit:PEAR_PAGE})
    }
   
    // console.log("Trying to publish: " + Meteor.users.find().fetch()  );
    // return Meteor.users.find()

},
)
Meteor.publish(
  'Provider.Userstatuse', function userStatusein(id) {
    console.log('id:',id)
    return Meteor.users.find( {_id:id}, {"status.online":true })
    //return Meteor.users.find({ "status.online": true }, { fields: { ... } });
  }
)

Meteor.publish(
  'Provider.allUserstatuse', function userStatusein() {
    console.log('all user start ')
    return Meteor.users.find({"status.online":true })
    //return Meteor.users.find({ "status.online": true }, { fields: { ... } });
  }
)
