import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
return <div className="bg-[#AB8264] rounded-t-xl rounded-b-none p-4 sm:p-6 md:p-8">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
      
      <div className="lg:w-1/4">
        <div className="flex flex-col items-center lg:items-start">
          <Image 
            src="/images/logo.png"  
            alt="Лого"
            width={80}
            height={40}
            className="w-16 sm:w-20 md:w-24"
          />
          <div className="flex flex-col mt-4 text-center lg:text-left">
            <Link href="/kopra" className="text-amber-50">
              <div className="font-medium">Контакты</div>
              <div className="text-sm mt-1">Info@sharpei.club</div>
              <div className="text-sm mt-1">+7 (926) 232-43-07</div>
            </Link>
            <div className="flex justify-center lg:justify-start mt-4">
              <Image src="/images/social link-1.png" className="m-1"  
                alt="Социальная сеть"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <Image src="/images/social link-2.png" className="m-1"  
                alt="Социальная сеть"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <Image src="/images/social link-3.png" className="m-1"  
                alt="Социальная сеть"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <Image src="/images/social link.png" className="m-1"  
                alt="Социальная сеть"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <Link href={'#'} className="text-white text-sm hover:underline">Договор оферты</Link>
              <Link href={'#'} className="text-white text-sm hover:underline">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-3/4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          <div className="space-y-2">
            <div className="text-white font-medium mb-2">О нас</div>
            <div className="text-white text-sm">Питомник</div>
            <div className="text-white text-sm">Наша команда</div>
            <div className="text-white text-sm">Выставки</div>
            <div className="text-white text-sm">Новости</div>
          </div>

          <div className="space-y-2">
            <div className="text-white font-medium mb-2">Шарпей</div>
            <div><Link href='' className="text-white text-sm hover:underline">Щенки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Кобели</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Суки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">О породе</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Наша память</Link></div>
          </div>

          <div className="space-y-2">
            <div className="text-white font-medium mb-2">Сиба-ину</div>
            <div><Link href='' className="text-white text-sm hover:underline">Щенки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Кобели</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Суки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">О породе</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Наша память</Link></div>
          </div>

          <div className="space-y-2">
            <div className="text-white font-medium mb-2">Корги</div>
            <div><Link href='' className="text-white text-sm hover:underline">Щенки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Кобели</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Суки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">О породе</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Наша память</Link></div>
          </div>

          <div className="space-y-2">
            <div className="text-white font-medium mb-2">Померанский шпиц</div>
            <div><Link href='' className="text-white text-sm hover:underline">Щенки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Кобели</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Суки</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">О породе</Link></div>
            <div><Link href='' className="text-white text-sm hover:underline">Наша память</Link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
};

export default Footer;