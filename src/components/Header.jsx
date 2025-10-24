import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu, selectMobileMenuOpen } from '../store/slices/uiSlice';

const Header = () => {
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector(selectMobileMenuOpen);

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-bold">Whirl</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <a href="#integrations" className="text-gray-700 hover:text-blue-600 transition">Integrations</a>
            <a href="#learn" className="text-gray-700 hover:text-blue-600 transition">Learn</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700 hover:text-blue-600 transition">Sign in</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Book a demo
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t mobile-menu-enter">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <a href="#integrations" className="text-gray-700 hover:text-blue-600 transition">Integrations</a>
              <a href="#learn" className="text-gray-700 hover:text-blue-600 transition">Learn</a>
              <button className="text-left text-gray-700 hover:text-blue-600 transition">Sign in</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-left">
                Book a demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
