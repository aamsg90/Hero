import React from 'react';
import { Row, Col } from 'reactstrap';

export const Loading = () => {
    return (
        <div className='container d-flex justify-content-around' style={{height: '100vh'}}>
            <Row className=' row-content  align-self-center'>
                <Col xs={12} className='p-0'>
                    <i className='fa fa-spinner fa-pulse fa-5x fa-fw text-warning'/>
                    <p className='text-warning text-center mt-3 pl-2' style={{fontSize:'20px'}}>Loading...</p>
                </Col>
            </Row>
        </div>
    );
};

