import React from 'react';
import { Leaf, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={24} />
              <span className="font-bold text-xl">EcoLearn</span>
            </div>
            <p className="text-green-100 mb-4">
              Mendidik dan menginspirasi tindakan untuk masa depan yang berkelanjutan. Bergabunglah dengan kami dalam melindungi planet kita.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/quiz" className="text-green-100 hover:text-white transition-colors">Kuis Lingkungan</Link></li>
              <li><Link to="/resources" className="text-green-100 hover:text-white transition-colors">Sumber Daya</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Pelajari Lebih Lanjut</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Perubahan Iklim</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Konservasi</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Hidup Berkelanjutan</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Energi Terbarukan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <p className="text-green-100 mb-2">Punya pertanyaan atau saran?</p>
            <a href="mailto:info@ecolearn.com" className="text-green-100 hover:text-white transition-colors">
              kelompok2@gmail.com
            </a>
            <p className="text-green-100 mt-4">Berlangganan buletin kami:</p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="px-4 py-2 rounded-l-full text-gray-800 focus:outline-none text-sm"
              />
              <button className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-r-full text-sm">
                Kuyyyy
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} EcoLearn. Hak cipta dilindungi kelompok 2.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;