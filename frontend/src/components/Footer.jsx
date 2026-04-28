import { IconPhone, IconEnvelope, IconGlobe, IconBuilding, IconFactory, IconMedal, IconChevronRight } from './Icons';

const navLinks = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Lịch sử phát triển', href: '#history' },
  { label: 'Ưu điểm cạnh tranh', href: '#advantages' },
  { label: 'Quy trình làm việc', href: '#process' },
  { label: 'Chi nhánh', href: '#branches' },
  { label: 'Liên hệ', href: '#contact' },
];

const contactLinks = [
  { Icon: IconPhone, label: '024 73001218', href: 'tel:02473001218' },
  { Icon: IconEnvelope, label: 'successhrvietnam@gmail.com', href: 'mailto:successhrvietnam@gmail.com' },
  { Icon: IconGlobe, label: 'www.successhr.com', href: 'https://www.successhr.com' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-5">
              <img src="/logo.png" alt="SuccessHR" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Công ty TNHH Nguồn Nhân Lực Success — thành viên của tập đoàn HR hàng đầu Trung Quốc, với sứ mệnh mang đến giải pháp nhân lực toàn diện cho doanh nghiệp tại Việt Nam.
            </p>
            <div className="space-y-2">
              {contactLinks.map(({ Icon, label, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-primary-400 transition-colors text-sm group">
                  <Icon className="w-4 h-4 flex-shrink-0 group-hover:text-primary-400 transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Điều hướng</h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group">
                    <IconChevronRight className="w-3.5 h-3.5 group-hover:text-primary-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Văn phòng</h4>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <IconBuilding className="w-4 h-4 text-primary-400" />
                  <div className="text-primary-400 text-sm font-semibold">Hà Nội (Trụ sở)</div>
                </div>
                <p className="text-gray-400 text-sm pl-6">Tầng 8, 71 Chùa Láng, Đống Đa, Hà Nội</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <IconFactory className="w-4 h-4 text-primary-400" />
                  <div className="text-primary-400 text-sm font-semibold">Hải Phòng</div>
                </div>
                <p className="text-gray-400 text-sm pl-6">Tầng 2, Tòa nhà điều hành KCN An Dương, Hải Phòng</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-gold font-semibold text-sm mb-2">Giải thưởng</div>
                <div className="space-y-1.5">
                  {['Ya Tai HR Service Dedication Award', 'Excellent Contractor in Chinese HR Management'].map(a => (
                    <div key={a} className="flex items-start gap-2 text-gray-400 text-xs">
                      <IconMedal className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Công ty TNHH Nguồn Nhân Lực Success. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-gray-600 text-xs">
            Success Human Resources Company Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
