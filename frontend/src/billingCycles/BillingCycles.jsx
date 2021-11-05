import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import TabsHeader from '../common/tab/TabsHeader'
import Tabs from '../common/tab/Tabs'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'

class BillingCycles extends Component {
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
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycles
