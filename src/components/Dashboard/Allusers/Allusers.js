import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loding from '../../Loding/Loding';

const Allusers = () => {
    const navigate = useNavigate()
    // const [users, setUsers]=useState([])
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/allusers`)
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data))

    // },[])


    // const [isAdmin]=useAdmin(currentUser.email)
    const { isLoading, data: users, refetch, error } = useQuery('users', () => fetch(`http://localhost:5000/allusers`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loding />
    }

    let dataLoadingError
    if (error) {
        dataLoadingError = <p>Fail to load data</p>
    }

    const handleMakeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate("/")
                    toast.error("You are not admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make as admin')
                    refetch()
                };
            }
            )
    }

    return (
        <div>
            {users.length}
            <div >
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Email</th>
                                <th>Button1</th>
                                <th>Button2</th>


                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== "admin" && <button className='btn btn-accent btn-xs'
                                    onClick={() => handleMakeAdmin(user.email)}
                                >Make Admin</button>}</td>
                                <td><button className='btn btn-accent btn-xs'>Remove User</button></td>

                            </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>


            <h2 className='text-center text-3xl text-red-500'>{dataLoadingError}</h2>
        </div>
    );
};

export default Allusers;