import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Testomonial from './Testomonial';


const Testomonials = () => {
    const testomonials= [
        {
            id:1,
            name:"Suma Roy",
            img: people1,
            designation: "wife",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nostrum quos necessitatibus at non doloribus odit, eveniet provident officia in."
        },
        {
            id:2,
            name:"Shikha sarker",
            img: people2,
            designation: "wife",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nostrum quos necessitatibus at non doloribus odit, eveniet provident officia in."
        },
        {
            id:3,
            name:"Bikash Roy",
            img: people3,
            designation: "Brother",
            comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nostrum quos necessitatibus at non doloribus odit, eveniet provident officia in."
        }
    ]
    return (
        <div  className='py-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                testomonials.map(t=> <Testomonial
                    key={t.id}
                    t={t}></Testomonial>)
            }
            
        </div>
    );
};

export default Testomonials;