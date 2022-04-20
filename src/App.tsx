import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Misdemeanours } from './components/misdemeanours';
import { Confession } from './components/confession';
import { NotFound } from './components/notFound';
import { MainLayout } from './components/layout';
import generateMisdemeanours, { Misdemeanour } from './docs/generate_misdemeanours';
import { IMisdemeanour, MisdemeanourContext } from './components/misdemeanourContext';

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
  const [misdemeanourApp, setMisdemeanour] = useState<Array<IMisdemeanour>>([]);
  
  useEffect(()=>{
    const getMisdemeanours = async () => {
      const response = await generateMisdemeanours(10);
      setMisdemeanour(response);
    }
    getMisdemeanours();
  },[]);

  return (
    <MisdemeanourContext.Provider value = {misdemeanourApp}>
      <div className="App">
        <Router/>
      </div>
    </MisdemeanourContext.Provider>
  );
}

export default App;
