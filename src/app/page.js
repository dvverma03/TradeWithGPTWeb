import React from "react";
import Navbar from "@/components/navbar/nav";
import Landing from "@/components/Landing/landing";
import Feature from "@/components/feautures/page";
import Earn from "@/components/earn/earn";
import Join from "@/components/joinTeam/join";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="md:block hidden">
        <Navbar />
      </div>
      <div>
        {/* create another hamburger component  */}
      </div>
      <div className="relative w-screen">
        <div className="flex items-center justify-center bg-[#101828] relative ">
          <Landing />
        </div>
        <img
          src="/assets/images/landing/dash.svg"
          alt="Shared Image"
          className="absolute md:top-[14%] top-[12%] left-1/2 transform -translate-x-1/2 w-[1194px] md:h-[776px] z-0"
          style={{ clipPath: "inset(0 0 0 0)" }} // Adjust clipPath if needed
        />
        <div className="bg-[#101828]">
          <Earn />
        </div>
        <div className="bg-[#101828]">
          <Join />
        </div>
        <div className="bg-[#101828]">
          <Footer />
        </div>
      </div>
    </div>
  );
}