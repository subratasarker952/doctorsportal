import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loding from '../../Loding/Loding';
import useToken from '../../../Hooks/Token';




const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
  
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithGoole, 
        gUser, 
        gLoading, 
        gError
    ] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token]=useToken(gUser|| user)

    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
        }
    },[token, from, navigate])
    const onSubmit = data =>{
        signInWithEmailAndPassword(data.email, data.password)

    } 


    if ( gLoading || loading) {
        return <Loding/>
      }
    
    let authError;
    if (gError || error) {
        authError= <p> {gError?.message || error?.message} </p> ;
    }




    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type='email' className='w-full p-3 rounded border-2 text-xl' autoComplete='OFF' placeholder='Your Email' {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email"
                                    },
                                })} />
                                <label className='label text-red-500'>
                                    {errors.email?.type === "required" && <span>{errors.email.message}</span>}
                                    {errors.email?.type === "pattern" && <span>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="mb-5">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' className='w-full p-3 rounded  border-2 text-xl' autoComplete='OFF' placeholder='Your Email' {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 character or longer"
                                },
                            })} />
                            <label className='label text-red-500'>
                                {errors.password?.type === "required" && <span>{errors.password.message}</span>}
                                {errors.password?.type === "minLength" && <span>{errors.password.message}</span>}
                            </label>
                            </div>


                            <input type="submit" className='btn btn-accent w-full' value="Login" />
                        </form>

                    </div>
                    <p>New to Doctors portal? <Link to='/signup'>SignUp</Link></p>


                    <div className="divider">OR</div>
                    <p className='text-red-500'>{authError}</p>
                    <button
                        onClick={() => signInWithGoole()}
                        className='btn btn-outline'
                    >Continue with Google</button>
                    <button
                        className='btn btn-outline'
                    >Continue with Facebooke</button>
                </div>

            </div>
        </div>
    );
};

export default Login;