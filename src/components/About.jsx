import React from 'react';
import { Award, Sparkles, BookOpen } from 'lucide-react';
import { aboutContent } from '../data/mockData';

const iconMap = {
  Award: Award,
  Sparkles: Sparkles,
  BookOpen: BookOpen,
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream-100/60 dark:bg-coffee-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-coffee-300/40 dark:border-coffee-700">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                alt="Triết đạo Cà phê Trung Nguyên"
                className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-coffee-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  Thánh Địa Buôn Ma Thuột
                </span>
                <p className="font-serif text-lg font-medium italic">
                  "Nơi hội tụ tinh hoa đất trời để dệt nên những tuyệt phẩm cà phê tỉnh thức."
                </p>
              </div>
            </div>

            {/* Accent badge floating */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-coffee-800 text-cream-50 p-4 rounded-xl shadow-xl border border-gold-500/40 flex items-center space-x-3">
              <div className="text-gold-400 text-2xl font-bold font-serif">100%</div>
              <div className="text-xs font-medium leading-tight">
                Robusta<br />Hảo Hạng
              </div>
            </div>
          </div>

          {/* Right Column: Information & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400 block mb-2">
                {aboutContent.subtitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-950 dark:text-cream-50 leading-tight">
                {aboutContent.title}
              </h2>
            </div>

            <p className="text-coffee-800 dark:text-cream-200 leading-relaxed font-light">
              {aboutContent.description1}
            </p>

            <p className="text-coffee-800 dark:text-cream-200 leading-relaxed font-light">
              {aboutContent.description2}
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {aboutContent.features.map((feat, idx) => {
                const IconComponent = iconMap[feat.icon] || Award;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-cream-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-800 shadow-sm hover:border-gold-500/50 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-coffee-100 dark:bg-coffee-800 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                    </div>
                    <h3 className="font-serif text-sm font-bold text-coffee-950 dark:text-cream-100 mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-coffee-700 dark:text-cream-300 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
