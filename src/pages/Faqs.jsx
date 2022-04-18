import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { PageHeader }from '../components/PageElements';
import { Accordion} from '../components/Accordion';
import { Row, Col} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Fade from 'react-reveal/Fade';


const RenderFaq = ({ faq }) => {
    return (
        <Accordion
            name={faq.question} 
            description={faq.answer}
            titleHolder={'accordion-title faq-accordion-title py-2 px-3 '}
            className='faq-accordion-description'
        />
    );
}

const RenderFaqSection = ({ faqTitle, factType }) => {
    return (
        <div className='container p-0 mt-3'>
            <Row className='row-content ' >
                <Col xs={12} className='px-sm-0'>
                    <Fade bottom cascade >
                        <h2 className='text-success'>{faqTitle}</h2>
                    </Fade>
                </Col>
                <Col xs={12} className='p-0'>
                    {factType}
                </Col>
            </Row>
        </div>
    );
}

const FaqHeader = () => {
    return (
        <Fade bottom cascade>
            <div className='container text-center'>
                <h1 style={{color: '#96c0ee'}}> Frequently <br /> Asked Questions</h1>
            </div>
        </Fade>
    );
}

const Faqs = ({ faqs }) => {
    const [ category, setCategory ] = useState('generalFaqs');
    
    const generalFaqs = faqs.filter(faq => faq.category === 'General').map(filteredFaq => { 
        return (
            <Col key={filteredFaq.id} className='p-0'>
                <RenderFaq
                    faq = {filteredFaq}
                />
            </Col>
        );
    });

    const volunteerFaqs = faqs.filter(faq => faq.category === 'Volunteer').map(filteredFaq => { 
        return (
            <Col key={filteredFaq.id} className='p-0'>
                <RenderFaq
                    faq = {filteredFaq}
                />
            </Col>
        );
    });

    const donateFaqs = faqs.filter(faq => faq.category === 'Donate').map(filteredFaq => { 
        return (
            <Col key={filteredFaq.id} className='p-0'>
                <RenderFaq
                    faq = {filteredFaq}
                />
            </Col>
        );
    });

    const sponsorFaqs = faqs.filter(faq => faq.category === 'Sponsor').map(filteredFaq => { 
        return (
            <Col key={filteredFaq.id} className='p-0'>
                <RenderFaq
                    faq = {filteredFaq}
                />
            </Col>
        );
    });

    
    return (
        
        <div className='container'>
            <SEO title='FAQs | Host a Healthcare Hero' description='description' content='Faqs page of the website' />
            <div className='container-fluid home-bg ' id='faq'>
                <PageHeader siteLocation='FAQs' />
                <FaqHeader />
            </div>
            <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(0%)'
                }}
            >
                <div className='container text-center p-0'>
                    <button onClick={() => { setCategory('generalFaqs') }} className='btn btn-outline-success mr-sm-2 faqBtn'>General</button>
                    <button onClick={() => { setCategory('volunteerFaqs') }} className='btn btn-outline-success mr-sm-2 faqBtn'>Volunteer</button>
                    <button onClick={() => { setCategory('sponsorFaqs') }} className='btn btn-outline-success mr-sm-2 faqBtn'>Sponsor</button>
                    <button onClick={() => { setCategory('donateFaqs') }} className='btn btn-outline-success faqBtn'>Donate</button>
                </div>
            </FadeTransform>


            <div className='container mt-3 '>
                
                { 
                    (category === 'generalFaqs') ? <RenderFaqSection faqTitle='General' factType={generalFaqs} /> : null 
                }
                {
                    (category === 'volunteerFaqs') ? <RenderFaqSection faqTitle='Volunteer' factType={volunteerFaqs} /> : null 
                }
                {
                    (category === 'sponsorFaqs') ? <RenderFaqSection faqTitle='Sponsor' factType={sponsorFaqs} /> : null 
                }
                {
                    (category === 'donateFaqs') ? <RenderFaqSection faqTitle='Donate' factType={donateFaqs} /> : null 
                }
                
            </div>
        </div>
    );
}

export default Faqs;