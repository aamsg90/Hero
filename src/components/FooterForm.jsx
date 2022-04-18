/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Col, FormGroup, Form, Input,  FormFeedback} from 'reactstrap';
import Buttons from './Buttons';

class FooterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newsEmail: '',
            touched: {
                newsEmail: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(newsEmail) {
        const errors = {
            newsEmail: ''
        };

        const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.touched.newsEmail && !regEmail.test(newsEmail)) {
            errors.newsEmail = 'Invalid email address';
        } 
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        setTimeout(() => {
            console.log('Current State is: ' + JSON.stringify(this.state));
            console.log('NEWSLETTER REQUEST SUBMITTED');
            this.resetForm();
        }, 2000);

        event.preventDefault();
    };

    resetForm() {
        this.setState({
            newsEmail: '',
            touched: {
                newsEmail: false
            }
        });
    }
    
    render() {

        const errors = this.validate( this.state.newsEmail);

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row className='d-flex justify-content-center'>
                    <Col xs={10} sm={7} md={12} lg={10} >
                        <Input type='email' htmlFor='newsEmail'name='newsEmail' id='newsEmail' 
                            className='form-input'
                            placeholder='Email' 
                            aria-label='Email'
                            value={this.state.newsEmail}
                            invalid={!!errors.newsEmail}
                            onBlur={this.handleBlur('newsEmail')} 
                            onChange={this.handleChange} 
                        />
                        <FormFeedback className='pl-2'>{errors.newsEmail}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className=' mb-0 px-3 d-flex justify-content-center'>
                    <Buttons 
                        type='submit' 
                        color=''
                        className='btn btn-outline-light mx-auto ft-signup'
                        btntext='Sign Up'
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default FooterForm;
