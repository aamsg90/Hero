import { SEO } from '../components/SEO';
import { PageHeader }from '../components/PageElements';
import VolunteerInfo from '../components/VolunteerInfo';
import VolunteerForm from '../components/VolunteerForm';

const VolunteerSignUp = () => {
    return (
        <div className='container'>
            <SEO title='Volunteer | Host a Healthcare Hero' description='description' content='Volunteer form page of the website' /> 
            <PageHeader siteLocation='Volunteer' pageTitle='Volunteer' />
            <VolunteerInfo />
            <VolunteerForm />
        </div>
    );
}
export default VolunteerSignUp;