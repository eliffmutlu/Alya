import { useState, useEffect } from 'react';
import { ChevronRight, Globe, Code, Sparkles, ArrowRight, Target, Instagram, Facebook, Rocket} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const slogans = [
    "Çözüm Ortağınız",
    "Hayallerinizi Gerçeğe Dönüştürüyoruz",
    "Yaratıcı Fikirlerle Markanızı Zirveye Taşıyoruz",
    "Organizasyon ve Dijital Çözümlerde Profesyonel Ortak",
    "İnovasyon ve Tecrübenin Buluşma Noktası",
    "Markanızı Zirveye Taşıyoruz",
    "Dijital Dönüşümün Öncüsü",
    "Her Etkinlik, Her Organizasyon için Bir Adım Ötesi"
  ];

  const images = [
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1384043/pexels-photo-1384043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8344905/pexels-photo-8344905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-600/60 z-10"></div>
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
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none animate-fade-in font-serif tracking-tight mb-4 flex items-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16">
            {/* Alya Görseli */}
            <img 
              src="/bannerBaslikBeyaz.svg" 
              alt="Alya Logo" 
              className="h-8 sm:h-12 md:h-12 lg:h-16 w-auto animate-pulse"
            />

            {/* Ajans Görseli */}
            <img 
              src="/bannerBaslikMavi.svg" 
              alt="Ajans Logo" 
              className="h-8 sm:h-12 md:h-12 lg:h-16 w-auto animate-pulse"
            />
          </div>

          </div>
            <div className="h-20 mt-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-100 transition-all duration-500 animate-fade-in-delay">
                {slogans[currentSlogan]}
              </p>
            </div>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl animate-fade-in-delay">
            Dijital dünyanın öncü ajansı olarak, markanızı geleceğe taşıyor, yenilikçi çözümler ve unutulmaz organizasyon hizmetleri sunuyoruz.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Link to="/hizmetler" 
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full transition-all transform hover:scale-105 flex items-center shadow-lg">
                <span className="group-hover:translate-x-1 transition-transform">Keşfet</span>
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

     {/* Alya Ajans İle Tanışın */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 p-6 sm:p-10 rounded-lg shadow-lg h-auto sm:h-192">
        {/* Logo (Telefon ekranlarında gizleniyor) */}
        <div className="flex-shrink-0 hidden sm:block">
          <img
            src="/logo3.svg"
            alt="Alya Logo"
            className="h-32 sm:h-128 w-auto object-contain"
          />
        </div>

        {/* Metinler */}
        <div className="text-blue-900 flex-grow text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Alya Ajans ile Tanışın</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-blue-700">
            Yaratıcı Çözümler, Profesyonel Hizmetler
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Alya Ajans, markanızın potansiyelini ortaya çıkarmak ve unutulmaz
            organizasyonlar yaratmak için çalışan yaratıcı bir ekiptir.
            Manisa merkezli ajansımız, fotoğraf & video çekimlerinden dijital
            pazarlamaya kadar geniş bir hizmet yelpazesi sunar.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold">Detaylara Önem Veriyoruz</h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Müşteri odaklı yaklaşımımızla, sizi dinler ve ihtiyaçlarınıza özel
            çözümler geliştiririz.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold">Sizin İçin Buradayız</h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Alya Ajans, sadece bir hizmet sağlayıcı değil, aynı zamanda bir çözüm
            ortağıdır.
          </p>
        </div>
      </div>


      {/* Öne Çıkan Başarılar
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
       */}

      {/* Neden Biz? */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-bold">Neden Alya Ajans?</h2>
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
      <h2 className="text-4xl font-bold text-blue-900 mb-4 font-bold">Çalışma Alanlarımız</h2>
      <p className="text-blue-600">Profesyonel çözümlerimiz</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          icon: Globe,
          title: "Organizasyon Hizmetleri",
          desc: "Etkinlik planlama, organizasyon yönetimi ve unutulmaz anlar için profesyonel hizmetler sunuyoruz.",
          image: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          services: [
            "Eğitim ve Seminer Organizasyonları",
            "Açılış ve Lansman Organizasyonları",
            "Kültürel Etkinlik ve Festival Organizasyonları",
            "ve daha fazlası",
          ],
        },
        {
          icon: Code,
          title: "Ajans Hizmetleri",
          desc: "Markanızın büyümesi için yaratıcı ve yenilikçi çözümler sunuyoruz.",
          image: "https://images.pexels.com/photos/326500/pexels-photo-326500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          services: [
            "Kurumsal Kimlik ve Marka Yönetimi",
            "Web Tasarımı ve Sosyal Medya Yönetimi",
            "Grafik Tasarım ve Baskılı İşler",
            "ve daha fazlası",
          ],
        },
      ].map((service, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl shadow-lg h-auto w-full"
        >
          {/* Görsel */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />

          {/* Gradyan (Kutucuğu Kaplar) */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent group-hover:opacity-100 opacity-90 transition-opacity duration-500"></div>

          {/* Başlık ve Maddeler (Varsayılan Görünür, Hover ile Kaybolur) */}
          <div className="absolute bottom-12 left-8 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <h3 className="text-xl lg:text-3xl font-bold text-white mb-2">
              {service.title}
            </h3>
            <ul className="list-disc list-inside text-white">
              {service.services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Hover Durumunda Görünen Ek Bilgi */}
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



    {/* Referanslar 
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">Referanslarımız</h2>
      <p className="text-blue-600">Bize Güvendiler</p>
    </div>
    
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          name: 'Manisa Büyükşehir Belediyesi',
          image: 'referanslogo2.svg',
        },
        {
          name: 'Yunusemre Belediyesi',
          image: 'https://www.yunusemre.bel.tr/imgServ/img/uploads/image-4c0b78b9cd19c84eb0d4207ff2cc46a9bd012871.png'
        },
        {
          name: 'Şehzadeler Belediyesi',
          image: 'https://manisameydangazetesicomtr.teimg.com/crop/1280x720/manisameydangazetesi-com-tr/images/haberler/2022/05/mulkiyeti-manisa-sehzadeler-belediyesi-ne-ait-42-adet-arsanin-satisi-yapilacak-8949.jpg'
        },
        {
          name: 'Yoga House',
          image: 'referanslogo-1.svg'
        }
      ].map((member, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="relative mb-4 group">
            <img
              src={member.image}
              alt={member.name}
              className="relative w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h3 className="text-xl font-regular text-blue-900">{member.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
*/}

{/* Instagram Bölümü */}
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-bold">Alya Ajans'ı Sosyal Medyada Keşfedin</h2>
            <p className="text-blue-600"> Sosyal Medyada Bize Katılın</p>
          </div>

          <div className="grid md:grid-cols-2 items-center justify-center">
            {/* Instagram Profil Kartı */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center mx-auto mb-6 sm:mb-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center transform hover:scale-110 transition-transform">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">@alyaajansmanisa</h3>
              <p className="text-blue-600 mb-4">Alya Ajans</p>
              <a
                href="https://instagram.com/alyaajansmanisa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                <span>Takip Et</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Facebook Profil Kartı */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 flex items-center justify-center transform hover:scale-110 transition-transform">
                <Facebook className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">@alyaajansmanisa</h3>
              <p className="text-blue-600 mb-4">Alya Ajans</p>
              <a
                href="https://www.facebook.com/alyajansmanisa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                <span>Takip Et</span>
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Son Paylaşımlar 
            {[1, 2, 3].map((post, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                <img
                  src={`https://images.unsplash.com/photo-${1500 + i}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Instagram Post ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex items-center text-white/80 text-sm">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{Math.floor(Math.random() * 1000)} beğeni</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}*/}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-bold">Projenizi Hayata Geçirelim</h2>
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