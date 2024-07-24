import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiTool } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";

const SideBar = ({page}) => {
  return (
    <aside className="w-64 h-screen z-5 bg-[#101828] p-5">
      <div className="flex items-center mb-5">
        <div className="text-2xl font-bold bg-violet-600 p-2 rounded-sm">
          Up
        </div>
        <div className="ml-auto text-sm text-gray-400">32</div>
      </div>
      <nav>
        <ul>
          <li className={`mb-5 ${page === 'home' ? 'bg-violet-600' : ''} px-4 py-[12px] rounded-sm my-0`}>
            <a href="/" className="flex items-center text-lg text-white">
              <IoHomeOutline />
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li className={`mb-5 ${page === 'market' ? 'bg-violet-600' : ''} px-4 py-[12px] rounded-sm my-0`}>
            <a href="/tools" className="flex items-center text-lg text-white">
              <FiTool />
              <span className="ml-3">Market</span>
            </a>
          </li>
          <li className={`mb-5 ${page === 'profile' ? 'bg-violet-600' : ''} px-4 py-[12px] rounded-sm`}>
            <a
              href="/calendar"
              className="flex items-center text-lg text-white"
            >
              <CiCalendar />
              <span className="ml-3">Profile</span>
            </a>
          </li>
          <li className={`mb-5 ${page === 'gpt' ? 'bg-violet-600' : ''} px-4 py-[8px] rounded-sm`}>
            <a
              href="/learning"
              className="flex items-center text-lg text-white"
            >
              <IoBookOutline />
              <span className="ml-3">Ask GPT</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <div >
        <div className="flex pb-2">
          <span className="pt-1">
            <IoIosHelpCircleOutline />
          </span>
          <span>Help</span>
        </div>
        <div className="flex pb-4">
          <span className="pt-1">

          <IoIosLogOut />
          </span>
          <span>Logout</span>
        </div>
      </div> */}
    </aside>
  );
};

export default SideBar;
