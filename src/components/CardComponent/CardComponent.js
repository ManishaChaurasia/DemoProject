import React, {useState} from 'react';
import './CardComponent.scss'; // Import your SCSS or CSS file for styling
import crosswalk from '../../../src/assets/images/crosswalk-logo.png';
import banner from '../../assets/images/banner.png';

const CardComponent = ({ img, heading, title, content }) => {
    const [image , setImage] = useState("intialImage");
    const handleImageChange= () =>{
        setImage({banner})
    };
  return (
    <div className="card h-100">
      {img && <img src={img} alt="Card" className="card-image" />}
      <div className="card-content p-3">
        <h3 className="card-title">{title}</h3>
        <p className="card-heading">{heading}</p>
        <p className="card-content-text">{content}</p>
      </div>
    </div>
  );
};

export default CardComponent;
