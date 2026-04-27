export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80")', backgroundSize:'cover', backgroundPosition:'center'}} />
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Thành viên Tập đoàn HR Hàng đầu Trung Quốc</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Giải pháp nhân lực
            <span className="block text-primary-400">toàn diện cho</span>
            <span className="block">doanh nghiệp FDI</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            SuccessHR — đối tác chiến lược về tuyển dụng, outsourcing và quản lý nhân sự.
            Gần <span className="text-gold font-semibold">20 năm kinh nghiệm</span>, phủ sóng
            <span className="text-gold font-semibold"> 63 tỉnh thành</span> Việt Nam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-center">
              Nhận tư vấn miễn phí
            </a>
            <a href="#services" className="btn-outline text-center">
              Xem dịch vụ của chúng tôi
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-14">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs">Cuộn xuống</span>
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
