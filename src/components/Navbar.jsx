import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { navLinks } from '../data/mockData';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ darkMode, setDarkMode }) {
  // Thao tác 1: Quản lý Điều hướng & Hiệu ứng Cuộn (useEffect + Event Cleanup)
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // BẮT BUỘC: Cleanup event listener để tránh Memory Leak
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-cream-50/90 dark:bg-coffee-950/90 backdrop-blur-md shadow-md border-b border-coffee-200/50 dark:border-coffee-800/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-coffee-800 dark:bg-gold-500/20 border border-gold-500 flex items-center justify-center transition-transform group-hover:scale-105">
              <Coffee className="w-5 h-5 text-gold-500 dark:text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-coffee-950 dark:text-cream-50 uppercase">
                Trung Nguyên
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-400 font-semibold -mt-1">
                Legend
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium tracking-wide text-coffee-800 hover:text-gold-600 dark:text-cream-200 dark:hover:text-gold-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: ThemeToggle + CTA Button + Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream-50 bg-coffee-800 hover:bg-coffee-900 dark:bg-gold-600 dark:hover:bg-gold-500 rounded-md transition-all shadow-sm hover:shadow"
            >
              Liên hệ ngay
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-lg text-coffee-800 dark:text-cream-100 hover:bg-coffee-200/50 dark:hover:bg-coffee-900 transition-colors"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100/95 dark:bg-coffee-900/95 backdrop-blur-lg border-b border-coffee-200 dark:border-coffee-800 px-4 pt-2 pb-6 space-y-3 transition-all animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-coffee-900 dark:text-cream-100 hover:bg-coffee-200/60 dark:hover:bg-coffee-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full mt-4 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-cream-50 bg-coffee-800 dark:bg-gold-600 rounded-md"
          >
            Đặt Lịch Tư Vấn
          </a>
        </div>
      )}
    </header>
  );
}
