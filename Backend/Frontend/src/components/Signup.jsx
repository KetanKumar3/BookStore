import React from 'react'
import Login from './Login'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {

    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password
        }
        // console.log(userInfo)

        await axios.post("http://localhost:4200/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('signup successfully !!');
                navigate(from, { replace: true });
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
            console.log("error",err)
            toast.error("Error : "+err.response.data.message)
    })

    }

    return (
        <>
            <div className='flex h-screen justify-center items-center  '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">signup</h3>

                            <div className='mt-4 space-y-2'>
                                <span>Name :</span>
                                <br />
                                <input type='text' placeholder='enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/>
                                <br />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Email :</span>
                                <br />
                                <input type='email' placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
                                <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Password :</span>
                                <br />
                                <input type='text' placeholder='enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration-300'>Signup</button>
                                <p>Have an account ?<button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup