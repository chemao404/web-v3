import React from "react";
import Image from "next/image";
import Link from 'next/link';

const header = () => {
return(
<div className="flex bg-[#F9F4F0] justify-center">
      <div className="mt-5">
        <div className="flex justify-start items-center space-x-30">
          
            <Image 
            src="/images/g10.png"  
            alt="Лого"
            width={50}
            height={50}
              />
          <div className="flex space-x-10">
            <div>
              <Link href="/kopra" className="text-gray-600 ">
                Сиба-ину
              </Link>
            </div>
            <div>
              <Link href="/lomepanicknia" className="text-gray-600">
              Корги
              </Link>
            </div>
            <div>
              <Link href="/nin" className="text-gray-600">
              Шарпей              
              </Link>
            </div>
            <div>
              <Link href="/nin" className="text-gray-600">
              Померанский шпиц             
              </Link>
            </div>
            </div>
                      <div className="flex space-x-10">
            <div>
              <Link href="/nin" className="text-gray-600">
            О нас           
              </Link>
            </div>
            <div>
              <Link href="/nin" className="text-gray-600">
            База знаний           
              </Link>
            </div>
                        <div>
              <Link href="/nin" className="text-gray-600">
            Контакты           
              </Link>
            </div>
            <div className="text-white">+7 (926) 232-43-07</div>
</div>
        </div>
      </div>
    </div>
);
};

export default header;