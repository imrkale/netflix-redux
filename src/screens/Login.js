import React, {useState} from 'react'
import SignInScreen from './SignInScreen'
import './Login.css'
function Login() {
    const [signIn,setSignIn]=useState(false);
    return (
        <div className="login">
            <div className="login_background">
                <img className="login_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Login Screen Logo"/>
                <button onClick={()=>setSignIn(true)} className="login_button">Sign Up</button>
                <div className="gradient"></div>
                {signIn?(<SignInScreen/>):
                (
                    <div className="form">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h4>Ready to watch? Enter your email to create or restart your membership</h4>
                    <div className="login_input">
                        <input placeholder="Email address"/>
                        <button onClick={()=>setSignIn(true)}>Get Started</button>
                    </div>
                    
                </div>
                )}
                
            </div>
        </div>
    )
}

export default Login
