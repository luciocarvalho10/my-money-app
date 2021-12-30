import React, {Component} from 'react'
import { Field } from 'redux-form'
import Input from '../common/form/Input'
import Grid from '../common/layout/Grid'

export default class CreditList extends Component {

  bodyRows() {
    return (
      <tr>
        <td>
          <Field
            name='credits[0].name'
            component={Input}
            placeholder='Informe o nome'
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name='credits[0].value'
            component={Input}
            placeholder='Informe o valor'
            readOnly={this.props.readOnly}
          />
        </td>
        <td></td>
      </tr>
    )
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className='table'>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Valor</td>
                <td>Ações</td>
              </tr>
            </thead>
            <tbody>{this.bodyRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}
