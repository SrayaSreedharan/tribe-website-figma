import React from 'react';
import './StayCard.css'; 

const StayCard = (props) => {
    const { image, title, description,showButton = true} = props
  return (
    <div className="stay-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
       {showButton && <button>Explore →</button>}
      </div>
    </div>
  );
};

export default StayCard;
