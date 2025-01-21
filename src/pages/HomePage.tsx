import { useState, useEffect } from 'react';
import { ChevronRight, Users, Globe, Code, ArrowRight, Star, Sparkles, Target, Rocket, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const slogans = [
    "Çözüm Ortağınız",
    "Hayallerinizi Gerçeğe Dönüştürüyoruz",
    "Yaratıcılık Bizim DNA'mızda",
    "Geleceği Birlikte Tasarlıyoruz",
    "İnovasyon ve Tecrübenin Buluşma Noktası",
    "Markanızı Zirveye Taşıyoruz",
    "Dijital Dönüşümün Öncüsü",
    "Başarı Hikayenizin Mimarı"
  ];

  const images = [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const sloganInterval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(sloganInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70 z-10"></div>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="space-y-8">
          <div className="overflow-visible">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none animate-fade-in font-serif tracking-tight mb-4 flex items-center space-x-16">
            {/* Alya Görseli */}
            <img 
              src="/bannerBaslikBeyaz.svg" 
              alt="Alya Logo" 
              className="h-4 sm:h-12 md:h-12 lg:h-16 w-auto animate-pulse"
            />

            {/* Ajans Görseli */}
            <img 
              src="/bannerBaslikMavi.svg" 
              alt="Ajans Logo" 
              className="h-4 sm:h-12 md:h-12 lg:h-16 w-auto animate-pulse"
            />
          </div>

          </div>
            <div className="h-20 mt-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-100 transition-all duration-500 animate-fade-in-delay">
                {slogans[currentSlogan]}
              </p>
            </div>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl animate-fade-in-delay">
              Dijital dünyanın öncü ajansı olarak, markanızı geleceğe taşıyor, yenilikçi ve etkileyici çözümler sunuyoruz.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Link to="/iletisim" 
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full transition-all transform hover:scale-105 flex items-center shadow-lg">
                <span className="group-hover:translate-x-1 transition-transform">Bizimle Çalışın</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/galeri" 
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white/10 rounded-full transition-all shadow-lg">
                <span className="group-hover:translate-x-1 transition-transform">Projelerimiz</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Başarılar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">Rakamlarla Biz</h2>
            <p className="text-blue-600">Başarılarımız ve deneyimimiz</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', text: 'Tamamlanan Proje', icon: Target },
              { number: '100+', text: 'Mutlu Müşteri', icon: Heart },
              { number: '25+', text: 'Uzman Ekip', icon: Users },
              { number: '10+', text: 'Yıllık Deneyim', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:transform hover:scale-105 transition-all">
                <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-blue-800">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">Neden Alya Ajans?</h2>
            <p className="text-blue-600">Size özel avantajlarımız</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Yenilikçi Yaklaşım',
                desc: 'En son teknolojileri ve trendleri takip ederek, markanızı her zaman bir adım öne taşıyoruz.'
              },
              {
                icon: Target,
                title: 'Sonuç Odaklı',
                desc: 'Hedeflerinize ulaşmanız için stratejik çözümler üretiyor, ölçülebilir sonuçlar sunuyoruz.'
              },
              {
                icon: Sparkles,
                title: 'Yaratıcı Çözümler',
                desc: 'Özgün ve etkileyici tasarımlarla markanızı rakiplerinizden farklılaştırıyoruz.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <item.icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-blue-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Alanlarımız */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">Çalışma Alanlarımız</h2>
            <p className="text-blue-600">Profesyonel çözümlerimiz</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Globe,
              title: 'Organizasyon Hizmetleri',
              desc: 'Etkinlik planlama, organizasyon yönetimi ve unutulmaz anlar için profesyonel hizmetler sunuyoruz.',
              image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              icon: Code,
              title: 'Ajans Hizmetleri',
              desc: 'Markanızın büyümesi için yaratıcı ve yenilikçi çözümler sunuyoruz.',
              image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-96 w-full"
            >
              {/* Görsel */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradyan (Kutucuğu Kaplar) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent group-hover:opacity-100 opacity-90 transition-opacity duration-500"></div>

              {/* Başlık (Sol Alt Kısım) */}
              <div className="absolute bottom-12 left-8 group-hover:opacity-0">
                <h3 className="text-xl lg:text-3xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Detaylı Bilgi (Hover Durumunda Görünür) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <service.icon className="w-10 h-10 text-white mb-4" />
                <p className="text-white text-lg mb-4">{service.desc}</p>
                <Link
                  to="/hizmetler"
                  className="inline-flex items-center text-white mt-4"
                >
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>




        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-serif">Projenizi Hayata Geçirelim</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için hemen bizimle iletişime geçin.
          </p>
          <Link to="/iletisim" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </section>
    </>
  );
}