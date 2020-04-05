import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Main from './Pages/Main';
function App() {
  return (
    <BrowserRouter>

<div class="wrapper">
    <Sidebar/>
    <div id="content">
      <Header/>
      <Main/>
    </div>
</div>     
    
    
   
  </BrowserRouter>
  );
}

export default App;
