import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Messages from '../notifications/Messages'
import Errors from '../notifications/Errors'

import signupRequest from './action'

class Signup extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    signupRequest: PropTypes.func,
    signup: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      message: PropTypes.array,
      errors: PropTypes.array,
    })
  }

  submit = (values) => {
    this.props.signupRequest(values)
  }

  render() {
    const {
      handleSubmit,
      signup: {
        requesting,
        successful,
        message,
        errors,
      }
    } = this.props

    return (
      <div className="signup">
        <form className="widget-forms" onSubmit={handleSubmit(this.submit)}>
          <h1>Signup</h1>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <button action="submit">SIGNUP</button>
        </form>
        <div className="auth-messages">
          {
            !requesting && !!errors.length && (
              <Errors message="Failure to signup due to:" errors={errors} />
            )
          }

          {
            !requesting && !!message.length && (
              <Messages message={message} />
            )
          }

          {
            !requesting && successful && (
              <div>
                Signup Successful! <Link to="/login">Click here to login</Link>
              </div>
            )
          }

          {
            !requesting && !successful && (
              <Link to="/login">Already a Widgeter? Login Here »</Link>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  signup: state.signup,
})

const connected = connect(mapStateToProps, { signupRequest })(Signup)

const formed = reduxForm({
  form: 'signup',
})(connected)

export default formed  