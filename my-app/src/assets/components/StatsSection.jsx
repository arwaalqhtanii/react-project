import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const StatsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <FontAwesomeIcon icon={faYoutube} className="text-brown-600" size="2x" />
            <h2 className="text-2xl sm:text-3sm font-bold mt-4">1.2M+</h2>
            <br />
            <p className="text-gray-600 text-sm sm:text-base">SUBSCRIBERS</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} className="text-brown-600" size="2x" />
            <h2 className="text-2xl sm:text-3sm font-bold mt-4">1.8M+</h2>
            <br />
            <p className="text-gray-600 sm:text-3sm sm:text-base">FOLLOWERS</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="text-brown-600" size="2x" />
            <h2 className="text-2xl sm:text-3sm font-bold mt-4">800K+</h2>
            <br />
            <p className="text-gray-600 text-sm sm:text-base">READERS</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-md  text-gray-500">AS FEATURED IN</h3>
          <div className="flex flex-wrap justify-center space-x-4 mt-8">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg"
              alt=""
              className="h-20 w-auto mb-4"
            />
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg"
              alt=""
              className="h-20 w-auto mb-4"
            />
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg"
              alt=""
              className="h-20 w-auto mb-4"
            />
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg"
              alt=""
              className="h-20 w-auto mb-4"
            />
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg"
              alt=""
              className="h-20 w-auto mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
