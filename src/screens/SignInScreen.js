import React, { useState } from 'react'
import './SignInScreen.css'
function SignInScreen() {
    const [color,setColor]=useState(false);
    console.log(color);
    return (
        <div className="signInScreen">
            <h1>Sign In</h1>
            <form className="signInForm">
                <input onClick={()=>setColor(true)} placeholder="Email or phone number"/>
                <input placeholder="Password"/>
                <button className="buttonSignIn">Sign In</button>
                <h3>OR</h3>
                <button className="google_SignIn">Sign In with Google</button>
            </form>
        </div>
    )
}

export default SignInScreen
