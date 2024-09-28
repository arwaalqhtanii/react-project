const Videos = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <h2 className="text-4xl font-bold text-gray-900">Latest Videos</h2>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
                    <div className="lg:col-span-1">
                        <div className="relative">
                            <img
                                className="w-full h-80 object-cover"
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg"
                                alt=""
                            />

                            <button className="absolute inset-0 flex justify-center items-center">
                                <svg
                                    className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10 17l6-5-6-5v10z"></path>
                                </svg>
                            </button>
                        </div>
                        <br />
                        <h3 className="mt-4 text-4xl text-gray-900">
                            Dianna Adams visits the Sooto <br /> Restaurant | Uncovered Miami
                        </h3>
                        <br />
                        <p className="mt-2 text-gray-600">
                            A consectetur eget ultrices nec velit purus quam dignissim <br /> purus gravida aliquam mattis
                            ultrices eget ultrices <br /> tincidunt et erat enim vitae sollicitudin tellus placerat.
                        </p>
                    </div>
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-4">
                            <img
                                className="w-24 h-24 object-cover"
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-lg font-semibold">
                                    Family Dinner - Latea pulvinar scelerisque diam tempus facilisi
                                </h4>
                                <p className="text-gray-600">Enim imperdiet fames nisl، purus et diam aliquet</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img
                                className="w-24 h-24 object-cover"
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-lg font-semibold">
                                    Lobortis turpis turpis vehicula laoreet egestas enim ornare
                                </h4>
                                <p className="text-gray-600">Enim imperdiet fames nisl، purus et diam aliquet</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img
                                className="w-24 h-24 object-cover"
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-lg font-semibold">
                                    Tempus quis ac viverra condimentum sit nulla viverra
                                </h4>
                                <p className="text-gray-600">Enim imperdiet fames nisl، purus et diam aliquet</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <img
                                className="w-24 h-24 object-cover"
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-lg font-semibold">Quis mauris egestas enim urna dictum</h4>
                                <p className="text-gray-600">Enim imperdiet fames nisl، purus et diam aliquet</p>
                            </div>
                        </div>


                        <div className="mt-10">
                            <button className="w-full text-brown-600 font-medium bg-transparent border-brown-600 border-2 px-8 py-2 hover:bg-brown-600 hover:text-white transition">
                                VIEW ALL VIDEOS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;
