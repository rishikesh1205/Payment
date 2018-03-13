import React from 'react';

const SideBarItem = ({name, link, type})=>(
  <a className="text-light sidebar_item" href={link}>
    <li className={`p-4 w-100 ${(type==="active")?"bg-secondary":"bg-dark"}`}>
      {name}
    </li>
  </a>
);
export default SideBarItem;
