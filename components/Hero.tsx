import React, { useEffect, useState } from 'react';
import { Star, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const quizLink = "https://form.typeform.com/to/dECpvX3S";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  // --- Countdown logic: next Thursday at 19:00 (7pm) ---
  useEffect(() => {
    function getNextThursdayAt7pm() {
      const now = new Date();
      const target = new Date(now);

      // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
      const currentDay = now.getDay();
      let daysToThursday = 4 - currentDay;

      // If it's already Thu 19:00 or later, go to next week
      if (daysToThursday < 0 || (daysToThursday === 0 && now.getHours() >= 19)) {
        daysToThursday += 7;
      }

      target.setDate(now.getDate() + daysToThursday);
      target.setHours(19, 0, 0, 0);
      return target;
    }

    let target = getNextThursdayAt7pm();

    function update() {
      const now = new Date();
      if (now >= target) {
        target = getNextThursdayAt7pm();
      }

      const diffMs = target.getTime() - now.getTime();
      const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      setTimeLeft({
        days,
        hours,
        mins,
        secs,
      });
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">

        {/* City Pill */}
        <div className="inline-block city-pill">
          <span className="bg-meetable-primary/90 text-white border border-meetable-primary/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
            Cape Town • Johannesburg • London
          </span>
        </div>

        {/* Main Heading */}
        <h1>
          One Table. Six Strangers. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] via-[#4fd1e3] to-[#00bcd4] italic pr-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Real Connection.
          </span>
        </h1>

        {/* Supporting Paragraph */}
        <p>
          Meetable brings like-minded people together through curated dining experiences.
          We handle the venue, the menu, and the guest list—you just show up ready for great food and meaningful conversation.
        </p>

        {/* Primary CTA */}
        <div className="hero-cta">
          <a
            href={quizLink}
            className="w-full sm:w-auto bg-meetable-primary hover:bg-[#016573] text-white px-12 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[#017787]/40 transform hover:-translate-y-1 ring-offset-2 ring-offset-2 focus:ring-meetable-primary"
          >
            Take the personality quiz
          </a>
        </div>

        {/* Social Proof + Countdown */}
        <div className="hero-stats">

          {/* Rating */}
          <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
            <div className="flex text-meetable-accent">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span>4.9/5 Rating</span>
          </div>

          {/* Guests seated */}
          <div className="flex items-center gap-2">
            <Users size={18} className="text-meetable-primary" />
            <span>500+ Guests Seated</span>
          </div>

          {/* Countdown block */}
          <div className="hero-countdown">
            <p className="hero-countdown__label">Next dinner in</p>
            <div className="hero-countdown__grid">
              <div className="hero-countdown__unit">
                <span className="hero-countdown__value">
                  {timeLeft.days}
                </span>
                <span className="hero-countdown__text">Days</span>
              </div>
              <div className="hero-countdown__unit">
                <span className="hero-countdown__value">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="hero-countdown__text">Hours</span>
              </div>
              <div className="hero-countdown__unit">
                <span className="hero-countdown__value">
                  {String(timeLeft.mins).padStart(2, '0')}
                </span>
                <span className="hero-countdown__text">Mins</span>
              </div>
              <div className="hero-countdown__unit">
                <span className="hero-countdown__value">
                  {String(timeLeft.secs).padStart(2, '0')}
                </span>
                <span className="hero-countdown__text">Secs</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
