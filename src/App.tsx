import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Misdemeanours } from './components/misdemeanours';
import { Confession } from './components/confession';

const Router: React.FC = () => 
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/misdemeanours' element = {<Misdemeanours/>} />
      <Route path = '/confession' element = {<Confession/>} />
    </Routes>
  </BrowserRouter>


function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
