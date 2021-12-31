import React from "react"
import MenuItem from "./MenuItem"
import MenuTree from "./MenuTree"


export default props => (
  <ul className="sidebar-menu">
    <MenuItem path='/' icon='dashboard' label='Dashboard'/>
    <MenuTree label='Cadastro' icon='edit'>
      <MenuItem path='billingCycles' icon='usd' label='Ciclo de Pagamentos'/>
    </MenuTree>
  </ul>
)