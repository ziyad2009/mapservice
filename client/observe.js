import {Posts} from '../shared'
import * as AllActions from './actions'
export const init = (store) => {

    /*********** both observables should not work if autopublish is removed ************/
    Posts
        .find({})
        .observeChanges({
            changed: function (id, data) {
                store.dispatch(AllActions.load_users_posts())
            }
        });

    Tracker.autorun(() => {
        Meteor.subscribe('posts');
        store.dispatch(AllActions.load_users_posts())
    });
}