'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Button from "@/app/ui/button/Button";

export default function Banner() {
    return(
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2  flex items-center justify-center p-8">
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
          <Button/>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 min-h-[50vh] bg-[url('/images/баннер.png')] bg-contain bg-no-repeat bg-center lg:bg-left">
      </div>
    </div>
    )
}