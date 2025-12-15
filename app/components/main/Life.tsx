'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
export default function Button() {
    return(
              <div className="bg-[#F9F4F0] rounded-xl p-6 md:p-8 my-6 mx-4 md:mx-8 lg:mx-16 xl:mx-auto max-w-screen-xl">
  <h1 className="text-3xl md:text-4xl font-bold text-center">ЖИЗНЬ ПИТОМНИКА</h1>
  <p className="text-lg md:text-xl text-center text-gray-700 mb-8 md:mb-12 mt-4">
    ЗА ПРЕДЕЛАМИ ВЫСТАВОЧНОГО РИНГА: ИСТОРИИ УСПЕХА НАШИХ ВЫПУСКНИКОВ
  </p>
  <p className="text-gray-600 text-center md:mb-12 max-w-4xl mx-auto">
    Интересно с владельцами, которые делятся своими историями о том, как собаки из нашего питомника нашли своё предназначение в различных сферах
  </p>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
    <div className="lg:col-span-2">
      <div className="bg-[#EFE9E3] rounded-xl overflow-hidden shadow-sm h-full">
        <div className="">
          <Image 
            src="/images/шарпей.png"  
            alt="Лого"
            width={400}
            height={400}
            className="w-full h-64 md:h-80 bg-gray-300 object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">
              ЗА ПРЕДЕЛАМИ ВЫСТАВОЧНОГО РИНГА: ИСТОРИИ УСПЕХА НАШИХ ВЫПУСКНИКОВ
            </h3>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="font-medium">Мишина Яна</span>
            <span className="mx-2">—</span>
            <span>Март 18, 2024</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Истории владельцев, которые делятся своими успехами о том, как собаки из нашего питомника 
            нашли своё предназначение в различных сферах жизни и деятельности.
          </p>
        </div>
      </div>
    </div>
    <div className="space-y-6 md:space-y-8">
      <div className="bg-[#EFE9E3] rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <Image 
              src="/images/шарпей.png"  
              alt="Лого"
              width={300}
              height={200}
              className="w-full h-48 sm:h-full object-cover"
            />
          </div>
          <div className="sm:w-2/3 p-4 md:p-6">
            <h4 className="font-bold text-lg mb-2">
              ТЕНДЕНЦИИ И НОВИНКИ В МИРЕ КИНОЛОГИИ 2024 ГОДА
            </h4>
            <div className="flex items-center text-gray-600 text-sm">
              <span>Мишина Яна</span>
              <span className="mx-2">—</span>
              <span>Март 24, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EFE9E3] rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <Image 
              src="/images/шарпей.png"  
              alt="Лого"
              width={300}
              height={200}
              className="w-full h-48 sm:h-full object-cover"
            />
          </div>
          <div className="sm:w-2/3 p-4 md:p-6">
            <h4 className="font-bold text-lg mb-2">
              ТЕНДЕНЦИИ И НОВИНКИ В МИРЕ КИНОЛОГИИ 2024 ГОДА
            </h4>
            <div className="flex items-center text-gray-600 text-sm">
              <span>Мишина Яна</span>
              <span className="mx-2">—</span>
              <span>Март 24, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EFE9E3] rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <Image
              src="/images/шарпей.png"
              alt="Лого"
              width={300}
              height={200}
              className="w-full h-48 sm:h-full object-cover"
            />
          </div>
          <div className="sm:w-2/3 p-4 md:p-6">
            <h4 className="font-bold text-lg mb-2">
              ТЕНДЕНЦИИ И НОВИНКИ В МИРЕ КИНОЛОГИИ 2024 ГОДА
            </h4>
            <div className="flex items-center text-gray-600 text-sm">
              <span>Мишина Яна</span>
              <span className="mx-2">—</span>
              <span>Март 24, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}