import NavbarComponent from "../navComponent/NavbarComponent";
import banner from "./../../assets/images/banner.png";
import './BannerComponent.scss';

const BannerComponent = () => {
    return (
     <>
     <div className="BannerContent">
     <img src={banner} style={{"width" : "100%"}}/>
      <p>Play it safe. Play with pomi!</p>
     </div>
      </>
       
    )
}

export default BannerComponent;
