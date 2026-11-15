import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductFilter from './components/ProductFilter';
import Modal from './components/Modal';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  // Thao tác 6: Đồng bộ Dữ liệu Cục bộ (useEffect + localStorage)
  // 1. Lưu trữ theme Dark/Light mode vào localStorage và đồng bộ class dark lên html
  const [darkMode, setDarkMode] = useLocalStorage('tn_theme_mode', false);

  // 2. Lưu trữ danh sách sản phẩm yêu thích (Wishlist) vào localStorage
  const [favorites, setFavorites] = useLocalStorage('tn_favorite_products', [1, 3]);

  // Thao tác 3: Tương tác Hộp thoại & Trạng thái UI Động (Modal xem chi tiết)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State thông báo Toast sau khi submit form (Thao tác 5)
  const [toastMessage, setToastMessage] = useState('');

  // Đồng bộ class dark lên thẻ html khi darkMode thay đổi
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Xử lý mở Modal chi tiết sản phẩm
  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Xử lý đóng Modal
  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  // Xử lý toggle sản phẩm yêu thích (Wishlist)
  const handleToggleFavorite = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Xử lý khi Form gửi thành công (Thao tác 5)
  const handleFormSuccess = (msg) => {
    setToastMessage(msg);
    // Tự tắt toast sau 4 giây
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-coffee-950">
      {/* 1. Header & Navigation (Hook 1: Scroll effect & cleanup) */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Product Catalog & Filter (Hook 2: Filter/Search useState + useMemo) */}
        <ProductFilter
          onSelectProduct={handleOpenDetails}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* FAQ Accordion (Hook 4: Single expand accordion) */}
        <FAQ />

        {/* Contact & Consultation Form (Hook 5: Controlled Form + Async Simulation) */}
        <ContactForm onFormSuccess={handleFormSuccess} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal (Hook 3: Modal state + Esc/Backdrop + Overflow hidden) */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
        product={selectedProduct}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
