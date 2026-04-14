"use client";
import { useState, useEffect } from 'react';
import { copy } from '@/lib/copy';

export default function Hero() {
  const { hero } = copy;
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
      const distance = endOfDay.getTime() - now.getTime();

      if (distance < 0) {
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToLastCta = () => {
    document.getElementById("last-cta-button")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="bg-[#F5F5F5] pt-8 pb-12 sm:pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#333] leading-tight">
              {hero.headline1} <span className="text-[#7ED957]">{hero.headline2}</span> {hero.headline3}
            </h1>
            <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0">{hero.subheadline}</p>
            <div className="mt-7 bg-white p-3 sm:p-4 rounded-lg shadow-lg inline-block mx-auto lg:mx-0">
              {isMounted && (
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-3xl sm:text-4xl font-bold text-[#333]">
                  <span>{timeLeft.hours}</span>
                  <span>{hero.timerLabels.separator}</span>
                  <span>{timeLeft.minutes}</span>
                  <span>{hero.timerLabels.separator}</span>
                  <span>{timeLeft.seconds}</span>
                </div>
              )}
            </div>
            <button 
              onClick={scrollToLastCta}
              className="mt-8 w-full max-w-sm mx-auto lg:mx-0 bg-[#7ED957] text-white text-lg sm:text-xl md:text-2xl font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:bg-[#6cc34a] transition-colors duration-300 transform hover:scale-105"
            >
              {hero.cta}
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={hero.mainImage}
              alt=""
              className="w-[88vw] max-w-[360px] sm:w-full sm:max-w-[520px] aspect-square object-cover object-center rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
