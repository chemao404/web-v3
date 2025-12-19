'use client';
import { useState } from 'react';
import Image from "next/image";


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
Мы всегда рады помочь        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
Если у вас есть вопросы или вы хотите получить дополнительную информацию, свяжитесь с нами через форму ниже        </p>
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
              className="w-full py-4 bg-[#396448]  disabled:bg-gray-400 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
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

 <div className="">
                              <Image 
                              src="/images/кошка.png"  
                              alt="кошка"
                              width={600}
                              height={300}
                                />
</div>
      </div>
    </div>
  );
}