import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'
function ProfileScreen() {
    const user=useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Profile"/>
                    <div className="profileScreen_details">
                        <h2 style={{color:"white"}}>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <div className="plansList">
                                <h3>Renewal date: 04/03/2018</h3>
                                <div className="planslist_no">
                                    <div>
                                        <h4>Netflix Standarad</h4>
                                        <span>1080p</span>
                                    </div>
                                    <button>Subscribe</button>
                                </div>
                                <div className="planslist_no">
                                    <div>
                                        <h4>Netflix Standarad</h4>
                                        <span>1080p</span>
                                    </div>
                                    <button>Subscribe</button>
                                </div>
                                <div className="planslist_no">
                                    <div>
                                        <h4>Netflix Standarad</h4>
                                        <span>1080p</span>
                                    </div>
                                    <button>Current Pack</button>
                                </div>
                            </div>
                            <button onClick={()=>auth.signOut()} className="profileScreen_signout">Sign Out</button>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
