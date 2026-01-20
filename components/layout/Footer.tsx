import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl">📄</span>
              </div>
              <span className="text-xl font-bold">შაბლონები.ge</span>
            </div>
            <p className="text-gray-400 max-w-md">
              უფასო დოკუმენტის შაბლონები ქართულად. გადმოწერე Word და PDF
              ფორმატში.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">კატეგორიები</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/khelshekrulebebi" className="hover:text-white">
                  ხელშეკრულებები
                </Link>
              </li>
              <li>
                <Link href="/cv-reziume" className="hover:text-white">
                  CV / რეზიუმე
                </Link>
              </li>
              <li>
                <Link href="/gantskhadebebi" className="hover:text-white">
                  განცხადებები
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4">ინფორმაცია</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  ჩვენს შესახებ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  კონტაქტი
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  კონფიდენციალურობა
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 შაბლონები.ge — ყველა უფლება დაცულია</p>
        </div>
      </div>
    </footer>
  );
}
