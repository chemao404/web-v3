import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-[#F9F4F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4">
          
          <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center">
              <Image 
                src="/images/g10.png"  
                alt="Лого"
                width={50}
                height={50}
              
              />
            </div>
            
            <div className="text-sm font-medium text-gray-700 lg:hidden">
              +7 (926) 232-43-07
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full lg:w-auto">
            <Link href="/kopra" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 px-2 sm:px-0">
              Сиба-ину
            </Link>
            <Link href="/lomepanicknia" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 px-2 sm:px-0">
              Корги
            </Link>
            <Link href="/nin" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 px-2 sm:px-0">
              Шарпей
            </Link>
            <Link href="/nin" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 px-2 sm:px-0">
              Померанский шпиц
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/nin" className="text-sm text-gray-600 hover:text-gray-900">
              О нас
            </Link>
            <Link href="/nin" className="text-sm text-gray-600 hover:text-gray-900">
              База знаний
            </Link>
            <Link href="/nin" className="text-sm text-gray-600 hover:text-gray-900">
              Контакты
            </Link>
            <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
              +7 (926) 232-43-07
            </div>
          </div>

          <div className="flex lg:hidden w-full justify-center gap-4 pt-2 border-t border-gray-200">
            <Link href="/nin" className="text-xs text-gray-600 hover:text-gray-900">
              О нас
            </Link>
            <Link href="/nin" className="text-xs text-gray-600 hover:text-gray-900">
              База знаний
            </Link>
            <Link href="/nin" className="text-xs text-gray-600 hover:text-gray-900">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;