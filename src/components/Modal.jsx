import React, { useEffect } from 'react';
import { X, Star, CheckCircle, Shield, Award, Heart } from 'lucide-react';

export default function Modal({
  isOpen,
  onClose,
  product,
  isFavorite,
  onToggleFavorite
}) {
  // Thao tác 3: Tương tác Hộp thoại & Trạng thái UI Động
  // 1. Khóa cuộn trang nền (document.body.style.overflow = 'hidden')
  // 2. Hỗ trợ phím Esc để đóng
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formatVND = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop (Click ra ngoài vùng để đóng) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-coffee-950/75 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Modal Dialog Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-cream-50 dark:bg-coffee-900 rounded-3xl overflow-hidden shadow-2xl border border-coffee-300 dark:border-coffee-700 z-10 max-h-[90vh] flex flex-col animate-scaleUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream-100/80 dark:bg-coffee-800/80 text-coffee-800 dark:text-cream-100 hover:bg-gold-500 hover:text-coffee-950 transition-colors shadow-md"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Product Image */}
            <div className="relative rounded-2xl overflow-hidden bg-coffee-100 dark:bg-coffee-950 aspect-square sm:aspect-auto sm:h-full min-h-[260px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee-800/90 text-gold-300 backdrop-blur-sm border border-gold-500/30">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Right: Product Detailed Info */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 font-bold block mb-1">
                  {product.category}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-coffee-950 dark:text-cream-50 leading-snug mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-coffee-900 dark:text-cream-100">{product.rating}</span>
                  <span className="text-xs text-coffee-500 dark:text-cream-400">({product.reviews} đánh giá)</span>
                </div>

                {/* Price */}
                <div className="p-3 rounded-xl bg-coffee-100/60 dark:bg-coffee-800/60 border border-coffee-200 dark:border-coffee-700/60 mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-coffee-600 dark:text-cream-400 block font-medium">Giá sản phẩm</span>
                  <span className="font-serif text-2xl font-black text-coffee-950 dark:text-gold-400">
                    {formatVND(product.price)}
                  </span>
                </div>

                {/* Extended Details */}
                <p className="text-xs sm:text-sm text-coffee-800 dark:text-cream-200 leading-relaxed mb-4">
                  {product.details}
                </p>

                {/* Specifications table */}
                {product.specs && (
                  <div className="space-y-2 text-xs border-t border-coffee-200 dark:border-coffee-800 pt-3">
                    <div className="flex justify-between py-1 border-b border-coffee-100 dark:border-coffee-800/50">
                      <span className="text-coffee-600 dark:text-cream-400">Vùng nguyên liệu:</span>
                      <span className="font-semibold text-coffee-950 dark:text-cream-100">{product.specs.origin}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-coffee-100 dark:border-coffee-800/50">
                      <span className="text-coffee-600 dark:text-cream-400">Mức độ rang:</span>
                      <span className="font-semibold text-coffee-950 dark:text-cream-100">{product.specs.roastLevel}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-coffee-100 dark:border-coffee-800/50">
                      <span className="text-coffee-600 dark:text-cream-400">Quy cách:</span>
                      <span className="font-semibold text-coffee-950 dark:text-cream-100">{product.specs.weight}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-coffee-600 dark:text-cream-400">Hương vị ghi nhận:</span>
                      <span className="font-semibold text-coffee-950 dark:text-cream-100 text-right">{product.specs.tasteNotes}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions: Favorite & Contact for Order */}
              <div className="flex items-center space-x-3 pt-3">
                <button
                  onClick={() => onToggleFavorite(product.id)}
                  className={`p-3 rounded-xl border transition-colors flex items-center justify-center ${
                    isFavorite
                      ? 'border-red-500 bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400'
                      : 'border-coffee-300 dark:border-coffee-700 bg-cream-100/50 dark:bg-coffee-800 text-coffee-800 dark:text-cream-200 hover:text-red-500'
                  }`}
                  title={isFavorite ? "Đã lưu vào yêu thích" : "Lưu vào yêu thích"}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex-1 text-center py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-cream-50 bg-coffee-800 hover:bg-coffee-900 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-coffee-950 transition-colors shadow-md"
                >
                  Liên Hệ Đặt Mua / Trải Nghiệm
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
