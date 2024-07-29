import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loding from '../Loding/Loding';

const Dashboard = () => {
    const [currentUser, loading] = useAuthState(auth);
    const [admin] = useAdmin(currentUser?.email)
    if (loading) {
        return <Loding />
    }
    return (

        <div className="drawer drawer-mobile">
            <input id="dashboardNavbar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4">

                {/* <!-- Page content here --> */}
                <h2 className='text-purple-500 text-3xl'>WellCome to Your Dashboard</h2>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboardNavbar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Appointments</Link></li>
                    <li><Link to='/dashboard/reviews'>Reviews</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/allusers'>All User</Link></li>
                        <li><Link to='/dashboard/doctorAdd'>Add Doctor</Link></li>
                    </>
                    }

                </ul>

            </div>

        </div>

    );
};

export default Dashboard;