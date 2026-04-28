import { useRef, useState, useCallback } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const rafRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x, y });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background — moves slowest, opposite direction */}
      <div
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{ transform: `translate(${offset.x * -18}px, ${offset.y * -18}px) scale(1.05)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800" />
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-navy-900/65" />
      </div>

      {/* Decorative blobs — move most */}
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl transition-transform duration-100 ease-out"
        style={{ transform: `translate(${offset.x * 40}px, ${offset.y * 40}px)` }}
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl transition-transform duration-100 ease-out"
        style={{ transform: `translate(${offset.x * -30}px, ${offset.y * -30}px)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/5 rounded-full blur-2xl transition-transform duration-100 ease-out"
        style={{ transform: `translate(calc(-50% + ${offset.x * 25}px), calc(-50% + ${offset.y * 25}px))` }}
      />

      {/* Content — moves slightly in mouse direction */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${offset.x * 12}px, ${offset.y * 12}px)` }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/40 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Thành viên Tập đoàn HR Hàng đầu Trung Quốc</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Giải pháp nhân lực
              <span className="block text-primary-400">toàn diện cho</span>
              <span className="block">doanh nghiệp FDI</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              SuccessHR — đối tác chiến lược về tuyển dụng, outsourcing và quản lý nhân sự.
              Gần <span className="text-gold font-semibold">20 năm kinh nghiệm</span>, phủ sóng
              <span className="text-gold font-semibold"> 63 tỉnh thành</span> Việt Nam.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#contact" className="btn-primary text-center">
                Nhận tư vấn miễn phí
              </a>
              <a href="#services" className="btn-outline text-center">
                Xem dịch vụ của chúng tôi
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: '>3.000', label: 'Doanh nghiệp đối tác' },
                { num: '20+', label: 'Năm kinh nghiệm' },
                { num: '63', label: 'Tỉnh thành phủ sóng' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-gold">{b.num}</div>
                  <div className="text-gray-400 text-sm leading-tight">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Main card */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Tuyển dụng nhanh chóng</div>
                  <div className="text-gray-400 text-sm">Hoàn thành trong 3–7 ngày</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: '>3.000', sub: 'Đối tác' },
                  { val: '53', sub: 'Tỉnh TQ' },
                  { val: 'Top 1', sub: 'HR TQ' },
                ].map(s => (
                  <div key={s.sub} className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-gold font-bold text-lg">{s.val}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services tags */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <div className="text-gray-300 text-xs uppercase tracking-widest font-semibold mb-3">Dịch vụ cung cấp</div>
              <div className="flex flex-wrap gap-2">
                {['HRO Outsourcing', 'Tuyển dụng', 'Cho thuê lao động', 'Đào tạo', 'Quản lý lương', 'Headhunter'].map(tag => (
                  <span key={tag} className="bg-primary-500/20 border border-primary-500/30 text-primary-200 text-xs px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <div className="text-gray-300 text-xs uppercase tracking-widest font-semibold mb-3">Hiện diện tại Việt Nam</div>
              <div className="grid grid-cols-2 gap-2">
                {['Hà Nội', 'TP. Hồ Chí Minh', 'Hải Phòng', 'Thái Nguyên'].map(loc => (
                  <div key={loc} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                    {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Cuộn xuống</span>
        <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
