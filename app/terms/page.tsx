import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 mt-44">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <a href="#" className="text-white">Home</a>
            
            {/* Dropdown */}
            <div className="relative ml-4 group">
              <button className="text-white focus:outline-none">
                Services
              </button>
              <div className="absolute hidden bg-white py-2 rounded-md shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 text-gray-800">Service 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800">Service 2</a>
                <a href="#" className="block px-4 py-2 text-gray-800">Service 3</a>
              </div>
            </div>
          </div>
          
          {/* Other Navbar Links */}
  
            <a href="#" className="text-white ml-4">About</a>
            <a href="#" className="text-white ml-4">Contact</a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
