import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import PageNotFound from './../../components/PageNotFound'
import Login from './../../containers/Login/login'
import Users from './../../components/users'
import App from './../../containers/App'
import Signup from './../../containers/Signup'
 
 import Main from '../../components/Main'

 import Header from '../../components/header'
    
 class  Home  extends  Component{
   render() { 
     console.log('props in Home', this.props)
        return(
          <div>
             <Header />
           
          </div>
            
        )
        
    }
  }

export default  Home;