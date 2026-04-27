import { IconChatBubble, IconCheck, IconCog, IconDocument, IconRocket } from './Icons';

const phases = [
  {
    phase: '01',
    title: 'Khởi động',
    Icon: IconChatBubble,
    iconBg: 'bg-primary-500',
    borderColor: 'border-primary-500',
    labelColor: 'text-primary-500',
    steps: ['Tư vấn khách hàng', 'Đánh giá doanh nghiệp', 'Phân tích yêu cầu công việc'],
  },
  {
    phase: '02',
    title: 'Triển khai',
    Icon: IconDocument,
    iconBg: 'bg-navy-700',
    borderColor: 'border-navy-700',
    labelColor: 'text-navy-700',
    steps: ['Ký hợp đồng dịch vụ', 'Lập kế hoạch tuyển dụng', 'Tìm kiếm ứng viên', 'Phỏng vấn & sàng lọc'],
  },
  {
    phase: '03',
    title: 'Tối ưu',
    Icon: IconCog,
    iconBg: 'bg-amber-500',
    borderColor: 'border-amber-500',
    labelColor: 'text-amber-600',
    steps: ['Tính toán chi phí nhân sự', 'Theo sát quá trình tuyển', 'Phân tích rủi ro nhân sự'],
  },
  {
    phase: '04',
    title: 'Vận hành',
    Icon: IconRocket,
    iconBg: 'bg-green-600',
    borderColor: 'border-green-600',
    labelColor: 'text-green-600',
    steps: ['Trả lương định kỳ', 'Đối soát chi phí', 'Xử lý tài chính', 'Tối ưu hiệu suất'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Quy trình làm việc</p>
          <h2 className="section-title mb-4">Dịch vụ Full-Service A — Z</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Quy trình 4 giai đoạn chuẩn hóa, minh bạch — từ tư vấn ban đầu đến vận hành và tối ưu liên tục.
          </p>
        </div>

        {/* Desktop: 4 equal columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-stretch">
          {phases.map((p, idx) => (
            <div key={p.phase} className="relative flex">
              <div className={`border-2 ${p.borderColor} rounded-2xl p-6 flex flex-col w-full`}>
                <div className={`w-14 h-14 ${p.iconBg} rounded-2xl flex items-center justify-center mb-4 flex-shrink-0`}>
                  <p.Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest ${p.labelColor} mb-1`}>
                  Giai đoạn {p.phase}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-4">{p.title}</h3>
                <ul className="space-y-2 flex-1">
                  {p.steps.map(s => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className={`w-4 h-4 ${p.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <IconCheck className="w-2.5 h-2.5 text-white" />
                      </div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden space-y-4">
          {phases.map((p, idx) => (
            <div key={p.phase + 'm'}>
              <div className={`border-2 ${p.borderColor} rounded-2xl p-5`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <p.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${p.labelColor}`}>Giai đoạn {p.phase}</div>
                    <div className="text-lg font-bold text-navy-800">{p.title}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.steps.map(s => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className={`w-4 h-4 ${p.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <IconCheck className="w-2.5 h-2.5 text-white" />
                      </div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {idx < phases.length - 1 && (
                <div className="flex justify-center my-2 text-gray-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-100 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <IconLightBulb className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <div className="font-semibold text-navy-800 mb-1">Điểm mạnh của SuccessHR</div>
            <p className="text-gray-600 text-sm">Quy trình full-service, chuẩn hóa từ A đến Z — doanh nghiệp chỉ cần mô tả nhu cầu, SuccessHR lo toàn bộ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLightBulb({ className }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}
