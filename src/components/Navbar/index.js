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
                Uplft
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'yellow' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/messages" 
                  activeStyle={{ color: 'yellow' }}
                >
                    Messages
                </NavLink>
                <NavLink 
                  to="/profile" 
                  activeStyle={{ color: 'yellow' }}
                >
                    Profile
                </NavLink>
                <NavLink 
                  to="/leaderboard" 
                  activeStyle={{ color: 'yellow' }}
                >
                    Leaderboard
                </NavLink>
                <NavLink 
                  to="/shop" 
                  activeStyle={{ color: 'yellow' }}
                >
                    Shop
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;

