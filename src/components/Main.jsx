import React, { Component } from 'react';
import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Involved from '../pages/Involved';
import Volunteer from '../pages/Volunteer';
import VolunteerSpotlight from '../pages/VolunteerSpotlight'; 
import VolunteerBio from '../pages/VolunteerBios';
import Faqs from '../pages/Faqs';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { SEO } from './SEO';
import { useLocation, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSponsors, fetchMembers, fetchFaqs , fetchVolunteers } from '../redux/ActionCreators';

// Get the state from the redux store
const mapStateToProps = state => {
    return {
        sponsors: state.sponsors,
        members: state.members,
        faqs: state.faqs,
        volunteers: state.volunteers
    };
};
// Get the dispatch functions from the redux store
const mapDispatchToProps = {
    fetchSponsors: () => (fetchSponsors()),
    fetchMembers: () => (fetchMembers()),
    fetchFaqs: () => (fetchFaqs()),
    fetchVolunteers: () => (fetchVolunteers())
};

class Main extends Component {

    // Load data when the component is loaded
    componentDidMount() {
        this.props.fetchSponsors();
        this.props.fetchMembers();
        this.props.fetchFaqs();
        this.props.fetchVolunteers();
    }
    
    render() {

        // hide header & footer if user is on the home page
        const RenderHeader = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Header />;
        }
        const RenderFooter = () => {
            const location = useLocation();
            return location.pathname === '/home' ? null : <Footer />;
        }
        
        const VolunteerBioId = ({ match }) => {
            return (
                <VolunteerBio
                    volunteer={this.props.volunteers.volunteers.filter(volunteer => volunteer.id === +match.params.volunteerId)[0]}
                    infoIsLoading={this.props.volunteers.isLoading}
                />
            );
        };

        return (
            <div>
                <SEO title={'Host a Healthcare Hero'} content={ 'Volunteer to give back to an healtcare hero'}/>
                <RenderHeader />
                <ScrollToTop>
                <Switch>
                        <Route path='/home' component={Home} />
                        <Route exact path='/about' render={() => 
                            <About 
                                sponsors={this.props.sponsors.sponsors}
                                members={this.props.members.members}
                            /> } 
                        />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/involved' component={Involved} />
                        <Route exact path='/volunteersignup' component={Volunteer} />
                        <Route exact path='/faqs' render={() => 
                            <Faqs faqs={this.props.faqs.faqs}
                                faqIsLoading={this.props.faqs.isLoading} 
                            /> } 
                        />
                        <Route exact path='/volunteerspotlight' render={() => 
                            <VolunteerSpotlight volunteers={this.props.volunteers} />}
                        />
                        <Route exact path='/volunteerspotlight/:volunteerId' component={VolunteerBioId}/>
                        <Redirect to='/home' />
                    </Switch>
                </ScrollToTop> 
                <RenderFooter />
            </div>
        );
    }
}

// making data and action creators available to the store inside main component as a props

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));