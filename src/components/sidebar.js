import React from 'react';
import SideBarItem  from './sidebar_item';

const SideBar=()=>(
  <ul className="px-0 py-2 text-light menu-list">
    <SideBarItem name="Account Details" link="#"/>
    <SideBarItem name="Invoices" link="#" />
    <SideBarItem name="Payments" link="#" type="active"/>
  </ul>

);
export default SideBar;
