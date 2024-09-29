import Footer from "../assets/components/Footer";
import Invitation from "../assets/components/Invitation";
import Navbar from "../assets/components/Navbar"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBullhorn, faPen } from '@fortawesome/free-solid-svg-icons'; // استيراد الأيقونات

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="md:flex md:items-center">
        
          <div className="md:w-1/2 space-y-9">
            <h1 className="text-4xl mb-4 font-serif">About Me</h1>
            <p className="text-gray-600 font-serif leading-relaxed">
              Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, 
              pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, 
              mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUtensils} className="mr-2 text-brown-600" /> 
                <h2 className="text-lg font-serif">FOOD CRITIC</h2>
              </div>
              <p className="text-gray-500 font-serif">Diam nulla blandit urna tristique sit etiam amet adipiscing.</p>
              
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBullhorn} className="mr-2 text-brown-600" />
                <h2 className="text-lg font-serif">INFLUENCER</h2>
              </div>
              <p className="text-gray-500">Et volutpat lacinia enim, purus et rhoncus nibh egestas habitant elit.</p>
              
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPen} className="mr-2 text-brown-600" />
                <h2 className="text-lg font-serif">BLOGGER</h2>
              </div>
              <p className="text-gray-500 font-serif">Venenatis egestas lectus interdum enim orci integer.</p>
            </div>
          </div>

   
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img
              className="w-full h-auto rounded-lg object-cover"
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg" 
              alt="About Me"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-12">
    
          <div className="md:w-1/2">
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" 
              alt="Person eating"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <blockquote className="text-2xl font-serif text-gray-700">
              <span className="text-brown-600 text-5xl mr-2 font-serif">&ldquo;</span>
              Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.
            </blockquote>
            <div className="mt-8">
              <p className="text-lg  font-serif ">DIANNA ADAMS</p>
              <p className="text-gray-500 font-serif">Food Critic</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-lg font-bold mb-8 font-serif">AS FEATURED IN</h2>
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg" alt="Logo 1" className="h-30" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg" alt="Logo 2" className="h-30" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg" alt="Logo 3" className="h-30" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg" alt="Logo 4" className="h-30" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg" alt="Logo 5" className="h-30" />
          </div>
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Follow along</h2>
            <a href="#" className="inline-flex items-center text-brown-600 font-semibold">
              @DIANNAADAMS
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-5.jpg" alt="Image 1" className="w-full h-auto  object-cover" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-4.jpg" alt="Image 2" className="w-full h-auto  object-cover" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-6.jpg" alt="Image 3" className="w-full h-auto  object-cover" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-3.jpg" alt="Image 4" className="w-full h-auto  object-cover" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-2.jpg" alt="Image 5" className="w-full h-auto  object-cover" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-1.jpg" alt="Image 6" className="w-full h-auto  object-cover" />
          </div>
        </div>
      </div>
      <Invitation/>
      <Footer/>
    </div>
  );
};

export default About;
