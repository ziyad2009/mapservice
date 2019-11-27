import { Meteor } from 'meteor/meteor';
import { Locations } from '../locations';

Meteor.publish('Locations.pub.details', function getLocationDetails({ locationId }) {
  //tak  id from location id and rutern single requerd 
  //console.log('id Lcation',locationId)
  return Locations.find({ _id: locationId });
});
