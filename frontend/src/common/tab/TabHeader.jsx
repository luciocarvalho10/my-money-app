import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab } from './tabActions'
import If from '../operator/If'

class TabHeader extends Component {
  render() {
    const { icon, label, tab, target, selectTab } = this.props
    const selected = target === tab.selected
    const visible = tab.visible[target]
    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a
            href="javascript:;"
            data-toggle="tab"
            onClick={() => selectTab(target)}
            data-target={target}
          >
            <i className={`fa fa-${icon}`}></i> {label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)
