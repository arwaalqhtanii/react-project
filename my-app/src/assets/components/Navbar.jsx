import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
    
        <div className="w-24">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
            alt="Food Blogger Logo"
            className="w-full h-auto"
          />
        </div>


        <div className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#" className="block text-brown-500 font-semibold">Home</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">About</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">Reviews</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">Videos</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
        <div className="flex justify-center space-x-4 text-brown-500">
          <a href="#" className="hover:text-gray-900">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>

          <button className="bg-white text-brown-500 border-brown-500 border-2 px-6 py-2  hover:bg-brown-500 hover:text-white transition">
  LET'S TALK
</button>

        </div>
      </div>

      {/*   الجواال */}
      <div className="md:hidden flex justify-between items-center py-4 px-4">
   
        <button
          className="bg-brown-600 text-white p-3  fixed top-4 right-4"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 ">
          <a href="#" className="block text-brown-500 font-semibold">Home</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">About</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">Reviews</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">Videos</a>
          <a href="#" className="block text-gray-900 hover:text-brown-500 transition">Contact</a>

  
          <div className="flex space-x-4 text-brown-600">
            <a href="#" className="hover:text-brown-900">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
