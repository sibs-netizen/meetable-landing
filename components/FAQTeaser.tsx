import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQTeaser: React.FC = () => {
  return (
    <section id="faq" className="bg-meetable-primary py-24 text-white text-center relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-meetable-accent blur-3xl"></div>
       </div>

       <div className="container mx-auto px-4 relative z-10">
           <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Any questions?</h2>
           <p className="text-meetable-light text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
               Look for the answer here. We cover everything from dietary requirements to how the matching algorithm works.
           </p>
           
           <div className="flex justify-center">
               <button className="bg-white text-meetable-primary hover:bg-meetable-light px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                   Read FAQs
               </button>
           </div>

           <div className="mt-16 relative w-24 h-24 mx-auto pointer-events-none">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping duration-1000"></div>
                <div className="absolute inset-4 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <HelpCircle size={48} className="text-white/80" />
                </div>
           </div>
       </div>
    </section>
  );
};

export default FAQTeaser;