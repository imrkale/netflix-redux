import React, { useRef, useState } from 'react'
import {auth,provider} from '../firebase'
import './SignInScreen.css'
function SignInScreen() {
    const emailRef=useRef();
    const passRef=useRef();
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{alert(error.message)});
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{alert(error.message)});
    }
    const googleSignIn=e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error=>alert(error.message));
    }

    return (
        <div className="signInScreen">
            <h1>Sign In</h1>
            <form className="signInForm">
                <input ref={emailRef} placeholder="Email or phone number"/>
                <input ref={passRef} placeholder="Password"/>
                <button onClick={signIn} className="buttonSignIn">Sign In</button>
                <h3>OR</h3>
                <button onClick={googleSignIn} className="google_SignIn">Sign In with Google</button>
                <h6>New to Netflix ?<span onClick={register}>Sign Up Now</span></h6>
            </form>
        </div>
    )
    }
export default SignInScreen
