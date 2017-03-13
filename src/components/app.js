import React, { Component } from 'react'

import { Greeting } from '../routes'

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
