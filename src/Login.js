import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';



function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
        //google login
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/233px-Discord_logo.svg.png' alt='' />
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login