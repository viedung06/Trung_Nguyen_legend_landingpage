import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="p-2 rounded-full transition-all duration-300 border border-coffee-400/30 hover:border-gold-500 bg-coffee-100/50 dark:bg-coffee-900/60 text-coffee-800 dark:text-gold-400 hover:scale-105 shadow-sm"
      aria-label="Chuyển đổi giao diện Sáng / Tối"
      title={darkMode ? "Chuyển sang Giao diện Sáng" : "Chuyển sang Giao diện Tối"}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-gold-400 animate-spin-slow" />
      ) : (
        <Moon className="w-5 h-5 text-coffee-800" />
      )}
    </button>
  );
}
