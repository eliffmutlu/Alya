import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Facebook, Instagram } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const menuItems = [
    { to: '/', text: 'Anasayfa' },
    { to: '/hakkimizda', text: 'Hakkımızda' },
    { to: '/hizmetler', text: 'Hizmetler' },
    { to: '/galeri', text: 'Galeri' },
    { to: '/iletisim', text: 'İletişim' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink flex items-center" >
              <Link to="/">
                <img src="/logo.svg" alt="Alya Ajans" className="h-20 w-auto" />
              </Link>

              <img src="/logo2.svg" alt="Ek Görsel" className="h-4 w-auto ml-4" />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`transition-all px-3 py-2 ${
                      location.pathname === item.to
                        ? 'text-blue-600 font-semibold'
                        : 'text-blue-500 hover:text-blue-700'
                    }`}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-600 hover:text-blue-800">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobil Menü */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-blue-600 hover:bg-blue-50"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Ana İçerik */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Hakkımızda */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Alya Ajans</h3>
              <p className="text-blue-100 mb-6">
                Dijital dünyada iz bırakan, yenilikçi ve etkileyici çözümler sunan öncü ajansınız.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Hızlı Linkler</h3>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-blue-100 hover:text-white transition-colors">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Hizmetlerimiz</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/hizmetler" className="text-blue-100 hover:text-white transition-colors">
                    Organizasyon Hizmetleri
                  </Link>
                </li>
                <li>
                  <Link to="/hizmetler" className="text-blue-100 hover:text-white transition-colors">
                    Ajans Hizmetleri
                  </Link>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h3 className="text-xl font-semibold mb-6">İletişim</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-200" />
                  <a href="mailto:info@alyaajans.com" className="text-blue-100 hover:text-white transition-colors">
                    info@alyaajans.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-200" />
                  <a href="tel:+905387193914" className="text-blue-100 hover:text-white transition-colors">
                    +90 538 719 39 14
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-500/30 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Alya Ajans. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;