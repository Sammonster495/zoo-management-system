import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    return(
        <nav className="fixed-top bg-white shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center text-green-500 font-bold text-xl">Zoo Planet</div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-4">
            <li className="text-gray-700 hover:text-gray-900 font-medium">Home</li>
            <li className="relative text-gray-700 hover:text-gray-900 font-medium">
      <button
        type="button"
        className="flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        Animals <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.293l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414-1.414L10 12.586l-4.707-4.707z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute dropdown-menu bg-white shadow-md min-w-max py-1 rounded-md z-10">
          <li className="text-gray-700 hover:text-gray-900 block px-4 py-2">Mammals</li>
          <li className="text-gray-700 hover:text-gray-900 block px-4 py-2">Birds</li>
          <li className="text-gray-700 hover:text-gray-900 block px-4 py-2">Reptiles</li>
        </ul>
      )}
    </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button className="focus:outline-none text-gray-700 hover:text-gray-900">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    );
}