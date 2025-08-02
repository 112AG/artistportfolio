import React, { useState } from 'react'
import logo from "../assets/main-images/artist-rebel-logo.svg"
import { NavLink } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className='w-full lg:max-w-6xl lg:mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-2 relative'>
      <div className='flex justify-between items-center w-full sm:w-auto'>
        <img src={logo} alt="logo" className='h-14 mb-2 sm:mb-0'/>
        
        {/* Mobile Menu Button */}
        <button 
          className='sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#EEE6E2] transition-all duration-300 font-semibold ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#EEE6E2] transition-all duration-300 font-semibold ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#EEE6E2] transition-all duration-300 font-semibold ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center'>
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

      {/* Mobile Menu */}
      <div className={`sm:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-[#F3D30E] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
        <ul className='flex flex-col gap-2 py-4 px-4'>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                isActive ? 'block text-[#0A0A0A] bg-[#F3D30E] px-4 py-2 rounded-full font-bold' : 'block px-4 py-2 text-[#EEE6E2] hover:text-[#F3D30E] hover:bg-[#1A1A1A] rounded-full'
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/work"
              className={({ isActive }) =>
                isActive ? 'block text-[#0A0A0A] bg-[#F3D30E] px-4 py-2 rounded-full font-bold' : 'block px-4 py-2 text-[#EEE6E2] hover:text-[#F3D30E] hover:bg-[#1A1A1A] rounded-full'
              }
              onClick={closeMenu}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'block text-[#0A0A0A] bg-[#F3D30E] px-4 py-2 rounded-full font-bold' : 'block px-4 py-2 text-[#EEE6E2] hover:text-[#F3D30E] hover:bg-[#1A1A1A] rounded-full'
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'block text-[#0A0A0A] bg-[#F3D30E] px-4 py-2 rounded-full font-bold' : 'block px-4 py-2 text-[#EEE6E2] hover:text-[#F3D30E] hover:bg-[#1A1A1A] rounded-full'
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header