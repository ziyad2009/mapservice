import { Meteor } from "meteor/meteor";


const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => Meteor.userId() 
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
    )
  }