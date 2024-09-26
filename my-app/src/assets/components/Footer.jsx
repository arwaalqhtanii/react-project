import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
        
          <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
              alt=""
              className="h-8 w-auto"
            />
            <p className="text-gray-500 text-sm text-center md:text-left">© 2024 Food Blogger & Influencer</p>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 text-sm font-medium mb-4 md:mb-0">
            <a href="#" className="text-gray-900 hover:text-brown-500 transition">Home</a>
            <a href="#" className="text-gray-900 hover:text-brown-500 transition">About</a>
            <a href="#" className="text-gray-900 hover:text-brown-500 transition">Reviews</a>
            <a href="#" className="text-gray-900 hover:text-brown-500 transition">Videos</a>
            <a href="#" className="text-gray-900 hover:text-brown-500 transition">Contact</a>
          </div>

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
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm">Powered by Food Blogger & Influencer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
