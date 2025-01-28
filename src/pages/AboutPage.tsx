
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Zap, Users, Shield, Heart, Sparkles, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Ana Hakkımızda Bölümü */}
      <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Hakkımızda</h2>
            <p className="text-blue-600">Vizyonumuz ve Misyonumuz</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 relative">
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-blue-900">Misyonumuz</h3>
                </div>
                <p className="text-blue-700 leading-relaxed">
                Alya Ajans olarak, müşterilerimizin hayallerini gerçeğe dönüştürmek için yaratıcı, yenilikçi ve profesyonel çözümler sunuyoruz. Eğitimden kültürel etkinliklere, kurumsal kimlik çalışmalarından dijital çözümlere kadar geniş bir hizmet yelpazesiyle markaların vizyonunu güçlendirmeyi ve topluma değer katmayı amaçlıyoruz. Müşteri memnuniyetini öncelik alarak, her projede mükemmelliği hedefliyoruz.                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-blue-900">Vizyonumuz</h3>
                </div>
                <p className="text-blue-700 leading-relaxed">
                Alya Ajans, organizasyon ve dijital çözümler alanında Türkiye’nin önde gelen markalarından biri olmayı hedeflemektedir. Teknolojiyi yaratıcı düşünceyle birleştirerek, ulusal ve uluslararası arenada fark yaratan projeler geliştirmek ve müşteri odaklı bir hizmet anlayışıyla sektör lideri olmak vizyonumuzdur. İnovasyon ve sürdürülebilirlik ilkeleri doğrultusunda, iş ortaklarımızın başarısını destekleyen ve topluma katkı sağlayan projelerle geleceği şekillendirmeyi arzuluyoruz.                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Neden Biz?</h3>
                <div className="space-y-6">
                  {[
                    { icon: Award, title: 'Uzman Ekip', desc: '10+ yıllık deneyimli profesyoneller' },
                    { icon: Zap, title: 'Hızlı Teslimat', desc: 'Projelerde %98 zamanında teslim oranı' },
                    { icon: Users, title: 'Müşteri Odaklı', desc: '%100 müşteri memnuniyeti hedefi' },
                    { icon: Shield, title: 'Güvenilir Hizmet', desc: 'Şeffaf ve güvenilir iş süreçleri' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <item.icon className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">{item.title}</h4>
                        <p className="text-blue-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarihçe Bölümü */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Tarihçemiz</h2>
            <p className="text-blue-600">Başarı Yolculuğumuz</p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                year: '2015',
                title: 'Kuruluş',
                desc: 'Alya Ajans, dijital dünyada fark yaratma vizyonuyla kuruldu.'
              },
              {
                year: '2017',
                title: 'Büyüme',
                desc: 'Ekibimiz genişledi ve yeni ofisimize taşındık.'
              },
              {
                year: '2019',
                title: 'Ödüller',
                desc: 'Sektörün önde gelen ödüllerinden ikisini kazandık.'
              },
              {
                year: '2021',
                title: 'Global Açılım',
                desc: 'Uluslararası müşterilerle çalışmaya başladık.'
              },
              {
                year: '2023',
                title: 'Yenilikçi Çözümler',
                desc: 'AI ve blockchain teknolojilerini hizmetlerimize entegre ettik.'
              }
            ].map((milestone, i) => (
              <div key={i} className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{milestone.title}</h3>
                  <p className="text-blue-700">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Değerlerimiz</h2>
            <p className="text-blue-600">Bizi Biz Yapan İlkeler</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Tutku',
                desc: 'İşimizi severek yapıyor, her projede tutkuyla çalışıyoruz.'
              },
              {
                icon: Shield,
                title: 'Güven',
                desc: 'Müşterilerimizle güvene dayalı ilişkiler kuruyoruz.'
              },
              {
                icon: Sparkles,
                title: 'Yenilikçilik',
                desc: 'Sürekli kendimizi geliştiriyor, yenilikleri takip ediyoruz.'
              },
              {
                icon: Users,
                title: 'İşbirliği',
                desc: 'Ekip çalışmasına inanıyor, birlikte başarıyoruz.'
              }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg">
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-blue-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalar ve Başarılar
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Sertifikalar ve Başarılar</h2>
            <p className="text-blue-600">Kalitemizin Kanıtları</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO 9001:2015',
                desc: 'Kalite Yönetim Sistemi Sertifikası'
              },
              {
                title: 'Web Awards 2023',
                desc: 'En İyi Ajans Ödülü'
              },
              {
                title: 'Google Partner',
                desc: 'Premium İş Ortağı'
              }
            ].map((cert, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-blue-900 mb-4">{cert.title}</h3>
                <p className="text-blue-700">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       */}
      {/* CTA Bölümü */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Projeleriniz İçin Yanınızdayız</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Markanızı bir üst seviyeye taşımak için profesyonel ekibimizle hazırız.
          </p>
          <Link to="/iletisim" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Hemen İletişime Geçin <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}