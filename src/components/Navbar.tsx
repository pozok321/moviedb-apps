import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#032541] text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Sisi Kiri: Logo & Menu Utama */}
        <div className="flex items-center gap-8">
          {/* Logo Bergaya TMDB */}
          <Link href="/" className="text-2xl font-black tracking-wider bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            TMDB
          </Link>

          {/* Menu Link (Hidden di HP, Muncul di Desktop) */}
          <div className="hidden md:flex items-center gap-6 font-semibold text-sm text-gray-200">
            <Link href="/movies" className="hover:text-teal-400 transition-colors">Movies</Link>
            <Link href="/tv" className="hover:text-teal-400 transition-colors">TV Shows</Link>
            <Link href="/people" className="hover:text-teal-400 transition-colors">People</Link>
            <Link href="/more" className="hover:text-teal-400 transition-colors">More</Link>
          </div>
        </div>

        {/* Sisi Kanan: Shortcut & Profil */}
        <div className="flex items-center gap-6 text-sm font-semibold">
          {/* Tombol Plus */}
          <button className="hover:text-teal-400 transition-colors text-xl font-bold hidden sm:block">
            +
          </button>

          {/* Badge Bahasa */}
          <div className="border border-white/60 text-xs px-1.5 py-0.5 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-[#032541] transition-all cursor-pointer">
            EN
          </div>

          {/* Icon Notifikasi (Menggunakan SVG murni) */}
          <button className="hover:text-teal-400 transition-colors hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
          </button>

          {/* Avatar Lingkaran User (Gaya placeholder) */}
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold border border-teal-400 shadow-inner cursor-pointer">
            M
          </div>

          {/* Icon Search */}
          <button className="text-teal-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-51.67-51.67M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}