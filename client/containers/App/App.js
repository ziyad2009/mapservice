import React , {PropTypes}from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as AllActions from '../../actions'
import Main from '../../components/Main'
import Map from '../../components/Map'
//import Home from '../../containers/Home/home'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        loding:false
    }

}

  componentDidMount(){
    const {posts, actions, user} = this.props
  if(posts.length>1){
    this.setState({loding:true})

  }
  }
   render() {
     console.log('Proos App',this.props)
    
   const {posts, actions, user} = this.props
   console.log('render ASpp posts',posts)

   if(posts.length>1){
     return(
      <Main user={user}>
      <Map posts={posts} actions={actions} user={user}/>
   </Main>
       
     )
   }else
   return (
    <div> wait to lodimg some date..</div>
     )
  }
}
// <Map posts={posts} actions={actions} user={user} allprops={this.props}/>
const mapStateToProps = state => {
   return {
     posts: state.posts, 
    user: state.user
  }
}
const mapDispatchToProps = dispatch => ({
actions: bindActionCreators(AllActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)