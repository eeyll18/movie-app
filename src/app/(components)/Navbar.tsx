import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold hover:text-slate-300 transition-colors duration-200">
              MovieApp
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
              {/* Örnek Ek Link
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  About
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
