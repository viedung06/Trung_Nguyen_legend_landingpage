import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroContent } from '../data/mockData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with warm ambient coffee tone */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-100/40 via-cream-50/80 to-cream-50 dark:from-coffee-900/60 dark:via-coffee-950/85 dark:to-coffee-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80"
          alt="Không gian Cà Phê Trung Nguyên"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow filter brightness-90 dark:brightness-50"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-coffee-200/70 dark:bg-coffee-800/80 border border-coffee-400/30 dark:border-gold-500/30 mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-gold-600 dark:text-gold-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-coffee-900 dark:text-gold-300">
            {heroContent.badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-coffee-950 dark:text-cream-50 leading-tight md:leading-[1.15] mb-6">
          {heroContent.title}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-coffee-800/90 dark:text-cream-200/90 font-light leading-relaxed mb-10">
          {heroContent.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold uppercase tracking-wider text-cream-50 bg-coffee-800 hover:bg-coffee-900 dark:bg-gold-500 dark:hover:bg-gold-600 dark:text-coffee-950 transition-all transform hover:-translate-y-0.5 shadow-lg group"
          >
            <span>{heroContent.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-semibold uppercase tracking-wider text-coffee-900 dark:text-cream-100 bg-coffee-100/80 hover:bg-coffee-200/80 dark:bg-coffee-900/80 dark:hover:bg-coffee-800/80 border border-coffee-300 dark:border-coffee-700 transition-all"
          >
            {heroContent.ctaSecondary}
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-coffee-300/40 dark:border-coffee-800/60 max-w-3xl mx-auto">
          {heroContent.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-600 dark:text-gold-400">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-coffee-700 dark:text-cream-300 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
