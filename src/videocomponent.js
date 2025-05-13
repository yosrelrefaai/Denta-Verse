import video from './images/video.jpeg';
export default function Videocomponent(){
    return(
        <div>
        <div className=" px-24 py-28 flex flex-col md:flex-row gap-8 md:gap-40 px-4 md:px-24 py-7 md:py-28 bg-white">
                       {/* Right div - العنوان */}
                       <div className="pt-10 md:w-1/2 w-full flex flex-col justify-center md:block">
                        <img src={video} alt="Video Section" className='rounded-2xl max-w-md h-auto '></img>
                       
                       </div>
                 
                       {/* Left div - الأسئلة */}
                       <div className="md:w-1/2 w-full flex flex-col justify-center ">
                       
                         <h2 className=" font-semibold text-teal-custom-DarkCayan text-3xl text-center md:text-right">
                       دقايق تفرّج... وسنانك تشكرك!
                  </h2>
                  <p className='  text-base text-gray-700 font-medium py-10 leading-8'>
                  هنا هتلاقي فيديوهات ممتعة وبسيطة بتشرحلك إزاي تحافظ على أسنانك وتتعلم الحاجات المهمة علشان تفضل ابتسامتك دايمًا حلوة!
        <br></br> كل فيديو قصير ومفيد، ومشاهدة الفيديوهات دي هي أول خطوة لازم تعملها قبل ما تبدأ تحل التحديات!<br></br>
        جاهز؟ شغّل أول فيديو وابدأ تتعلّم!
                  </p>
                       </div>
                     </div>

                     <div className="px-24 py-28 bg-gradient-to-br from-teal-custom-DarkCayan to-teal-custom-green ">
          <h2 className="text-3xl text-center text-white font-bold   "> ما وراء التحدي... </h2>
          
    <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-12 py-10">
       <div className=" h-auto w-full md:max-w-lg flex-1 border-teal-custom-orange border-2 bg-white/60 rounded-lg  md:rounded-lg p-3 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
           <iframe
            src="https://drive.google.com/file/d/1vPoSP__4q8Gj9zHwsU707CtEud1-9jl9/preview"
            width="100%"
            height="280"
            allow="autoplay"
            className="rounded-lg"
             ></iframe>
       </div>
       <div className=" h-auto w-full md:max-w-lg flex-1 border-teal-custom-orange border-2 bg-white/60 rounded-lg  md:rounded-lg p-3 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
      
         <iframe
           src="https://drive.google.com/file/d/1wq2qYz7XXgbrPJFL0nGZD2K4vafLRA0W/preview"
           width="100%"
           height="280"
          allow="autoplay"
        className="rounded-lg"
       ></iframe>
         
       </div>
    </div>
        </div>
                     </div>
    );
}