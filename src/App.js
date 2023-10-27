import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
// import MyComponent from './Components/try';

export default class app extends Component {
  render() {
    return (
      <>
      <div>
       <NavBar/>
       <News pageSize={5} country="in"/>
       {/* <MyComponent/> */}
      </div>
      </>
    )
  }
}
  