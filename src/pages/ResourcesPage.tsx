import React from 'react';
import Layout from '../components/layout/Layout';
import { ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Sumber Belajar Lingkungan</h1>
            <p className="text-xl">
              Jelajahi berbagai materi yang kami sediakan untuk memperdalam pemahamanmu tentang isu-isu lingkungan dan temukan cara nyata untuk memberi dampak positif bagi Bumi.
            </p>
          </div>
        </div>
      </section>
      
      {/* Resources Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Kategori Materi</h2>
              
              {/* Climate Change */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 border-l-4 border-green-600 pl-4">Climate Change</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <h4 className="font-medium mb-2">Climate Change: What It Is & What We Can Do</h4>
                    <p className="text-gray-600 mb-4">
                      Perubahan iklim adalah perubahan jangka panjang suhu dan pola cuaca di Bumi yang disebabkan terutama oleh aktivitas manusia—seperti pembakaran bahan bakar fosil, penggundulan hutan, dan pertanian. Dampaknya mencakup suhu global yang meningkat, pencairan es di kutub, cuaca ekstrem, serta gangguan pada ekosistem dan kehidupan manusia.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Tapi tenang, masih ada harapan! 🌱 Solusi yang bisa kita lakukan antara lain beralih ke energi terbarukan (seperti tenaga surya & angin), meningkatkan efisiensi energi, menanam pohon, mendukung kebijakan lingkungan, dan tentunya perubahan gaya hidup dari kita sendiri—misalnya hemat listrik, kurangi konsumsi daging, dan pilih produk ramah lingkungan.
                    </p>
                    <p className="text-gray-600 mb-4">
                      📖 Pelajari lebih lanjut dan temukan cara kamu bisa bantu selamatkan Bumi
                    </p>
                    <a 
                      href="https://drive.google.com/file/d/1CB2hP5Q-NW81_d1XGwTNeuQExidp-adk/view?usp=drive_link" 
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      Read more
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Conservation */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 border-l-4 border-green-600 pl-4">Conservation & Biodiversity</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <h4 className="font-medium mb-2">Konservasi & Keanekaragaman Hayati: Menjaga Kehidupan di Bumi</h4>
                    <p className="text-gray-600 mb-4">
                      Keanekaragaman hayati mencakup berbagai jenis tumbuhan, hewan, dan mikroorganisme yang membentuk ekosistem dunia. Setiap makhluk hidup memiliki peran penting—lebah membantu penyerbukan, burung mengontrol populasi hama, dan tumbuhan menghasilkan oksigen yang kita hirup. Jika satu spesies punah, keseimbangan alam bisa terganggu, mengancam kehidupan manusia.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Konservasi berperan krusial dalam menjaga keberlanjutan ekosistem dan kesejahteraan manusia. Banyak usaha telah berhasil, seperti peningkatan populasi harimau liar di Nepal, restorasi terumbu karang di Indonesia, dan pemulihan ekosistem di Yellowstone, Amerika Serikat. Kesuksesan ini menunjukkan bahwa pelestarian alam membutuhkan kerja sama antara pemerintah, masyarakat, dan organisasi konservasi.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Dengan menjaga keanekaragaman hayati, kita turut melindungi masa depan generasi mendatang. 🌱✨
                    </p>
                    <a 
                      href="https://drive.google.com/file/d/1QsTadmwC9kLuW83Pu0_mwKo7zx9VYT8L/view?usp=drive_link" 
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      Read more
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Sustainable Living */}
              <div>
                <h3 className="text-xl font-semibold mb-4 border-l-4 border-green-600 pl-4">Sustainable Living</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <h4 className="font-medium mb-2">Gaya Hidup Berkelanjutan: Mengurangi Jejak Lingkungan 🌿</h4>
                    <p className="text-gray-600 mb-4">
                      Gaya hidup berkelanjutan bertujuan memenuhi kebutuhan saat ini tanpa mengorbankan masa depan. Langkah kecil dapat memberi dampak besar, seperti membawa tas belanja sendiri, menggunakan transportasi umum, dan menghemat air serta listrik.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Memilih produk lokal dan musiman juga membantu mengurangi emisi karbon dari transportasi jarak jauh. Selain itu, mengurangi konsumsi barang sekali pakai dan mendaur ulang dapat mengurangi limbah. Pola makan pun berpengaruh—mengurangi daging merah dapat menekan emisi gas rumah kaca, sementara protein nabati seperti tempe dan tahu adalah alternatif sehat dan ramah lingkungan.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Kesadaran akan dampak setiap tindakan adalah kunci gaya hidup berkelanjutan. Perubahan kecil yang dilakukan banyak orang akan menciptakan dampak besar untuk masa depan yang lebih baik. 🌍✨
                    </p>
                    <a 
                      href="https://drive.google.com/file/d/11c9Zonz9ZHEEEcYwekp3_f1BcbuC5b3H/view?usp=drive_link" 
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      Read more
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* External Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Recommended External Resources</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">NASA Climate Change</h3>
                <p className="text-gray-600 mb-4">
                  Scientific data, articles, and visualizations about climate change from NASA.
                </p>
                <a 
                  href="https://climate.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Visit website
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">World Wildlife Fund (WWF)</h3>
                <p className="text-gray-600 mb-4">
                  Information on conservation efforts, endangered species, and ways to get involved.
                </p>
                <a 
                  href="https://www.worldwildlife.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Visit website
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">United Nations Environment Programme</h3>
                <p className="text-gray-600 mb-4">
                  Global environmental initiatives, reports, and resources from the UN.
                </p>
                <a 
                  href="https://www.unep.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Visit website
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;