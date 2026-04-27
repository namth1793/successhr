import { IconCalendar, IconCheck } from './Icons';

const phases = [
  {
    period: '2004 – 2008',
    title: 'Giai đoạn Khởi đầu',
    dotColor: 'bg-primary-500',
    labelColor: 'bg-primary-500',
    events: [
      'Thành lập công ty tại Tô Châu, Giang Tô, Trung Quốc',
      'Xây dựng thị trường trọng điểm: Giang Tô, Chiết Giang, Thượng Hải',
      'Định hình mô hình dịch vụ nhân lực chuyên nghiệp',
    ],
  },
  {
    period: '2009 – 2013',
    title: 'Giai đoạn Mở rộng',
    dotColor: 'bg-navy-700',
    labelColor: 'bg-navy-700',
    events: [
      'Xây dựng nền tảng YOUKE — nhân lực linh hoạt',
      'Thành lập Viện nghiên cứu chi phí nhân lực',
      'Hệ thống tuyển dụng công nghệ cao',
      'Ra mắt mạng xã hội tuyển dụng MAYI',
    ],
  },
  {
    period: '2014 – 2017',
    title: 'Giai đoạn Chiến lược',
    dotColor: 'bg-amber-500',
    labelColor: 'bg-amber-500',
    events: [
      'Phủ sóng toàn Miền Đông, Miền Trung, Miền Nam Trung Quốc',
      'Mở rộng mạng lưới quy mô lớn',
      'Hoàn thiện hệ sinh thái HR toàn diện',
    ],
  },
  {
    period: '2018 – 2023',
    title: 'Giai đoạn Quốc tế hóa',
    dotColor: 'bg-green-600',
    labelColor: 'bg-green-600',
    milestones: [
      { year: '2018', text: 'Thành lập tại Việt Nam — có mặt tại Hà Nội & TP.HCM' },
      { year: '2019', text: 'Mở chi nhánh Hải Phòng — tập trung khu công nghiệp' },
      { year: '2023', text: 'Thành lập tại Thái Nguyên — mở rộng toàn quốc' },
    ],
  },
];

function PhaseCard({ phase }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
          <IconCalendar className="w-4 h-4 text-gray-500" />
        </div>
        <span className={`${phase.labelColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {phase.period}
        </span>
      </div>
      <h3 className="text-xl font-bold text-navy-800 mb-4">{phase.title}</h3>
      {phase.events && (
        <ul className="space-y-2.5">
          {phase.events.map(e => (
            <li key={e} className="flex items-start gap-2.5 text-gray-600 text-sm">
              <div className="w-4 h-4 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <IconCheck className="w-2.5 h-2.5 text-primary-500" />
              </div>
              {e}
            </li>
          ))}
        </ul>
      )}
      {phase.milestones && (
        <div className="space-y-3">
          {phase.milestones.map(m => (
            <div key={m.year} className="flex gap-4 items-start">
              <span className="bg-green-100 text-green-700 font-bold text-sm px-2.5 py-1 rounded-lg flex-shrink-0">{m.year}</span>
              <span className="text-gray-600 text-sm pt-1">{m.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function History() {
  return (
    <section id="history" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Lịch sử phát triển</p>
          <h2 className="section-title mb-4">Hành trình 20 năm</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ một công ty tại Tô Châu đến tập đoàn HR hàng đầu Trung Quốc và vươn ra thị trường quốc tế.
          </p>
        </div>

        {/* Desktop alternating timeline */}
        <div className="hidden lg:block relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-amber-400 to-green-500 -translate-x-1/2" />

          <div className="space-y-14">
            {phases.map((phase, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={phase.period} className="relative grid grid-cols-2 gap-12 items-center">
                  {/* Left column */}
                  <div className={isLeft ? 'pr-8' : 'pl-8'}>
                    {isLeft && <PhaseCard phase={phase} />}
                  </div>

                  {/* Center dot */}
                  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 ${phase.dotColor} rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50`}>
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>

                  {/* Right column */}
                  <div className={isLeft ? 'pl-8' : 'pr-8'}>
                    {!isLeft && <PhaseCard phase={phase} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-6">
          {phases.map((phase, idx) => (
            <div key={phase.period + 'm'} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 ${phase.dotColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                  {idx + 1}
                </div>
                {idx < phases.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                )}
              </div>
              <div className="flex-1 -mt-1 pb-2">
                <PhaseCard phase={phase} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
