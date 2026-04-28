import { useState } from 'react';
import api from '../api';
import { IconPhone, IconEnvelope, IconGlobe, IconCheckCircle, IconXCircle, IconPaperAirplane, IconBolt, IconMapPin } from './Icons';

const services = [
  'Dịch vụ HRO (Outsourcing)',
  'Tuyển dụng lao động có tay nghề',
  'Dịch vụ tổng thể (End-to-End)',
  'Cho thuê lao động',
  'Tư vấn nhân sự',
  'Khác',
];

const contactItems = [
  { Icon: IconPhone, label: 'Điện thoại', value: '024 73001218', href: 'tel:02473001218' },
  { Icon: IconEnvelope, label: 'Email', value: 'successhrvietnam@gmail.com', href: 'mailto:successhrvietnam@gmail.com' },
  { Icon: IconGlobe, label: 'Website', value: 'www.successhr.com', href: 'https://www.successhr.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('loading');
    try {
      await api.post('/api/contacts', form);
      setStatus('success');
      setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Liên hệ</p>
          <h2 className="section-title mb-4">Nhận tư vấn miễn phí</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Đội ngũ chuyên gia SuccessHR sẵn sàng tư vấn giải pháp nhân lực phù hợp nhất cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-navy-800 to-primary-800 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Thông tin liên hệ</h3>
              <div className="space-y-5">
                {contactItems.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-xs uppercase tracking-wide">{label}</div>
                      <a href={href} className="text-white font-medium hover:text-gold transition-colors text-sm">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 space-y-4">
                {[
                  { label: 'Chi nhánh Hà Nội', addr: 'Tầng 8, 71 Chùa Láng, Đống Đa, Hà Nội' },
                  { label: 'Chi nhánh Hải Phòng', addr: 'Tầng 2, Tòa nhà điều hành KCN An Dương, Hải Phòng' },
                ].map(b => (
                  <div key={b.label}>
                    <div className="flex items-center gap-2 mb-1">
                      <IconMapPin className="w-3.5 h-3.5 text-primary-300" />
                      <div className="text-primary-300 text-xs font-semibold uppercase tracking-wide">{b.label}</div>
                    </div>
                    <p className="text-gray-300 text-sm pl-5">{b.addr}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <IconBolt className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-navy-800 mb-1">Tuyển dụng trong 3–7 ngày</div>
                <p className="text-gray-600 text-sm">
                  Với mạng lưới ứng viên rộng khắp 63 tỉnh thành, SuccessHR đáp ứng nhanh chóng mọi nhu cầu tuyển dụng.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Họ và tên <span className="text-primary-500">*</span>
                  </label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tên công ty</label>
                  <input name="company" value={form.company} onChange={handleChange}
                    placeholder="Công ty TNHH ABC"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Số điện thoại <span className="text-primary-500">*</span>
                  </label>
                  <input name="phone" value={form.phone} onChange={handleChange} required
                    placeholder="0901 234 567"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email"
                    placeholder="email@congty.vn"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Dịch vụ quan tâm</label>
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-sm text-gray-700">
                  <option value="">-- Chọn dịch vụ --</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nội dung</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                  placeholder="Mô tả nhu cầu nhân lực của quý doanh nghiệp..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white text-sm resize-none" />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm">
                  <IconCheckCircle className="w-5 h-5 flex-shrink-0" />
                  Cảm ơn! Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 text-orange-700 rounded-xl px-4 py-3 text-sm">
                  <IconXCircle className="w-5 h-5 flex-shrink-0" />
                  Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua SĐT.
                </div>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="btn-primary w-full !py-3.5 text-base disabled:opacity-60 flex items-center justify-center gap-2">
                <IconPaperAirplane className="w-5 h-5" />
                {status === 'loading' ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
