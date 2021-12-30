import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'

import Tabs from '../common/tab/Tabs'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import BillingCyclesList from './BillingCyclesList'
import BillingCyclesForm from './BillingCyclesForm'

import { init, create, update, remove } from './BillingCyclesActions'

class BillingCycles extends Component {

componentDidMount(){
  this.props.init()
}

  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" sub="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excuir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingCyclesList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCyclesForm
                  onSubmit={this.props.create}
                  submitClass='primary' submitLabel='Incluir'
                />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCyclesForm
                  onSubmit={this.props.update}
                  submitClass='info' submitLabel='Alterar'
                />
              </TabContent>
              <TabContent id='tabDelete'>
                <BillingCyclesForm
                  onSubmit={this.props.remove}
                  submitClass='danger' submitLabel='Excluir'
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)
