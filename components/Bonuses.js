import { copy } from '@/lib/copy';

export default function Bonuses() {
  const { exclusiveBonuses, whatYouWillReceive } = copy;

  return (
    <>
      <section className="py-12 sm:py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] max-w-3xl mx-auto mb-8">{whatYouWillReceive.headline}</h2>
          <ul className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {whatYouWillReceive.items.map((item, index) => (
              <li key={index} className="list-disc list-inside p-4 rounded-lg bg-[#F5F5F5]">
                <span className="text-sm sm:text-base font-semibold text-gray-700">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F5F5F5] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333]">{exclusiveBonuses.headline1} <span className="text-[#7ED957]">{exclusiveBonuses.headline2}</span></h2>
          <div className="mt-10 sm:mt-12 flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-12">
            <div className="text-center">
              <img src={exclusiveBonuses.bonus1.image} alt={exclusiveBonuses.bonus1.title} className="mx-auto mb-4 max-w-xs h-auto rounded-lg shadow-lg" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{exclusiveBonuses.bonus1.title}</h3>
            </div>
            <div className="text-center">
              <img src={exclusiveBonuses.bonus2.image} alt={exclusiveBonuses.bonus2.title} className="mx-auto mb-4 max-w-xs h-auto rounded-lg shadow-lg" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{exclusiveBonuses.bonus2.title}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
