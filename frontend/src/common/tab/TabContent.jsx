import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../operator/If'

class TabContent extends Component {
  render() {
    const { id, tab, children } = this.props
    const selected = tab.selected === id
    const visible = tab.visible[id]
    return (
      <If test={visible}>
        <div id={id} className={`tab-pane ${selected ? 'active' : ''}`}>
          {children}
        </div>
      </If>
    )
  }
}
const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)
