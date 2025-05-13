import weakteeth from './images/weakteeth (1).jpeg';
import sweet from './images/sweet (1).jpeg'
import acidicfruits  from './images/acidicfruits (1).jpeg'
import sugarydrinks from './images/sugarydrinks (1).jpeg'
export default function Weakteeth(){
    return(
       <div>
               <div className="px-24 py-28 flex flex-col md:flex-row gap-8 md:gap-10 px-4 md:px-24 py-7 md:py-28 bg-white">
                       {/* Right div - العنوان */}
                       <div className="md:w-1/2 w-full flex justify-center md:block">
                        <img src={weakteeth} className="max-w-md h-auto rounded-lg"/>
                       </div>
                 
                       {/* Left div - الأسئلة */}
                       <div className="md:w-1/2 w-full flex flex-col justify-center ">
                       <h2 className=" font-semibold text-teal-custom-orange text-3xl text-center md:text-right">
                           هل حاسس بألم في سنانك؟ أو شايف لون غريب ؟ ده ممكن يكون تسوس!
                         </h2>
                         <p className='  text-base text-gray-700 font-medium py-10 leading-8'>
التسوس بيبدأ صغير، لكن لو ما اهتميناش، بيكبر ويعمل وجع كبير. هنا، هنتكلم عن إيه هو التسوس، بييجي ليه، وازاي نقدر نحمي نفسنا منه بسهولة. خليك معانا عشان تنقذ سنانك وتخلي ابتسامتك دايمًا حلوة!                          </p>
                       </div>
                     </div>
                      {/* start of flip cards*/}
                       <div class="px-24 py-28 bg-gradient-to-t from-teal-custom-DarkCayan to-teal-custom-green  flex flex-wrap justify-center  flex-col md:flex-row gap-6 md:gap-12 py-10">
                                   {/*first box*/}
                                <div className="w-64 h-80 [perspective:1000px] ">
                                  <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                     <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                                     <img src={acidicfruits} alt="acidicfruits" className="w-52 h-52 object-cover rounded-md"></img>
                                  <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> الأطعمة الحمضية جدًا (زي الليمون المركز)</h3>
                                     </div>
                                     <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                                     <h4 class="text-lg font-medium">  مع الإفراط بتأثر على مينا الأسنان. </h4>
                                  </div>
                                  </div>
                                  </div>
                                  {/*second box*/}
                                  <div className=" w-64 h-80 [perspective:1000px] ">
                                  <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                     <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                                     <img src={sugarydrinks} alt="sugarydrinksi" className="w-52 h-52 object-cover rounded-md"></img>
                                     <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> المشروبات الغازية والعصاير الصناعية</h3>
                                     </div>
                                     <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                                     <h4 class="text-lg font-medium"> فيها سكريات وأحماض بتضعف المينا. </h4>
                                  </div>
                                  </div>
                                  </div>
                                  {/*third box*/}
                                  <div className=" w-64 h-80 [perspective:1000px] ">
                                  <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                                     <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                                     <img src={sweet} alt="sweet" className="w-52 h-52 object-cover rounded-md"></img>
                                     <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> الحلويات اللاصقة (زي الكراميل والتوفي) </h3>
                                     </div>
                                     <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                                     <h4 class="text-lg font-medium"> بتلزق في الأسنان وبتغذي البكتيريا. </h4>
                                  </div>
                                  </div>
                                  </div>
                                    
                                 
                                  
                                 
                                  
                           </div>
       
                     </div>
    );
    
}