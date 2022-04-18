import React from 'react';
import { Row, Col, Nav, NavItem  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FooterForm  from './FooterForm';

// Component for NavItems
function FooterLinkTitle ({ className, navClass, to, title, onClick }) {
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

const Footer = () => {
    return (
        <footer className='site-footer text-light' >
            <div className='container'>
                <Row className='px-5 pt-5 pb-2'>
                    <Col md={4} className='mb-4 text-center p-0'>
                        <p className='mb-0 text-light ft-heading'><u className='u-line'>Address</u></p>
                        <address className='tex-light ft-info'>
                            2124 W Heroes LN, Suite 99<br />
                            Fictitious City, NJ 01007<br />
                        </address>
                        <p className='mb-0 text-light ft-heading'><u className='u-line '>Phone & Email</u></p>
                        <a role='button' className='btn btn-link p-0 text-light ft-info' href='tel:+19737774321'>
                            <i className='fa fa-phone' /> 
                            {' '}1-973-777-4321
                        </a><br />
                        <a role='button' className='btn btn-link p-0 text-light ft-info' href='mailto:notARealEmail@hostahealthcareheroes.org' >
                            <i className='fa fa-envelope-o' /> 
                            {' '}info@healthcareheroes.org
                        </a>
                    </Col>
                    
                    {/* Vertical Nav */}
                    <Col md={4} className='p-md-0'>
                        <Col className='mx-auto mx-md-0 mb-4 p-xs-3 p-md-0 px-md-auto'>
                            <p className='mb-0 text-light text-center ft-heading'><u className='u-line'>Info</u></p>
                            <Nav vertical className='list-unstyled ft-info'>
                                <FooterLinkTitle to='/about' title='About' className='text-center' navClass='ft-link' />
                                <FooterLinkTitle to='/involved' title='Get Involved' className='text-center' navClass='ft-link' />
                                <FooterLinkTitle to='/contact' title='Contact' className='text-center' navClass='ft-link' />
                                <FooterLinkTitle to='/volunteersignup' title='Volunteer' className='text-center' navClass='ft-link' />
                                <FooterLinkTitle to='/volunteerspotlight' title='Spotlight' className='text-center' navClass='ft-link' />
                                <FooterLinkTitle to='/faqs' title='FAQs' className='text-center' navClass='ft-link' />    
                            </Nav>
                        </Col>
                    </Col>
                    
                    {/* Social Media */}
                    <Col md={4} className='p-0'>
                        <div className='mb-3 text-center '>
                            <a 
                                href='http://instagram.com/' 
                                target='_blank' 
                                rel='noreferrer' 
                                aria-label='Instagram'
                                className='btn btn-social-icon pt-md-0 pl-0' 
                            >
                                <i className='fa fa-instagram text-light' />
                            </a>
                            <a  
                                href='http://facebook.com/' 
                                target='_blank' rel='noreferrer' 
                                aria-label='Facebook'
                                className='btn btn-social-icon pt-md-0'
                            >
                                <i className='fa fa-facebook text-light'/>
                            </a>
                            <a 
                                href='http://twitter.com/' 
                                target='_blank' 
                                rel='noreferrer' 
                                aria-label='Twitter'
                                className='btn btn-social-icon pt-md-0' 
                            >
                                <i className='fa fa-twitter text-light'/>
                            </a>
                            <a  
                                href='http://youtube.com/' 
                                target='_blank' rel='noreferrer' 
                                aria-label='YouTube'
                                className='btn btn-social-icon pt-md-0'
                            >
                                <i className='fa fa-youtube text-light'/>
                            </a>
                        </div>
                        <p className='update-text mb-1 text-center footer-heading'>
                            Sign up to receive news and updates.
                        </p> 
                        <FooterForm />
                    </Col>
                    <Col md={12} className='p-0 mt-3'>
                        <p className='copyright text-center text-light mb-0 pb-2'>
                            &copy; 2022 HOST A HEALTHCARE HERO <br />
                        </p> 
                    </Col>
                </Row>
            </div>
            <p className='copyright text-center text-light mb-0 pb-2 design'>
                Site Designed & Built by <a href='https://www.linkedin.com/in/pia-torain-dev/' target='_blank' rel='noreferrer'><u className='u-line'>Pia Torain</u></a>
            </p>
        </footer>
    );
}

export default Footer;