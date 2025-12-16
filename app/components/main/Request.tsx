'use client';
import { useState } from 'react';

export default function Request() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/send-to-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage('✅ Заявка отправлена!');
        setForm({ name: '', phone: '', email: '' });
      } else {
        setMessage('❌ Ошибка отправки');
      }
    } catch (error) {
      setMessage('❌ Ошибка сети');
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Отправить заявку
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
        </p>
      </div>

      {/* Основной контент с двумя колонками */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Левая колонка - Форма */}
        <div className="flex-1 w-full lg:max-w-lg">
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-6 p-8 rounded-2xl shadow-xl bg-white"
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Имя *
              </label>
              <input
                type="text"
                placeholder="Введите ваше имя"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Телефон *
              </label>
              <input
                type="tel"
                placeholder="Введите ваш телефон"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                placeholder="Введите ваш email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
            >
              {loading ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
          
          {message && (
            <div className={`mt-6 p-4 text-center rounded-lg ${
              message.includes('✅') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Правая колонка - Место для фото */}
        <div className="flex-1 w-full lg:max-w-2xl">
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Заглушка для фото */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-32 mb-6 flex items-center justify-center rounded-full bg-blue-100">
                <svg 
                  className="w-20 h-20 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Здесь будет ваше фото
              </h3>
              <p className="text-gray-600 max-w-md">
                Добавьте изображение, которое лучше всего представляет ваш продукт или услугу
              </p>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full translate-y-20 -translate-x-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}