import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js'
import './Navbar.css';
import { IconContext } from 'react-icons';
import "@fontsource/comfortaa";

/* this sets the navigation bar to true in the use state, so it appears on all the pages and this file 
controls the navigation bar and its components*/
function Navbar() {
    const [sidebar] = useState(true)

    return (
        <>
            {/* this makes all the icons white, so it is uniform */}
            <IconContext.Provider value={{ color: '#ffff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li>
                            <a className='titlepage'>Uplft</a>
                        </li>
                        {/* this maps out the naviagtion bar linking it to the name, path, and icon data */}
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