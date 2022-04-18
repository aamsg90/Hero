import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const ContactInfo = () =>{
    return (
        <div className='container'>
            <Fade bottom cascade> 
                <Row className='row-content pb-0 mb-4'>
                    <Col md={7} className='mission-text'>
                        <p><strong>Host a Healthcare Hero</strong> relies heavily on the strength of Mission Sponsors and
                            volunteers to provide healthcare heroes with appreciative care. We'd love to hear your thoughts, concerns and ideas.
                        </p>
                        <p>
                            Please complete the contact form below and we will get back to you as soon as possible. Also,
                            you are welcome to review our <Link to='/faqs' style={{textDecoration: 'underline'}}>FAQs</Link>.
                        </p>
                        <p>
                            Thank you for your interest in Host a Healthcare Hero!
                        </p>
                        <p>
                            Lorem ipsum, Executive Director
                        </p>
                    </Col>
                </Row>

                <Row className='p-0'>
                    <Col sm={6}>
                        <p className='mb-0 mission-text'><u >Address:</u></p>
                        <address className='address-info'>
                            2124 W Heroes LN, Suite 99<br />
                            Fictitious City, NJ 01007<br />
                        </address>
                        <p className='mb-0 mission-text'><u >Hours:</u></p>
                        <address className='address-info'>
                            Monday - Friday<br />
                            9AM - 3PM<br />
                        </address>

                        <p className='mb-0 mission-text'><u>Phone & Email</u></p>
                        <a role='button' className='btn btn-link p-0 address-info' style={{color: '#96c0ee'}} href='tel:+19737774321'><i className='fa fa-phone' ></i> 1-973-777-4321</a><br />
                        <a role='button' className='btn btn-link p-0 address-info' style={{color: '#96c0ee'}} href='mailto:notARealEmail@NotReal.org'><i className='fa fa-envelope-o' ></i> info@healthcareheroes.org</a>
                    </Col>
                </Row>
            </Fade>
        </div>
    );
}

export default ContactInfo;