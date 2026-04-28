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
        <div className="max-w-3xl">
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
