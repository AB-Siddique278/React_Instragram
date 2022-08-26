import React from 'react'
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";

import image from "../images/profile.jpg";

export default function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="aleks.popovic"
          caption="Aleksandar Popović"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
       
       
      </div>
    </Sticky>
  )
}
