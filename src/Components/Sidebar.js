// import React from 'react'
// import "../styles/sidebar.scss";
// import Sticky from "react-sticky-el";
// import Profile from "./Profile";

// import image from "../images/profile.jpg";
// import Suggestions from './Suggestions';
// import Footer from './Footer';

// export default function Sidebar() {
//   return (
//     <Sticky topOffset={-80}>
//       <div className="sidebar">
//         <Profile
//           username="aleks.popovic"
//           caption="Aleksandar Popović"
//           urlText="Switch"
//           iconSize="big"
//           image={image}
//         />
//         <Suggestions />
//         <Footer />
//       </div>
//     </Sticky>
//   )
// }

import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg";

function Sidebar() {
    return (
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile
                        username="Johnny Depp"
                        caption="John Christopher Depp"
                        urlText="Switch"
                        iconSize="big"
                        image={image}
                    />
                    <Suggestions />
                    <Footer />
                </div>
            </Sticky>

        

    );
}

export default Sidebar;




