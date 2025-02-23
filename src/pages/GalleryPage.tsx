import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      headerImage: ["public/galeri1.svg"],
      images: ["/public/galeri1-1.svg", "/public/galeri1-2.svg", "/public/galeri1-3.svg", "/public/galeri1-4.svg"],
      title: "Promosyon Ürünler",
      desc: "Manisa Enerji",
      client: "Alya Ajans olarak, Manisa Enerji’nin marka kimliğini güçlendirmek adına özgün ve dikkat çekici promosyon ürün tasarımlarını hayata geçirdik.",
      year: "Manisa Enerji’nin isteği doğrultusunda, Manisa’ya özgü bir promosyon teması oluşturarak çanta, defter, kalem, üzüm ve Manisa macunu gibi ürünler tasarladık. Bu özel tasarımlar, firmanın vizyonunu yansıtıp marka bilinirliğini artırıyor.",
      result: "Müşteri taleplerine göre geniş bir ürün yelpazesi sunarak tasarımlarınızı özenle hazırlıyor, en kaliteli sonuçları sunuyoruz!"
    },
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? projects[selectedProject as number].images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === projects[selectedProject as number].images.length - 1 ? 0 : prev + 1));
  };

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
                src={project.headerImage[0]}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-200 mb-4">{project.desc}</p>
                  <div className="flex items-center text-white">
                    <span>Detayları Gör</span>
                    <ChevronRight className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject !== null && (
          <div className="fixed inset-0 bg-blue-900/90 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 z-50"
              >
                <X className="w-6 h-6 text-blue-600" />
              </button>

              <div className="relative w-full h-80">
                <img
                  src={projects[selectedProject as number].images[currentImage]}
                  alt={`Project Image ${currentImage + 1}`}
                  className="w-full h-full object-cover rounded-t-2xl"
                />

                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
                >
                  <ChevronRight className="w-6 h-6 text-blue-600" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{projects[selectedProject as number].title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Güçlü Marka Kimliği</h4>
                      <p className="text-blue-700">{projects[selectedProject as number].client}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Vizyon ve Değerler</h4>
                      <p className="text-blue-700">{projects[selectedProject as number].year}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-2">🎯 Siz de Markanızı Öne Çıkarın!</h4>
                      <ul className="pl-6 ml-8;" style={{ listStyleType: "circle" }}>
                          <li className="text-blue-700 mb-2">Hedef kitlenize etkili bir şekilde ulaşmak,</li>
                          <li className="text-blue-700 mb-2">Çalışan motivasyonunu artırmak,</li>
                          <li className="text-blue-700 mb-2">Markanızı akılda kalıcı hale getirmek için promosyon ürünlerinizi bizimle hayata geçirin.</li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <p className="font-semibold text-blue-900 mb-2">{projects[selectedProject as number].result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
