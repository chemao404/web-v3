import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
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
                             ? "bg-[#396448] text-white border-2 border-[#396448] p-6 rounded-2xl rounded-b-none" 
                             : "hover:bg-[#396448] hover:text-white bg-[#F9F4F0] text-[#396448] border-2 border-[#396448] p-6 rounded-2xl rounded-b-none"
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
                             ? "bg-[#396448] text-white border-2 border-[#396448] p-6 rounded-2xl rounded-b-none" 
                             : "hover:bg-[#396448] hover:text-white bg-[#F9F4F0] text-[#396448] border-2 border-[#396448] p-6 rounded-2xl rounded-b-none"
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
                             ? "bg-[#396448] text-white border-2 border-[#396448] p-6 rounded-2xl rounded-b-none" 
                             : "hover:bg-[#396448] hover:text-white bg-[#F9F4F0] text-[#396448] border-2 border-[#396448] p-6 rounded-2xl rounded-b-none"
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
                             ? "bg-[#396448] text-white border-2 border-[#396448] p-6 rounded-2xl rounded-b-none" 
                             : "hover:bg-[#396448] hover:text-white bg-[#F9F4F0] text-[#396448] border-2 border-[#396448] p-6 rounded-2xl rounded-b-none"
                         }
                       >
                         Померанский шпиц
                       </button>
                     </li>
                   </ul>
                 </div>
               </nav>
         
               <div className="bg-[#396448]">
                                     <h1 className="flex justify-center text-white text-4xl p-4">Наши щенки</h1>
                 {activeMenu === 'шарпей' && <div><div className="flex justify-center  text-white h-auto p-3 gap-8 rounded-2xl">
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
                 {activeMenu === 'Померанский шпиц' && <div><div className="flex justify-center bg-[#396448] text-white  h-auto p-3 gap-8 rounded-2xl mb-5">
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
             <div className="flex justify-center p-5">
           <button className="text-[#396448] bg-white border-[#396448] font-bold py-3 p-6 rounded-lg transition duration-300 flex items-center justify-center ">
                       <span className="mr-2">Смотреть всех</span>
                     </button>
                     </div>
               </div>
             </div> 
    )
}