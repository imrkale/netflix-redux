import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {auth,provider} from './firebase'
import {useDispatch,useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        alert("User Logged In")
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        alert("User not logged In")
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [])
  return (
    <>
    {!user?(<Login/>):
    <div className="app">
    <Router>
     <Switch>
       <Route path="/">
         <HomeScreen/>
       </Route>
     </Switch>
  </Router>
  </div>}
    </>
    
  );
}

export default App;
