import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sophia M.",
    location: "Cape Town",
    quote: "I moved to Cape Town knowing absolutely no one. My first Meetable dinner felt like a warm hug. I walked away with three phone numbers and a hiking plan for the weekend.",
    rating: 5
  },
  {
    name: "James T.",
    location: "London",
    quote: "Finally, an experience that makes meeting people fun and effortless. The food was incredible, but the conversation was even better. Highly recommend.",
    rating: 5
  },
  {
    name: "Amara K.",
    location: "New York",
    quote: "I'm an introvert, so this was way out of my comfort zone. But everyone was so welcoming. It skipped the awkward small talk completely.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-28 bg-meetable-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-meetable-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-meetable-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-meetable-dark mb-4">What Others Are Saying</h2>
          <div className="flex justify-center items-center gap-3 text-meetable-dark font-medium bg-white/50 backdrop-blur-sm inline-flex px-6 py-2 rounded-full border border-gray-200">
            <span className="text-2xl font-bold">4.9 / 5</span>
            <div className="flex text-meetable-accent">
                 <Star className="fill-current" size={20} />
                 <Star className="fill-current" size={20} />
                 <Star className="fill-current" size={20} />
                 <Star className="fill-current" size={20} />
                 <Star className="fill-current" size={20} />
            </div>
          </div>
        </div>

        {/* Desktop Grid (Show 3) */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>

        {/* Mobile Slider (Show 1) */}
        <div className="md:hidden relative max-w-md mx-auto">
          <div className="transition-all duration-500 ease-in-out transform">
            <TestimonialCard {...testimonials[activeIndex]} />
          </div>
          
          <div className="flex justify-center gap-6 mt-10">
            <button onClick={prev} className="p-4 rounded-full border border-meetable-dark/10 bg-white text-meetable-dark hover:bg-meetable-primary hover:text-white transition-colors shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-4 rounded-full border border-meetable-dark/10 bg-white text-meetable-dark hover:bg-meetable-primary hover:text-white transition-colors shadow-sm">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

const TestimonialCard = ({ name, location, quote, rating }: any) => (
  <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
    {/* Speech bubble tail */}
    <div className="absolute -bottom-3 left-12 text-white drop-shadow-sm z-10">
         <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-45 text-white"><path d="M24 22h-24l12-20z"/></svg>
    </div>
    
    <div className="flex gap-1 text-meetable-accent mb-6">
      {[...Array(rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
    </div>
    
    <p className="text-gray-800 font-medium text-xl italic mb-8 flex-grow leading-relaxed relative z-20">
        "{quote}"
    </p>
    
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
      <div className="w-10 h-10 bg-meetable-primary/10 rounded-full flex items-center justify-center text-meetable-primary font-bold font-serif">
          {name[0]}
      </div>
      <div>
        <h4 className="font-bold text-meetable-dark text-lg">{name}</h4>
        <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">{location}</span>
      </div>
    </div>
  </div>
);

export default Testimonials;