import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import TabsHeader from '../common/tab/TabsHeader'
import Tabs from '../common/tab/Tabs'
import TabsContent from '../common/tab/TabsContent'

class BillingCycles extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" sub="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader></TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycles
