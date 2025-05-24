import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './Firebase';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-red-500");

  const handleChange = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("تم التسجيل بنجاح");
      setMessageColor("text-green-600");
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        setMessage("كلمة السر يجب ألا تقل عن 6 أحرف");
      } else if (error.code === 'auth/email-already-in-use') {
        setMessage("هذا البريد الإلكتروني مستخدم بالفعل");
      } else if (error.code === 'auth/invalid-email') {
        setMessage("البريد الإلكتروني غير صالح");
      } else {
        setMessage("حدث خطأ أثناء التسجيل");
      }
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className='px-24 py-28 flex justify-center align-middle'>
      <div className='flex flex-col gap-10 text-center w-1/2'>
        <h2 className='text-black font-medium text-2xl'>إنشاء حساب</h2>

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="عنوان البريد الإلكتروني"
          className='border border-teal-custom-Poppy p-3 rounded-lg w-full bg-white'
        />

        <div className='relative'>
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة السر"
            className='border border-teal-custom-Poppy p-3 rounded-lg w-full bg-white'
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-1/2 left-3 transform -translate-y-1/2 text-sm text-teal-custom-Poppy'
          >
            {showPassword ? "إخفاء" : "إظهار"}
          </button>
        </div>

        <button
          onClick={handleChange}
          className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 transform hover:scale-105'
        >
          إنشاء حساب
        </button>

        {/* الرسالة */}
        {message && (
          <p className={`${messageColor} text-lg font-medium`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
