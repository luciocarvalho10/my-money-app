import React, { Component } from "react"
import Content from "../common/template/Content"
import ContentHeader from "../common/template/ContentHeader"

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" sub="Versão 1.0" />
        <Content>
          <h1>Dashboard</h1>
        </Content>
      </div>
    )
  }
}

export default Dashboard