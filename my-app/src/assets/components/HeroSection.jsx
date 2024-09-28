const HeroSection = () => {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       

          <div>
            <p className="text-sm font-light text-brown-600 uppercase tracking-widest">Welcome</p>
            <br />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2"> I'm Dianna Adams</h1>
            <p className="text-lg md:text-xl font-semibold text-gray-700 mt-4">Food Critic / Influencer / Blogger</p>
            <p className="text-gray-500 text-md md:text-lg mt-6 leading-relaxed">
              Massa urna magnis dignissim id euismod porttitor vitae <br /> etiam viverra nunc at adipiscing sit morbi aliquet
              mauris <br /> porttitor nisi, senectus pharetra, ac porttitor orci.
            </p>
            <button className="mt-8 bg-white text-brown-600 border-brown-600 border-2 px-6 py-3  hover:bg-brown-600 hover:text-white transition">
              JOIN INSIDER
            </button>
          </div>
  
          <div>
            <img
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
              alt=""
              className="w-full h-auto  object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  