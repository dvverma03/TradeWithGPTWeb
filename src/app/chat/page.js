"use client"
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import { ReactTyped } from "react-typed";
import { IoMdArrowRoundForward } from "react-icons/io";
import UserChat from "@/components/userChat/page";


const Chat = () => {

    const [content, setContent] = useState("");

    const [username, setUsername] = useState('Gagan')

    const [currentPage, setCurrentPage] = useState(0);
    const obj = [
        {
            id: 1,
            content: "Generate unit tests for the following C# function"
        },
        {
            id: 2,
            content: "Help write SQL to generate a report"
        },
        {
            id: 3,
            content: "Teach me the concept of game theory in simple terms"
        },
        {
            id: 4,
            content: "Walk me through how to apply for a new role"
        }
    ]


    return (
        (currentPage === 0 ? (
            <div className="flex flex-col justify-start items-center min-h-screen w-screen gap-4 bg-black text-white">
                <div className="bg-hero flex flex-col justify-between items-center w-full md:pt-[10rem] pt-[3rem]">
                    {/* headings */}
                    <div className="flex flex-col gap-11 mb-10 md:p-0 p-4">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold">Hello, {username}</h1>
                            <div className="text-4xl text-gray-700 font-bold">
                                <ReactTyped strings={["Get your customized suggestion from Stockx AI."]} typeSpeed={100} />
                            </div>
                        </div>
                        {/* suggestions */}
                        <div className="flex md:flex-row flex-col gap-3">
                            {obj.map((item, index) => (
                                <div className="bg-[#2b2b4d69] md:h-44 md:w-fit p-5 md:max-w-64 text-l font-mono rounded-md hover:cursor-pointer" key={index}>
                                    <p>{item?.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:items-center px-4 pb-4 md:pt-[10rem] pt-7">
                        <div className="flex flex-row justify-between items-end max-w-[68rem] w-full p-4 rounded-md bg-white">
                            {/* input box */}
                            <textarea
                                placeholder="Enter the information of the stocks here."
                                // disabled={loading}
                                className="outline-none flex-grow h-auto md:min-h-0 min-h-12 bg-transparent font-bold font-mono text-black resize-none"
                                rows={1}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                onInput={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                }}
                            />
                            <IoMdArrowRoundForward
                                className="text-2xl text-black font-bold ml-4 hover:cursor-pointer"
                                onClick={() => setCurrentPage(1)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <UserChat content={content} />
        ))
    );
};

export default Chat;
