
import { Globe, Palette, Code, Image, Sparkles, Rocket, ChevronRight, Monitor, Smartphone, ShoppingBag, Camera, Video, PenTool, BarChart, Mail, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <>
      {/* Ana Hizmetler Bölümü */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-blue-600">Premium çözümlerle markanızı zirveye taşıyoruz</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: 'Web Tasarım', 
                desc: 'Responsive ve modern web siteleri geliştiriyoruz. SEO uyumlu, hızlı ve kullanıcı dostu arayüzler tasarlıyoruz.',
                features: ['Mobil Uyumlu Tasarım', 'SEO Optimizasyonu', 'Hızlı Yükleme', 'Modern Arayüz', 'SSL Sertifikası', 'Teknik Destek']
              },
              { 
                icon: Palette, 
                title: 'Grafik Tasarım', 
                desc: 'Markanızı en iyi şekilde yansıtan özgün tasarımlar oluşturuyoruz. Logo, kurumsal kimlik ve her türlü görsel materyal.',
                features: ['Logo Tasarımı', 'Kurumsal Kimlik', 'Sosyal Medya Görselleri', 'Ambalaj Tasarımı', 'Broşür Tasarımı', 'Banner Tasarımı']
              },
              { 
                icon: Code, 
                title: 'Web Yazılım', 
                desc: 'İhtiyaçlarınıza özel web uygulamaları geliştiriyoruz. E-ticaret, portal ve özel yazılım çözümleri.',
                features: ['Özel Yazılım', 'E-ticaret', 'Web Uygulamaları', 'API Entegrasyonu', 'Veritabanı Yönetimi', 'Güvenlik']
              },
              { 
                icon: Image, 
                title: 'Fotoğraf & Video', 
                desc: 'Profesyonel fotoğraf ve video çekimleri yapıyoruz. Ürün çekimi, tanıtım filmi ve drone çekimleri.',
                features: ['Ürün Çekimi', 'Tanıtım Filmi', 'Drone Çekimi', '360° <boltAction type="file" filePath="src/pages/ServicesPage.tsx"> Çekim', 'Mekan Çekimi', 'Post Prodüksiyon']
              },
              { 
                icon: Sparkles, 
                title: 'Marka Kimliği', 
                desc: 'Markanızı rakiplerinizden ayıran özgün ve akılda kalıcı kimlik tasarımları oluşturuyoruz.',
                features: ['Marka Stratejisi', 'Görsel Kimlik', 'Pazarlama Materyalleri', 'Slogan Geliştirme', 'Marka Rehberi', 'Marka Konumlandırma']
              },
              { 
                icon: Rocket, 
                title: 'Dijital Pazarlama', 
                desc: 'Etkili dijital pazarlama stratejileri ile markanızı büyütüyoruz. SEO, SEM ve sosyal medya yönetimi.',
                features: ['SEO & SEM', 'Sosyal Medya', 'İçerik Yönetimi', 'E-posta Pazarlama', 'Google Ads', 'Analitik Raporlama']
              },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 hover:to-blue-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <service.icon className="w-12 h-12 text-blue-600 mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-blue-700 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-blue-600">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detaylı Hizmet Açıklamaları */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              title: 'Web Tasarım ve Geliştirme',
              desc: 'Modern ve etkileyici web siteleri tasarlıyoruz',
              content: 'Responsive tasarım, SEO uyumlu kodlama ve modern teknolojilerle web sitenizi oluşturuyoruz. WordPress, React, Vue.js gibi teknolojilerle ihtiyacınıza en uygun çözümü sunuyoruz.',
              features: [
                { icon: Monitor, text: 'Responsive Tasarım' },
                { icon: Smartphone, text: 'Mobil Öncelikli Yaklaşım' },
                { icon: ShoppingBag, text: 'E-ticaret Çözümleri' }
              ]
            },
            {
              title: 'Görsel Prodüksiyon',
              desc: 'Profesyonel fotoğraf ve video prodüksiyon hizmetleri',
              content: 'Ürün çekimlerinden kurumsal tanıtım filmlerine, drone çekimlerinden 360° sanal turlara kadar tüm görsel prodüksiyon ihtiyaçlarınız için profesyonel çözümler sunuyoruz.',
              features: [
                { icon: Camera, text: 'Profesyonel Fotoğraf Çekimi' },
                { icon: Video, text: 'Video Prodüksiyon' },
                { icon: PenTool, text: 'Post Prodüksiyon' }
              ]
            },
            {
              title: 'Dijital Pazarlama',
              desc: 'Etkili dijital pazarlama stratejileri',
              content: 'SEO, SEM, sosyal medya yönetimi ve içerik pazarlama stratejileri ile markanızın dijital varlığını güçlendiriyoruz. Veriye dayalı kararlar ve ölçülebilir sonuçlar sunuyoruz.',
              features: [
                { icon: BarChart, text: 'SEO & SEM' },
                { icon: Mail, text: 'E-posta Pazarlama' },
                { icon: Instagram, text: 'Sosyal Medya Yönetimi' }
              ]
            }
          ].map((service, i) => (
            <div key={i} className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-blue-600">{service.desc}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-blue-700 leading-relaxed">{service.content}</p>
                  <div className="space-y-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-blue-800">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-${1500 + i}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sosyal Medya Yönetimi */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Sosyal Medya Yönetimi</h2>
            <p className="text-blue-600">Tüm Platformlarda Profesyonel Yönetim</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Instagram, platform: 'Instagram', color: 'from-pink-500 to-purple-500' },
              { icon: Facebook, platform: 'Facebook', color: 'from-blue-600 to-blue-700' },
              { icon: Linkedin, platform: 'LinkedIn', color: 'from-blue-400 to-blue-600' },
              { icon: Youtube, platform: 'YouTube', color: 'from-red-500 to-red-700' }
            ].map((social, i) => (
              <div key={i} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center transform hover:scale-110 transition-transform`}>
                  <social.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{social.platform}</h3>
                <p className="text-blue-700">Profesyonel {social.platform} yönetimi ve reklam hizmetleri</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Sürecimiz */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Çalışma Sürecimiz</h2>
            <p className="text-blue-600">Projelerinizi Nasıl Hayata Geçiriyoruz?</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Keşif', desc: 'İhtiyaçlarınızı analiz ediyor, hedeflerinizi belirliyoruz.' },
              { step: '02', title: 'Planlama', desc: 'Stratejik yol haritası ve zaman planı oluşturuyoruz.' },
              { step: '03', title: 'Uygulama', desc: 'Projelerinizi titizlikle hayata geçiriyoruz.' },
              { step: '04', title: 'Optimizasyon', desc: 'Sürekli iyileştirme ve geliştirme yapıyoruz.' }
            ].map((process, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
                  <div className="text-5xl font-bold text-blue-200 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{process.title}</h3>
                  <p className="text-blue-700">{process.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Projenizi Hayata Geçirelim</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Size özel çözümler için hemen iletişime geçin. Ücretsiz danışmanlık hizmetimizden faydalanın.
          </p>
          <Link to="/iletisim" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Teklif Alın <ChevronRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}