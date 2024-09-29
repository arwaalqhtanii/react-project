import Footer from "../assets/components/Footer";
import Invitation from "../assets/components/Invitation";
import Navbar from "../assets/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import StatsSection from "../assets/components/StatsSection";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:flex md:space-x-12">


        <div className="md:w-1/2 space-y-10">
          <h1 className="text-5xl font-serif  mb-6 text-gray-900">Contact</h1>
          <p className="text-lg text-gray-700 leading-relaxed font-serif">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra 
            at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
          </p>



          <div className="space-y-12">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-brown-600 text-3xl mr-4" />
              <div>
                <h2 className="text-1xl font-serif">ADDRESS</h2>
                <p className="text-md text-gray-600">1234 N Spring St, Los Angeles, CA 90012, United States.</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-brown-600 text-3xl mr-4" />
              <div>
                <h2 className="text-1xl font-serif">PHONE</h2>
                <p className="text-lg text-gray-600">+01 - 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-brown-600 text-3xl mr-4" />
              <div>
                <h2 className="text-1xl font-serif">EMAIL</h2>
                <p className="text-lg text-gray-600">mail@example.com</p>
              </div>
         
            </div>

            {/* <StatsSection/> */}
          </div>
        </div>



        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-4xl font-serif mb-6">Let's Talk</h2>
            <form className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-800 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
                    placeholder="First"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-800 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
                    placeholder="Last"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-800 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium">Comment or Message</label>
                <textarea
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="bg-brown-600 text-white px-6 py-3 rounded-lg hover:bg-brown-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
      </div>

      <div className="container mx-auto px-4 py-16 md:flex items-center">
        <div className="md:w-1/2">
          <img
            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt="Person eating"
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <blockquote className="text-2xl font-semibold text-gray-700">
            <span className="text-brown-600 text-5xl mr-2 font-serif">&ldquo;</span>
            Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-semibold font-serif">DIANNA ADAMS</p>
            <p className="text-gray-500 font-serif">Food Critic</p>
          </div>
        </div>
      </div>
      
      <Invitation />
      <Footer />
    </div>
  );
};

export default Contact;
