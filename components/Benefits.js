import { copy } from '@/lib/copy';

export default function Benefits() {
  const { benefits, forWho } = copy;

  return (
    <>
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${benefits.backgroundImage}')` }}
      >
        <div className="container mx-auto px-4 bg-black bg-opacity-50 rounded-lg py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">{benefits.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center text-white">
                <img src={item.icon} alt="" className="w-16 h-16 mb-4" />
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#333]">
            <span className="text-[#7ED957]">{forWho.headline1}</span> {forWho.headline2}
          </h2>
          <div className="mt-12 max-w-2xl mx-auto text-left">
            <ul className="space-y-4">
              {forWho.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#7ED957] text-2xl mr-3">✔</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
