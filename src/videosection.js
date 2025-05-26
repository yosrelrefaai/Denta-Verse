import video from './images/video.jpeg';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Videosection(){

    
    return(
       <div id="videoes" className="flex flex-col md:flex-row gap-8 md:gap-40 px-4 md:px-24 py-7 md:py-28 bg-slate-100">
               {/* Right div - العنوان */}
               <div className="pt-10 md:w-1/2 w-full flex flex-col justify-center md:block">
               <h2 className=" font-semibold text-teal-custom-DarkCayan text-3xl text-center md:text-right">
               دقايق اتفرج... وسنانك تشكرك!
          </h2>
          <p className='  text-base text-gray-700 font-medium py-10 leading-8 text-center md:text-right'>
          هنا هتلاقي فيديوهات ممتعة وبسيطة بتشرحلك إزاي تحافظ على أسنانك وتتعلم الحاجات المهمة علشان تفضل ابتسامتك دايمًا حلوة!
<br></br> كل فيديو قصير ومفيد، ومشاهدة الفيديوهات دي هي أول خطوة لازم تعملها قبل ما تبدأ تحل التحديات!<br></br>
جاهز؟ شغّل أول فيديو وابدأ تتعلّم!
وكمان تقدر تتابعنا من خلال التيك توك
          </p>
          <div className='flex flex-row  sm:flex-row gap-12 lg:gap-4'>
          <Link to="/videoes">
          <button
          className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105"
        >
          
          شاهدالآن
        </button>
        </Link>
        <a href='https://www.tiktok.com/@denta.verse?_t=ZS-8wYIzxY8vMG&_r=1'>
          <button
          className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105"
        >
          
          تيك توك
        </button>
        </a>
        </div>
               </div>
         
               {/* Left div - الأسئلة */}
               <div className="md:w-1/2 w-full flex flex-col justify-center ">
                <LazyLoadImage src={video} alt="Video Section" className='rounded-2xl max-w-xs md:max-w-md h-auto '/>
                 
               </div>
             </div>
    );
}