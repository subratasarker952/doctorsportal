import React from 'react';
import "./CustomLink.css"
import { Link, useLocation } from 'react-router-dom';

const CustomLink = ({ children, to }) => {
    const location = useLocation();
    const match = location.pathname === to;


    return (<Link 
         className={`customLink  ${match? "active" : "" }`  }
        to={to}>{children}
        </Link>);
}


export default CustomLink;