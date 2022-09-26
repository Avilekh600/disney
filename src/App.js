import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import kabb from './components/kabb';
import Premgeet from './components/Premgeet';
import Login from './components/Login';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Kabb from './components/kabb';

function App() {
  return (
    <div className="App">
       
      
        <Router>
        
          <Header />
          <Routes>
             <Route path="/details" element={ <Details/>}> </Route>
             <Route path="/kabbadi" element={ <Kabb/>}> </Route>
             <Route path="/premgeet" element={ <Premgeet/>}> </Route>
             
             <Route path="/home" element={<Home />} >   </Route>
             <Route path="/" element={<Login />} >   </Route>
          </Routes>
        </Router>

     

       
     
     
     
    </div>
  );
}

export default App;
