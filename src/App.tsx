import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Misdemeanours } from './components/misdemeanours';
import { Confession } from './components/confession';
import { NotFound } from './components/notFound';
import { MainLayout } from './components/layout';

const Router: React.FC = () => 
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element = {<Home/>}/>
        <Route path = 'misdemeanours' element = {<Misdemeanours/>} />
        <Route path = 'confession' element = {<Confession/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Route>

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
