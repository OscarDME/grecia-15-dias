"use client";
import { useState, useEffect } from 'react';
import { copy } from '@/lib/copy';

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/15imero-menou";

export default function Closing() {
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);
  const { closing, finalCallToAction, lastChance, finalOffer } = copy;

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        let src = params.get('src');
        let fbclid = params.get('fbclid');
        if (!src) src = localStorage.getItem('hotmart_src');
        if (!fbclid) fbclid = localStorage.getItem('hotmart_fbclid');
        if (src || fbclid) {
          const urlObj = new URL(BASE_CHECKOUT_URL);
          if (src) urlObj.searchParams.set('src', src);
          if (fbclid) urlObj.searchParams.set('fbclid', fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (e) {}
  }, []);

  return (
    <>
      <section className="py-12 bg-[#7ED957]">
        <h2 className="text-4xl font-extrabold text-white text-center max-w-4xl mx-auto">
          {closing.headline1} <span className="text-yellow-300">{closing.headline2}</span> {closing.headline3}
        </h2>
      </section>

      <section className="py-12 bg-[#7ED957]">
        <h2 className="text-4xl font-extrabold text-white text-center">{finalCallToAction.headline}</h2>
      </section>

      <section className="py-16 bg-[#F5F5F5] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-[#333]">{lastChance.headline1} <span className="text-[#7ED957]">{lastChance.headline2}</span> {lastChance.headline3}</h2>
          <div className="mt-12">
            <div className="flex justify-center items-center gap-4 mb-4">
              <img src={finalOffer.image1} alt="" className="w-20 h-auto" />
              <img src={finalOffer.image2} alt="" className="max-w-md h-auto" />
            </div>
            <p className="text-2xl text-gray-500 line-through">{finalOffer.oldPrice}</p>
            <p className="text-2xl text-[#333]">{finalOffer.finalPriceLabel}</p>
            <p className="text-6xl font-extrabold text-[#7ED957] my-2">{finalOffer.finalPrice}</p>
            <p className="text-sm text-gray-600 mt-2">{finalOffer.paymentInfo}</p>
            <a 
              href={checkoutUrl} 
              className="mt-8 inline-block bg-[#7ED957] text-white text-3xl font-bold py-5 px-16 rounded-full shadow-lg hover:bg-[#6cc34a] transition-colors duration-300 transform hover:scale-105"
            >
              {finalOffer.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
