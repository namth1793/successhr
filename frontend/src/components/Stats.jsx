import { IconBuilding, IconUsers, IconMapPin, IconTrophy } from './Icons';

const stats = [
  { number: '2004', label: 'Năm thành lập', Icon: IconBuilding },
  { number: '>3.000', label: 'Doanh nghiệp đối tác', Icon: IconUsers },
  { number: '53', label: 'Tỉnh thành Trung Quốc', Icon: IconMapPin },
  { number: 'Top 1', label: 'HR Trung Quốc', Icon: IconTrophy },
];

export default function Stats() {
  return (
    <section className="bg-primary-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ number, label, Icon }) => (
            <div key={label} className="text-center text-white">
              <div className="flex justify-center mb-3">
                <Icon className="w-8 h-8 text-white/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-1">{number}</div>
              <div className="text-blue-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
