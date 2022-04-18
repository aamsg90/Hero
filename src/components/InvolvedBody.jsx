import React from 'react';
import InvolvedCard from './InvolvedCard';
import SectionBreak from './SectionBreak';
import Fade from 'react-reveal/Fade';
import volImg from '../images/volunteer.jpg';
import sponImg from '../images/sponsor.jpeg';
import donImg from '../images/donate.jpg';

const InvolvedBody = () => {
    return (
        <div className='container'>
            <Fade left >
                <InvolvedCard className='row row-content' 
                    title='Volunteer'
                    contentOne='We provide thousands of services to healthcare workers and it could not be done without you. We are always looking for volunteers to help us out. If you are interested in volunteering, please '
                    contentTwo=' To learn more about the volunteer process, please click the button below.'
                    contentThree='Feel free to review our '
                    imageSrc={volImg}
                    imageName='volunteer image'
                    modalHeaderText='Volunteer'
                    modalBodyText='Thank you for your interest in volunteering! Our goal is to place our volunteers with Mission Sponsors that suit the volunteers interests, vocation or both. '
                    modalBodyTextTwo='A Volunteer Coordinator will work with you, indvidually, to ensure that your placement is seemless. We appreciate your help and would love to have you as a volunteer.'
                    modalBodyTextThree=' Please click the button below to complete the volunteer form and a coordinator will reach out to you within 2 business days.'
                    value='Go'
                    to='/volunteersignup'
                />
            </Fade>
            <SectionBreak />

            <Fade right>
                <InvolvedCard className='row row-content flex-lg-row-reverse'
                    title='Sponsor Us'
                    contentOne='Host a Healthcare Hero is a non-profit organization. We are funded 100% by the generosity of our Mission Sponsors. We are looking for sponsors to help us grow our mission. If you or your organization is interested in becoming a Mission Sponsor, please '
                    contentThree='Click the button below to learn more, or, review our '
                    imageSrc={sponImg}
                    imageName='sponsor image'
                    modalHeaderText='Sponsor Us'
                    modalBodyText='Our Mission Sponsors are organizations that are willing to help us provide meals, health & wellness, fitness, personal care and other services free of charge to our healthcare heroes. '
                    modalBodyTextTwo='If you are a business owner or your employer is interested in becoming a Mission Sponsor, please click the button below to contact us.'
                    modalBodyTextThree=' We are looking forward to working with you!'
                    value='Go'
                    to='/contact'
                />
            </Fade>
            <SectionBreak />

            <Fade left>
                <InvolvedCard className='row row-content '
                    title='Donations'
                    contentOne='You or your organization can donate items, become a designated drop-off site, or donate directly to the local food pantry. If you have questions about donating, please '
                    contentTwo=''
                    contentThree='You can also click the button below or review our '
                    imageSrc={donImg}
                    imageName='donations image'
                    modalHeaderText='Donations'
                    modalBodyText='We do not ask for monetary donations from individual donors. However, we do ask for other donations from individuals and organizations that are willing to donate to Host a Healthcare Hero. '
                    modalBodyTextTwo='I know this is hard to believe but we simply prefer that you donate time, food items, fitness equipment, personal care products...etc. You can even host a food drive!'
                    modalBodyTextThree='To find out more about donating, please click the button below to contact us.'
                    value='Go'
                    to='/contact'
                /> 
            </Fade>
        </div>
    );
}

export default InvolvedBody;