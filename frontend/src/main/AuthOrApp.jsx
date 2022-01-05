import '../common/template/dependencies'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import App from './App'
import AuthForm from '../auth/AuthForm'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {
  componentDidMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token)
    }
  }

  render() {
    const { user, validToken } = this.props.auth

    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token
      return <App>{this.props.children}</App>
    } else if (!user && !validToken) {
      return <AuthForm />
    } else {
      return false
    }
  }
}

const mapStateToProps = state  => ({auth: state.auth})
const mapDispatchToProps = dispatch  => bindActionCreators({validateToken}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)