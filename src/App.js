import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EndYFilter from './components/Filter/EndYFilter';
import TopicFilter from './components/Filter/TopicFilter';
import SectorFilter from './components/Filter/SectorFilter';
import  RegionFilter  from './components/Filter/RegionFilter';
import  SourceFilter  from './components/Filter/SourceFilter';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import CountryFilter from './components/Filter/CountryFilter';
import CityFilter from './components/Filter/CityFilter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/filters/end_year' element={<Layout><EndYFilter /></Layout>} />
          <Route path='/filters/topic' element={<Layout><TopicFilter /></Layout>} />
          <Route path='/filters/sector' element={<Layout><SectorFilter /></Layout>} />
          <Route path='/filters/region' element={<Layout><RegionFilter /></Layout>} />
          <Route path='/filters/source' element={<Layout><SourceFilter /></Layout>} />
          <Route path='/filters/country' element={<Layout><CountryFilter /></Layout>} />
          <Route path='/filters/city' element={<Layout><CityFilter /></Layout>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
