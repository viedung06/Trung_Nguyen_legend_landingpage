import React, { useState } from 'react';
import { Send, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { footerInfo } from '../data/mockData';

export default function ContactForm({ onFormSuccess }) {
  // Thao tác 5: Form Liên hệ & Đặt lịch Tư vấn (Controlled Components + Async Simulation)
  // 1. Quản lý toàn bộ input qua useState (Controlled Components)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Tư vấn quà tặng doanh nghiệp',
    message: ''
  });

  // Quản lý lỗi validation trực tiếp
  const [errors, setErrors] = useState({});

  // Quản lý trạng thái gửi bất đồng bộ (Loading & Disabled)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Xóa lỗi tương ứng khi người dùng nhập lại
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Hàm validate client-side
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của bạn.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email không hợp lệ (ví dụ: name@domain.com).';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại liên hệ.';
    } else {
      const phoneRegex = /^[0-9+() -]{9,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Số điện thoại không đúng định dạng.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng để lại nội dung yêu cầu hoặc ghi chú.';
    }

    return newErrors;
  };

  // Xử lý Submit với giả lập bất đồng bộ
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Bắt đầu giả lập gửi form bất đồng bộ
    setIsSubmitting(true);

    // Giả lập API gọi backend trong 1.5 giây
    setTimeout(() => {
      setIsSubmitting(false);

      // Reset form về rỗng
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: 'Tư vấn quà tặng doanh nghiệp',
        message: ''
      });

      // Gọi callback báo thành công
      if (onFormSuccess) {
        onFormSuccess('Gửi yêu cầu thành công! Chuyên viên Trung Nguyên Legend sẽ liên hệ bạn trong 24h.');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details & Showcase */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400 block mb-2">
                Kết Nối Tri Âm
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-950 dark:text-cream-50 mb-4">
                Đặt Lịch Trải Nghiệm & Tư Vấn Quà Tặng
              </h2>
              <p className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300 leading-relaxed">
                Đội ngũ chuyên gia Trung Nguyên Legend sẵn sàng đồng hành cùng quý đối tác xây dựng bộ quà tặng sang trọng mang đậm dấu ấn văn hóa Việt.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-100/60 dark:bg-coffee-900/60 border border-coffee-200 dark:border-coffee-800">
                <div className="p-2.5 rounded-lg bg-coffee-800 text-gold-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-coffee-500 dark:text-cream-400 font-semibold">Hotline hỗ trợ</h4>
                  <p className="font-serif text-base font-bold text-coffee-950 dark:text-cream-50">{footerInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-100/60 dark:bg-coffee-900/60 border border-coffee-200 dark:border-coffee-800">
                <div className="p-2.5 rounded-lg bg-coffee-800 text-gold-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-coffee-500 dark:text-cream-400 font-semibold">Email tiếp nhận</h4>
                  <p className="text-sm font-semibold text-coffee-950 dark:text-cream-50">{footerInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-cream-100/60 dark:bg-coffee-900/60 border border-coffee-200 dark:border-coffee-800">
                <div className="p-2.5 rounded-lg bg-coffee-800 text-gold-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-coffee-500 dark:text-cream-400 font-semibold">Thời gian phục vụ</h4>
                  <p className="text-xs text-coffee-900 dark:text-cream-100">07:00 – 22:00 (Tất cả các ngày trong tuần)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Controlled Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 dark:bg-coffee-900 border border-coffee-300 dark:border-coffee-800 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-coffee-950 dark:text-cream-50 mb-2">
                Gửi Yêu Cầu Liên Hệ
              </h3>
              <p className="text-xs text-coffee-600 dark:text-cream-400 mb-6">
                Vui lòng điền thông tin bên dưới, các trường đánh dấu (*) là bắt buộc.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Họ tên */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-800 dark:text-cream-200 mb-1.5">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nguyễn Việt Dũng"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-cream-100/40 dark:bg-coffee-950/60 border transition-colors focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-400 text-red-900 dark:text-red-300'
                        : 'border-coffee-300 dark:border-coffee-700 focus:ring-gold-500 text-coffee-950 dark:text-cream-50'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email & Số điện thoại */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-800 dark:text-cream-200 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vietdung0322@gmail.com"
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-cream-100/40 dark:bg-coffee-950/60 border transition-colors focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-400 text-red-900 dark:text-red-300'
                          : 'border-coffee-300 dark:border-coffee-700 focus:ring-gold-500 text-coffee-950 dark:text-cream-50'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-800 dark:text-cream-200 mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0346 042 906"
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-cream-100/40 dark:bg-coffee-950/60 border transition-colors focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-400 text-red-900 dark:text-red-300'
                          : 'border-coffee-300 dark:border-coffee-700 focus:ring-gold-500 text-coffee-950 dark:text-cream-50'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Nhu cầu / Dịch vụ */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-800 dark:text-cream-200 mb-1.5">
                    Nhu cầu quan tâm
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-cream-100/40 dark:bg-coffee-950/60 border border-coffee-300 dark:border-coffee-700 text-coffee-950 dark:text-cream-50 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="Tư vấn quà tặng doanh nghiệp">Tư vấn quà tặng đối tác & doanh nghiệp</option>
                    <option value="Đặt hàng số lượng lớn (B2B)">Đặt hàng số lượng lớn chiết khấu cao (B2B)</option>
                    <option value="Đặt bàn trải nghiệm tại không gian Legend">Đặt bàn trải nghiệm tại không gian Legend</option>
                    <option value="Hợp tác nhượng quyền">Hợp tác không gian nhượng quyền</option>
                  </select>
                </div>

                {/* Tin nhắn */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-coffee-800 dark:text-cream-200 mb-1.5">
                    Nội dung lời nhắn *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anh yêu tất cả các em <3 "
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-cream-100/40 dark:bg-coffee-950/60 border transition-colors focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-400 text-red-900 dark:text-red-300'
                        : 'border-coffee-300 dark:border-coffee-700 focus:ring-gold-500 text-coffee-950 dark:text-cream-50'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Nút Submit (Disabled + Spinner khi submitting) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md ${
                    isSubmitting
                      ? 'bg-coffee-400 text-coffee-100 cursor-not-allowed opacity-80'
                      : 'bg-coffee-800 hover:bg-coffee-900 dark:bg-gold-500 dark:hover:bg-gold-400 text-cream-50 dark:text-coffee-950 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-current" />
                      <span>Đang truyền phát thông tin...</span>
                    </>
                  ) : (
                    <>
                      <span>Gửi Yêu Cầu Tư Vấn</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
