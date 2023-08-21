import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathMatchRoute(route){
    if(route === location.pathname){
      return true
    }
  }
  return (
    <div className='bg-white border-b shadow-md sticky top-0 z-50'>
        <header className='flex justify-between items-center
        px-3 max-w-6xl mx-auto'>
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/5eaae9148bac171763985224/1588935233944-DV8B2NRZVHLC3AXN4D6R/booknow.png" alt="logo" className='h-14 cursor-pointer' onClick={()=>navigate('/')} />
          </div>
          <div>
            <ul className="flex space-x-10">
              <li className={`cursor-pointer py-3 text-sm font-semibold
              text-gray-400 border-b-[3px] border-b-transparent
              ${pathMatchRoute("/") && " text-black font-bold border-b-red-500"}`}
              onClick={()=>navigate('/')}>Home</li>

              <li className={`${pathMatchRoute("/offers") && "font-bold text-black border-b-red-500"}
              cursor-pointer py-3 text-sm font-semibold
              text-gray-400 border-b-[3px] border-b-transparent
              `}
              onClick={()=>navigate('/offers')}>Offers</li>

              <li className={`cursor-pointer py-3 text-sm font-semibold
              text-gray-400 border-b-[3px] border-b-transparent
              ${pathMatchRoute("/sign-in") && " border-b-red-500"}`}
              onClick={()=>navigate('/sign-in')}>Sign In</li>
            </ul>
          </div>
        </header>
    </div>
  )
}

