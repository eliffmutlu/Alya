
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
<section className="py-32 bg-gradient-to-b from-white via-white to-[#0264E4]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Bizimle İletişime Geçin</h2>
            <p className="text-blue-700 mb-8">Projenizi birlikte hayata geçirelim.</p>
            <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-800" />
                  <a href="mailto:info@alyaajans.com" className="text-blue-600 hover:text-white transition-colors">
                    info@alyaajans.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-800" />
                  <a href="tel:+905387193914" className="text-blue-600 hover:text-white transition-colors">
                    +90 538 719 39 14
                  </a>
                </li>
              </ul>
          </div>
          
          <div className="flex-shrink-0">
        <img
          src="/logo4.svg" // Logo dosya yolunu burada belirtebilirsiniz
          alt="Alya Logo"
          className="h-128 w-128 object-contain" // Logonun boyutunu ayarladım
        />
      </div>
        </div>
      </div>
    </section>
  );
}