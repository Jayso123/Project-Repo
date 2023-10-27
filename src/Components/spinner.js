import React, { Component } from 'react'
import Loading from './Loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className="text-center" >
        <img style={{height: "50px"}} src={Loading} alt="Loading" />
      </div>
    )
  }
}

export default spinner;