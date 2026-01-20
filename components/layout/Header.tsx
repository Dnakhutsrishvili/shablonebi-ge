import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📄</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              შაბლონები.ge
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/khelshekrulebebi"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              ხელშეკრულებები
            </Link>
            <Link
              href="/cv-reziume"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              CV / რეზიუმე
            </Link>
            <Link
              href="/gantskhadebebi"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              განცხადებები
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
