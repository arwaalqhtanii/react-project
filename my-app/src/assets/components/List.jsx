const List = () => {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-300 flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-sm">
     
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <img
                className="w-full h-auto object-cover"
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
                alt=""
              />
            </div>
  
     
            <div className="lg:w-1/2 w-full lg:pl-16 py-10 px-8">
              <h2 className="text-4xl font-bold text-gray-900">Join Mailing List</h2>
              <p className="mt-4 text-lg text-gray-600">
                Sign up and get all the latest, ad-free reviews, recipes, and news sent to your inbox.
              </p>
  
      {/* الايميل  */}
              <div className="mt-8 flex w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 border border-gray-300 focus:outline-none w-full"
                />
                <button className="text-brown-500 font-medium bg-transparent border-brown-500 border-2 px-6 py-2 hover:bg-brown-500 hover:text-white transition ">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default List;
  