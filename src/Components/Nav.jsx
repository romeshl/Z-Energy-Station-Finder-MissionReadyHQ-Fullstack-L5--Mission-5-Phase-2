import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Nav = () => {
  // State to manage the dropdowns for each menu item
  const [dropdownOpen, setDropdownOpen] = useState({
    products: false,
    businesses: false,
    sustainability: false,
    about: false,
  });

  // State to manage the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle dropdowns
  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-screen-xl" style={{ maxWidth: '1200px' }}>
        <div className="flex items-center ml-4"> {/* Increased left margin */}
          {/* Z Logo */}
          <img src={logo} alt="Z Logo" className="h-12 w-12 mr-8" /> {/* Increased logo size */}
          <div className="hidden md:flex space-x-2"> {/* Decreased space between menu options */}
            {/* Products and Services Menu */}
            <div className="relative">
              <button onClick={() => toggleDropdown('products')} className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-bold"> {/* Decreased font size */}
                Products and Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.products && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <Link to="/products-and-services/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">At the station</Link>
                  <Link to="/products-and-services/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Z App</Link>
                </div>
              )}
            </div>
            {/* For Businesses Menu */}
            <div className="relative">
              <button onClick={() => toggleDropdown('businesses')} className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-bold">
                For businesses
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.businesses && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <Link to="/for-businesses/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Z Business Fuel Card</Link>
                  <Link to="/for-businesses/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Fuels & Services</Link>
                </div>
              )}
            </div>
            {/* Sustainability Menu */}
            <div className="relative">
              <button onClick={() => toggleDropdown('sustainability')} className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-bold">
                Sustainability
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.sustainability && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <Link to="/sustainability/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Our Sustainability Goals</Link>
                  <Link to="/sustainability/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Nature Restoration</Link>
                </div>
              )}
            </div>
            {/* About Z Menu */}
            <div className="relative ml-4"> {/* Added left margin */}
              <button onClick={() => toggleDropdown('about')} className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-bold">
                About Z
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.about && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                  <Link to="/about-z/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Our Story</Link>
                  <Link to="/about-z/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Our People</Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Find A Station Button */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm font-bold">Find A Station</button>
          {/* Search Bar */}
          <div className="relative">
            <input type="text" placeholder="Search" className="border rounded px-4 py-2 text-sm font-bold" />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <Link to="/products-and-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Products and Services</Link>
          <Link to="/for-businesses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">For businesses</Link>
          <Link to="/sustainability" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">Sustainability</Link>
          <Link to="/about-z" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-bold">About Z</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;