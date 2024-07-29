import React from 'react';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import teeth from "../../assets/images/whitening.png"
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const services = [
        { 
            id: 1, 
            img: fluoride , 
            title: "Fluoride Tretment", 
            description: "lorem ipsum doller site for mony"
        },
        { 
            id: 2, 
            img: cavity , 
            title: "Cavity Filling", 
            description: "lorem ipsum doller site for mony" 
        },
        { 
            id: 3, 
            img: teeth , 
            title: "Teeth Whitening", 
            description: "lorem ipsum doller site for mony" 
        }
    ]
    return (
        <div>
            <div  className='text-center'>
                <h2  className='text-primary font-bold text-3xl'>Our Service</h2>
                <h3  className='text-5xl'>Services We Provide</h3>
            </div>
            <div  className='py-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {services.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                >
                </ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;