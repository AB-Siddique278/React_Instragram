import React from 'react';
import "../styles/navigation.scss"
import logo from "../images/instagramLogo.png"
import searchIcon from "../images/searchIcon.png"
import Menu from './Menu';
const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='container'>
                <img className='logo' src={logo} alt="" />
                <div className='search'>
                    <img className='searchIcon' src={searchIcon} alt="" />
                    <span className='searchText'>Search</span>
                </div>
                <Menu></Menu>
            </div>
            
        </div>
    );
};

export default Navigation;