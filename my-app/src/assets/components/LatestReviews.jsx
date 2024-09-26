const LatestReviews = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Latest Reviews</h2>
                    <button className="text-brown-500 font-medium bg-transparent border-brown-500 border-2 px-6 py-2 hover:bg-brown-500 hover:text-white transition">
                        VIEW ALL
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
                    <div className="bg-white rounded-lg overflow-hidden transition-shadow duration-300">
                        <img
                            className="w-full h-64 object-cover"
                            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
                            alt=""
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900">Grilled Flank Steak with Chimichurri</h3>
                            <p className="mt-4 text-gray-600">
                                Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.
                            </p>
                            <a href="#" className="mt-4 inline-block text-brown-500 font-medium hover:underline">
                                READ MORE →
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden  transition-shadow duration-300">
                        <img
                            className="w-full h-64 object-cover"
                            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
                            alt=""
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900">Mushroom Penne with Walnut Pesto</h3>
                            <p className="mt-4 text-gray-600">
                                Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus.
                            </p>
                            <a href="#" className="mt-4 inline-block text-brown-500 font-medium hover:underline">
                                READ MORE →
                            </a>
                        </div>
                    </div>

 
                    <div className="bg-white rounded-lg overflow-hidden  transition-shadow duration-300">
                        <img
                            className="w-full h-64 object-cover"
                            src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
                            alt=""
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900">Garlic Butter White Wine Shrimp Linguine</h3>
                            <p className="mt-4 text-gray-600">
                                Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis.
                            </p>
                            <a href="#" className="mt-4 inline-block text-brown-500 font-medium hover:underline">
                                READ MORE →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestReviews;
