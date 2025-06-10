import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-900 text-white">
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')"
        }}
      ></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Melindungi Planet Kita Dimulai Dengan Pendidikan
          </h1>
          <p className="text-xl mb-8 text-green-50">
            Pelajari tentang tantangan lingkungan, uji pengetahuan Anda, dan temukan cara untuk memberikan dampak positif bagi planet kita.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/quiz" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors rounded-full font-medium inline-flex items-center"
            >
              Ikuti Kuis
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/resources" 
              className="px-6 py-3 bg-white text-green-800 hover:bg-green-50 transition-colors rounded-full font-medium"
            >
              Jelajahi Sumber Daya
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;