import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg"

// Assigns the icons, path to the page, and the title to the menu items on the navigation bar
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <SiIcons.SiGooglemessages />,
        cName: 'nav-text'
    },
    {
        title: 'Leaderboard',
        path: '/leaderboard',
        icon: <FaIcons.FaCrown />,
        cName: 'nav-text'
    },
    {
        title: 'Shop',
        path: '/shop',
        icon: <AiIcons.AiFillShopping />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    }
]