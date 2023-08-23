
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import HomeComponent from './components/pages/HomeComponent/HomeComponent';
import SportComponent from './components/pages/SportComponent/SportComponent';
import logo from './assets/images/logo.png';
import FloorPlanComponent from './components/pages/FloorPlanComponent/FloorPlanComponent';
import CommunityComponent from './components/pages/CommunityComponent/CommunityComponent';
import GalleryComponent from './components/pages/GalleryComponent/GalleryComponent';
import LoginComponent from './components/pages/LoginComponent/LoginComponent';
import ThankyouComponent from './components/thankyouComponent/ThankyouComponent';

const AppRouter = () => {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <div className="logo">
       <Link to="/"> <img style={{width: "300px"}} src={logo} alt="Site Logo" /></Link>
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li class="nav-item">
        <Link className='text-decoration-none text-uppercase px-3' to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className='text-decoration-none text-uppercase px-3' to="/floorplan">Floorplan</Link>
        </li>

        <li class="nav-item">
        <Link className='text-decoration-none text-uppercase px-3' to="/community">Community</Link>
        </li>
        <li class="nav-item">
        <Link className='text-decoration-none text-uppercase px-3' to="/gallery">Gallery </Link>
        </li>
        <li class="nav-item">
        <Link className='text-decoration-none text-uppercase px-3' to="/login"> <button className='btn btn-primary'>
            LogIn
        </button> </Link>
        </li>
     
      </ul>
   
    </div>
  </div>
</nav>
    
       <Routes>
                    <Route path="/" exact element={<HomeComponent/>} />
                    <Route path="/sport" element={<SportComponent/>} />
                    <Route path="/floorplan" element={<FloorPlanComponent/>} />
                    <Route path="/community" element={<CommunityComponent/>} />
                    <Route path="/gallery" element={<GalleryComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/thankyou" element={<ThankyouComponent/>} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
