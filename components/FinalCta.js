"use client";
import { copy } from "@/lib/copy";

export default function FinalCta() {
  const { finalCta, lifeSummary, awayFromTheStove, sevenDayGuarantee, methodCreator } = copy;

  const scrollToLastCta = () => {
    document.getElementById("last-cta-button")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-8 sm:mb-12">{lifeSummary.headline}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="border-4 border-red-500 rounded-lg p-6 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">{lifeSummary.cookingAlone.title}</h3>
              <ul className="space-y-2 text-left">
                {lifeSummary.cookingAlone.items.map((item, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base"><span className="text-red-500 mr-2">✘</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border-4 border-green-500 rounded-lg p-6 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-green-500 mb-4">{lifeSummary.cookingWithMarmitasJa.title}</h3>
              <ul className="space-y-2 text-left">
                {lifeSummary.cookingWithMarmitasJa.items.map((item, index) => (
                  <li key={index} className="flex items-start text-sm sm:text-base"><span className="text-green-500 mr-2">✔</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#7ED957]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center px-4">{awayFromTheStove.headline}</h2>
          <img
            src={finalCta.image2}
            alt=""
            className="mt-8 w-full max-w-[300px] sm:max-w-md h-auto mx-auto"
          />
        </div>
      </section>

      <section id="final-cta-section" className="py-12 sm:py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl sm:text-2xl text-gray-500 line-through">{finalCta.oldPrice}</p>
          <p className="text-xl sm:text-2xl text-[#333]">{finalCta.finalPriceLabel}</p>
          <p className="text-5xl sm:text-6xl font-extrabold text-[#7ED957] my-2">{finalCta.finalPrice}</p>
          <p className="text-sm text-gray-600 mt-2">{finalCta.paymentInfo}</p>
          <button
            type="button"
            onClick={scrollToLastCta}
            className="mt-8 inline-block w-full max-w-sm bg-[#7ED957] text-white text-xl sm:text-2xl font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-full shadow-lg hover:bg-[#6cc34a] transition-colors duration-300 transform hover:scale-105"
          >
            {finalCta.button}
          </button>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333]">{sevenDayGuarantee.headline1} <span className="text-[#7ED957]">{sevenDayGuarantee.headline2}</span></h2>
          <img src={sevenDayGuarantee.image} alt="" className="mx-auto my-8 w-48 h-48" />
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">{sevenDayGuarantee.text}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/5">
              <img
                src={methodCreator.image}
                alt={methodCreator.imageAlt}
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]">
                {methodCreator.headline1}{" "}
                <span className="text-[#7ED957]">{methodCreator.headline2}</span>
              </h2>
              <div className="mt-6 space-y-4">
                {methodCreator.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
