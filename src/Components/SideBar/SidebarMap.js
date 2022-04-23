import React from 'react'
import SidebarListItem from './SidebarListItem';

export default function SidebarMap(props) {
  return (
    <div>{props.sidebarArray?.map((value, index) => {
        return (
          <>
            <SidebarListItem
              name={value.name}
              icon={value.icon}
              to={value.to}
            />
          </>
        );
      })}</div>
  )
}
