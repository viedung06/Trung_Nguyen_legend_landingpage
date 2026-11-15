import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, PackageOpen } from 'lucide-react';
import { categories, products } from '../data/mockData';
import ProductCard from './ProductCard';

export default function ProductFilter({
  onSelectProduct,
  favorites,
  onToggleFavorite
}) {
  // Thao tác 2: Bộ lọc & Tìm kiếm Danh mục (useState + useMemo)
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  // Lọc và render tức thì mà không giật trang nhờ useMemo
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // 1. Lọc theo tab danh mục
      const matchesCategory =
        activeCategory === 'Tất cả' || item.category === activeCategory;

      // 2. Lọc theo từ khóa tìm kiếm (tên hoặc mô tả)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400 block mb-2">
            Hương Vị Tinh Tuyển
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-950 dark:text-cream-50 mb-4">
            Danh Mục Tuyệt Phẩm Cà Phê
          </h2>
          <p className="text-sm sm:text-base text-coffee-700 dark:text-cream-300">
            Khám phá những dòng cà phê năng lượng đặc trưng làm nên tên tuổi của Trung Nguyên Legend trên toàn cầu.
          </p>
        </div>

        {/* Filter Controls: Tabs + Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-coffee-200 dark:border-coffee-800">
          
          {/* Category Tabs (useState: activeCategory) */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-coffee-800 text-cream-50 dark:bg-gold-500 dark:text-coffee-950 shadow-md scale-105'
                      : 'bg-coffee-100/70 text-coffee-800 hover:bg-coffee-200 dark:bg-coffee-900 dark:text-cream-200 dark:hover:bg-coffee-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input (useState: searchQuery) */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên hoặc từ khóa..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full bg-cream-50 dark:bg-coffee-900 border border-coffee-300 dark:border-coffee-700 text-coffee-950 dark:text-cream-100 placeholder-coffee-400 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
            />
            <Search className="w-4 h-4 text-coffee-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-coffee-400 hover:text-coffee-800 dark:hover:text-cream-100"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Filter Result Counter */}
        <div className="flex items-center justify-between text-xs text-coffee-600 dark:text-cream-400 mb-6">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold-600" />
            <span>
              Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
              {searchQuery && ` phù hợp với từ khóa "${searchQuery}"`}
            </span>
          </div>
          {favorites.length > 0 && (
            <span className="text-gold-600 dark:text-gold-400 font-medium">
              Đã lưu {favorites.length} sản phẩm yêu thích
            </span>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenDetails={onSelectProduct}
                isFavorite={favorites.includes(prod.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-cream-100/40 dark:bg-coffee-900/30 rounded-2xl border border-dashed border-coffee-300 dark:border-coffee-700">
            <PackageOpen className="w-12 h-12 mx-auto text-coffee-400 dark:text-cream-400 mb-3" />
            <h3 className="font-serif text-lg font-bold text-coffee-900 dark:text-cream-100 mb-1">
              Không tìm thấy sản phẩm nào
            </h3>
            <p className="text-xs text-coffee-600 dark:text-cream-400 max-w-sm mx-auto mb-4">
              Hãy thử tìm kiếm với từ khóa khác hoặc chuyển sang danh mục "Tất cả".
            </p>
            <button
              onClick={() => {
                setActiveCategory('Tất cả');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-coffee-800 text-cream-50 hover:bg-coffee-900 dark:bg-gold-500 dark:text-coffee-950 transition-colors"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
