import { useState } from 'react';

export default function GalleryPage() {
  const [, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "E-ticaret Projesi",
      desc: "Modern ve kullanıcı dostu e-ticaret sitesi",
      client: "TechStore",
      year: "2023",
      services: ["Web Tasarım", "E-ticaret", "SEO"],
      challenge: "Büyük ürün kataloğunun yönetimi ve hızlı arama fonksiyonu",
      solution: "Özel filtreleme sistemi ve gelişmiş arama algoritması",
      result: "Satışlarda %150 artış, bounce rate'de %40 düşüş"
    },
    {
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Kurumsal Website",
      desc: "Profesyonel şirket web sitesi",
      client: "InnovaCorp",
      year: "2023",
      services: ["Web Tasarım", "Kurumsal Kimlik", "İçerik Yönetimi"],
      challenge: "Global pazarda marka kimliğini yansıtma",
      solution: "Çok dilli içerik yönetimi ve lokalizasyon",
      result: "Global müşteri portföyünde %80 artış"
    },
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Mobil Uygulama",
      desc: "iOS ve Android için özel uygulama",
      client: "HealthApp",
      year: "2023",
      services: ["Mobil Uygulama", "UI/UX Tasarım", "Backend Geliştirme"],
      challenge: "Karmaşık sağlık verilerinin kullanıcı dostu sunumu",
      solution: "Özelleştirilebilir dashboard ve veri görselleştirme",
      result: "App Store'da 4.8 yıldız değerlendirme"
    },
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Digital Marketing",
      desc: "Sosyal medya ve SEO kampanyası",
      client: "FashionBrand",
      year: "2023",
      services: ["Dijital Pazarlama", "Sosyal Medya", "SEO"],
      challenge: "Yüksek rekabetli pazarda marka bilinirliği",
      solution: "Influencer marketing ve içerik stratejisi",
      result: "Sosyal medya takipçilerinde %200 artış"
    },
    {
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Marka Kimliği",
      desc: "Logo ve kurumsal kimlik tasarımı",
      client: "EcoLife",
      year: "2023",
      services: ["Marka Kimliği", "Grafik Tasarım", "Ambalaj Tasarımı"],
      challenge: "Sürdürülebilirlik mesajının görsel aktarımı",
      solution: "Eco-friendly malzemeler ve minimal tasarım",
      result: "Sektörde trend belirleyici konuma ulaşma"
    },
    {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Video Prodüksiyon",
      desc: "Kurumsal tanıtım filmi",
      client: "TechCorp",
      year: "2023",
      services: ["Video Prodüksiyon", "3D Animasyon", "Ses Tasarımı"],
      challenge: "Kompleks teknolojinin anlaşılır sunumu",
      solution: "3D animasyon ve interaktif anlatım",
      result: "1M+ organik video görüntülenme"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Galeri</h2>
          <p className="text-blue-600">Başarıyla tamamladığımız projelerden örnekler</p>
        </div>
        
        {/* Proje Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(i)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-200 mb-4">{project.desc}</p>
                  {/*<div className="flex items-center text-white">
                    <span>Detayları Gör</span>
                    <ChevronRight className="ml-2" />
                  </div>*/}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proje Detay Modal 
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-blue-900/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-blue-600 hover:text-blue-800"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <img
                  src={projects[selectedProject].img}
                  alt={projects[selectedProject].title}
                  className="w-full h-80 object-cover rounded-t-2xl"
                />
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Müşteri</h4>
                        <p className="text-blue-700">{projects[selectedProject].client}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Yıl</h4>
                        <p className="text-blue-700">{projects[selectedProject].year}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Hizmetler</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[selectedProject].services.map((service, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Zorluk</h4>
                        <p className="text-blue-700">{projects[selectedProject].challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Çözüm</h4>
                        <p className="text-blue-700">{projects[selectedProject].solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Sonuç</h4>
                        <p className="text-blue-700">{projects[selectedProject].result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}*/}
      </div>
    </section>
  );
}