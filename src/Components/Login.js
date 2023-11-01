import React, { useState } from 'react'
import "./Login.css"
import logo from "../Images/logo.png"
import { Link, useNavigate } from 'react-router-dom'




// firebase
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // using this we will push the user to homepage on signing in
    const navigate = useNavigate();

    // firebase signin
    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                const user = userAuth.user;

                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    }



    // firebase register
    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {

                // console.warn("AUTH", userAuth);


                if (userAuth) {
                    // now after creating account user will send to homepage
                    navigate("/");
                }

            })
            .catch((error) => {
                alert(error.message);
            });

    }



    return (
        <div className='login'>

            <Link to="/">
                <img src={logo} alt="logo" className='login_logo' />
            </Link>


            <div className="login_container">
                <h1>Sign in</h1>

                <form action="">
                    <h5>Email</h5>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type='submit'
                        className='login_signInButton'
                        onClick={signIn}
                    >Sign In</button>

                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button
                    onClick={register}
                    className='login_registerButton'>Create Your Amazon Account</button>

            </div>

        </div>
    )
}

export default Login
