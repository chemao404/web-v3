import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
export default function Button() {
          const [activeMenu, setActiveMenu] = useState('шарпей')
    
    return(
   <div>
      <nav className="flex justify-center">
        <div className="">
          <ul className="flex gap-4 text-[18px]">
            <li>
              <button 
                onClick={() => setActiveMenu('шарпей')}
                className={ 
                  activeMenu === 'шарпей' 
                    ? "bg-[#AB8264] text-white border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none" 
                    : "hover:bg-[#AB8264] hover:text-white bg-[#F9F4F0] text-[#AB8264] border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none"
                }
              >
                шарпей
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveMenu('сиба-ину')}
                className={
                  activeMenu === 'сиба-ину' 
                    ? "bg-[#AB8264] text-white border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none" 
                    : "hover:bg-[#AB8264] hover:text-white bg-[#F9F4F0] text-[#AB8264] border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none"
                }
              >
                сиба-ину
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveMenu('Корги')}
                className={
                  activeMenu === 'Корги' 
                    ? "bg-[#AB8264] text-white border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none" 
                    : "hover:bg-[#AB8264] hover:text-white bg-[#F9F4F0] text-[#AB8264] border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none"
                }
              >
                Корги
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveMenu('Померанский шпиц')}
                className={
                  activeMenu === 'Померанский шпиц' 
                    ? "bg-[#AB8264] text-white border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none" 
                    : "hover:bg-[#AB8264] hover:text-white bg-[#F9F4F0] text-[#AB8264] border-2 border-[#AB8264] p-6 rounded-2xl rounded-b-none"
                }
              >
                Померанский шпиц
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="">
        {activeMenu === 'шарпей' && <div><div className="flex justify-center bg-[#AB8264] text-white h-auto p-3 gap-8 rounded-2xl mb-10">
               <Image 
               src="/images/баннер.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />
                 <Image 
               src="/images/баннер.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 /><Image 
               src="/images/баннер.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />

    </div></div>}
        {activeMenu === 'сиба-ину' && <div><div className="flex justify-center bg-[#396448] text-white h-auto p-3 gap-8 rounded-2xl mb-5">
               <Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />
                 <Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 /><Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />

    </div></div>}
        {activeMenu === 'Корги' && <div><div className="flex justify-center bg-[#396448] text-white h-auto p-3 gap-8 rounded-2xl mb-5">
               <Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />
                 <Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 /><Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />

    </div></div>}
        {activeMenu === 'Померанский шпиц' && <div><div className="flex justify-center bg-[#396448] text-white h-auto p-3 gap-8 rounded-2xl mb-5">
               <Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />
                 <Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 /><Image 
               src="/images/шарпей.png"  
               alt="Лого"
               width={300}
               height={100}
               className=""
                 />
    </div></div>}
      </div>
    </div>
    )
}