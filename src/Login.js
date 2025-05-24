import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';
import {doc ,getDoc , setDoc} from "firebase/firestore";
import { db } from './Firebase';


export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('text-red-500');
  const [userName, setUserName] = useState('');

  const handleresetpassword = async ()=>{
    if(!email){
      setMessage(" من فضلك ادخل بريدك الالكتروني");
      return
    }
    try {
      await sendPasswordResetEmail(auth, email);
    setMessage("تم إرسال رابط إعادة تعيين كلمة المرور على الإيميل");
  } catch (error) {
    setMessage("حدث خطأ: ");
  }
  }
  const handleLogin = async () => {
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const nameFromEmail = user.email.split("@")[0]; 
      
      setUserName(nameFromEmail);
       const userRef = doc(db, "challenge", user.uid);
    const docsnap = await getDoc(userRef);
    
    // ← نتحقق لو مفيش document، نعمله
    if (!docsnap.exists()) {
      await setDoc(userRef, {
        email: user.email  ?? "",
        name: nameFromEmail ?? "",
        score: 0,
      });
    }
      setMessage("تم تسجيل الدخول بنجاح");
      setMessageColor("text-green-600");
      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      setMessage("فشل تسجيل الدخول. تأكد من بريدك الإلكتروني أو كلمة السر");
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className='px-24 py-28 flex justify-center align-middle'>
      <div className='flex flex-col gap-10 text-center w-1/2'>
        <h2 className='text-black font-medium text-2xl'>تسجيل دخول</h2>

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="عنوان البريد الإلكتروني"
          className='border border-teal-custom-Poppy p-3 rounded-lg'
        />

        <div className='relative '>
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة السر"
            className='border border-teal-custom-Poppy p-3 rounded-lg w-full'
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-1/2 left-3 transform -translate-y-1/2 text-sm text-teal-custom-Poppy '
          >
            {showPassword ? "إخفاء" : "إظهار"}
          </button>
        </div>

        <button
          onClick={handleLogin}
          className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 transform hover:scale-105'
        >
          تسجيل دخول
        </button>
        <p>
          هل نسيت كلمة السر ؟ <br></br>
          <button onClick={handleresetpassword} className='text-teal-custom-Poppy font-bold' > إنشاء كلمة سر جديدة </button>
        </p>

        {/* الرسالة بعد محاولة تسجيل الدخول */}
        {message && <p className={`${messageColor} text-lg font-medium`}>{message}</p>}

        {/* ترحيب بالاسم */}
        {userName && <h3 className='text-xl text-teal-custom-Poppy font-bold'>أهلاً يا {userName}</h3>}
      </div>
    </div>
  );
}
