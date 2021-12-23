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

import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update } from './BillingCyclesActions'

class BillingCycles extends Component {

componentDidMount(){
  this.props.selectTab('tabList')
  this.props.showTabs('tabList', 'tabCreate')
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
              <TabHeader label="Excuir" icon="trash-o" target="tabDelet" />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingCyclesList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCyclesForm onSubmit={this.props.create}/>
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCyclesForm onSubmit={this.props.update}/>
              </TabContent>
              <TabContent id='tabDelet'><h1>tabDelet</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)
