import React from 'react';

const InfoCard = ({img, title, description, classess}) => {
    return (
        
        <div  className={`${classess}`}>
           <img  className='mx-auto w-12 h-12' src={img} alt="" />
           <h2>{title}</h2>
           <p>{description}</p>
        </div>
    );
};

export default InfoCard;