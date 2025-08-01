import React from 'react'
import logo from "../assets/main-images/artist-rebel-logo.svg"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full lg:max-w-6xl lg:mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-2'>
      <img src={logo} alt="logo" className='h-14 mb-2 sm:mb-0'/>
      <ul className='flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center'>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-[#0A0A0A] bg-[#F3D30E] px-2 py-1 rounded-full font-bold' : 'px-2 py-1 text-[#EEE6E2] hover:text-[#F3D30E]'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/work"
            className={({ isActive }) =>
              isActive ? 'text-[#0A0A0A] bg-[#F3D30E] px-2 py-1 rounded-full font-bold' : 'px-2 py-1 text-[#EEE6E2] hover:text-[#F3D30E]'
            }
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/blog"
            className={({ isActive }) =>
              isActive ? 'text-[#0A0A0A] bg-[#F3D30E] px-2 py-1 rounded-full font-bold' : 'px-2 py-1 text-[#EEE6E2] hover:text-[#F3D30E]'
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-[#0A0A0A] bg-[#F3D30E] px-2 py-1 rounded-full font-bold' : 'px-2 py-1 text-[#EEE6E2] hover:text-[#F3D30E]'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header