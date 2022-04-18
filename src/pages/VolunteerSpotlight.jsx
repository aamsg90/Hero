import { SEO } from '../components/SEO';
import { PageHeader }from '../components/PageElements';
import { Loading } from '../components/Loading';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import Zoom from 'react-reveal/Fade';

const RenderBioCard = ({ volunteer }) =>  {
    return (
        <div className="container mb-4 p-3 vol-card-holder">
            <Zoom duration={500}>
                <Card className='mb-0 bg-primary vol-cards'>
                    <Link to={`/volunteerspotlight/${volunteer.id}`}>
                        <CardImg className='cd-img p-2' src={process.env.PUBLIC_URL + volunteer.image} alt={volunteer.first} />
                        <CardBody className='p-1 vol-card-body text-center text-light'>
                            <CardTitle className='my-1 vol-title '>{volunteer.first}</CardTitle>
                        </CardBody>
                    </Link>
                </Card>
            </Zoom> 
        </div>
    );
}

const VolunteerSpotlight = (props) => {

    const volunteers = props.volunteers.volunteers.map(volunteer => {
        return (
            <Col md={4} key={volunteer.id} className='m-0'>
                <RenderBioCard volunteer={volunteer} />
            </Col>
        );
    });

    if (props.volunteers.infoIsLoading) {
        return (
            <div className='container'>
                <Row>
                    <Loading />
                </Row>
            </div>
        );
    }

    return (
        <div className='container'>
            <SEO title='Volunteer Spotlight | Host a Healthcare Hero' description='description' content='Spotlight on a few of the volunteers' />
            <PageHeader siteLocation='Spotlight' pageTitle='Volunteer Spotlight' />
            <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(0%)'
                }}
            > 
                <p className='text-center text-success mb-0 spotlight-intro'>
                    To get an idea of who our volunteers are, click on an image to find out more about any of these amazing people.
                </p>
            </FadeTransform>
            <Row className='row-content justify-content-around my-6'>
                {volunteers}
            </Row>
        </div>
    );
}

export default VolunteerSpotlight;