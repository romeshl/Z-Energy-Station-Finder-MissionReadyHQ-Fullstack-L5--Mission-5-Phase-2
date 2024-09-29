import Header from "../assets/header.jpg";
import Map from "../assets/map.jpg";
import CarWash from "../assets/car-wash.png";
import LpgBottleSwap from "../assets/lpg-bottle-swap.png";
import TrailerHire from "../assets/trailer-hire.png";
import FoodBeverage from "../assets/food-beverage.png";
import AppImg from "../assets/app-img.png";
import HomeImg from "../assets/home.png";
import { Link } from "react-router-dom";

const Home = () => (
<div className="flex flex-col min-h-screen">
    <header>
        <div
            className="h-[500px] bg-cover bg-center flex items-center justify-center" // Increased height
            style={{ backgroundImage: `url(${Header})` }}
        ></div>
    </header>

    <main className="flex-grow">
        <div className="min-h-screen bg-gray flex-col justify-between">
            <div className="flex flex-col md:flex-row items-center justify-left p-6 bg-white">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold text-orange-500 text-left">
                        Looking to get fuelled up?
                    </h1>
                    <p className="text-black mt-2 text-left">
                        Plan your trips using our Journey Planner and see the nearest
                        stations along the way!
                    </p>
                    <div className="mt-4 flex">
                        <Link to="/find-a-station">
                        <button className="bg-white text-orange-500 border border-orange-500 py-2 px-4 rounded-full mr-2">
                            Find a Station
                        </button>
                        </Link>
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
                            Plan your journey
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <img
                        src={Map}
                        alt="Map"
                        className="border border-orange-500"
                        style={{ borderRadius: '0', paddingBottom: '0', marginBottom: '0' }} // Reduced padding and margin
                    />
                </div>
            </div>
        </div>


<div className="bg-white min-h-screen flex flex-col items-center justify-center" style={{ paddingTop: '0', marginTop: '0' }}>
  <div className="text-center mb-8">
    <h1 className="text-4xl text-orange-500 font-bold mb-4">Browse our services</h1>
    <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Gravida sodales purus lorem odio lobortis id donec.</p>
    <button className="bg-orange-500 text-white py-2 px-4 rounded">Learn More</button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="border p-4 rounded shadow-lg flex flex-col justify-between" style={{ borderColor: 'orange', borderWidth: '2px' }}>
      <div className="relative mb-4" style={{ margin: '-16px', marginBottom: '0' }}>
        <img src={TrailerHire} alt="Trailer Hire" className="w-full h-48 object-cover" style={{ borderBottom: '2px solid orange' }} />
      </div>
      <h2 className="text-2xl font-bold text-orange mb-2">Trailer Hire</h2>
      <p className="text-gray-600 flex-grow">From fiat deck to cogod to furniture and more, we have got the top-quality Hrence tellers to move your things from A to B.</p>
      <button className="bg-dark-blue-900 text-white py-2 px-4 rounded mt-4 self-start">Find out more</button>
    </div>
    <div className="border p-4 rounded shadow-lg flex flex-col justify-between" style={{ borderColor: 'orange', borderWidth: '2px' }}>
      <div className="relative mb-4" style={{ margin: '-16px', marginBottom: '0' }}>
        <img src={CarWash} alt="Car Wash" className="w-full h-48 object-cover" style={{ borderBottom: '2px solid orange' }} />
      </div>
      <h2 className="text-2xl font-bold text-orange mb-2">Car Wash</h2>
      <p className="text-gray-600 flex-grow">A clean car is a good car. So if your car could do with a good clean, head in to Z and try our Z,O car wash.</p>
      <button className="bg-dark-blue-900 text-white py-2 px-4 rounded mt-4 self-start">Find out more</button>
    </div>
    <div className="border p-4 rounded shadow-lg flex flex-col justify-between" style={{ borderColor: 'orange', borderWidth: '2px' }}>
      <div className="relative mb-4" style={{ margin: '-16px', marginBottom: '0' }}>
        <img src={LpgBottleSwap} alt="LPG Bottle Swap" className="w-full h-48 object-cover" style={{ borderBottom: '2px solid orange' }} />
      </div>
      <h2 className="text-2xl font-bold text-orange mb-2">LPG Bottle Swap</h2>
      <p className="text-gray-600 flex-grow">Convenient LPG bottle swap service available at many Z stations across New Zealand.</p>
      <button className="bg-dark-blue-900 text-white py-2 px-4 rounded mt-4 self-start">Find out more</button>
    </div>
    <div className="border p-4 rounded shadow-lg flex flex-col justify-between" style={{ borderColor: 'orange', borderWidth: '2px' }}>
      <div className="relative mb-4" style={{ margin: '-16px', marginBottom: '0' }}>
        <img src={FoodBeverage} alt="Food & Beverage" className="w-full h-48 object-cover" style={{ borderBottom: '2px solid orange' }} />
      </div>
      <h2 className="text-2xl font-bold text-orange mb-2">Food & Beverage</h2>
      <p className="text-gray-600 flex-grow">Fresh food, great coffee, essential snacks and more. You will find a Z stop at over 100 locations around Aotearoa New Zealand.</p>
      <button className="bg-dark-blue-900 text-white py-2 px-4 rounded mt-4 self-start">Find out more</button>
    </div>
  </div>
</div>


      <div className="bg-gradient-to-r from-orange-500 to-yellow-100 min-h-screen flex flex-col items-center justify-center text-white px-8 mt-8 w-full">
  <div className="flex flex-row items-center justify-between w-full mb-8">
    <div className="flex flex-col items-start justify-center w-1/2 text-left">
      <h1 className="text-4xl mb-4">Power your home</h1>
      <p className="mb-4">Specialised power plans to help keep your home and vehicle running tailored for both EV and non-EV drivers.</p>
      <button className="bg-orange-500 text-white border-2 border-white py-2 px-4 mb-4 rounded-full">Learn more</button>
    </div>
    <div className="flex justify-end items-center w-1/2">
      <img src={HomeImg} alt="Home" className="w-1/2" />
    </div>
  </div>
</div>

<div className="flex flex-row items-center justify-between bg-gray-100 p-4 rounded-lg mt-8 w-full">
  <div className="flex flex-col items-start justify-center p-4 w-1/2">
    <h2 className="text-3xl text-orange-500 font-bold mb-3">Go check our app and earn exclusive rewards!</h2>
    <p className="text-black mb-4">Receive exclusive rewards when you invite your friends to download and use the Z app!</p>
    <button className="bg-dark-blue text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">Find out more</button>
  </div>
  <div className="flex justify-end w-1/2">
    <img src={AppImg} alt="Person using app" className="w-full h-auto rounded-lg shadow-lg mt-4" />
  </div>
</div>
</main>
</div>
);

export default Home;