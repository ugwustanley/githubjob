

import React from 'react'
import {Switch , Route }  from 'react-router-dom'
import Header from './components/Header/Header'
import Jobdetail from './components/JobDetail/Jobdetail'
import Main from './components/Main/Main'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <div className="mainContainer">
            <h2 className="header"> <b className="header__bold">Github</b> Jobs</h2>
            <Route exact path="/" component={Header}>
            </Route>
            <Route exact path="/" component={Main}>
            </Route>
            <Route exact path="/detail" component={Jobdetail}>
            </Route>
            <h3 className="footer">Developed by @<a href="github.com/ugwustanley">ugwustanley</a> </h3>
          
      </div>
    </div>
  )
}

export default App


