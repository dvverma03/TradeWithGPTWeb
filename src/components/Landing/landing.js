import React from "react";


export default function Landing() {
    return (
        <div className="flex flex-col text-center items-center bg-hero bg-no-repeat md:w-[1300px] w-screen mb-9 md:h-[60rem] h-[57rem] md:p-0 p-2">
            <div className="md:w-[614px] h-fit mt-14 w-screen md:p-0 p-2">
                <h2 className="text-white font-bold lg:text-[60px] text-[40px]">
                    Quickly Grow Your Money with StockX.
                </h2>
            </div>
            <div className="w-fit flex items-center flex-col text-white font-thin mt-10 md:space-y-0 space-y-3">
                <p className="text-wrap text-[16px]">Stockx is the easiest place to buy and sell your assets.</p>
                <p>Buy Bitcoin, Ethereum and other digital assets within minutes.</p>

            </div>

            <div className="h-[50px] flex flex-row justify-between items-center md:w-96 w-full border border-solid-[16px] border-[#1D2939] rounded-md p-2 mt-10">
                <input type="email" placeholder="Enter your Email" className="placeholder:text-[#9CA3AF] outline-none focus:outline-none text-start bg-transparent text-white md:w-60 cursor-default"/>
                <button className="bg-[#613DE4] rounded-md p-2 text-white font-bold h-9 text-center flex justify-center items-center">Get started</button>
            </div>

            <p className="text-white font-thin mt-8">No waitlist - available for download now</p>

        </div>
    )
}