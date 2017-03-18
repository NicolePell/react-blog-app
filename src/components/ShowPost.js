import React, { Component } from 'react'

class ShowPost extends Component {
  render() {
    return <div>Show Post {this.props.params.id}</div>
  }
}

export default ShowPost
