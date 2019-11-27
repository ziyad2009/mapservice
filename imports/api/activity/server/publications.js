import { Meteor } from 'meteor/meteor';
import { Activity } from '../activity';

Meteor.publish('Activity.pub.list', function getLocationActivity({ locationId }) {
 // console.log('Activate id Lcation',locationId)
  return Activity.find({ locationId }, { limit: 5, sort: { createdAt: -1 } });
});
