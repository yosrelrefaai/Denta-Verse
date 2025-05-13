import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess(userCredential.user);
    } catch (error) {
      alert("فشل تسجيل الدخول: " + error.message);
    }
  };

  return (
    <div className="px-24 py-28">
      <input type="email" placeholder="الإيميل" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mb-2 w-full" />
      <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mb-2 w-full" />
      <button onClick={handleLogin} className="bg-teal-600 text-white px-4 py-2">تسجيل الدخول</button>
    </div>
  );
}
