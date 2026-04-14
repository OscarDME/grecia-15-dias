"use client";

import { useRef } from "react";
import { copy } from "@/lib/copy";

export default function Testimonials() {
  const { testimonials } = copy;
  const chatTimes = ["09:42", "10:15", "11:08", "18:31"];
  const trackRef = useRef(null);

  const scrollCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-testimonial-card]");
    const jump = (card?.clientWidth || 420) + 24;
    track.scrollBy({ left: direction * jump, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 bg-[#f0f1eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#333] text-center max-w-3xl mx-auto">
          {testimonials.headline}
        </h2>

        <div className="mt-10 relative">
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-white text-4xl text-gray-500 shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollCards(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-white text-4xl text-gray-500 shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            aria-label="Siguiente"
          >
            ›
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.messages.map((item, index) => (
              <article
                key={index}
                data-testimonial-card
                className="snap-start shrink-0 w-[86vw] sm:w-[560px] rounded-[26px] bg-[#e8e9e3] shadow-[0_16px_28px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <div
                  className="p-5 sm:p-6 min-h-[340px] flex items-start"
                  style={{
                    backgroundImage: "url('/wallpaper-whatsapp.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full rounded-2xl bg-[#bff0be] px-5 py-4 sm:px-6 sm:py-5 shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
                    <p className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.35] text-[#1f2d2a]">
                      {item.text}
                    </p>
                    <div className="mt-3 flex items-center justify-end gap-2 text-[22px] sm:text-[26px] text-[#6c7980]">
                      <span>{chatTimes[index % chatTimes.length]}</span>
                      <span aria-hidden="true" className="inline-flex items-center">
                        <svg
                          viewBox="0 0 18 12"
                          className="h-[16px] w-[24px] sm:h-[18px] sm:w-[26px] drop-shadow-[0_0.5px_0_rgba(255,255,255,0.45)]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1.4 6.3L4.4 9.3L9.1 3.8" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6.1 6.3L9.1 9.3L13.8 3.8" stroke="#53BDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-[84px] bg-[#e8e9e3]" />
              </article>
            ))}
          </div>
        </div>

        <div className="text-center pt-8">
          <span className="inline-block rounded-full bg-[#7ED957] px-5 py-2 text-sm font-semibold text-white shadow-md">
            {testimonials.footerNote}
          </span>
        </div>
      </div>
    </section>
  );
}
