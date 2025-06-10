import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link } from '../ui/Link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-green-700 hover:text-green-600 transition-colors">
          <Leaf size={24} />
          <span className="font-bold text-xl">EcoLearn</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-green-600 transition-colors">Tentang</Link>
          <Link to="/quiz" className="font-medium text-gray-700 hover:text-green-600 transition-colors">Kuis</Link>
          <Link to="/resources" className="font-medium text-gray-700 hover:text-green-600 transition-colors">Sumber Daya</Link>
          <Link 
            to="/take-action" 
            className="px-4 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            Ambil Tindakan
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 flex flex-col gap-4">
          <Link 
            to="/" 
            className="font-medium text-gray-700 hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link 
            to="/about" 
            className="font-medium text-gray-700 hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link 
            to="/quiz" 
            className="font-medium text-gray-700 hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Kuis
          </Link>
          <Link 
            to="/resources" 
            className="font-medium text-gray-700 hover:text-green-600 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sumber Daya
          </Link>
          <Link 
            to="/take-action" 
            className="px-4 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors inline-block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Ambil Tindakan
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;