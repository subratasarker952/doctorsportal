import React from 'react';

const Testomonial = ({ t }) => {
    const {name, designation, comment,img}=t
    return (
        <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{comment}</p>
            
                    <div className="card-actions justify-center items-center">
                       <img src={img} alt="" />
                       <div>
                       <h2 className="card-title">{name}</h2>
                    <h2 className="card-sub-title">{designation}</h2>
                       </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testomonial;