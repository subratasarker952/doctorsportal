import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loding from '../../Loding/Loding';

const AddDoctor = () => {

    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/services`).then(res => res.json()))
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    if (isLoading) {
        return <Loding />
    }
    
    
    
    const CLIENT_API_KEY = '404fd82bdf0399e37a8e4cd2ea96fa98';
    const onSubmit = async data => {
        const img = data.image[0]
        // console.log(image);
        const formData = new FormData() ;
        formData.append("avatar", img);
        const url=`https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=> res.json())
        .then(result=> console.log(result))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">

                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' className='w-full p-3 rounded border-2 text-xl' autoComplete='OFF' placeholder='Doctors Name' {...register("name", {
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
                    <input type='email' className='w-full p-3 rounded border-2 text-xl' autoComplete='off' placeholder='Doctors Email' {...register("email", {
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
                        <span className="label-text">specialty</span>
                    </label>

                    <select className="mt-3 text-xl select select-bordered mx-auto w-full"
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: "specialty is required"
                            }
                        })}
                    >
                        {
                            services.map((service) => <option key={service._id} value={service.name}>{service.name}</option>)
                        }
                    </select>

                    {/* <input type='password' className='w-full p-3 rounded border-2 text-xl' autoComplete='OFF' placeholder='Your Email' {...register("password", {
                        required: {
                            value: true,
                            message: "password is required"
                        },
                        minLength: {
                            value: 6,
                            message: "Must be 6 character or longer"
                        },
                    })} /> */}
                    <label className='label mt-[-10]'>
                        {errors.specialty?.type === "required" && <span>{errors.specialty.message}</span>}
                    </label>
                </div>
                <div className="mb-5">

                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type='file' className='w-full p-3 rounded border-2 text-xl' {...register("image", {
                        required: {
                            value: true,
                            message: "Photo is required"
                        }
                    })} />
                    <label className='label'>
                        {errors.image?.type === "required" && <span>{errors.name.message}</span>}
                    </label>
                </div>

                <input type="submit" className='btn btn-accent w-full' value="ADD" />
            </form>
        </div>
    );
};

export default AddDoctor;