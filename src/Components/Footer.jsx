const Footer = () => {
  return (
    <footer className="bg-white-800 text-orange-500 py-8 bottom-0 w-fulll">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left pl-12">
        <div>
          <h3 className="mb-4 font-semibold">Products & Services</h3>
          <ul>
            <li className="mb-2"><a href="#">At the station</a></li>
            <li className="mb-2"><a href="#">Z App</a></li>
            <li className="mb-2"><a href="#">Power your home with Z</a></li>
            <li className="mb-2"><a href="#">Rewards & Promotions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">For Businesses</h3>
          <ul>
            <li className="mb-2"><a href="#">Z Business Fuel Card</a></li>
            <li className="mb-2"><a href="#">Fuels & Services</a></li>
            <li className="mb-2"><a href="#">Business Tips & Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Sustainability</h3>
          <ul>
            <li className="mb-2"><a href="#">Our Sustainability Goals</a></li>
            <li className="mb-2"><a href="#">Nature Restoration</a></li>
            <li className="mb-2"><a href="#">Supplier Code of Conduct</a></li>
            <li className="mb-2"><a href="#">Supporting Electric Vehicles</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">About</h3>
          <ul>
            <li className="mb-2"><a href="#">Our Story</a></li>
            <li className="mb-2"><a href="#">What We Stand For</a></li>
            <li className="mb-2"><a href="#">Our People</a></li>
            <li className="mb-2"><a href="#">News</a></li>
            <li className="mb-2"><a href="#">Careers at Z</a></li>
            <li className="mb-2"><a href="#">Corporate Centres</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl flex justify-between font-thin text-gray-500 text-xs mt-8">
        <ul className="flex space-x-4">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms of use</a></li>
          <li><a href="#">Fuel Safety Data Sheets</a></li>
          <li><a href="#">Investor Relations</a></li>
        </ul>
        <p>© Z Energy Limited. All trademarks are used under license.</p>
      </div>
    </footer>
  );
};

export default Footer;
