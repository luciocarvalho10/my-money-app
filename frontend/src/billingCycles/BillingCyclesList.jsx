import React, {Component} from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { getList } from "./BillingCyclesActions"

class BillingCyclesList extends Component {

  componentDidMount(){
    this.props.getList()
  }

<<<<<<< HEAD
  renderRows() {
    const list = this.props.list || []
    return list.map(bc => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
      </tr>
    ))
  }

=======
>>>>>>> d4959e9c3ced7e32118c6c27fe107e852f55214e
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = state => ({list: state.billingCycles.list})
=======
const mapStateToProps = state => ({list: state.BillingCycles.list})
>>>>>>> d4959e9c3ced7e32118c6c27fe107e852f55214e
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesList)