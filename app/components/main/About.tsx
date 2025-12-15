export default function Button() {
    return(
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
    )
}