import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import InputAndLabel from '../common/form/InputAndLabel'

class BillingCyclesForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={InputAndLabel}
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
          />
          <Field
            name="month"
            component={InputAndLabel}
            type="Number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
          />
          <Field
            name="year"
            component={InputAndLabel}
            type="Number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'BillingCyclesForm' })(BillingCyclesForm)
