import {
  IconBuilding, IconBriefcase, IconUserGroup, IconRefresh, IconClipboard,
  IconMedal, IconGlobe, IconBolt, IconFactory, IconShieldCheck, IconNetwork,
} from './Icons';

const serviceItems = [
  { label: 'Headhunter cấp cao', Icon: IconBriefcase },
  { label: 'Cho thuê lao động', Icon: IconUserGroup },
  { label: 'Lao động linh hoạt', Icon: IconRefresh },
  { label: 'Cho thuê dịch vụ', Icon: IconClipboard },
];

const industries = [
  { label: 'Điện tử – Điện máy', Icon: IconBolt },
  { label: 'CNTT & Công nghệ', Icon: IconGlobe },
  { label: 'Sản xuất ô tô', Icon: IconFactory },
  { label: 'Y dược & Dược phẩm', Icon: IconShieldCheck },
  { label: 'Dịch vụ hiện đại', Icon: IconNetwork },
  { label: 'Nhà hàng – Khách sạn', Icon: IconBuilding },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Về chúng tôi</p>
          <h2 className="section-title mb-4">Tập đoàn Nhân lực Hàng đầu</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ Tô Châu, Trung Quốc ra thế giới — SuccessHR là bước đi quốc tế hóa của tập đoàn nhân lực hàng đầu châu Á.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <IconBuilding className="w-4 h-4" />
              Tập đoàn Mẹ — Tô Châu, Trung Quốc
            </div>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">
              Thành lập 2004 tại Tô Châu, Giang Tô
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tập đoàn mẹ là doanh nghiệp dịch vụ nhân lực chuyên nghiệp hàng đầu Trung Quốc, với hơn 20 năm kinh nghiệm trong lĩnh vực Headhunter, cho thuê lao động và sử dụng lao động linh hoạt.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {serviceItems.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-500" />
                  </div>
                  <span className="text-sm font-medium text-navy-800">{label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                'Ya Tai HR Service Dedication Award',
                'Excellent Contractor in Chinese HR Management',
              ].map(a => (
                <div key={a} className="flex items-center gap-3">
                  <IconMedal className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="SuccessHR Office" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="text-3xl font-bold text-primary-500">Hàng triệu</div>
              <div className="text-gray-600 text-sm mt-1">Lao động được cung ứng</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-navy-800 text-white rounded-2xl shadow-xl p-6">
              <div className="text-3xl font-bold text-gold">53</div>
              <div className="text-gray-300 text-sm mt-1">Tỉnh thành Trung Quốc</div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h4 className="text-xl font-bold text-navy-800 mb-6 text-center">Ngành nghề phục vụ</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(({ label, Icon }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-white group-hover:bg-primary-100 rounded-xl flex items-center justify-center shadow-sm transition-colors">
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors" />
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-700 group-hover:text-primary-600 transition-colors">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-8">
            <div className="text-gold font-bold text-2xl mb-2">YOUKE</div>
            <div className="text-gray-300 text-sm mb-4">Nền tảng nhân lực linh hoạt</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hệ thống kết nối doanh nghiệp và lao động linh hoạt, tối ưu hóa quy trình tuyển dụng và quản lý nhân sự thời vụ trên nền tảng công nghệ hiện đại.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-700 to-primary-800 text-white rounded-2xl p-8">
            <div className="text-gold font-bold text-2xl mb-2">MAYI</div>
            <div className="text-gray-200 text-sm mb-4">Mạng xã hội tuyển dụng</div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Nền tảng kết nối ứng viên và nhà tuyển dụng, xây dựng cộng đồng HR chuyên nghiệp với hàng triệu người dùng hoạt động trên toàn quốc.
            </p>
          </div>
        </div>

        {/* Vietnam */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <IconGlobe className="w-4 h-4" />
                SuccessHR Việt Nam
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">
                Công ty TNHH Nguồn Nhân Lực Success
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Là công ty thành viên của tập đoàn, SuccessHR Việt Nam đánh dấu bước đầu trong chiến lược quốc tế hóa, với sứ mệnh trở thành nhà cung ứng lao động uy tín hàng đầu tại Việt Nam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  { value: '2018', label: 'Thành lập tại VN' },
                  { value: '4 Tỉnh', label: 'HN, HCM, HP, TN' },
                  { value: '63', label: 'Tỉnh thành phủ sóng' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-xl p-4 flex-1 shadow-sm text-center">
                    <div className="text-primary-500 font-bold text-lg">{s.value}</div>
                    <div className="text-gray-500 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80"
                alt="Vietnam Office" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
