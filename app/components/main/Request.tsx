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
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <h1>Отправить заявку</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Имя"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        
        <input
          type="tel"
          placeholder="Телефон"
          value={form.phone}
          onChange={(e) => setForm({...form, phone: e.target.value})}
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: '12px', 
            background: loading ? '#ccc' : '#0070f3', 
            color: 'white', 
            border: 'none', 
            cursor: loading ? 'not-allowed' : 'pointer' 
          }}
        >
          {loading ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
      
      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
}