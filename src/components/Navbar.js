import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js'
import './Navbar.css';
import { IconContext } from 'react-icons';
import "@fontsource/comfortaa";

function Navbar() {
    const [sidebar] = useState(true)
    
    return (
        <>
            <IconContext.Provider value={{ color: '#ffff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li>
                            <a className='title'>Uplft</a>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar