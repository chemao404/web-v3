export default function Button() {
    return(
        <div className="">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Почему мы - лучший выбор      
    </h2>
<div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 md:p-8">
  <div 
    className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-center bg-[url('/images/корга.png')]">
    <div className="absolute inset-0 bg-opacity-10"></div>
  </div>
  <div className="max-w-6xl w-full relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">ГАРАНТИЯ КАЧЕСТВА</h3>
        <p className="text-sm sm:text-base text-gray-600">Мы следим за условиями содержания каждого питомца</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">ВЫДАЮЩИЕСЯ РЕЗУЛЬТАТЫ</h3>
        <p className="text-sm sm:text-base text-gray-600">Множество выставочных собак, ставших чемпионами разных стран.</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">ДОКУМЕНТЫ</h3>
        <p className="text-sm sm:text-base text-gray-600">Полный пакет документов, включая родословную МФ-ГС!</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white hover:shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">МИРОВАЯ ДОСТАВКА</h3>
        <p className="text-sm sm:text-base text-gray-600">Возможность приобретения в любой точке земного шара</p>
      </div>
    </div>
  </div>
</div>
</div>
    )
}