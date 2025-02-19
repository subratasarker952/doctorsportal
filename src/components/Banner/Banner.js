import React from 'react';
import Chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div  className="hero min-h-full ">
        <div  className="hero-content flex-col lg:flex-row-reverse">
          <img src={Chair}  className="max-w-xl rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1  className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button  className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;