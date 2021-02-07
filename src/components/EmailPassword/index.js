import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import { auth } from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button'; 

const EmailPassword = props => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setEmail('');
        setErrors([]);
    }

    const handleSubmit = async e =>{
        e.preventDefault();

        const config = {
            url: 'http://localhost:3000/login'
        }
        
        try {
            
            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    //console.log('Password Reset');
                    props.history.push('/login');
                }).catch(() => {
                    //console.log('Something went wrong');
                    const err =['Email not found. Please try again.'];
                    setErrors(err);
                });
        } catch (err) {
            // console.log(err);
        }
    }

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

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <Button type="submit">
                        Email Password
                    </Button>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default withRouter(EmailPassword);