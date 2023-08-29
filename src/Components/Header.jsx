import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState("Sign In")
  const auth = getAuth()
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState("Profile")
      }else{
        setPageState("Sign In")
      }
    })
  })
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-[#F8F5E4] border-b shadow-md sticky top-0 z-40">
      <header
        className="flex justify-between items-center
        px-3 max-w-6xl mx-auto"
      >
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5eaae9148bac171763985224/1588935233944-DV8B2NRZVHLC3AXN4D6R/booknow.png"
            alt="logo"
            className="h-14 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold
               border-b-[3px]
              ${
                pathMatchRoute("/") ? " text-black font-bold border-b-red-500 text-[18px]" :"text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`
              cursor-pointer py-3 text-sm font-semibold
               border-b-[3px] 
              ${
                pathMatchRoute("/offers") ? " text-black font-bold border-b-red-500 text-[18px]" :"text-gray-400 border-b-transparent"
              }
              `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold
               border-b-[3px] 
              ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? " text-black font-bold border-b-red-500 text-[18px]" :"text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/profile")}
            >
             {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
