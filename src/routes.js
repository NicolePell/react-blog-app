import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import PostsIndex from './components/PostsIndex'
import NewPostForm from './components/NewPostForm'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={NewPostForm} />
  </Route>
)
