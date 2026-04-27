import { IconBuilding, IconFactory, IconMapPin, IconNetwork, IconCheck } from './Icons';

const branches = [
  {
    city: 'Hà Nội',
    Icon: IconBuilding,
    address: 'Tầng 8, 71 Chùa Láng, Đống Đa, Hà Nội',
    type: 'Trụ sở chính',
    since: '2018',
    color: 'from-primary-500 to-primary-700',
    img: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=600&q=80',
  },
  {
    city: 'Hải Phòng',
    Icon: IconFactory,
    address: 'Tầng 2, Tòa nhà điều hành KCN An Dương, Hải Phòng',
    type: 'Chi nhánh',
    since: '2019',
    color: 'from-navy-700 to-navy-900',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
];

const locations = [
  { loc: 'Hà Nội', status: 'Hoạt động', active: true },
  { loc: 'TP. Hồ Chí Minh', status: 'Hoạt động', active: true },
  { loc: 'Hải Phòng', status: 'Hoạt động', active: true },
  { loc: 'Thái Nguyên', status: 'Hoạt động từ 2023', active: true },
  { loc: 'Các tỉnh KCN', status: 'Đang mở rộng', active: false },
];

export default function Branches() {
  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Chi nhánh & Địa điểm</p>
          <h2 className="section-title mb-4">Hiện diện tại Việt Nam</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ Hà Nội đến Hải Phòng và Thái Nguyên — SuccessHR đang mở rộng phủ khắp các khu công nghiệp trọng điểm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {branches.map(({ city, Icon, address, type, since, color, img }) => (
            <div key={city} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden h-52">
                <img src={img} alt={city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${color}/80`} />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Từ {since}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-75 mb-1">{type}</div>
                  <div className="text-2xl font-bold flex items-center gap-2">
                    <Icon className="w-6 h-6" />
                    {city}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <IconMapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-navy-800 font-medium text-sm">{address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Đang mở rộng toàn quốc</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Định hướng chiến lược của SuccessHR là phủ rộng mạng lưới trên toàn Việt Nam, tập trung vào các khu công nghiệp và trung tâm kinh tế trọng điểm.
              </p>
              <div className="space-y-3">
                {locations.map(l => (
                  <div key={l.loc} className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${l.active ? 'bg-green-400' : 'bg-amber-400'}`} />
                    <span className="text-gray-200">{l.loc}</span>
                    <span className="text-gray-400 text-sm ml-auto">{l.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                  <IconNetwork className="w-10 h-10 text-primary-300" />
                </div>
              </div>
              <div className="text-gold text-5xl font-bold mb-2">63</div>
              <div className="text-gray-300 mb-6">Tỉnh thành được phục vụ</div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-white font-semibold mb-3">Đối tượng trọng tâm</div>
                <div className="space-y-2">
                  {['Khu công nghiệp', 'Doanh nghiệp FDI', 'Công ty Trung Quốc tại VN'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-gray-300 text-sm">
                      <IconCheck className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
