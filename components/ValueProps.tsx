import React from 'react';

const ValueProps: React.FC = () => {
  const values = [
    {
      title: "Real life connection",
      desc: "Step away from the screen and meet people face-to-face. We create spaces where genuine interactions happen naturally, without the pressure.",
      img: "https://images.unsplash.com/photo-1570557401299-0a154bb292b9?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "Thoughtfully curated tables",
      desc: "We match you based on vibe, interests, and energy. Our algorithm ensures you're seated with people you're likely to click with.",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "Grow your circle",
      desc: "Build a social life you love in your city. Whether you're new to town or just looking to expand your horizons, Meetable makes it easy.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-meetable-dark text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What's in it for you?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                More than just dinner. It's about creating moments that matter.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="overflow-hidden rounded-3xl mb-8 w-full aspect-[4/3] relative shadow-2xl">
                 <div className="absolute inset-0 bg-meetable-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={value.img} 
                  alt={value.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4 group-hover:text-meetable-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;