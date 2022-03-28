import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/messages" 
                  activeStyle={{ color: 'black' }}
                >
                    Messages
                </NavLink>
                <NavLink 
                  to="/profile" 
                  activeStyle={{ color: 'black' }}
                >
                    Profile
                </NavLink>
                <NavLink 
                  to="/leaderboard" 
                  activeStyle={{ color: 'black' }}
                >
                    Leaderboard
                </NavLink>
                <NavLink 
                  to="/shop" 
                  activeStyle={{ color: 'black' }}
                >
                    Shop
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;