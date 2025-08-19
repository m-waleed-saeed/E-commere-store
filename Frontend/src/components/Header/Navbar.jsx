import React from 'react'
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { useState } from "react";

const Navbar = () => {
  const quantity =5
  const [search, setSearch] = useState('');
  const user = 'Muhammad waleed'
  
  return (
    <div className="flex items-center justify-between h-[90px] bg-[#F8F4EA] shadow-sm px-6 border-b border-[#9CB098]">
      <div className="cursor-pointer m-2">
        <Link to="/">
          <img 
            src="/blisslogo1.png" 
            height="150px" 
            width="200px" 
            alt="Bliss Logo" 
            className="hover:opacity-90 transition-opacity duration-300"
          />
        </Link>
      </div>
      
      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border border-[#9CB098] w-[400px] outline-none rounded-sm mr-[-35px] font-['Montserrat'] focus:border-[#ff3333] focus:ring-1 focus:ring-[#ff3333]"
        />
        <Link to={`/products/${search}`}>
          <FaSearch className="text-[20px] cursor-pointer text-[#000000] hover:text-[#ff3333] transition-colors duration-300" />
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link to="/cart" className="relative group">
          <Badge 
            badgeContent={quantity} 
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#ff3333",
                color: "white",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600
              }
            }}
          >
            <ShoppingBasketIcon 
              className="text-[#000000] group-hover:text-[#ff3333] transition-colors duration-300" 
              style={{ fontSize: 28 }}
            />
          </Badge>
        </Link>
        
        <Link 
          to={!user.currentUser ? "/login" : "/myaccount"} 
          className="flex items-center space-x-2 border border-[#9CB098] px-4 py-2 rounded-sm hover:bg-white transition-all duration-300 group"
        >
          <FaUser className="text-[#000000] group-hover:text-[#ff3333] transition-colors duration-300" />
          <span className="text-[#000000] group-hover:text-[#ff3333] transition-colors duration-300 font-['Montserrat'] font-medium">
            {!user.currentUser ? "Login" : user.currentUser.name}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;