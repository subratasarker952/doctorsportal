import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loding from '../Loding/Loding';

const NeedAdmin = ({children}) => {
    const [user, loading]=useAuthState(auth);
    const [admin, adminLoading]=useAdmin(user?.email)
    let location = useLocation();

    if(loading || adminLoading){
        return<Loding/>
    }
    if(!user || !admin){
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
    
};

export default NeedAdmin;