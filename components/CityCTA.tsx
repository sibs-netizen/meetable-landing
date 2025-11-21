import React from 'react';

const CityCTA: React.FC = () => {
  return (
    <section className="py-28 bg-[#fffbeb] overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:w-1/2 mb-20 lg:mb-0 lg:pr-16">
          <span className="text-meetable-primary font-bold tracking-widest uppercase text-sm mb-2 block">Don't eat alone</span>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-meetable-dark mb-8 leading-[1.1]">
            Ready to feel at home in your city?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            There's a seat open for you. Discover curated dining experiences in your area and start building a community you love.
          </p>
          <button className="bg-meetable-primary hover:bg-[#016573] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2 group">
            Choose your city
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </div>

        {/* Polaroid Images Collage */}
        <div className="lg:w-1/2 relative h-[450px] w-full flex justify-center lg:justify-end items-center">
          
          <div className="absolute transform -rotate-12 -translate-x-32 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-500 z-10 cursor-pointer">
             <div className="bg-white p-3 pb-12 shadow-2xl w-64 rotate-2">
                <div className="relative overflow-hidden h-60 bg-gray-100">
                     <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1000" alt="Dinner party" className="w-full h-full object-cover filter sepia-[.1]" />
                </div>
                <div className="font-serif italic text-center mt-4 text-gray-700 text-lg">London, Friday</div>
             </div>
          </div>

          <div className="absolute transform rotate-6 translate-x-16 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-500 z-20 cursor-pointer">
             <div className="bg-white p-3 pb-12 shadow-2xl w-72 -rotate-1">
                <div className="relative overflow-hidden h-64 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?q=80&w=1000" alt="Cheers" className="w-full h-full object-cover filter contrast-110" />
                </div>
                <div className="font-serif italic text-center mt-4 text-gray-700 text-lg">Best night ever!</div>
             </div>
          </div>

          <div className="absolute transform rotate-12 translate-y-16 translate-x-48 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-500 z-10 cursor-pointer hidden md:block">
             <div className="bg-white p-3 pb-12 shadow-2xl w-56 rotate-3">
                <div className="relative overflow-hidden h-48 bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=1000" alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="font-serif italic text-center mt-4 text-gray-700 text-lg">So good.</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CityCTA;