"use client";
import { copy } from '@/lib/copy';

export default function CarouselSection() {
  const { carouselSection } = copy;

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {carouselSection.images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={src} 
                alt="" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
