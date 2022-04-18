import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from '../images/new-logo-lp.svg';
import { Link } from 'react-router-dom';

// Landing Page Text
export const Intro= () => {
    return (
        <div className='intro-container' style={{maxWidth: '95%',  height: '90vh', margin: 'auto'}}>
            <div className='border-0 px-0 mb-3 mb-md-5 text-center align-self-center justify-content-around' style={{maxWidth: '90%',  height: '80vh', margin: 'auto'}}>
                <p className='sub-text align-self-center font-weight-bold d-none d-md-block'>
                    <Fade bottom cascade>
                        <span className=''>H</span><img src={logo}  alt='logo' className='img-fluid lp-logo' /><span className=''>st a Healthcare Hero</span>
                    </Fade>
                </p>
                
                {/* mobile intro */}
                <h1 className='sub-text align-self-center font-weight-bold d-md-none mb-3'>
                    <span style={{color: '#96c0ee'}}>H</span>
                        <img src={logo}  alt='logo' className='img-fluid lp-logo' />
                    <span style={{color: '#96c0ee'}}>st</span> 
                    <br />
                    <span style={{color: '#96c0ee'}}>a
                    <br />
                        Healthcare
                        <br />
                        Hero
                    </span>
                </h1>
                <Fade bottom cascade>
                    <Link to='/about' className=' text-center btn btn-lg btn-outline-success'> Find Out More </Link> 
                </Fade>
            </div>
        </div>
    );
}

