import React from 'react';
import Layout from '../components/layout/Layout';
import { Heart, Target, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">🌿 Tentang EcoLearn</h1>
            <p className="text-xl">
              Dibuat untuk edukasi lingkungan & menginspirasi perubahan positif atas planet berharga kita.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Misi Kami</h2>
              <p className="text-gray-600">
                EcoLearn berkomitmen buat ngasih edukasi lingkungan yang mudah diakses & seru, yang bisa menginspirasi aksi nyata dan perubahan positif.
Kami yakin bahwa pengetahuan itu langkah awal buat bikin dunia lebih kerennn. 
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Target size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visi Kami</h3>
                <p className="text-gray-600">
                  Bayangin dunia di mana semua orang paham soal lingkungan 🌱.
Setiap orang, di mana pun, bisa ambil keputusan bijak yang berdampak baik buat Bumi dan generasi masa depan.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nilai-Nilai Kami</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Akurat dan jujur secara ilmiah</li>
                  <li>• Edukasi yang bisa diakses semua orang</li>
                  <li>• Aksi positif yang menginspirasi</li>
                  <li>• Kolaborasi dan komunitas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet The Eco Squad</h2>
              <p className="text-gray-600">
                EcoLearn digerakkan sama tim kece—ilmuwan, pendidik, dan digital expert "aamiinn"—yang semua punya satu misi: bikin edukasi lingkungan jadi seru, relate, dan gampang diakses buat semua!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-1">Kelompok 1 & 2</h3>
                <p className="text-green-600 mb-3">PPT & Riset</p>
                <p className="text-gray-600 text-left">
                  - Naila
                </p>
                <p className="text-gray-600 text-left">
                  - Nadiin
                </p>
                <p className="text-gray-600 text-left">
                  - Najhan 
                </p>
                <p className="text-gray-600 text-left">
                  - Novita
                </p>
                <p className="text-gray-600 text-left">
                  - Nadhifa
                </p>
                <p className="text-gray-600 text-left">
                  - Neli
                </p>
                <p className="text-gray-600 text-left">
                  - Nichita
                </p>
                <p className="text-gray-600 text-left">
                  - Fikrul
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-1">Kelompok 3</h3>
                <p className="text-green-600 mb-3">UI / UX</p>
                <p className="text-gray-600 text-left">
                  - Qoisy
                </p>
                <p className="text-gray-600 text-left">
                  - Nabila
                </p>
                <p className="text-gray-600 text-left">
                  - Naufal F
                </p>
                <p className="text-gray-600 text-left">
                  - Raihan F
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-1">Kelompok 4</h3>
                <p className="text-green-600 mb-3">Coder</p>
                <p className="text-gray-600 text-left">
                  - Haris
                </p>
                <p className="text-gray-600 text-left">
                  - Rafli
                </p>
                <p className="text-gray-600 text-left">
                  - Faishal 
                </p>
                <p className="text-gray-600 text-left">
                  - Haikal
                </p>
                <p className="text-gray-600 text-left">
                  - Naufal R
                </p>
                <p className="text-gray-600 text-left">
                  - Aun
                </p>
                <p className="text-gray-600 text-left">
                  - Raski
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Yuk Donasi💚</h2>
            <p className="text-xl mb-8">
              Dengan bantuan dari kalian , kami bisa terus berkembang dan memberikan informasi yang lebih baik.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors">
                085215540291-Dana
              </button>
              <button className="px-6 py-3 bg-green-800 text-white rounded-full font-medium hover:bg-green-900 transition-colors">
                15277842433-BCA
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;