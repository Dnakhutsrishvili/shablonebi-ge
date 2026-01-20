import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            შაბლონები.ge
          </Link>

          <nav className="flex gap-6">
            <Link
              href="/khelshekrulebebi"
              className="text-gray-600 hover:text-blue-600"
            >
              ხელშეკრულებები
            </Link>
            <Link
              href="/cv-reziume"
              className="text-gray-600 hover:text-blue-600"
            >
              CV / რეზიუმე
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
