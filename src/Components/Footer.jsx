const Footer = () => {
  return (
    <footer className="bg-white-800 text-orange-500 py-8 bottom-0 w-full">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="font-bold mb-4">Products & Services</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">At the station</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Z App</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Power your home with Z</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Rewards & Promotions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">For Businesses</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Z Business Fuel Card</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Fuels & Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Business Tips & Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Sustainability</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Our Sustainability Goals</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Nature Restoration</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Supplier Code of Coduct</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Supporting Electric Vehicles</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">What We Stand For</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Our People</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">News</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Careers at Z</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Corporate Centres</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
