import { IconNetwork, IconShieldCheck, IconLink, IconChartBar, IconLightBulb, IconTrophy, IconCheck } from './Icons';

const advantages = [
  {
    Icon: IconNetwork,
    title: 'Mạng lưới toàn quốc',
    desc: 'Phủ khắp 63 tỉnh thành với hệ thống tuyển dụng chuyên nghiệp, đáp ứng nhanh chóng mọi nhu cầu nhân sự của doanh nghiệp.',
    highlights: ['63 tỉnh thành', 'Phản hồi trong 24h', 'Hệ thống tuyển dụng chuyên sâu'],
  },
  {
    Icon: IconShieldCheck,
    title: 'Nhân sự Chất lượng – Ổn định',
    desc: 'Quy trình tuyển chọn kỹ lưỡng, chăm sóc nhân viên bài bản giúp tăng tỷ lệ giữ chân lao động, giảm biến động nhân sự.',
    highlights: ['Tuyển chọn kỹ lưỡng', 'Chăm sóc nhân viên tốt', 'Tăng retention rate'],
  },
  {
    Icon: IconLink,
    title: 'Dịch vụ Trọn gói (End-to-End)',
    desc: 'Từ tuyển dụng đến đào tạo, trả lương và quản lý hiệu suất. Doanh nghiệp không cần lo về bất kỳ khâu nhân sự nào.',
    highlights: ['Tuyển dụng đến đào tạo', 'Trả lương và bảo hiểm', 'Quản lý hiệu suất'],
  },
  {
    Icon: IconChartBar,
    title: 'Quản lý Chuyên nghiệp',
    desc: 'Quy trình chuẩn hóa, có chứng nhận quốc tế, tối ưu trải nghiệm khách hàng với báo cáo phân tích định kỳ.',
    highlights: ['Quy trình chuẩn hóa', 'Chứng nhận quốc tế', 'Báo cáo định kỳ'],
  },
  {
    Icon: IconLightBulb,
    title: 'Hỗ trợ Doanh nghiệp',
    desc: 'Tối ưu chi phí nhân sự, giúp doanh nghiệp tập trung vào core business. Phân tích hiệu suất, nghỉ việc và biến động lao động.',
    highlights: ['Tối ưu chi phí HR', 'Tập trung core business', 'Phân tích biến động'],
  },
  {
    Icon: IconTrophy,
    title: 'Uy tín Quốc tế',
    desc: 'Thành viên của tập đoàn HR top đầu Trung Quốc với hơn 20 năm kinh nghiệm và hàng loạt giải thưởng quốc tế danh giá.',
    highlights: ['Top đầu HR Trung Quốc', 'Giải thưởng Ya Tai HR', 'Excellent Contractor Award'],
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #1D5298 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f0a500 0%, transparent 50%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Ưu điểm cạnh tranh</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tại sao chọn SuccessHR?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            6 lý do hàng đầu khiến doanh nghiệp FDI tin tưởng chọn SuccessHR làm đối tác nhân lực chiến lược.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ Icon, title, desc, highlights }) => (
            <div key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500/30 transition-colors">
                <Icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary-400 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="space-y-1.5">
                {highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-gray-300 text-xs">
                    <div className="w-4 h-4 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-2.5 h-2.5 text-primary-400" />
                    </div>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
            Trở thành đối tác của SuccessHR
          </a>
        </div>
      </div>
    </section>
  );
}
