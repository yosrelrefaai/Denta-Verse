import { Link } from 'react-router-dom';

import strongteeth from './images/strongteeth (2).jpeg';
import weakteeth from './images/weakteeth (1).jpeg'
export default function SecondSection(){

   

    return(
        <div className="px-24 py-28 bg-gradient-to-br from-teal-custom-DarkCayan to-teal-custom-green ">
          <h2 className="text-3xl text-center text-white font-bold   ">  الفم الصحى بوابة للجسم الصحى</h2>
          
    <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-12 py-10">
       <div className=" h-auto w-full md:max-w-lg flex-1 border-teal-custom-orange border-2 bg-white/60 rounded-lg  md:rounded-lg p-3 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
       <img src={strongteeth} alt="strong teeth" className="w-36 h-44 object-cover rounded-md"></img>
         <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-2"> لأسنان قوية ولامعة </h3>
          <p className="text-gray-700 sm:text-sm text-xs text-center"> تفتكر ايه ممكن يخلي أسنانك قوية ولامعة </p>
          <Link to="/Strongteeth">
         <button className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105'> اعرف أكتر </button>
         </Link>
       </div>
       <div className=" h-auto w-full md:max-w-lg flex-1 border-teal-custom-orange border-2 bg-white/60 rounded-lg  md:rounded-lg p-3 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
       <img src={weakteeth} alt="weak teeth" className="w-36 h-44 object-cover rounded-md"></img>
         <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-2"> لأسنان ضعيفة و مسوسة </h3>
         <p className="text-gray-700 sm:text-sm text-xs text-center">تفتكر ايه ممكن يخلي أسنانك ضعيفة و مسوسة </p>
         <Link to="/weakteeth">
         <button className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105'> اعرف أكتر </button>
         </Link>
       </div>
    </div>
        </div>
        
    )
    
}