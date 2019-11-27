import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Provider } from '../provider/provider';


export const providerProfile = new ValidatedMethod({
    name: 'Locations.profile',
    validate: new SimpleSchema({
        latitude: { type: Number, decimal: true },
        longitude: { type: Number, decimal: true },
        usename:{type:String},
        userImage:{type:String},
        serviceid:{type:Number},
        service:{type:String},
        phone:{type:String},
        serviceinfo:{type:String},
        servicetime:{type:String},
        brandName:{type:String}
      }).validator(),
      run({latitude, longitude,usename,userImage,serviceid,service,phone,servicetime,serviceinfo,brandName }) {
        console.log('inser the file',service);
        console.log(latitude, longitude);
        Provider.insert({
            location: {
            type: 'Point',
            coordinates: [longitude, latitude]
            },
            name:usename,
            userId: Meteor.userId(),
            userImage:userImage,
            service:service,
            serviceid:serviceid,
            createdAt: new Date(),
            phone:phone,
            serviceinfo:serviceinfo,
            servicetime:servicetime,
            brandName:brandName
            
          });
    }
})


export const providerProfileSerch = new ValidatedMethod({
  name: 'Locations.findprofile',
  validate: new SimpleSchema({
    serviceid:{type:Number},
  }).validator(),
  run({serviceid}) {
  console.log('serch start ',serviceid)
  return Provider.find({serviceid}, { limit: 10 }).fetch();
  
  }
  
})


export const providerProfileSerchdata = new ValidatedMethod({
  name: 'Locations.findprofiledata',
  validate: new SimpleSchema({
    serviceid:{type:Number},
  }).validator(),
  run({serviceid}) {
  console.log('serch start ',serviceid)
  return Provider.find({serviceid}, { limit: 10 }).fetch();
  
  }
  
})


export const providerProfileSerchOne = new ValidatedMethod({
  name: 'Locations.findprofileOn',
  validate: new SimpleSchema({
    userId:{type:String},
  }).validator(),
  run({userId}) {
  console.log('serch Id ',userId)
  return Provider.find({userId}, { limit: 10 }).fetch();
  
  }
  
})


export const providerProfileUpdate = new ValidatedMethod({
  name: 'Locations.profileupdate',
  validate: new SimpleSchema({
    userImage:{type:String},
      iditem:{type:String},
      usename:{type:String},
      serviceid:{type:Number},
      service:{type:String},
      phone:{type:String},
      serviceinfo:{type:String},
      servicetime:{type:String},
      brandName:{type:String}
    }).validator(),
    run({userImage,iditem, usename,serviceid,service,phone,servicetime,serviceinfo,brandName }) {
      console.log('update the file start',servicetime);
      console.log('update the file start',userImage);
      Provider.update({_id:iditem},{
        $set:{
          userImage:userImage,
          name:usename,
          userId: Meteor.userId(),
          service:service,
          serviceid:serviceid,
          createdAt: new Date(),
          phone:phone,
          serviceinfo:serviceinfo,
          servicetime:servicetime,
          brandName:brandName
          
        },
      });
    }
  })


export const providerProfiledelete= new ValidatedMethod({
  name: 'Locations.deletprofile',
  validate:new SimpleSchema({
    userId:{type:String},
    _id:{type:String},
  }).validator(),
  run({userId,_id}){
    return Provider.remove({_id,userId})
  }
})


export const removel= new ValidatedMethod({
  name: 'Locations.removeprofile',
  validate:new SimpleSchema({
    serviceid:{type:Number},
  }).validator(),
 run(){
  if (Meteor.isServer) {
  
    Meteor.startup(function() {

      return Meteor.methods({
  
        removeAllPosts: function() {
  
          return Provider.remove({});
  
        } 
  
      });
  
    });
 }
},
})

  