import { copy } from '@/lib/copy';

export default function Story() {
  const { story, viciousCycle, introducing, solution } = copy;
  const cyclePointPositions = [
    'lg:left-1/2 lg:-translate-x-1/2 lg:top-6 lg:text-center lg:max-w-[320px]',
    'lg:right-[2%] lg:top-[30%] lg:text-left lg:max-w-[280px]',
    'lg:right-[-1%] lg:bottom-[10%] lg:text-left lg:max-w-[280px]',
    'lg:left-[-1%] lg:bottom-[10%] lg:text-right lg:max-w-[280px]',
    'lg:left-[2%] lg:top-[30%] lg:text-right lg:max-w-[280px]',
  ];

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] max-w-3xl mx-auto">{story.headline1}</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7ED957] max-w-3xl mx-auto mt-2">{story.headline2}</h3>
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {story.images.map((src, index) => (
              <img key={index} src={src} alt="" className="w-full h-auto rounded-lg shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]">{viciousCycle.headline1} <span className="text-[#7ED957]">{viciousCycle.headline2}</span></h2>
          <div className="mt-8 lg:mt-12 max-w-5xl mx-auto">
            <div className="relative hidden lg:block min-h-[660px]">
              <svg
                viewBox="0 0 1000 660"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                aria-hidden="true"
              >
                <defs>
                  <marker
                    id="cycle-arrow"
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L0,6 L6,3 z" fill="#222" />
                  </marker>
                </defs>
                <path d="M300 210 C355 130, 425 105, 505 110" fill="none" stroke="#222" strokeWidth="3" markerEnd="url(#cycle-arrow)" />
                <path d="M700 160 C790 155, 830 210, 825 295" fill="none" stroke="#222" strokeWidth="3" markerEnd="url(#cycle-arrow)" />
                <path d="M815 420 C795 500, 740 545, 665 550" fill="none" stroke="#222" strokeWidth="3" markerEnd="url(#cycle-arrow)" />
                <path d="M335 548 C260 535, 205 480, 190 405" fill="none" stroke="#222" strokeWidth="3" markerEnd="url(#cycle-arrow)" />
              </svg>
              <div className="absolute z-10 left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 w-[530px] h-[530px] rounded-full border-2 border-[#d2d2d2]" />
              <div className="absolute z-30 left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] rounded-full overflow-hidden shadow-xl border-[10px] border-[#f3f3f3]">
                <img
                  src={viciousCycle.centerImage}
                  alt=""
                  className="w-full h-full object-cover scale-[2.1]"
                  style={{ objectPosition: 'center 63%' }}
                />
              </div>
              {viciousCycle.points.map((point, index) => (
                <p
                  key={index}
                  className={`absolute z-20 text-[22px]/[1.16] xl:text-[26px]/[1.14] font-black text-[#171717] ${cyclePointPositions[index] ?? ''}`}
                >
                  {point}
                </p>
              ))}
            </div>
            <div className="lg:hidden">
              <div className="w-60 h-60 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden shadow-lg">
                <img
                  src={viciousCycle.centerImage}
                  alt=""
                  className="w-full h-full object-cover scale-[2.1]"
                  style={{ objectPosition: 'center 63%' }}
                />
              </div>
              <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
                {viciousCycle.points.map((point, index) => (
                  <li key={index} className="text-base sm:text-lg font-semibold text-[#171717]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-lg sm:text-xl text-gray-700">{viciousCycle.subheadline1}</p>
          <p className="text-lg sm:text-xl text-gray-700 font-semibold">{viciousCycle.subheadline2}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]">{introducing.headline}</h2>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#333] leading-tight">
            {solution.headline1} <span className="text-[#7ED957]">{solution.headline2}</span> {solution.headline3}
          </h2>
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {solution.images.map((src, index) => (
              <img key={index} src={src} alt="" className="w-full h-auto rounded-lg shadow-lg" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
