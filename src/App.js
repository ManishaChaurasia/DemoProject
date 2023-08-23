//import logo from './logo.svg';
//import './App.css';
import "./components/navComponent/NavbarComponent";
import "./components/bannerComponent/BannerComponent";
import NavbarComponent from "./components/navComponent/NavbarComponent";

import BannerComponent from "./components/bannerComponent/BannerComponent";
import PopupComponent from "./components/popupComponent/PopupComponent";
import { Switch } from 'react-router-dom';

import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <>
        {/* <NavbarComponent />
        <BannerComponent /> */}
        <AppRouter />
      </>
    </div>
  );
}

export default App;
