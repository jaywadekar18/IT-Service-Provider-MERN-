import React, { useEffect, useState } from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Formpractice from "./Formpractice"
import Form from "./Form"
import Footer from "./Footer"



import './App.css';
import { Redirect, Route, Switch } from "react-router-dom"
import axios from "axios"

function App() {
    return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />

      </Switch>
      
      <Footer/>
      
      
      
      
      
      




      

    </>
  );
}

export default App;
