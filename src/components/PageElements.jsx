import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export const SiteCrumbs = ({ siteLocation }) => {
    return (
        <Breadcrumb className='breadcrumb mb-0 px-0 sticky' id='Top'>
            <BreadcrumbItem className='bc-prev text-success '><Link to='/' className='site-link'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active className='text-warning bc-now'>{siteLocation}</BreadcrumbItem>
        </Breadcrumb>
    );
}

export const PageTitle = ({ pageTitle }) => {
    return (
        <div className='container-fluid'>
            <Fade bottom cascade> 
                <h1 className='text-center' style={{color: '#96c0ee'}}>{pageTitle}</h1>
            </Fade>
        </div>
    );
}

export const SectionTitle = ({ sectionTitle }) => {
    return (
        <div className='container-fluid p-0'>
            <Fade bottom cascade >
                <h2 >{sectionTitle}</h2>
            </Fade>
        </div> 
    )
}

export const PageHeader = ({ siteLocation, pageTitle }) => {
    return (
        <div className='container mb-3'>
            <Row>
                <Col className='px-0'>
                    <SiteCrumbs siteLocation={siteLocation} />
                    <PageTitle pageTitle={pageTitle} />
                </Col>
            </Row>
        </div>
    );
}
