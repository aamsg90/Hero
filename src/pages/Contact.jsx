import { SEO } from '../components/SEO';
import { PageHeader }from '../components/PageElements';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';


const Contact = () => {
        return (
            <div className='container'>
                <SEO title='Contact Us | Host a Healthcare Hero' description='description' content='Contact form page of the website' />
                <PageHeader siteLocation='Contact' pageTitle='Contact Us' />
                <ContactInfo />
                <ContactForm />
            </div>
        );
    
}

export default Contact;