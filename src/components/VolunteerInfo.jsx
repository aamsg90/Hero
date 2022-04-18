import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const VolunteerInfo = () => {
    return (
        <div className='container'>
            <Fade bottom cascade>
                <Row className='row-content pb-0'>
                    <Col md={7} >
                        <p className='mission-text'>
                            We are excited about your interest in becoming a <strong>Host a Healthcare Hero</strong> volunteer. 
                            Our volunteer community is constantly growing and we are looking for volunteers who are passionate about 
                            showing healthcare workers their appreciation. 
                        </p>
                        <p className='mission-text'>
                            Get started by completing the form below and a Volunteer Coordinator will contact you within 2 business days to discuss the onboarding process. 
                            In the meantime, you can review our <Link to='/faqs' style={{textDecoration: 'underline'}}>FAQs</Link> or <Link to='/contact' style={{textDecoration: 'underline'}}>contact us</Link>.
                        </p>
                        <p className='mission-text'>
                            We're look forward to you becoming a Hero Volunteer!
                        </p>
                        <p className='mission-text'>
                            Lorem ipsum, Volunteer Manager
                        </p>
                    </Col>
                </Row>
            </Fade>
        </div>
    );
}

export default VolunteerInfo;