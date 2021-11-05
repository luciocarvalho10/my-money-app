import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/Row'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { credit, debt } = this.props.summary
    return (
      <div>
        <ContentHeader title="Dashboard" sub="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de Créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de Débotos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debt}`}
              text="Valor Consolidado "
            />
          </Row>
        </Content>
      </div>
    )
  }
}
const mapStateToProps = state => ({ summary: state.dashboard.summary })
export default connect(mapStateToProps)(Dashboard)
