import React from 'react';
import { Star, Eye, Heart } from 'lucide-react';

export default function ProductCard({
  product,
  onOpenDetails,
  isFavorite,
  onToggleFavorite
}) {
  const formatVND = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  return (
    <div className="group relative bg-cream-50 dark:bg-coffee-900/70 rounded-2xl overflow-hidden border border-coffee-200 dark:border-coffee-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Product Image & Badges */}
      <div className="relative aspect-square overflow-hidden bg-coffee-100 dark:bg-coffee-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Tag */}
        {product.tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-coffee-800/85 text-gold-300 backdrop-blur-sm border border-gold-500/30">
            {product.tag}
          </span>
        )}

        {/* Favorite Button (Đồng bộ Wishlist) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-cream-50/80 dark:bg-coffee-900/80 backdrop-blur-md text-coffee-800 dark:text-cream-100 hover:text-red-500 dark:hover:text-red-400 transition-colors shadow-sm"
          title={isFavorite ? "Bỏ khỏi danh sách yêu thích" : "Lưu vào yêu thích"}
          aria-label="Yêu thích sản phẩm"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </button>

        {/* Quick View Button overlay on hover */}
        <button
          onClick={() => onOpenDetails(product)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cream-50 text-coffee-900 dark:bg-coffee-800 dark:text-cream-100 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold-500 hover:text-coffee-950"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Xem chi tiết</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-gold-600 dark:text-gold-400 font-semibold mb-1">
            {product.category}
          </div>
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-serif text-base font-bold text-coffee-950 dark:text-cream-50 hover:text-gold-600 dark:hover:text-gold-400 cursor-pointer line-clamp-2 transition-colors mb-2"
          >
            {product.name}
          </h3>
          <p className="text-xs text-coffee-700 dark:text-cream-300 line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        <div>
          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span className="text-xs font-bold text-coffee-900 dark:text-cream-100">{product.rating}</span>
            <span className="text-[11px] text-coffee-500 dark:text-cream-400">({product.reviews})</span>
          </div>

          {/* Price & Action */}
          <div className="pt-3 border-t border-coffee-200/60 dark:border-coffee-800/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-coffee-500 dark:text-cream-400 block">Giá niêm yết</span>
              <span className="font-serif text-base font-extrabold text-coffee-900 dark:text-gold-400">
                {formatVND(product.price)}
              </span>
            </div>
            <button
              onClick={() => onOpenDetails(product)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-coffee-800 hover:bg-coffee-900 dark:bg-gold-500 dark:hover:bg-gold-400 text-cream-50 dark:text-coffee-950 transition-colors shadow-sm"
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
