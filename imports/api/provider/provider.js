import { Mongo } from 'meteor/mongo';

export const Provider = new Mongo.Collection('provider');
Provider.rawCollection().createIndex({ location: '2dsphere' });
Provider.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});