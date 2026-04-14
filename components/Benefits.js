import { copy } from '@/lib/copy';

export default function Benefits() {
  const { benefits, forWho } = copy;

  return (
    <>
      <section 
        className="py-14 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${benefits.backgroundImage}')` }}
      >
        <div className="container mx-auto px-4 bg-black bg-opacity-50 rounded-lg py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">{benefits.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center text-white">
                <img src={item.icon} alt="" className="w-14 h-14 sm:w-16 sm:h-16 mb-4" />
                <p className="text-base sm:text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333]">
            <span className="text-[#7ED957]">{forWho.headline1}</span> {forWho.headline2}
          </h2>
          <div className="mt-8 sm:mt-12 max-w-2xl mx-auto text-left">
            <ul className="space-y-4">
              {forWho.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#7ED957] text-xl sm:text-2xl mr-3">✔</span>
                  <span className="text-base sm:text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
