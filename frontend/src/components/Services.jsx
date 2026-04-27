const services = [
  {
    title: 'Dịch vụ HRO',
    subtitle: 'Human Resource Outsourcing',
    icon: '🏭',
    color: 'from-primary-500 to-primary-700',
    items: ['Quản lý nhân sự toàn diện', 'Cho thuê lao động', 'Lao động thời vụ', 'Tuyển dụng theo yêu cầu'],
    values: ['Giảm chi phí HR nội bộ', 'Tăng hiệu suất vận hành', 'Linh hoạt nhân sự'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
  {
    title: 'Tuyển dụng Có tay nghề',
    subtitle: 'Skilled Recruitment',
    icon: '🎯',
    color: 'from-navy-700 to-navy-900',
    items: ['Thời gian tuyển: 3–7 ngày', 'Phủ sóng 63 tỉnh thành', 'Gần 20 năm kinh nghiệm', 'Đa dạng cấp bậc'],
    values: ['Doanh nghiệp FDI', 'Công ty Trung Quốc tại VN', 'Tập đoàn đa quốc gia'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    title: 'Dịch vụ Tổng thể',
    subtitle: 'End-to-End HR Service',
    icon: '🔗',
    color: 'from-amber-500 to-amber-700',
    items: ['Tuyển dụng', 'Đào tạo nhân viên', 'Trả lương & Bảo hiểm', 'Quản lý hiệu suất'],
    values: ['Chăm sóc nhân viên', 'Chuẩn hóa quy trình', 'Tối ưu trải nghiệm'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Dịch vụ của chúng tôi</p>
          <h2 className="section-title mb-4">Giải pháp nhân lực toàn diện</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            SuccessHR cung cấp đầy đủ giải pháp nhân lực từ tuyển dụng đến quản lý — giúp doanh nghiệp tập trung vào core business.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((svc, idx) => (
            <div key={svc.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${svc.color} text-white rounded-2xl px-5 py-3 mb-6`}>
                  <span className="text-2xl">{svc.icon}</span>
                  <div>
                    <div className="font-bold text-lg leading-tight">{svc.title}</div>
                    <div className="text-xs opacity-80">{svc.subtitle}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Bao gồm</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {svc.items.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Giá trị mang lại</h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.values.map(v => (
                      <span key={v} className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-sm font-medium">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="btn-primary inline-flex mt-8">
                  Tư vấn dịch vụ này →
                </a>
              </div>

              {/* Image */}
              <div className={`rounded-2xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={svc.image} alt={svc.title} className="w-full h-72 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
