import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavLink, useLocation  } from 'react-router-dom';
import HostHeader from './HostHeader';
import newLogo from '../images/new-logo.svg';

// Component for Navbar NavItems
function LinkTitle ({ className, navClass, to, title, onClick }) {
    return (
        <NavItem className={className}>
            <NavLink
                className={navClass} activeClassName='nav-active' 
                to={to} 
                onClick={onClick}>
                    {title}
            </NavLink>
        </NavItem>
    );
}


export const Header = () => {

    const [navigation, setNavigation] = useState(false);
    const openNav = () => setNavigation(!navigation);
    const toggleNav = () => {
        (navigation ? setNavigation(!navigation): setNavigation(navigation));
    };
    
    const RenderHostHeader= () => {
        const location = useLocation();
        return location.pathname === '/home' ? null : <HostHeader />;
    }
    
    return (
        <React.Fragment>
            <Navbar className='navbar navbar-expand-lg d-flex justify-content-end sticky-top text-light mynav' style={{zIndex: '5'}}>
                <div className='container justify-content-between'>
                    <div className='d-flex'>
                        <NavLink tag='link' to='/home'
                                onClick={toggleNav}>
                                <img src={newLogo}  alt='logo' className='text-lg nav-logo mt-1' />
                        </NavLink>
                        <RenderHostHeader />
                    </div>
                    <NavbarToggler onClick={openNav} className='justify-content-end'>
                        <i className='fa fa-bars fa-lg text-success nv-icon '/> 
                    </NavbarToggler>
                    <Collapse isOpen={navigation} navbar className='justify-content-end'>
                        <Nav navbar className='ml-auto text-center text-light'>
                            <LinkTitle to='/about' title='About' navClass='nav-link' onClick={toggleNav} />
                            <LinkTitle to='/involved' title='Get Involved' navClass='nav-link' onClick={toggleNav} />
                            <LinkTitle to='/contact' title='Contact' navClass='nav-link' onClick={toggleNav} />
                            <LinkTitle to='/volunteersignup' title='Volunteer' navClass='nav-link' onClick={toggleNav} />
                            <LinkTitle to='/volunteerspotlight' title='Spotlight' navClass='nav-link' onClick={toggleNav} />
                            <LinkTitle to='/faqs' title='FAQs' navClass='nav-link' onClick={toggleNav} />
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;