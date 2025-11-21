import React from 'react';
import { Star, Users, CalendarCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const quizLink = "https://form.typeform.com/to/dECpvX3S";
  
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-meetable-dark/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920&auto=format&fit=crop" 
          alt="Diverse group of friends enjoying a dinner party" 
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-20 pt-32 pb-12">
        <div className="flex flex-col items-center text-center">
          
          {/* Floating Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-14 rounded-3xl shadow-2xl max-w-4xl mx-auto text-white transform transition-transform duration-500 mt-8 md:mt-0">
            
            <div className="inline-block mb-6">
                <span className="bg-meetable-primary/90 text-white border border-meetable-primary/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                    Cape Town • Johannesburg • London
                </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-2xl tracking-tight">
              One Table. <br className="hidden md:block" />
              Six Strangers. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#a5f3fc] to-[#22d3ee] italic pr-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Real Connection.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed opacity-90 shadow-black/50 drop-shadow-md">
              Meetable brings like-minded people together through curated dining experiences. 
              We handle the venue, the menu, and the guest list—you just show up ready for great food and meaningful conversation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <a 
                href={quizLink}
                className="w-full sm:w-auto bg-meetable-primary hover:bg-[#016573] text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[#017787]/40 transform hover:-translate-y-1 ring-offset-2 ring-offset-transparent focus:ring-2 focus:ring-meetable-primary"
              >
                Take the personality quiz
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-8 md:gap-12 border-t border-white/10 pt-8 text-sm font-medium text-gray-200">
               <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
                   <div className="flex text-meetable-accent">
                       {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <span>4.9/5 Rating</span>
               </div>
               <div className="flex items-center gap-2">
                   <Users size={18} className="text-meetable-primary" />
                   <span>500+ Guests Seated</span>
               </div>
               <div className="flex items-center gap-2">
                   <CalendarCheck size={18} className="text-meetable-primary" />
                   <span> Dinners Every Thursday </span>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;