import React from 'react';


const ServiceCard = ({ service }) => {
  const { img, title, description } = service

  return (
    <div className="card w-max-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

      </div>
    </div>
  );
};

export default ServiceCard;