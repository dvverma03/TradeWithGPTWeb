'use client'

import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState();
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    console.log(email, "email");
    console.log(password, "pass");

    const obj = {
        email: email,
        password: password,
    }

    const submitdata = async () => {
        console.log("submit function clicked")
        const res = await fetch("http://localhost:8001/api/v1/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
        if (res.ok) {
            setTimeout(() => {
                toast.success("User registered successfully")
            }, 2000); // add a 2-second delay
            setIndex(0);
        }
    };


    const loginUser = async () => {
        console.log("login function clicked");
        try {
            const res = await fetch("http://localhost:8001/api/v1/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            });
            if (res.ok) {
                const data = await res.json(); // Convert the readable stream to JSON
                console.log(data); // Log the data to see the response

                setTimeout(() => {
                    toast.success("User logged in successfully");
                }, 2000); // Add a 2-second delay

                if (typeof window !== 'undefined') {
                    localStorage.setItem("accessToken", data.data.accessToken);
                    localStorage.setItem("refreshToken", data.data.refreshToken);
                }

                router.push("/profile");

                setIndex(0);
            } else {
                // Handle errors
                const errorData = await res.json(); // Convert the readable stream to JSON
                toast.error(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error while logging in:", error);
            toast.error("An error occurred while logging in");
        }
    }



    return (
        <div className="flex md:flex-row sm:flex-col h-screen ">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="w-1/2 bg-signUp hidden md:block">

            </div>
            <div className="md:w-1/2 flex justify-center items-center bg-[#1D2939] w-screen">
                <div className="md:w-[516px] w-screen bg-transparent flex flex-col justify-center items-start p-3 md:gap-0 gap-9">
                    {/* Tabs */}
                    <div className="md:w-full w-full h-fit bg-[#101828] rounded-md p-2 text-white font-bold text-[16px]">
                        <div className="">
                            <button className={`${index == 0 ? 'bg-[#613DE4]' : 'border border-solid-[8px] border-[#475467] '} w-1/2 h-9 rounded-l-md`} onClick={(e) => setIndex(0)}>Sign In</button>
                            <button className={`${index == 1 ? 'bg-[#613DE4] ' : 'border border-solid-[8px] border-[#475467]'} w-1/2 h-9 rounded-r-md`} onClick={(e) => setIndex(1)}>Sign Up</button>
                        </div>

                    </div>
                    <div className="mt-6 w-full">
                        {index == 0 ? (
                            <div className="md:space-y-5 flex flex-col items-start w-full space-y-7">
                                <h2 className="font-bold text-white text-3xl">Welcome Back</h2>
                                <p className="font-thin text-white">Enter your credentials to access your account</p>

                                <div className="space-y-3 md:w-[516px] w-full">
                                    <div className="space-y-3">
                                        <p className="text-white">Email</p>
                                        <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white">
                                            <input type="email" placeholder="username@gmail.com" className="w-full outline-none bg-transparent" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-white">Password</p>
                                        <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white flex flex-row justify-between items-center">
                                            <input type={`${visible == false ? 'password' : 'text'}`} placeholder="Enter your password" className="w-full outline-none bg-transparent" onChange={(e) => setPassword(e.target.value)} />
                                            {visible == false ? <BiSolidHide onClick={() => setVisible(!visible)} className="cursor-pointer" /> : <BiSolidShow onClick={() => setVisible(!visible)} className="cursor-pointer" />}
                                        </div>
                                        <p className="text-[#613DE4] cursor-pointer">Forgot Password?</p>
                                    </div>

                                    <button className="bg-[#613DE4] rounded-md w-full text-white h-fit p-2" onClick={loginUser}>Get started</button>

                                    <div className="text-white text-center">or</div>
                                    <button className="bg-[#101828] rounded-md w-full text-white h-fit p-2 flex flex-row gap-4 justify-center items-center"><FaGoogle />Sign in with Google</button>

                                </div>
                            </div>

                        )
                            : (

                                <div className="space-y-5 flex flex-col items-start w-full">
                                    <h2 className="font-bold text-white text-3xl">Get Started Now</h2>


                                    <div className="md:space-y-3 lg:w-[516px] w-full space-y-5">
                                        <div className="space-y-3">
                                            <p className="text-white">Email</p>
                                            <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white">
                                                <input type="email" placeholder="username@gmail.com" className="w-full outline-none bg-transparent" onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-white">Password</p>
                                            <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white flex flex-row justify-between items-center">
                                                <input type={`${visible == false ? 'password' : 'text'}`} placeholder="Enter your password" className="w-full outline-none bg-transparent" onChange={(e) => setPassword(e.target.value)} />
                                                {visible == false ? <BiSolidHide onClick={() => setVisible(!visible)} className="cursor-pointer" /> : <BiSolidShow onClick={() => setVisible(!visible)} className="cursor-pointer" />}
                                            </div>

                                        </div>

                                        <button className="bg-[#613DE4] rounded-md w-full text-white h-fit p-2" onClick={submitdata}>Get started</button>

                                        <div className="text-white text-center">or</div>
                                        <button className="bg-[#101828] rounded-md w-full text-white h-fit p-2 flex flex-row gap-4 justify-center items-center"><FaGoogle />Sign in with Google</button>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}