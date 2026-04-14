import { copy } from '@/lib/copy';

export default function Features() {
  const { features, signatureQuote, goodNews, howItWorks, steps, freezingTechniques, bestPart } = copy;
  const firstStep = steps[0];

  return (
    <>
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#333] mb-4">{features.headline1}</h2>
              <p className="text-xl text-[#7ED957] font-semibold">{features.headline2}</p>
            </div>
            <div className="lg:w-1/2">
              <img src={features.image} alt="" className="mx-auto max-w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-[#333] mb-6">{goodNews.headline}</h2>
              <ul className="space-y-6">
                {goodNews.items.map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <img src={item.icon} alt="" className="w-8 h-8 mr-4" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src={goodNews.image} alt="" className="mx-auto max-w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#7ED957]">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {signatureQuote.line1}
          </p>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-[#0f2e13]">
            {signatureQuote.line2}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#333]">{howItWorks.headline1} <span className="text-[#7ED957]">{howItWorks.headline2}</span></h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{howItWorks.subheadline}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-[#7ED957] mb-4">{firstStep.headline}</h3>
          {firstStep.subheadline && <p className="text-xl text-gray-700 mb-6">{firstStep.subheadline}</p>}
          {Array.isArray(firstStep.quickList) && firstStep.quickList.length > 0 && (
            <ul className="space-y-3 text-left max-w-2xl mx-auto list-disc list-inside">
              {firstStep.quickList.map((item, index) => (
                <li key={index} className="text-lg text-gray-700">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-[#333]">{freezingTechniques.headline1} <span className="text-[#7ED957]">{freezingTechniques.headline2}</span></h2>
              <p className="mt-6 text-2xl text-red-600 font-semibold">{freezingTechniques.subheadline1} <span className="text-[#333]">{freezingTechniques.subheadline2}</span></p>
            </div>
            <div className="lg:w-1/2">
              <img src={freezingTechniques.image} alt="" className="mx-auto max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-[760px] mx-auto bg-[#efe5cf] border-2 border-black overflow-hidden rounded-sm">
            <div className="text-center border-b-2 border-black px-4 py-4">
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black">{bestPart.headline1}</h3>
            </div>
            <div className="text-center border-b-2 border-black px-4 py-3 bg-[#f5edd9]">
              <p className="text-3xl md:text-4xl text-black">{bestPart.headline2}</p>
            </div>
            <div className="text-center border-b-2 border-black px-4 py-4 bg-[#f5edd9]">
              <p className="text-3xl md:text-4xl font-black uppercase text-black">{bestPart.headline3}</p>
            </div>

            <div className="h-[360px] md:h-[460px] bg-[#f2f2f2] overflow-hidden">
              <img
                src={bestPart.image}
                alt={bestPart.imageAlt}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 54%' }}
              />
            </div>

            <div className="bg-[#f5edd9]">
              {bestPart.nutritionRows.map((row, index) => (
                <div key={row.label} className={`grid grid-cols-2 ${index !== 0 ? 'border-t-2 border-black' : ''}`}>
                  <div className="border-r-2 border-black px-4 md:px-8 py-4 md:py-5 text-[22px] sm:text-[28px] md:text-[34px] font-bold leading-[1.06] text-black md:whitespace-nowrap">
                    {row.label}
                  </div>
                  <div className="px-4 md:px-8 py-4 md:py-5 text-[22px] sm:text-[28px] md:text-[34px] font-bold leading-[1.06] text-center text-black md:whitespace-nowrap">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-black bg-[#f5edd9] px-4 py-8 text-center">
              <p className="text-2xl md:text-3xl font-black text-black">{bestPart.tagsHeadline}</p>
              <p className="mt-3 text-base md:text-lg text-[#333] max-w-2xl mx-auto">{bestPart.tagsSubheadline}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {bestPart.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border-2 border-black text-sm md:text-base font-bold text-black bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
