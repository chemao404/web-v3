'use client'


import Banner from "./components/main/Banner";
import About from "./components/main/About";
import Dogs1 from "./components/main/Dogs1";
import Advantages from "./components/main/Advantages";
import Poroda from "./components/main/Poroda";
import Questions from "./components/main/Questions";
import Base from "./components/main/Base";
import Life from "./components/main/Life";
import Request from "./components/main/Request";



export default function Home() {
  return (
    <div className="bg-[#F9F4F0]">
<Banner/>
<About/>
<Dogs1/>
<Advantages/>
<Poroda/>
<Questions/>
<Base/>
<Life/>
<Request/>

    </div>
  )
}
