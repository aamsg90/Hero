import React from 'react';
import { NavLink } from 'react-router-dom';
import newLogo from '../images/new-logo.svg';

// Header Title in Navbar
const HostHeader = () => {
    return (
        <NavLink to='/home' >
            <p className='host-header my-1 ml-1 pl-2 d-none d-sm-block'>H<img src={newLogo}  alt='logo' className='nav-logo-sm' />st a <br />
                Healthcare Hero
            </p>
        </NavLink>
    )
};

export default HostHeader;