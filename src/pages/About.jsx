import { SEO } from '../components/SEO';
import { SiteCrumbs } from '../components/PageElements';
import { PageTitle } from '../components/PageElements';
import { Accordion } from '../components/Accordion';
import { Row, Col } from 'reactstrap';
import { SectionTitle }from '../components/PageElements';
import SectionBreak from '../components/SectionBreak';
import AboutTable from '../components/AboutTable';
import Fade from 'react-reveal/Fade';
import aboutImg from '../images/about.jpg';

// accordion for each sponsor
const RenderAccordionItem = ({ sponsor }) => {
    return (
        <Accordion
            name={sponsor.name} 
            description={sponsor.description} 
            titleHolder='bg-primary px-3 py-2 accordion-title hero-title'
        />
    );
};

// render each staff member
const RenderTeamMember = ({ member}) => {
    return (
        <Col className='mission-text px-0'>
            <Fade bottom >
                <p>{member.name}, {member.title}</p>
            </Fade>
        </Col> 
    );
};


const About = (props) => {

    //map through & return each sponsor as an accordion
    const sponsor = props.sponsors.map(sponsor => {
        return (
            <Col key={sponsor.id} className='p-0'>
                <RenderAccordionItem
                    sponsor={sponsor}
                />
            </Col>
        )
    });

    // map through & return each staff member
    const memberList = props.members.map(member => {
        return (
            <Col key={member.id} className='px-sm-0 px-0'>
                <RenderTeamMember
                    member={member}
                />
            </Col>
        )
    });

    return (
        <div className='container' style={{overflowX: 'hidden'}}>
            <SEO title='About Us | Host A Healthcare Hero'  description='description' content='About page of website' />
            <SiteCrumbs siteLocation='About' />
            <PageTitle pageTitle='Our Mission' />
            <Row className='row-content pt-0'>
                <Col className='px-sm-0'>
                    <p className='text-center mission-text'>
                        Around the world, healthcare workers have been stretched beyond their limits. Many have succumbed to illness 
                        and have been estranged from their loved ones. Right here in northern New Jersey, like most, our healthcare workers
                        have gone above and beyond to provide us with quality care. Yet, they have little time for themselves. 
                        <strong > Host a Healthcare Hero </strong> is committed to showing healthcare heroes that we appreciate them. 
                        Their well being is just as important as ours. We aim to provide meals, health & wellness, fitness and personal care services free of charge to our 
                        healthcare heroes.
                    </p>
                </Col>
            </Row>
        
            <SectionBreak />
            
            <Row>
                <Col className='px-sm-0 mt-5'>
                    <img className='col img-fluid d-flex mb-3 mb-xl-0 mr-3 p-0 pt-lg-0 img-thumbnail' src={aboutImg} alt='staff' />
                </Col>
            </Row>

            <Row className='pt-4'> 
                <Col className='px-0'>
                    <Col className='px-3 px-sm-0'>
                        <SectionTitle sectionTitle='Our History' color='#96c0ee' />
                    </Col>
                    
                    <Col className='mission-text mb-3 px-sm-0'>
                        It all began in 2010. Sofia Dawson was fresh out of nursing school and headed to her 
                        first job as a nurse. Like many nurses, she was excited to provide care for her patients.
                        But, she soon saw a side of the healthcare profession that is not taught in school. She saw 
                        that not only were nurses stressed, overworked  and unhealthy, so were workers from every aspect of 
                        healthcare. 
                    </Col>
                </Col>
            </Row>
            <Row className='pb-lg-4'>
                <Col className='px-0 pr-xl-3'>
                    <Col className='mission-text px-sm-0 mb-3'>
                        Sofia was determined to not just make a difference for her patients but for her coworkers, too. She 
                        found that many of her coworkers only ate one meal a day - usually an unhealthy one. Most found it hard to 
                        sleep after their shifts even though they were on their feet for 12 to 14 hours each day. In addition, many were in poor health. 
                        She also learned that they had very little time for basic personal care, like a simple haircut.
                    </Col>
                    <Col className='mission-text px-sm-0 mb-4'>
                        She began researching healthy eating and mindful meditation. Before long, Sofia was sharing this information
                        with her peers. Eventually, this collective sharing included fitness tips.  The core group consisted of five healthcare
                        professionals that branched out and shared health and wellness tips throughout northern New Jersey. They were
                        healthcare heroes.
                    </Col>
                </Col> 
                <Row className='flex-lg-row-reverse '>
                    <Col>
                        <Col className='mission-text mb-4 mb-md-0 my-xl-3 px-sm-0 pr-lg-0'>
                            In 2019, Sofia was given the opportunity to speak at a healthcare symposium. She invited her fellow
                            heroes to join her. It was at that event, that they decided to make it official. <strong>Host a Healthcare Hero </strong>
                            was born. Six months later, the Covid-19 pandemic hit northern New Jersey. As the healthcare system
                            was tested, Host a Healthcare Hero was more determined than ever to provide quality care for patients and 
                            healthcare workers. The call went out for help, community heroes answered and the rest is history.
                        </Col>
                    </Col> 
                    <AboutTable />
                </Row>
            </Row>
            <SectionBreak />

            {/* MISSION SPONSORS */}
            {/* Each sponsor is rendered in this row as an accordion item */}
        
            <Row className='row-content'>
                <Col xs={12} className='px-sm-0'>
                    <SectionTitle sectionTitle='Hero Sponsors' color='primary' />
                </Col>
                <Col xs={12} className='p-0'>
                    {sponsor}
                </Col>
            </Row>
            
            <SectionBreak />
            {/* END MISSION SPONSORS  */}

            {/* FOUNDATION */}
            {/* Member list is rendered in this row */}
            <Row className='row-content'>
                <Col className='px-sm-0'>
                    <SectionTitle sectionTitle='Host a Healthcare Hero' color='96c0ee' />
                    
                </Col>
                <Col xs={12} className='px-sm-0'>
                    {memberList}
                </Col>
            </Row> 
            {/* END FOUNDATION */}
        </div>
    );
}

export default About;