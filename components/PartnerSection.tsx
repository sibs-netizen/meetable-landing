import React from 'react';
import { ChefHat } from 'lucide-react';

const PartnerSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-0">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative min-h-[300px]">
            <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2940&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent md:hidden"></div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center items-start">
            <div className="flex items-center gap-3 text-meetable-accent mb-8">
                <ChefHat size={32} />
                <span className="font-bold uppercase tracking-widest text-sm">Work with us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Host a Meetable experience
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                We fill your tables on slower nights with curated groups of respectful diners. You focus on the food, we handle the bookings, payments, and community.
            </p>
            <button className="bg-meetable-primary hover:bg-[#016573] text-white px-10 py-4 rounded-full font-bold text-lg transition-all border-2 border-transparent hover:border-white/20 shadow-lg hover:shadow-[#017787]/50">
                Partner with Meetable
            </button>
        </div>

      </div>
    </section>
  );
};

export default PartnerSection;