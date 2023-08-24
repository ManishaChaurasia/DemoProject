import React from 'react';
import CardComponent from '../../CardComponent/CardComponent';
import banner from '../../../assets/images/banner.png';
import cardlogo from '../../../assets/images/crosswalk-logo.png';



const FloorPlanComponent = () => {
  return (
    <div className='container py-5'>
   
      <div className="row">
        <div className="col-lg-3 mb-5">
         <a className="text-decoration-none" href="#">
         <CardComponent
            intialImage="{banner}"
            img={cardlogo} // Add the image URL here
            heading="monica"
            title="athlete training combine"
            content="This is the content of the first card."
          />
         </a>
        </div>
        <div className='col-lg-3 mb-5'>
        <a className="text-decoration-none" href="#">
          <CardComponent
            img={banner} // Add the image URL here
            title="athlete training combine"
            // content="This is the content of the second card." //
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanComponent;
