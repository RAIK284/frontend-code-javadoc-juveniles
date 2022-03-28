import React from 'react';
const SideNav = (props) => {
return (
<div className="sidenav">
   <a href="#section">About</a>
   <a href="#section">Services</a>
   <a href="#section">Clients</a>
   <a href="#section">Contact</a>
   <div style={{ width: '25%', paddingTop: '20px' }}></div>
</div>
 );
};
export default SideNav;