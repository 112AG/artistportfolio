import React from 'react'
import logo from "../assets/main-images/artist-rebel-logo.svg"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between items-center py-4 max-w-6xl mx-auto'>
      <img src={logo} alt="logo" className='h-14'/>
      <ul className='flex gap-6'>
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