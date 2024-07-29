import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [admin, setAdmin]=useState(false);
    const [adminLoading, setAdminLoading]=useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/admin/${email}`, {
            method:"GET",
            headers:{
                "authorization":`Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
            setAdminLoading(false)
        });
    },[email])

    return [admin, adminLoading];
};

export default useAdmin;