"use client";
import { useState } from 'react';
import { copy } from '@/lib/copy';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { faq } = copy;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#333] mb-8 sm:mb-12">{faq.headline}</h2>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full flex justify-between items-center gap-4 text-left text-base sm:text-lg font-semibold text-gray-800"
              >
                <span>{item.question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600 leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
