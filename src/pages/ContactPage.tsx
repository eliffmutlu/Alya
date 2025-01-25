
import { Users, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Bizimle İletişime Geçin</h2>
            <p className="text-blue-700 mb-8">Projenizi birlikte hayata geçirelim.</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Users className="text-blue-600" />
                <span className="text-blue-800">info@alyaajans.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-blue-600" />
                <span className="text-blue-800">+90 538 719 39 14</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Adınız"
              className="w-full px-6 py-4 rounded-lg bg-white text-blue-900 border border-blue-200 focus:border-blue-400 outline-none shadow-md transition-all hover:shadow-lg"
            />
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="w-full px-6 py-4 rounded-lg bg-white text-blue-900 border border-blue-200 focus:border-blue-400 outline-none shadow-md transition-all hover:shadow-lg"
            />
            <textarea
              placeholder="Mesajınız"
              rows={4}
              className="w-full px-6 py-4 rounded-lg bg-white text-blue-900 border border-blue-200 focus:border-blue-400 outline-none shadow-md transition-all hover:shadow-lg"
            ></textarea>
            <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}