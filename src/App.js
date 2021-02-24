import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
function App() {
  const user=null;
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
