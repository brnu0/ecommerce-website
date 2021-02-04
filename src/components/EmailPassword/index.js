import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import { auth } from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button'; 

const initialState = {
    email: '',
    errors: []
};

class EmailPassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value} = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const { email } = this.state;

        const config = {
            url: 'http://localhost:3000/login'
        }
        
        try {
            
            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    //console.log('Password Reset');
                    this.props.history.push('/login');
                }).catch(() => {
                    //console.log('Something went wrong');
                    const err =['Email not found. Please try again.'];
                    this.setState({
                        errors: err
                    })
                });
        } catch (err) {
            // console.log(err);
        }
    }


    render(){

        const { email, errors } = this.state;

        const configAuthWrapper = {
            headline: 'Email Password'
        };

        return (
            <AuthWrapper { ...configAuthWrapper }>
                <div className="formWrap">

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return(
                                    <li key={index}>
                                        {err}
                                    </li> 
                                );
                            })}
                        </ul>
                    )}

                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={this.handleChange}
                        />
                        <Button type="submit">
                            Email Password
                        </Button>
                    </form>
                </div>
            </AuthWrapper>
        );
    }
}

export default withRouter(EmailPassword);