import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TabContent extends Component {
  render() {
    const {id, tab, children} = this.props
    const selected = tab.selected === id
    return (
      <div id={id} className={`tab-pane ${selected ? 'active' : ''}`}>
        {children}
      </div>
    )
  }
}
const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)