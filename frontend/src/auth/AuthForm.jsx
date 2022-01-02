import './auth.css'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field} from 'redux-form'

import {login, signup} from './authActions'
import Row from '../common/layout/Row'
import Grid from '../common/layout/Grid'
import If from '../common/operator/If'
import Messages from '../common/msg/Messages'
import InputAuth from '../common/form/InputAuth'

class AuthForm extends Component {
  constructor(props) {
    super(props)
    this.state = { loginMode: true }
  }

  changeMode() {
    this,this.setState({ loginMode: !this.state.loginMode })
  }

  onSubmit(values) {
    const { login, sgnup } = this.props
    this.state.loginMode ? login(values) : signup(values)
  }

  render() {
    const {loginMode} = this.state
    const {handleSubmit} = this.props

    return (
      <div className="login-box">
        <div className="login-logo"><b>My</b> Money</div>
        <div className="login-box-body">
          <p className="logim-box-msg">Bem Vindo!</p>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
            <Field
              component={InputAuth}
              type='input'
              name='name'
              placeholder='Nome'
              icon='user'
              hide={loginMode}
            />
            <Field
              component={InputAuth}
              type='email'
              name='email'
              placeholder='E-mail'
              icon='envelope'
            />
            <Field
              component={InputAuth}
              type='password'
              name='password'
              placeholder='Senha'
              icon='lock'
            />
            <Field
              component={InputAuth}
              type='password'
              name='confirmPassword'
              placeholder='confirmar Senha'
              icon='lock'
              hide={loginMode}
            />
            <Row>
              <Grid cols="4">
                <button
                 type="submit"
                 className='btn btn-primary btn-block btn-flat'
                >
                  { loginMode ? 'Entrar' : 'Registrar'}
                </button>
              </Grid>
            </Row>
          </form>
          <br />
          <a onClick={() => this.changeMode()}>
            {
              loginMode ?
              'Novo Usuário? Registrar aqui!' :
              'Já é cadastrado? Entrar aqui!'
            }
          </a>
        </div>
        <Messages />
      </div>
    )
  }
}

AuthForm = reduxForm({ form: AuthForm})(AuthForm)
const mapDispatchToProps = dispatch => bindActionCreators({login, signup}, dispatch)
export default connect(null, mapDispatchToProps)(AuthForm)