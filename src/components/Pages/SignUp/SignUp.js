import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loding from '../../Loding/Loding';
import useToken from '../../../Hooks/Token';


const SignUp = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    })

    if (loading || updating) {
        return <Loding />
    }
    let authError;
    if (error || updateError) {
        authError = <p> {error?.message || updateError?.message} </p>;
    }







    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Signup</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">

                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type='text' className='w-full p-3 rounded border-2 text-xl' autoComplete='OFF' placeholder='Your Name' {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Must be 2 character or longer"
                                    },
                                })} />
                                <label className='label'>
                                    {errors.name?.type === "required" && <span>{errors.name.message}</span>}
                                    {errors.name?.type === "minLength" && <span>{errors.name.message}</span>}
                                </label>
                            </div>
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
                                <label className='label'>
                                    {errors.email?.type === "required" && <span>{errors.email.message}</span>}
                                    {errors.email?.type === "pattern" && <span>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="mb-5">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password' className='w-full p-3 rounded border-2 text-xl' autoComplete='OFF' placeholder='Your Email' {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 character or longer"
                                    },
                                })} />
                                <label className='label mt-[-10]'>
                                    {errors.password?.type === "required" && <span>{errors.password.message}</span>}
                                    {errors.password?.type === "minLength" && <span>{errors.password.message}</span>}
                                </label>
                            </div>
                            <p>Forget Password?</p>


                            <input type="submit" className='btn btn-accent w-full' value="Signup" />
                        </form>

                        <p>{authError}</p>


                    </div>
                    <p>You have an account? <Link className='text-primary' to='/login'>Login</Link></p>



                </div>

            </div>
        </div>
    );
};

export default SignUp;