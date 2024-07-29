import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loding from '../../Loding/Loding';

const Header = () => {
    const [user, looding] = useAuthState(auth)
    if (looding) {
        return <Loding />
    }
    const handleSignout=()=>{
        signOut(auth)
        localStorage.removeItem('accessToken')
    }

    const menu =
        <>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/appointment'>Appointment</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
            {user ?
                <div>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>

                    <button
                        className='btn btn-outline'
                        onClick={handleSignout}
                    >SignOut</button>
                </div>
                :
                <CustomLink to='/login'>Login</CustomLink>
            }

        </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to='/'>Doctor Portal</Link>
            </div>
            <div className="navbar-center">
                <div className='hidden sm:flex flex-col sm:flex-row '>
                    {menu}
                </div>
                <div>
                    <label tabIndex="0" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
            <div className="navbar-end">

                

                <label htmlFor="dashboardNavbar" className="btn  drawer-button lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>


        </div>
    );
};
// <Link to='/'>Doctor Portal</Link>
// <CustomLink to='/signUp'>SignUp</CustomLink> 

export default Header;

