import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../data/mockData';

export default function FAQ() {
  // Thao tác 4: Thu gọn / Mở rộng Nội dung (Accordion FAQ) (useState)
  // Cơ chế: Chỉ mở duy nhất 1 câu tại một thời điểm (khi mở câu mới, câu cũ tự thu lại)
  const [openId, setOpenId] = useState(1); // Mặc định mở câu đầu tiên

  const handleToggle = (id) => {
    // Nếu bấm lại vào câu đang mở -> đóng (null), nếu bấm câu khác -> mở câu đó
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-cream-100/50 dark:bg-coffee-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Giải Đáp Thắc Mắc
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-950 dark:text-cream-50 mb-3">
            Những Câu Hỏi Thường Gặp
          </h2>
          <p className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300">
            Thông tin chi tiết về sản phẩm, triết lý cà phê và dịch vụ quà tặng doanh nghiệp Trung Nguyên Legend.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-cream-50 dark:bg-coffee-900 border-gold-500/60 shadow-md'
                    : 'bg-cream-50/70 dark:bg-coffee-900/50 border-coffee-200 dark:border-coffee-800 hover:border-coffee-400/60'
                }`}
              >
                {/* Accordion Header / Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-coffee-950 dark:text-cream-100">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-gold-500 text-coffee-950 rotate-180'
                        : 'bg-coffee-100 dark:bg-coffee-800 text-coffee-700 dark:text-cream-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content with smooth height transition */}
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="text-xs sm:text-sm text-coffee-800 dark:text-cream-200 leading-relaxed pt-2 border-t border-coffee-100 dark:border-coffee-800/60">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
