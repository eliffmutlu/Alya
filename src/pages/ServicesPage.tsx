import { useState } from 'react';
import { 
  Target, Globe, Shield, ChevronRight, X, Music,
  Megaphone, Palette, Smartphone,
  Speaker, Search, Layout, Package, Camera, CheckCircle2,
  Presentation, GraduationCap, CalendarDays,
  Building2, Lightbulb, Theater, UserCheck, Store, Globe2
} from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    desc: string;
    features: string[];
    longDesc: string;
    image: string;
    icon: any;
  } | null>(null);

  const services = {
    organization: [
      {
        icon: GraduationCap,
        title: 'Eğitim Organizasyonları',
        desc: 'Profesyonel eğitim etkinlikleri organizasyonu',
        features: [
          'Eğitim Mekanı Seçimi',
          'Teknik Ekipman Desteği',
          'Eğitmen Koordinasyonu',
          'Katılımcı Yönetimi',
          'Sertifika Organizasyonu',
          'Catering Hizmetleri'
        ],
        longDesc: 'Eğitim organizasyonlarınızı A\'dan Z\'ye planlıyor ve yönetiyoruz. Modern eğitim ekipmanları ve profesyonel ekibimizle kusursuz eğitim deneyimleri sunuyoruz.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      },
      {
        icon: Presentation,
        title: 'Kurs ve Seminer',
        desc: 'Profesyonel kurs ve seminer organizasyonları',
        features: [
          'Mekan Organizasyonu',
          'Sunum Ekipmanları',
          'Katılımcı Kayıt',
          'Materyal Hazırlığı',
          'Online Yayın İmkanı',
          'Teknik Destek'
        ],
        longDesc: 'Kurs ve seminerlerinizi modern ve profesyonel bir ortamda gerçekleştirmeniz için tüm detayları düşünüyor ve organize ediyoruz.',
        image: 'https://i.pinimg.com/736x/9f/55/e8/9f55e885d6ada88564d2570d21c996cd.jpg'
      },
      {
        icon: CalendarDays,
        title: 'Lansman ve Toplantı',
        desc: 'Etkileyici lansman ve toplantı organizasyonları',
        features: [
          'Mekan Seçimi',
          'Sahne Tasarımı',
          'Teknik Ekipman',
          'Sunum Desteği',
          'Catering Hizmeti',
          'Davetli Yönetimi'
        ],
        longDesc: 'Ürün lansmanları ve kurumsal toplantılarınızı profesyonel bir şekilde organize ediyor, markanızı en iyi şekilde temsil ediyoruz.',
        image: 'https://assets.hardwarezone.com/img/2022/05/googleio2022.jpg'
      },
      {
        icon: Building2,
        title: 'Şirket Organizasyonları',
        desc: 'Kurumsal etkinlik ve organizasyonlar',
        features: [
          'Motivasyon Etkinlikleri',
          'Yıl Sonu Kutlamaları',
          'Açılış Organizasyonu',
          'Temel Atma Töreni',
          'Bayi Toplantıları',
          'Kurum İçi Etkinlikler'
        ],
        longDesc: 'Şirketinizin her türlü kurumsal etkinliğini profesyonel bir yaklaşımla organize ediyor, kurum kültürünüzü güçlendiriyoruz.',
        image: 'https://res.cloudinary.com/dqocoj1yg/image/upload/v1735819133/Article-Images/cm5f9w6p700000iul5xrlhiw7.png'
      },
      {
        icon: Lightbulb,
        title: 'Açılış Organizasyonları',
        desc: 'Etkileyici açılış törenleri',
        features: [
          'Tören Organizasyonu',
          'VIP Davetli Yönetimi',
          'Protokol Hizmeti',
          'Basın İlişkileri',
          'Catering Servisi',
          'Teknik Ekipman'
        ],
        longDesc: 'İşletmenizin açılışını unutulmaz kılacak organizasyonlar düzenliyor, markanızın tanıtımını en etkili şekilde yapıyoruz.',
        image: 'https://i.pinimg.com/736x/c9/bc/31/c9bc31cf37bf19b392b66b4f061ad5a5.jpg'
      },
      {
        icon: Music,
        title: 'Konser Organizasyonları',
        desc: 'Profesyonel konser organizasyonu',
        features: [
          'Sanatçı Anlaşmaları',
          'Mekan Organizasyonu',
          'Ses ve Işık Sistemleri',
          'Bilet Satış Yönetimi',
          'Güvenlik Hizmeti',
          'Backstage Yönetimi'
        ],
        longDesc: 'Her ölçekte konser organizasyonunu profesyonel ekibimizle yönetiyor, unutulmaz müzik deneyimleri yaşatıyoruz.',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      },
      {
        icon: Theater,
        title: 'Kültürel Etkinlikler',
        desc: 'Sanat ve kültür etkinlikleri organizasyonu',
        features: [
          'Sergi Organizasyonu',
          'Tiyatro Gösterileri',
          'Sanat Atölyeleri',
          'Festival Yönetimi',
          'Panel Düzenleme',
          'Kültürel Geziler'
        ],
        longDesc: 'Kültür-sanat etkinliklerinizi profesyonel bir yaklaşımla organize ediyor, sanatseverlere unutulmaz deneyimler yaşatıyoruz.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      },
      {
        icon: UserCheck,
        title: 'Sanatçı Organizasyonu',
        desc: 'Sanatçı ve ünlü isim organizasyonları',
        features: [
          'Sanatçı Booking',
          'Transfer Hizmetleri',
          'Konaklama Organizasyonu',
          'Rider Yönetimi',
          'Program Akışı',
          'Güvenlik Hizmeti'
        ],
        longDesc: 'Sanatçı ve ünlü isimlerin organizasyonlarını profesyonel bir şekilde yönetiyor, tüm ihtiyaçları eksiksiz karşılıyoruz.',
        image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      },
      {
        icon: Store,
        title: 'Fuar Organizasyonları',
        desc: 'Profesyonel fuar ve sergi organizasyonu',
        features: [
          'Stand Tasarımı',
          'Alan Yönetimi',
          'Teknik Altyapı',
          'Ziyaretçi Yönetimi',
          'Tanıtım Hizmetleri',
          'Catering Servisi'
        ],
        longDesc: 'Fuar organizasyonlarınızı A\'dan Z\'ye planlıyor, markanızı en iyi şekilde temsil edecek standlar tasarlıyoruz.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      },
      {
        icon: Globe2,
        title: 'Uluslararası Etkinlikler',
        desc: 'Uluslararası panel, sempozyum ve festivaller',
        features: [
          'Uluslararası Koordinasyon',
          'Simultane Tercüme',
          'Konaklama Organizasyonu',
          'Transfer Hizmetleri',
          'Program Yönetimi',
          'Teknik Altyapı'
        ],
        longDesc: 'Uluslararası etkinliklerinizi profesyonel bir yaklaşımla organize ediyor, global standartlarda hizmet sunuyoruz.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      }
    ],
    agency: [
      {
        icon: Shield,
        title: 'Kurumsal Kimlik',
        desc: 'Profesyonel kurumsal kimlik tasarımı',
        features: [
          'Logo Tasarımı',
          'Kartvizit Tasarımı',
          'Antetli Kağıt',
          'Kurumsal Renkler',
          'Marka Kılavuzu',
          'Kurumsal Font'
        ],
        longDesc: 'Markanızı en iyi şekilde yansıtan, profesyonel ve akılda kalıcı kurumsal kimlik tasarımları oluşturuyoruz.',
        image: 'https://images.pexels.com/photos/7598017/pexels-photo-7598017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        icon: Globe,
        title: 'Web Tasarım',
        desc: 'Modern ve responsive web siteleri',
        features: [
          'Responsive Tasarım',
          'SEO Uyumlu Kodlama',
          'Yönetim Paneli',
          'Hızlı Yükleme',
          'SSL Sertifikası',
          'Teknik Destek'
        ],
        longDesc: 'Modern teknolojilerle, markanızı en iyi şekilde yansıtan web siteleri tasarlıyor ve geliştiriyoruz.',
        image: 'hizmetfoto-1.svg'
      },
      {
        icon: Target,
        title: 'Marka Yönetimi',
        desc: 'Stratejik marka yönetimi hizmetleri',
        features: [
          'Marka Stratejisi',
          'Pazar Araştırması',
          'Rakip Analizi',
          'Marka Konumlandırma',
          'İletişim Stratejisi',
          'Marka Takibi'
        ],
        longDesc: 'Markanızı güçlendirmek ve pazarda öne çıkarmak için stratejik marka yönetimi hizmetleri sunuyoruz.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      },
      {
        icon: Layout,
        title: 'Sosyal Medya',
        desc: 'Profesyonel sosyal medya yönetimi',
        features: [
          'İçerik Üretimi',
          'Topluluk Yönetimi',
          'Reklam Yönetimi',
          'Kriz Yönetimi',
          'Performans Analizi',
          'Strateji Geliştirme'
        ],
        longDesc: 'Sosyal medya platformlarında markanızı profesyonel bir şekilde yönetiyor, etkileşimi artırıyoruz.',
        image: 'https://i.pinimg.com/736x/d3/b6/fa/d3b6fa75258432f7c8f07bc38a7d67fc.jpg'
      },
      {
        icon: Palette,
        title: 'Grafik Tasarım',
        desc: 'Yaratıcı grafik tasarım çözümleri',
        features: [
          'Logo Tasarımı',
          'Broşür Tasarımı',
          'Ambalaj Tasarımı',
          'Afiş Tasarımı',
          'Sosyal Medya Görselleri',
          'Banner Tasarımı'
        ],
        longDesc: 'Markanızı en iyi şekilde yansıtan özgün ve etkileyici grafik tasarımlar oluşturuyoruz.',
        image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        icon: Package,
        title: 'Promosyon Ürünleri',
        desc: 'Özel tasarım promosyon ürünleri',
        features: [
          'Kurumsal Hediyeler',
          'Özel Tasarım Ürünler',
          'Ajanda ve Takvimler',
          'Tekstil Ürünleri',
          'Ofis Malzemeleri',
          'Özel Kutulama'
        ],
        longDesc: 'Markanıza özel, kaliteli ve akılda kalıcı promosyon ürünleri tasarlıyor ve üretiyoruz.',
        image: 'https://i.pinimg.com/736x/02/46/24/02462410931d729c666496a0cd1f36d0.jpg'
      },
      {
        icon: Camera,
        title: 'Fotoğraf Çekimi',
        desc: 'Profesyonel fotoğraf çekim hizmetleri',
        features: [
          'Ürün Çekimi',
          'Mekan Çekimi',
          'Etkinlik Fotoğrafçılığı',
          'Portre Çekimi',
          'Drone Çekimi',
          'Post Prodüksiyon'
        ],
        longDesc: 'Profesyonel ekipmanlar ve deneyimli ekibimizle her türlü fotoğraf çekim hizmeti sunuyoruz.',
        image: 'https://images.pexels.com/photos/7679878/pexels-photo-7679878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        icon: Megaphone,
        title: 'Açık Alan Reklamcılığı',
        desc: 'Etkili açık alan reklam çözümleri',
        features: [
          'Billboard Tasarımı',
          'Raket Pano',
          'Megalight',
          'Vinil Giydirme',
          'Totem Tasarımı',
          'LED Ekran'
        ],
        longDesc: 'Açık alanda markanızı en etkili şekilde tanıtacak reklam çözümleri sunuyoruz.',
        image: 'https://i.pinimg.com/736x/8c/42/5e/8c425e0883aa5e4e8a4f40c14a469625.jpg'
      },
      {
        icon: Speaker,
        title: 'Ses ve Işık Sistemleri',
        desc: 'Profesyonel ses ve ışık çözümleri',
        features: [
          'Ses Sistemleri',
          'Işık Sistemleri',
          'Sahne Sistemleri',
          'LED Ekranlar',
          'Teknik Ekip',
          'Bakım Hizmeti'
        ],
        longDesc: 'Her türlü etkinliğiniz için profesyonel ses ve ışık sistemleri kuruyoruz.',
        image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        icon: Search,
        title: 'SEO Yönetimi',
        desc: 'Profesyonel SEO ve SEM hizmetleri',
        features: [
          'SEO Analizi',
          'İçerik Optimizasyonu',
          'Teknik SEO',
          'Anahtar Kelime Analizi',
          'Rakip Analizi',
          'Raporlama'
        ],
        longDesc: 'Web sitenizin arama motorlarında üst sıralarda yer alması için profesyonel SEO hizmetleri sunuyoruz.',
        image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        icon: Smartphone,
        title: 'Mobil Uygulama',
        desc: 'Özel mobil uygulama geliştirme',
        features: [
          'iOS Geliştirme',
          'Android Geliştirme',
          'UI/UX Tasarım',
          'API Entegrasyonu',
          'Push Notification',
          'Analitik'
        ],
        longDesc: 'İhtiyaçlarınıza özel, kullanıcı dostu mobil uygulamalar geliştiriyoruz.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
      }
    ]
  };

  return (
    <>
          <section className="py-32 bg-gradient-to-br from-[#ffffff] to-[#0264E4] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-blue-600">Premium çözümlerle markanızı zirveye taşıyoruz</p>
          </div>

          {/* Organizasyon Hizmetleri */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">Organizasyon Hizmetleri</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.organization.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:to-blue-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-6 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-blue-700 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ajans Hizmetleri */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">Ajans Hizmetleri</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.agency.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:to-blue-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-6 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-blue-700 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-blue-600">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Detay Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-blue-900/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-blue-600 hover:text-blue-800"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {selectedService.title}
                </h3>
                
                <p className="text-blue-700 mb-6">{selectedService.desc}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-4">Özellikler</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-blue-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-4">Detaylı Bilgi</h4>
                  <div className="text-blue-700 whitespace-pre-line">
                    {selectedService.longDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}