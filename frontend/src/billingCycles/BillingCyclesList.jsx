import React, {Component} from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { getList } from "./BillingCyclesActions"

class BillingCyclesList extends Component {

  componentDidMount(){
    this.props.getList()
  }

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

          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({list: state.BillingCycles.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesList)