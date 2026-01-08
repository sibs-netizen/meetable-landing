import React from 'react';
import { MapPin, Sparkles, UtensilsCrossed, MessageCircle, Users } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Pick your city',
    desc: 'Choose where you want to dine. We curate experiences in top-rated local restaurants perfect for conversation.',
    icon: <MapPin className="w-8 h-8 text-white" />,
    color: 'bg-blue-500',
    image: {
      fallback: '/assets/pexels-taryn-elliott-6790327.jpg',
      webp: '/assets/pexels-taryn-elliott-6790327-640.webp 640w, /assets/pexels-taryn-elliott-6790327-960.webp 960w, /assets/pexels-taryn-elliott-6790327-1400.webp 1400w',
      width: 3645,
      height: 5467,
    },
  },
  {
    id: '02',
    title: 'Answer fun questions',
    desc: 'Take our short personality quiz. Tell us about your interests, your vibe, and what kind of people you want to meet.',
    icon: <Sparkles className="w-8 h-8 text-white" />,
    color: 'bg-purple-500',
    image: {
      fallback: '/assets/pexels-olly-3762925.jpg',
      webp: '/assets/pexels-olly-3762925-640.webp 640w, /assets/pexels-olly-3762925-960.webp 960w, /assets/pexels-olly-3762925-1400.webp 1400w',
      width: 5619,
      height: 3746,
    },
  },
  {
    id: '03',
    title: 'We match you',
    desc: 'Our algorithm pairs you with 5 compatible strangers. We book the table and set the menu. No planning required.',
    icon: <Users className="w-8 h-8 text-white" />,
    color: 'bg-meetable-primary',
    image: {
      fallback: '/assets/pexels-marlein-16021268.jpg',
      webp: '/assets/pexels-marlein-16021268-640.webp 640w, /assets/pexels-marlein-16021268-960.webp 960w, /assets/pexels-marlein-16021268-1400.webp 1400w',
      width: 3840,
      height: 5760,
    },
  },
  {
    id: '04',
    title: 'Join the dinner',
    desc: 'Arrive at the venue, meet your host (if applicable), and take your seat. Skip the small talk and dive into good food.',
    icon: <UtensilsCrossed className="w-8 h-8 text-white" />,
    color: 'bg-orange-500',
    image: {
      fallback: '/assets/pexels-cottonbro-5018987.jpg',
      webp: '/assets/pexels-cottonbro-5018987-640.webp 640w, /assets/pexels-cottonbro-5018987-960.webp 960w, /assets/pexels-cottonbro-5018987-1400.webp 1400w',
      width: 4715,
      height: 5894,
    },
  },
  {
    id: '05',
    title: 'Stay connected',
    desc: 'Exchange info with your new friends. Many of our tables turn into running clubs, travel buddies, and lifelong connections.',
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    color: 'bg-pink-500',
    image: {
      fallback: '/assets/pexels-sebastian-coman-photography-1598188-3755083.jpg',
      webp: '/assets/pexels-sebastian-coman-photography-1598188-3755083-640.webp 640w, /assets/pexels-sebastian-coman-photography-1598188-3755083-960.webp 960w, /assets/pexels-sebastian-coman-photography-1598188-3755083-1400.webp 1400w',
      width: 4000,
      height: 6000,
    },
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-meetable-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-meetable-teal font-bold tracking-wider uppercase text-sm mb-3">
            <span className="fake-button-ring">Effortless Socializing</span>
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-meetable-dark mb-6">
            Try Meetable the easy way
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Meeting new people shouldn&apos;t feel like a chore. We&apos;ve streamlined the process so you can focus on what matters: connecting.
          </p>
        </div>

        {/* Horizontal Scroll Container for Mobile, Grid for Desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 pb-8 hide-scrollbar snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto relative group rounded-3xl overflow-hidden h-[450px] shadow-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-gray-900"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {/* Serve modern formats first to cut transfer size for card imagery */}
                <picture>
                  <source
                    type="image/webp"
                    srcSet={step.image.webp}
                    sizes="(min-width: 1280px) 18vw, (min-width: 768px) 32vw, 90vw"
                  />
                  <img
                    src={step.image.fallback}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={step.image.width}
                    height={step.image.height}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030b14]/80 via-[#030b14]/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                {/* Step Badge */}
                <div className="flex justify-start">
                  <div
                    className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center shadow-lg border-2 border-white/20 transform group-hover:rotate-12 transition-transform`}
                  >
                    <span className="font-serif font-bold text-xl italic">{step.id}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="mb-4 text-white/90">{step.icon}</div>
                  <h4 className="font-serif text-2xl font-bold mb-3 leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
