import { copy } from '@/lib/copy';

export default function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-[#333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>{footer.copyright}</p>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-8 text-center text-xs text-gray-400">
          <p className="max-w-4xl mx-auto mb-4">{footer.disclaimer}</p>
          <p>{footer.companyInfo}</p>
        </div>
      </div>
    </footer>
  );
}
