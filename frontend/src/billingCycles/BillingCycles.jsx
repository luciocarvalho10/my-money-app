import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import TabsHeader from '../common/tab/TabsHeader'
import Tabs from '../common/tab/Tabs'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import { selectTab } from '../common/tab/tabActions'

class BillingCycles extends Component {

componentDidMount(){ this.props.selectTab('tabList')}

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
              <TabContent id='tabList'><h1>tabList</h1></TabContent>
              <TabContent id='tabCreate'><h1>tabCreate</h1></TabContent>
              <TabContent id='tabUpdate'><h1>tabUpdate</h1></TabContent>
              <TabContent id='tabDelet'><h1>tabDelet</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)
