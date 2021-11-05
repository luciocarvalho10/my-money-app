import React, { Component } from "react"

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class BillingCycles extends Component{
  render(){
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' sub='Cadastro'/>
        <Content>
           Ciclo de Pagamentos
        </Content>
      </div>
    )
  }
}

export default BillingCycles