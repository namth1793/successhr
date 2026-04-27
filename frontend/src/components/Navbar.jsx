import { useEffect, useState } from 'react';

const links = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Lịch sử', href: '#history' },
  { label: 'Ưu điểm', href: '#advantages' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Chi nhánh', href: '#branches' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <div className={`font-bold text-lg leading-tight ${scrolled ? 'text-navy-800' : 'text-white'}`}>
                Success<span className="text-primary-500">HR</span>
              </div>
              <div className={`text-xs ${scrolled ? 'text-gray-500' : 'text-gray-200'}`}>Nguồn Nhân Lực Success</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`font-medium hover:text-primary-500 transition-colors ${scrolled ? 'text-navy-800' : 'text-white'}`}>
                {l.label}
              </a>
            ))}
            <a href="#contact"
              className="btn-primary text-sm !py-2 !px-5">
              Liên hệ ngay
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <div className="space-y-1.5">
              {[0,1,2].map(i => (
                <span key={i} className={`block h-0.5 w-6 transition-all ${scrolled ? 'bg-navy-800' : 'bg-white'}`} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block font-medium text-navy-800 hover:text-primary-500 py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="btn-primary block text-center !py-2.5">
              Liên hệ ngay
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
