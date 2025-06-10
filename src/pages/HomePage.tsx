import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeatureCard from '../components/home/FeatureCard';
import InfoSection from '../components/home/InfoSection';
import { BookOpen, TreePine, Crop as Drop, Lightbulb } from 'lucide-react';
import { Link } from '../components/ui/Link';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Yuk Kenalan Sama Lingkungan Kita 🌍</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cari tahu isu-isu lingkungan penting, uji seberapa paham kamu, dan temukan cara buat bantuin bumi jadi tempat yang lebih baik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={TreePine} 
              title="Konservasi" 
              description="Pelajari gimana cara ngejaga habitat alami dan usaha pelestarian keanekaragaman hayati di seluruh dunia."
            />
            <FeatureCard 
              icon={Drop} 
              title="Perubahan Iklim" 
              description="Ngerti deh penyebab dan dampak dari perubahan iklim, terus cari tahu apa aja yang bisa kita lakuin buat ngurangin efeknya."
            />
            <FeatureCard 
              icon={BookOpen} 
              title="Kuis Lingkungan" 
              description="Tes seberapa jago kamu soal lingkungan lewat kuis interaktif, plus dapet fakta-fakta keren yang mind-blowing!"
            />
            <FeatureCard 
              icon={Lightbulb} 
              title="Hidup Ramah Lingkungan" 
              description="Dapetin tips dan trik biar gaya hidup kamu makin eco-friendly. Go green, guys!"
            />
          </div>
        </div>
      </section>
      
      {/* Climate Change Section */}
      <InfoSection
        title="Pahami Perubahan Iklim"
        subtitle=" TANTANGAN GLOBAL"
        imageUrl="https://images.pexels.com/photos/2454711/pexels-photo-2454711.jpeg"
        imageAlt="Climate change effects"
      >
        <p>
          Perubahan iklim tuh salah satu masalah lingkungan paling serius zaman sekarang. Dampaknya luas banget—ngaruh ke ekosistem, ekonomi, sampai kesehatan dan kesejahteraan manusia di seluruh dunia.
        </p>
        <p>
         🌡️ Suhu bumi makin naik secara ekstrem gara-gara ulah manusia yang nyumbang gas rumah kaca ke atmosfer.
Efeknya? Mulai dari suhu makin panas, pola hujan yang makin random, cuaca ekstrem yang makin sering, sampai permukaan laut yang terus naik.
        </p>
        <Link 
          to="/resources" 
          className="inline-block mt-4 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
           Cari tahu lebih lanjut soal perubahan iklim
        </Link>
      </InfoSection>
      
      {/* Conservation Section */}
      <InfoSection
        title="Konservasi Keanekaragaman Hayati"
        subtitle="LINDUNGI KEHIDUPAN DI BUMI"
        imageUrl="https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg"
        imageAlt="Wildlife conservation"
        reverse={true}
        className="bg-gray-50"
      >
        <p>
         Keanekaragaman hayati itu variasi kehidupan di Bumi, dari gen, spesies, sampai ekosistem. Ini penting banget karena bantu sediakan udara bersih, air, makanan, obat, dan banyak lagi.
        </p>
        <p>
          😥 Tapi, aktivitas manusia bikin keanekaragaman hayati menurun drastis.
Makanya, upaya konservasi itu penting buat lindungi spesies dan habitatnya, pulihkan ekosistem yang rusak, dan dorong pemanfaatan sumber daya alam yang berkelanjutan.
        </p>
        <Link 
          to="/resources" 
          className="inline-block mt-4 text-green-600 font-medium hover:text-green-700 transition-colors"
        >
          Lihat inisiatif konservasi
        </Link>
      </InfoSection>
      
      {/* Quiz Promo Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tes Pengetahuan Lingkungan Kamu!</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Cobain kuis interaktif ini buat cek seberapa paham kamu tentang isu lingkungan dan belajar fakta seru tentang planet kita.
          </p>
          <Link
            to="/quiz"
            className="px-6 py-3 bg-white text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors inline-block"
          >
            Yuk Cobain!
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;