
//import './style.css';

const HeroSection = () => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-7xl text-white font-bold animate-fadeIn">
                Explore the Wild
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mt-4">
                Discover the beauty of nature and wildlife
            </p>
            <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                Start Exploring
            </button>
        </div>


    );
};

export default HeroSection;