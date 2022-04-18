import React from 'react';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import newLogo from '../images/new-logo.svg';

const AboutTable = () => {
    return (
        <Col lg={6} className='mb-0 mb-5 px-4 border-primary'>
            <div className="container mt-md-2 p-3  about-table-holder">
                <Card className='col my-auto mb-md-0  mt-lg-0 border-0 px-0 about-card-holder'>
                    <CardHeader className='bg-primary border-bottom-0 text-white '>
                        <span className='about-table-header'>By the Numbers</span>
                        <img src={newLogo} className='float-right table-icon'  alt='logo'/>
                    </CardHeader>
                    <CardBody className='py-0 border-0 text-primary about-card-body'>
                        <Row className='mb-0 border border-primary border-top-0 border-bottom-0 about-card-odd'>
                            <Col className='mb-0 py-2 table-text'>Founded</Col>
                            <Col className='mb-0 py-2 table-text'>June 24, 2019</Col>
                        </Row>
                        <Row className='mb-0 border border-primary border-top-0 border-bottom-0 about-card-even'>
                            <Col className='mb-0 py-2 table-text'>Headquarters</Col>
                            <Col className='mb-0 py-2 table-text'>Fictitious City, NJ</Col>
                        </Row>
                        <Row className='mb-0 border border-primary border-top-0 border-bottom-0 about-card-odd'>
                            <Col className='mb-0 py-2 table-text'>Employees</Col>
                            <Col className='mb-0 py-2'>27</Col>
                        </Row>
                        <Row className='mb-0 border border-primary border-top-0 border-bottom-0 about-card-even'>
                            <Col className='mb-0 py-2 table-text'>Sponsors</Col>
                            <Col className='mb-0 py-2 table-text'>5</Col>
                        </Row>
                        <Row className='mb-0 border border-primary border-top-0 about-card-odd last-dt'>
                            <Col className='mb-0 py-2 table-text'>Volunteers</Col>
                            <Col className='mb-0 py-2 table-text'>551</Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
}

export default AboutTable;