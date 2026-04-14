import { copy } from '@/lib/copy';

export default function Testimonials() {
  const { testimonials } = copy;
  const chatTimes = ['09:14', '10:27', '18:42', '21:05'];

  const getInitials = (author) =>
    author
      .split(',')
      .shift()
      ?.trim()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') || 'U';

  return (
    <section className="py-16 bg-[#f4f7f6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#333] text-center max-w-3xl mx-auto">{testimonials.headline}</h2>
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.messages.map((item, index) => (
            <article key={index} className="select-none rounded-2xl border border-black/10 shadow-[0_16px_30px_rgba(0,0,0,0.14)] overflow-hidden bg-white">
              <div className="px-4 py-3 bg-[#075e54] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#d6e9df] text-[#075e54] font-bold text-sm flex items-center justify-center">
                    {getInitials(item.author)}
                  </div>
                  <p className="font-semibold text-sm">{item.author}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                </div>
              </div>

              <div
                className="p-4 min-h-[260px]"
                style={{
                  backgroundColor: '#e5ddd5',
                  backgroundImage:
                    'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.33) 1px, transparent 1.5px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.26) 1px, transparent 1.5px)',
                  backgroundSize: '28px 28px',
                }}
              >
                <div className="flex justify-center mb-3">
                  <span className="rounded-full bg-white/75 px-3 py-1 text-[11px] text-gray-600">{chatTimes[index % chatTimes.length]}</span>
                </div>

                <div className={`flex ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`relative max-w-[87%] rounded-2xl px-4 py-3 shadow-md ${
                      item.side === 'left' ? 'bg-white' : 'bg-[#dcf8c6]'
                    }`}
                  >
                    <span
                      className={`absolute bottom-1 w-3 h-3 rotate-45 ${
                        item.side === 'left' ? '-left-1 bg-white' : '-right-1 bg-[#dcf8c6]'
                      }`}
                      aria-hidden="true"
                    />
                    <p className="relative z-10 text-[15px] leading-relaxed text-gray-900">{item.text}</p>
                    <div className="relative z-10 mt-2 flex items-center justify-end gap-1.5 text-[11px] text-gray-500">
                      <span>{chatTimes[index % chatTimes.length]}</span>
                      {item.side === 'right' && (
                        <span className="text-[#53bdeb] font-bold tracking-[-1px]">✓✓</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
