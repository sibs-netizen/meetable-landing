import React, { useRef, useState, useEffect } from 'react';

const ValueProps: React.FC = () => {
  const values = [
    {
      title: 'Real life connection',
      desc: 'Step away from the screen and meet people face-to-face. We create spaces where genuine interactions happen naturally, without the pressure.',
      fallback: '/assets/real-life-connection.jpg',
      webp: '/assets/real-life-connection-640.webp 640w, /assets/real-life-connection-960.webp 960w, /assets/real-life-connection-1280.webp 1280w',
      width: 3079,
      height: 4397,
    },
    {
      title: 'Thoughtfully curated tables',
      desc: "We match you based on vibe, interests, and energy. Our algorithm ensures you're seated with people you're likely to click with.",
      fallback: '/assets/thoughtfully-curated-tables.jpg',
      webp: '/assets/thoughtfully-curated-tables-640.webp 640w, /assets/thoughtfully-curated-tables-960.webp 960w, /assets/thoughtfully-curated-tables-1280.webp 1280w',
      width: 5397,
      height: 3649,
    },
    {
      title: 'Grow your circle',
      desc: "Build a social life you love in your city. Whether you're new to town or just looking to expand your horizons, Meetable makes it easy.",
      fallback: '/assets/grow-your-circle.jpg',
      webp: '/assets/grow-your-circle-640.webp 640w, /assets/grow-your-circle-960.webp 960w, /assets/grow-your-circle-1280.webp 1280w',
      width: 5397,
      height: 3649,
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-white py-24 md:py-32"
      style={{
        background:
          'radial-gradient(circle at top, #04445b 0%, #020815 60%, #01040a 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What&apos;s in it for you?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            More than just dinner. It&apos;s about creating moments that matter.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center text-center md:items-start md:text-left transition-all duration-700 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-3xl mb-8 w-full aspect-[4/3] relative shadow-2xl">
                <div className="absolute inset-0 bg-meetable-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                {/* WebP source set keeps the photography crisp while shrinking transfer size */}
                <picture>
                  <source
                    type="image/webp"
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 90vw"
                    srcSet={value.webp}
                  />
                  <img
                    src={value.fallback}
                    alt={value.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={value.width}
                    height={value.height}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 brightness-110"
                  />
                </picture>
              </div>

              {/* Text */}
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
