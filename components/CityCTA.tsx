import React from 'react';

const CityCTA: React.FC = () => {
  const quizLink = 'https://form.typeform.com/to/dECpvX3S';

  return (
    <section className="bg-[#FFF6E9] py-20 md:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text + CTA */}
        <div className="flex-1 max-w-xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-meetable-primary mb-4">
            Don&apos;t eat alone
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-meetable-dark mb-4 leading-tight">
            Ready to feel at home in your city?
          </h2>
          <p className="text-base md:text-lg text-slate-700 mb-8 max-w-lg">
            There&apos;s a seat open for you. Discover curated dining experiences in your area
            and start building a community you love.
          </p>

          <a
            href={quizLink}
            className="inline-flex items-center justify-center bg-meetable-primary hover:bg-[#016573] text-white text-base md:text-lg font-bold px-10 md:px-14 py-3.5 md:py-4 rounded-full shadow-xl shadow-meetable-primary/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Take the personality quiz
            <span className="ml-3 text-2xl leading-none">→</span>
          </a>
        </div>

        {/* Right: Polaroid-style images */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg h-[260px] md:h-[300px]">
            {/* Back image */}
            <div className="absolute right-0 top-0 w-[58%] md:w-[60%] rotate-6">
              <div className="bg-white rounded-[26px] shadow-2xl shadow-black/15 p-3">
                <img
                  src="/assets/pexels-marlein-16021268.jpg"
                  alt="Friends toasting over dinner"
                  className="w-full h-44 md:h-52 object-cover rounded-[18px]"
                />
              </div>
            </div>

            {/* Front image */}
            <div className="absolute left-0 bottom-0 w-[58%] md:w-[60%] -rotate-5">
              <div className="bg-white rounded-[26px] shadow-2xl shadow-black/20 p-3">
                <img
                  src="/assets/pexels-cottonbro-5018987.jpg"
                  alt="Meetable dinner cheers"
                  className="w-full h-44 md:h-52 object-cover rounded-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityCTA;
