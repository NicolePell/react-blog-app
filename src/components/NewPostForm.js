import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form'

import { createPost } from '../actions/index'

const renderInput = ({ input, label, type, meta: {touched, invalid, error }}) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <input className="form-control" {...input} type={type}/>
    <div className="text-help" style={{color: 'red'}}>
      { touched ? error : '' }
    </div>
  </div>
)

const renderTextarea = ({ input, label, type, meta: {touched, invalid, error }}) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <textarea className="form-control" {...input}/>
    <div className="text-help" style={{color: 'red'}}>
      { touched ? error : '' }
    </div>
  </div>
)

class NewPostForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onFormSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      this.context.router.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <h3>Create a New Post</h3>

        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
            <Field
              label="Title"
              name="title"
              type="text"
              component={renderInput} />
            <Field
              className="form-control"
              label="Categories"
              name="categories"
              type="text"
              component={renderInput} />
            <Field
              className="form-control"
              label="Content"
              name="content"
              type="textarea"
              component={renderTextarea} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>

      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if(!values.title) {
    errors.title = 'Enter a title'
  }

  if(!values.categories) {
    errors.categories = 'Enter at least one category'
  }

  if(!values.content) {
    errors.content = 'Enter content'
  }

  return errors
}

export default connect(null, { createPost })(reduxForm({
  form: 'NewPostForm',
  validate
})(NewPostForm));
