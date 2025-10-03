'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('шарпей')
  return (
    <div className="bg-[#F9F4F0]">
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-1/2  flex items-center justify-center p-8">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            СОБАКИ С ВЫСОКИМ ШОУ-ПОТЕНЦИАЛОМ, И ПРЕДАННЫЕ ДОМАШНИЕ СПУТНИКИ
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Питомцы Черный Чиж призваны стать звездами как на выставочном ринге, так и в вашем сердце
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#396448] text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
              ПОДОБРАТЬ СОБАКУ
            </button>
            
            <button className="text-[#396448] bg-white border-[#396448] font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
              <span className="mr-2">WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[url('/images/баннер.png')] bg-[size:500px_auto] bg-no-repeat ">
      </div>
    </div>
    <div className=""></div>
 <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          О питомнике
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#EFE9E3] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col h-full">
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 flex-1">
                  Мы занимаемся разведением собак с 1994 года, обеспечивая высокий уровень качества и заботы на протяжении многих лет
                </p>

              </div>
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="images/sdvs.png"
                  alt="Опыт с 1994 года"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#EFE9E3] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col h-full">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="images/img.png"
                  alt="Онлайн поддержка"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">

                <p className="text-gray-600 flex-1">
                  Предоставляем онлайн поддержку и консультации, помогая вам во всех аспектах ухода и воспитания вашего любимца.
                </p>

              </div>
            </div>
          </div>

          <div className="bg-[#EFE9E3] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col h-full">
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 flex-1">
                  У нас более 200 собак, завоевавших титулы чемпионов в разных странах мира
                </p>
              </div>
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src="images/1.png"
                  alt="Чемпионы мира"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

      {/* Контент который меняется */}
      <div className="">
        {activeMenu === 'шарпей' && <div><div className="flex justify-center bg-[#396448] text-white h-auto p-3 gap-8 rounded-2xl">
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
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Почему мы - лучший выбор      
    </h2>
<div className="min-h-screen relative flex items-center justify-center p-8">
  <div 
    className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center bg-[url('/images/корга.png')]">
    <div className="absolute inset-0 bg-opacity-10"></div>
  </div>
  <div className="max-w-6xl w-full relative z-10">
    <div className="grid grid-cols-2 gap-6 max-w-2xl">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">ГАРАНТИЯ КАЧЕСТВА</h3>
        <p className="text-gray-600">Мы следим за условиями содержания каждого питомца</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">ВЫДАЮЩИЕСЯ РЕЗУЛЬТАТЫ</h3>
        <p className="text-gray-600">Множество выставочных собак, ставших чемпионами разных стран.</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">ДОКУМЕНТЫ</h3>
        <p className="text-gray-600">Полный пакет документов, включая родословную МФ-ГС!</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">МИРОВАЯ ДОСТАВКА</h3>
        <p className="text-gray-600">Возможность приобретения в любой точке земного шара</p>
      </div>
    </div>
  </div>
</div>
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
    </div>
  )
}
