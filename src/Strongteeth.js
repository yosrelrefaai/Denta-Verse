import strongtheet from './images/strongteeth (2).jpeg'
import strawbarry from './images/strawbarry (1).jpeg';
import kiwi from './images/kiwi.jpeg';
import gums from './images/Gums.jpeg';
import carrots from './images/carrots.jpeg';
import greens from './images/greens.jpeg'
import watermelon from './images/watermelon.jpeg';
import Broccoli from './images/Broccoli (1).jpeg';
import onions from './images/onions (1).jpeg';
import milk from './images/milk (1).jpeg';
import tea from './images/tea (1).jpeg';
import water from './images/water (1).jpeg';
import gum from './images/gumm (1).jpeg';

export default function Strongteeth(){
    return(
        <div>
        <div className="px-24 py-28 flex flex-col md:flex-row gap-8 md:gap-10 px-4 md:px-24 py-7 md:py-28 bg-white">
                {/* Right div - العنوان */}
                <div className="md:w-1/2 w-full flex justify-center md:block">
                 <img src={strongtheet} className="max-w-md h-auto rounded-lg"/>
                </div>
          
                {/* Left div - الأسئلة */}
                <div className="md:w-1/2 w-full flex flex-col justify-center ">
                <h2 className=" font-semibold text-teal-custom-orange text-3xl text-center md:text-right">
                    هل تتمنى يكون عندك أسنان قوية وابتسامة لامعة دايمًا؟
                  </h2>
                  <p className='  text-base text-gray-700 font-medium py-10 leading-8'>
                    هنا، هتكتشف أسرار العناية بأسنانك بطريقة سهلة وممتعة! هنعرف مع بعض إزاي تحافظ على صحة فمك وتخلي ابتسامتك دايمًا مشرقة، وكمان هتلاقي معلومات مفيدة، تحديات ممتعة، وحاجات هتفاجئك!
                  </p>
                </div>
              </div>
               {/* start of flip cards*/}
                <div class="px-24 py-28 bg-gradient-to-t from-teal-custom-DarkCayan to-teal-custom-green  flex flex-wrap justify-center  flex-col md:flex-row gap-6 md:gap-12 py-10">
                            {/*first box*/}
                         <div className="w-64 h-80 [perspective:1000px] ">
                           <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={strawbarry} alt="strawbarry" className="w-52 h-52 object-cover rounded-md"></img>
                           <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> الفراولة </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium">  فيها حمض الماليك اللي بيساعد على تبييض الأسنان وفيتامين C اللي بيدعم صحة اللثة.</h4>
                           </div>
                           </div>
                           </div>
                           {/*second box*/}
                           <div className=" w-64 h-80 [perspective:1000px] ">
                           <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={kiwi} alt="kiwi" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> الكيوي </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> غني جدًا بفيتامين C، وده ضروري لتقوية اللثة ومنع النزيف. </h4>
                           </div>
                           </div>
                           </div>
                           {/*third box*/}
                           <div className=" w-64 h-80 [perspective:1000px] ">
                           <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={gums} alt="gums" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> الكمثري </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> بتقلل حموضة الفم، وده بيقلل فرصة التسوس. </h4>
                           </div>
                           </div>
                           </div>
                           {/*4th box*/}
                           <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={watermelon} alt="watermelon" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5"> البطيخ والعنب </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> فيهم ماء كتير، فبيرطب الفم ويحفز إفراز اللعاب اللي بيحمي الأسنان .</h4>
                           </div>
                           </div>
                           </div>
                           {/*5th box*/}
                           <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={carrots} alt="carrots" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5"> الجزر النيء</h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> مقرمش، فبينظف الأسنان طبيعيًا، وكمان فيه فيتامين A اللي مهم للمينا. </h4>
                           </div>
                           </div>
                           </div>  
                            {/*6th box*/}
                           <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={greens} alt="greens" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5"> الكرفس</h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> بيشتغل زي فرشاة ناعمة، بينضف وبينشط اللعاب. </h4>
                           </div>
                           </div>
                           </div>   
                            {/*7th box*/}
                           <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={Broccoli} alt="Broccoli" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5"> البروكلي والسبانخ</h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> فيهم كالسيوم ومغنيسيوم وفيتامين K، وكل ده بيقوي الأسنان واللثة. </h4>
                           </div>
                           </div>
                           </div>   
                           {/*8th box*/}
                           <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={onions} alt="onions" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5">البصل الني ء</h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> فيه مضادات بكتيريا قوية، بتساعد تقتل البكتيريا اللي بتسبب التسوس. </h4>
                           </div>
                           </div>
                           </div>   
                           {/*9th box*/}
                           <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={milk} alt="milk" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5" > الجبن ومنتجات الألبان  </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> غنية بالكالسيوم والفسفور، ودي معادن أساسية لتقوية مينا الأسنان.  <br></br>الجبن كمان بيرفع الـpH في الفم، وده يقلل الحموضة ويمنع التسوس.</h4>
                           </div>
                           </div>
                           </div> 
                            {/*10th box*/}
                          <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={tea} alt="tea" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5" > الشاي الأخضر والأسود </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> فيهم مضادات أكسدة (كاتيشين) بتحارب البكتيريا الضارة في الفم.  <br></br>بس يُفضل من غير سكر، علشان ميأذيش الأسنان.</h4>
                           </div>
                           </div>
                           </div> 
                            {/*11th box*/}
                          <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={water} alt="water" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5" > الماء </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> أهم حاجة! شرب الماء بعد الأكل بيساعد في تنظيف الفم وتقليل الأحماض.  <br></br> كمان بيساعد في إفراز اللعاب بشكل طبيعي. </h4>
                           </div>
                           </div>
                           </div> 
                            {/*12th box*/}
                          <div className="w-64 h-80 [perspective:1000px] ">
                           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
                              <img src={gum} alt="gum" className="w-52 h-52 object-cover rounded-md"></img>
                              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5" > علكة بدون سكر  </h3>
                              </div>
                              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
                              <h4 class="text-lg font-medium"> بتنشط إفراز اللعاب، وده بينضف الأسنان ويحارب التسوس.  <br></br> يُفضل اللي فيها مادة "زيليتول" لأنها بتحارب البكتيريا. </h4>
                           </div>
                           </div>
                           </div> 
                           
                    </div>

              </div>
    );
}