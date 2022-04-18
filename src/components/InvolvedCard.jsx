import React from 'react';
import InvolvedModal from './InvolvedModal';
import { SectionTitle }from '../components/PageElements';
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

const InvolvedCard =({ 
    className, 
    title, 
    contentOne, 
    contentTwo, 
    contentThree,
    modalHeaderText,
    modalBodyText,
    modalBodyTextTwo, 
    modalBodyTextThree, 
    value,
    to,
    imageSrc, 
    imageName
    }) => {

    return (
        <React.Fragment >
            <Row className={className}>
                <Col lg={6} className='my-auto' >
                <SectionTitle sectionTitle={title} className='px-3 px-sm-0'/>
                    <p className='mission-text '>{contentOne}<Link to='/contact' style={{textDecoration: 'underline'}}>contact us</Link>.</p>
                    <p className='mission-text '>
                        {contentThree}<Link to='/faqs' style={{textDecoration: 'underline'}}>FAQs</Link>. 
                        {contentTwo}
                    </p>
                    <InvolvedModal 
                        modalHeaderText={modalHeaderText}
                        modalBodyText={modalBodyText}
                        modalBodyTextTwo={modalBodyTextTwo}
                        modalBodyTextThree={modalBodyTextThree}
                        value={value}
                        to={to}
                        text={title}
                    />
                </Col>
                <Col lg={6}>
                    <img 
                        className='col d-flex my-4 my-lg-5 mr-3 img-fluid p-0 img-thumbnail' 
                        style={{maxWidth: '525px', maxHeight: '395px'}}
                        src={imageSrc} 
                        alt={imageName} 
                    />
                </Col> 
            </Row>
        </React.Fragment>
    );
}

export default InvolvedCard;