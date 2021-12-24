import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCyclesActions'
import InputAndLabel from '../common/form/InputAndLabel'

class BillingCyclesForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={InputAndLabel}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={InputAndLabel}
            type="Number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={InputAndLabel}
            type="Number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>
            Cancelar
          </button>
        </div>
      </form>
    )
  }
}

BillingCyclesForm = reduxForm({ form: 'BillingCyclesForm', destroyOnUnmount: false })(BillingCyclesForm)
const mapDisatchToprops = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDisatchToprops)(BillingCyclesForm)
