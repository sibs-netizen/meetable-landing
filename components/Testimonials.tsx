import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sophia M.",
    location: "Cape Town",
    quote:
      "I moved to Cape Town knowing absolutely no one. My first Meetable dinner felt like a warm hug. I walked away with three phone numbers and a hiking plan for the weekend.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "London",
    quote:
      "Finally, an experience that makes meeting people fun and effortless. The food was incredible, but the conversation was even better. Highly recommend.",
    rating: 5,
  },
  {
    name: "Amara K.",
    location: "New York",
    quote:
      "I'm an introvert, so this was way out of my comfort zone. But everyone was so welcoming. It skipped the awkward small talk completely.",
    rating: 5,
  },
  {
    name: "Michael B.",
    location: "Cape Town",
    quote:
      "As a busy professional, Meetable offers a refreshing way to expand my social circle without the usual planning hassle. Each dinner is a delightful surprise.",
    rating: 5,
  },
  {
    name: "Chloe D.",
    location: "London",
    quote:
      "I've tried other social apps, but Meetable truly focuses on quality connections. The intimate setting of a dinner table really helps break the ice.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Duplicate first 2 items for seamless loop (3 visible)
  const displayedTestimonials = [
    ...testimonials,
    ...testimonials.slice(0, 2),
  ];

  const updateSliderPosition = () => {
    if (trackRef.current && cardRefs.current[0]) {
      const cardWidth =
        cardRefs.current[0].getBoundingClientRect().width + 24; // card + gap
      trackRef.current.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= testimonials.length) {
          // reached end of original list – jump back to start seamlessly
          if (trackRef.current && cardRefs.current[0]) {
            trackRef.current.style.transition = "none";
            trackRef.current.style.transform = "translateX(0px)";
            // force reflow
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            trackRef.current.offsetHeight;
            trackRef.current.style.transition = "transform 0.6s ease";
          }
          return 1; // second item, visually the first after jump
        }
        return nextIndex;
      });
    }, 6000);

    const handleResize = () => {
      updateSliderPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 1;
      if (prev < 0) return testimonials.length - 1;
      return prev;
    });
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#00151b] via-[#012b34] to-[#01687a] text-white"
    >
      {/* Decorative blur blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-meetable-primary/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-meetable-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Subtle top fade so it blends into hero */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            What Others Are Saying
          </h2>
          <div className="flex justify-center items-center gap-3 font-medium bg-white/10 backdrop-blur-md inline-flex px-5 py-2 rounded-full border border-white/20 shadow-sm">
            <span className="text-xl font-bold">4.9 / 5</span>
            <div className="flex text-meetable-accent drop-shadow-[0_0_6px_rgba(0,255,255,0.45)]">
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
              <Star className="fill-current" size={18} />
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={trackRef} className="testimonial-track">
            {displayedTestimonials.map((t, idx) => (
              <article
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="testimonial-card flex justify-center"
              >
                <TestimonialCard {...t} />
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="testimonial-prev p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-meetable-primary hover:border-meetable-primary transition-colors shadow-sm"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="testimonial-next p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-meetable-primary hover:border-meetable-primary transition-colors shadow-sm"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

type CardProps = Testimonial;

const TestimonialCard: React.FC<CardProps> = ({
  name,
  location,
  quote,
  rating,
}) => {
  return (
    <div className="bg-[#012932]/80 backdrop-blur-md p-6 md:p-7 rounded-2xl border border-white/12 shadow-[0_18px_40px_rgba(0,0,0,0.45)] max-w-[360px] lg:max-w-[320px] flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
      <div className="flex gap-1 text-meetable-accent mb-4 drop-shadow-[0_0_6px_rgba(0,255,255,0.35)]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="text-white/90 font-medium text-base md:text-lg italic mb-6 flex-grow leading-relaxed">
        “{quote}”
      </p>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/15">
        <div className="w-9 h-9 md:w-10 md:h-10 bg-meetable-primary/25 rounded-full flex items-center justify-center text-meetable-accent font-bold font-serif">
          {name[0]}
        </div>
        <div>
          <h4 className="font-semibold text-white text-sm md:text-base">
            {name}
          </h4>
          <span className="text-xs md:text-sm text-meetable-accent/80 uppercase tracking-wider font-medium">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
