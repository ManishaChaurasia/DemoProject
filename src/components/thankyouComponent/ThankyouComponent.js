import React from 'react';
import './ThankyouComponent.scss'; // Import your SCSS or CSS file for styling
import { Link } from 'react-router-dom';

const ThankyouPage = () => {
  return (
<>
<div className="thank-you-page">
      <h1>Thank You!</h1>
      <p>Your submission has been received.</p>
    </div>
    <div className='d-flex justify-content-center'>
      <Link to="/">
      <button className='btn btn-primary'>
            Back to Home
        </button></Link>
    </div>
</>
   
  );
};

export default ThankyouPage;
