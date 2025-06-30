import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/doctors', label: 'All Doctors' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];
const navigate=useNavigate();
const [showMenu, setShowMenu] = useState(false)
const [token,setToken] = useState(true)

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.admin_logo} alt="Logo" />

      <ul className="hidden md:flex gap-8 font-medium">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `py-1 relative ${isActive ? 'text-blue-600 after:block after:h-0.5 after:w-3/5 after:bg-blue-600 after:mx-auto after:mt-1' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.people_icon} alt="" />
                <img className='w-2.5' src={assets.tick_icon} alt="" />
            </div>
            
        
        :<button onClick={()=>navigate('/login')} className="bg-blue-600 text-white px-4 py-2 rounded-[25px] hover:bg-blue-700 transition hidden md:block">
          Create Account
        </button>
}
      </div>
    </div>
  );
};

export default Navbar;
