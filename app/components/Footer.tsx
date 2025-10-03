import React from "react";
import Image from "next/image";
import Link from 'next/link';

const footer = () => {
return <div className="flex bg-[#AB8264] rounded-t-xl rounded-b-none p-8  justify-center">
    <div className="flex justify-start items-center" >
            <Image 
            src="/images/logo.png"  
            alt="Лого"
            width={100}
            height={50}
              />
              <div className=" flex flex-col ml-5">
              <Link href="/kopra" className="text-amber-50 ">
                <div>Контакты</div>
                <div>Info@sharpei.club</div>
                <div>+7 (926) 232-43-07</div>
              </Link>
              <div className="flex ">
              <Image src="/images/social link-1.png" className="m-2"  
            alt="Лого"
            width={50}
            height={50}></Image>
              <Image src="/images/social link-2.png"  className="m-2"  
            alt="Лого"
            width={50}
            height={50}></Image>
              <Image src="/images/social link-3.png"  className="m-2"  
            alt="Лого"
            width={50}
            height={50}></Image>
              <Image src="/images/social link.png"  className="m-2"  
            alt="Лого"
            width={50}
            height={50}></Image>
              </div>
                <Link href={'#'} className="text-white">Договор оферты</Link>
                <Link  href={'#'} className="text-white">Политика конфиденциальности</Link>
            </div>
              </div>
              <div className="grid-cols-5 m-5">
                <div className="text-white">О нас</div>
                <div className="text-white">Питомник</div>
                <div className="text-white">Наша команда</div>
                <div className="text-white">Выставки</div>
                <div className="text-white">Новости</div>
              </div>
              <div className="grid-cols-5 m-5">
                <div><Link href='' className="text-white">Шарпей</Link></div>
                <div><Link href='' className="text-white">Щенки</Link></div>
                <div><Link href='' className="text-white">Кобели</Link></div>
                <div><Link href='' className="text-white">Суки</Link></div>
                <div><Link href='' className="text-white">О породе</Link></div>
                <div><Link href='' className="text-white">Наша память</Link></div>

              </div>
              <div className="grid-cols-5 m-5">
                <div><Link href='' className="text-white">Сиба-ину</Link></div>
                <div><Link href='' className="text-white">Щенки</Link></div>
                <div><Link href='' className="text-white">Кобели</Link></div>
                <div><Link href='' className="text-white">Суки</Link></div>
                <div><Link href='' className="text-white">О породе</Link></div>
                <div><Link href='' className="text-white">Наша память</Link></div>

              </div>
              <div className="grid-cols-5 m-5">
                <div><Link href='' className="text-white">Корги</Link></div>
                <div><Link href='' className="text-white">Щенки</Link></div>
                <div><Link href='' className="text-white">Кобели</Link></div>
                <div><Link href='' className="text-white">Суки</Link></div>
                <div><Link href='' className="text-white">О породе</Link></div>
                <div><Link href='' className="text-white">Наша память</Link></div>

              </div><div className="grid-cols-5 m-5">
                <div><Link href='' className="text-white">Померанский шпиц</Link></div>
                <div><Link href='' className="text-white">Щенки</Link></div>
                <div><Link href='' className="text-white">Кобели</Link></div>
                <div><Link href='' className="text-white">Суки</Link></div>
                <div><Link href='' className="text-white">О породе</Link></div>
                <div><Link href='' className="text-white">Наша память</Link></div>

              </div>
</div>;
};

export default footer;