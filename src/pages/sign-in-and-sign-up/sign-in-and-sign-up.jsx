import React from 'react';

import './sign-in-and-sign-up.scss';
import SignIn from '../../Components/sign-in/sign-in';
import  SignUP  from '../../Components/sign-up/sign-up';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn />
        <SignUP />
    </div>
);

export default SignInAndSignUpPage;